import type { APIContext } from "astro";
import { getAllPosts, getTeamMemberBySlug } from "@/lib/data";
import type { Post } from "@/lib/data";

// Versione Markdown puro dei post (/blog/<slug>.md): stessa sostanza della
// pagina HTML ma senza markup, per agenti e LLM. Linkata via rel="alternate"
// dal BlogLayout e annunciata in public/llms.txt; noindex via vercel.json.
export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

export async function GET({ props, site }: APIContext) {
  const post = props.post as Post;
  const siteUrl = site?.toString().replace(/\/$/, "") || "https://www.verbalist.it";
  const canonical = `${siteUrl}/blog/${post.slug}`;

  const team = post.data.team ? await getTeamMemberBySlug(post.data.team) : null;
  const autore = team ? ` da ${team.data.name}` : "";
  const pubblicato = post.data.pubDate.toISOString().slice(0, 10);

  const riassunto =
    post.data.tldr && post.data.tldr.length > 0
      ? `## Riassunto\n\n${post.data.tldr.map((p) => `- ${p}`).join("\n")}\n\n`
      : "";

  const markdown = `# ${post.data.title}

> ${post.data.description}

Pubblicato il ${pubblicato}${autore}. Versione HTML canonica: ${canonical}

${riassunto}${post.body.trim()}
`;

  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
