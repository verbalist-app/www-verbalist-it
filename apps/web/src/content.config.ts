import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

function slugId({ entry }: { entry: string }) {
  return entry.replace(/\.(md|mdx)$/i, "");
}

const customers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/customers", generateId: slugId }),
  schema: z.object({
    customer: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    bgColor: z.string().optional(),
    ctaTitle: z.string().optional(),
    testimonial: z.string().optional(),
    partnership: z.string().optional(),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    challengesAndSolutions: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
    results: z.array(z.string()),
    about: z.string(),
    details: z.record(z.string(), z.string()),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const helpcenter = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/helpcenter", generateId: slugId }),
  schema: z.object({
    iconId: z.string().optional(),
    page: z.string(),
    description: z.string(),
    category: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    lastUpdated: z.string().optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/changelog", generateId: slugId }),
  schema: z.object({
    page: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal", generateId: slugId }),
  schema: z.object({
    page: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team", generateId: slugId }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    bio: z.string().optional(),
    seoDescription: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    socials: z
      .object({
        twitter: z.string().optional(),
        website: z.string().optional(),
        linkedin: z.string().optional(),
        email: z.string().optional(),
      })
      .optional(),
  }),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts", generateId: slugId }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    pubDate: z.coerce.date(),
    description: z.string(),
    seoDescription: z.string().optional(),
    team: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    tldr: z.array(z.string()).optional(),
  }),
});

const agents = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/agents", generateId: slugId }),
  schema: z.object({
    n: z.string(),
    icon: z.string(),
    mockup: z.string(),
    name: z.string(),
    role: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string().optional(),
    headline: z.string(),
    lede: z.string(),
    intro: z.string().optional(),
    summary: z.string(),
    input: z.array(z.string()),
    output: z.array(z.string()),
    note: z
      .object({
        label: z.string(),
        text: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  team,
  customers,
  changelog,
  legal,
  helpcenter,
  posts: postsCollection,
  agents,
};
