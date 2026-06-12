import rss from "@astrojs/rss";
import { getAllPosts } from "../lib/data";

export async function GET(context) {
  const posts = await getAllPosts();

  return rss({
    title: "Verbalist — Blog",
    description:
      "Guide e approfondimenti su SEO, GEO e ricerca AI: come farsi trovare su Google e citare dai motori generativi.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    })),
  });
}
