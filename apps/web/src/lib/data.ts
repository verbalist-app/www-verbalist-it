/**
 * Central Data Utility
 *
 * Interfaccia unica per leggere i contenuti dalle Content Collections
 * di Astro (markdown nel repo).
 */

import { getCollection, getEntry, render } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

// =============================================================================
// TYPES
// =============================================================================

export type UniversalImage = string | ImageMetadata;

export interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    tags: string[];
    team?: string;
    tldr?: string[];
    image: {
      url: UniversalImage;
      alt: string;
    };
  };
  body: string; // Plain text for reading time calculation
}

export interface TeamMember {
  slug: string;
  data: {
    name: string;
    role?: string;
    bio?: string;
    image: {
      url: UniversalImage;
      alt: string;
    };
    socials?: {
      twitter?: string;
      website?: string;
      linkedin?: string;
      email?: string;
    };
  };
  body?: string;
}

export interface Customer {
  slug: string;
  data: {
    customer: string;
    bgColor?: string;
    ctaTitle?: string;
    testimonial?: string;
    partnership?: string;
    avatar: {
      url: UniversalImage;
      alt: string;
    };
    challengesAndSolutions: Array<{
      title: string;
      content: string;
    }>;
    results: string[];
    about: string;
    details: Record<string, string>;
    logo: {
      url: UniversalImage;
      alt: string;
    };
  };
  body?: string;
}

export interface Helpcenter {
  slug: string;
  data: {
    page: string;
    iconId?: string;
    description: string;
    category?: string;
    keywords?: string[];
    lastUpdated?: string;
    faq?: Array<{
      question: string;
      answer: string;
    }>;
  };
  body?: string;
}

export interface Changelog {
  slug: string;
  data: {
    page: string;
    description: string;
    pubDate: Date;
    image: {
      url: UniversalImage;
      alt: string;
    };
  };
  body?: string;
}

export interface LegalPage {
  slug: string;
  data: {
    page: string;
    pubDate: Date;
  };
  body?: string;
}

// Re-export types for convenience
export type {
  Post,
  TeamMember,
  Customer,
  Helpcenter,
  Changelog,
  LegalPage,
  UniversalImage,
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Convert Content Collection entry to unified Post type
 */
function contentCollectionToPost(entry: CollectionEntry<"posts">): Post {
  return {
    slug: entry.id,
    data: {
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      tags: entry.data.tags || [],
      team: entry.data.team,
      tldr: entry.data.tldr,
      image: {
        url: entry.data.image.url,
        alt: entry.data.image.alt,
      },
    },
    body: entry.body || "",
  };
}

/**
 * Convert Content Collection entry to unified TeamMember type
 */
function contentCollectionToTeamMember(
  entry: CollectionEntry<"team">
): TeamMember {
  return {
    slug: entry.id,
    data: {
      name: entry.data.name,
      role: entry.data.role,
      bio: entry.data.bio,
      image: {
        url: entry.data.image.url,
        alt: entry.data.image.alt,
      },
      socials: entry.data.socials,
    },
    body: entry.body,
  };
}

/**
 * Convert Content Collection entry to unified Customer type
 */
function contentCollectionToCustomer(
  entry: CollectionEntry<"customers">
): Customer {
  return {
    slug: entry.id,
    data: {
      customer: entry.data.customer,
      bgColor: entry.data.bgColor,
      ctaTitle: entry.data.ctaTitle,
      testimonial: entry.data.testimonial,
      partnership: entry.data.partnership,
      avatar: {
        url: entry.data.avatar.url,
        alt: entry.data.avatar.alt,
      },
      challengesAndSolutions: entry.data.challengesAndSolutions || [],
      results: entry.data.results || [],
      about: entry.data.about,
      details: entry.data.details || {},
      logo: {
        url: entry.data.logo.url,
        alt: entry.data.logo.alt,
      },
    },
    body: entry.body,
  };
}

/**
 * Convert Content Collection entry to unified Helpcenter type
 */
function contentCollectionToHelpcenter(
  entry: CollectionEntry<"helpcenter">
): Helpcenter {
  return {
    slug: entry.id,
    data: {
      page: entry.data.page,
      iconId: entry.data.iconId,
      description: entry.data.description,
      category: entry.data.category,
      keywords: entry.data.keywords,
      lastUpdated: entry.data.lastUpdated,
      faq: entry.data.faq,
    },
    body: entry.body,
  };
}

/**
 * Convert Content Collection entry to unified Changelog type
 */
function contentCollectionToChangelog(
  entry: CollectionEntry<"changelog">
): Changelog {
  return {
    slug: entry.id,
    data: {
      page: entry.data.page,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      image: {
        url: entry.data.image.url,
        alt: entry.data.image.alt,
      },
    },
    body: entry.body,
  };
}

/**
 * Convert Content Collection entry to unified LegalPage type
 */
function contentCollectionToLegalPage(
  entry: CollectionEntry<"legal">
): LegalPage {
  return {
    slug: entry.id,
    data: {
      page: entry.data.page,
      pubDate: entry.data.pubDate,
    },
    body: entry.body,
  };
}

// =============================================================================
// POSTS
// =============================================================================

/**
 * Get all blog posts
 */
export async function getAllPosts(): Promise<Post[]> {

  const entries = await getCollection("posts");
  const posts = entries.map(contentCollectionToPost);
  // Sort by date descending
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {

  const entry = await getEntry("posts", slug);
  return entry ? contentCollectionToPost(entry) : null;
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {

  const entries = await getCollection("posts", (entry) =>
    entry.data.tags.includes(tag)
  );
  const posts = entries.map(contentCollectionToPost);
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/**
 * Get all unique post tags
 */
export async function getAllPostTags(): Promise<string[]> {

  const entries = await getCollection("posts");
  const tags = new Set<string>();
  for (const entry of entries) {
    for (const tag of entry.data.tags || []) {
      tags.add(tag);
    }
  }
  return Array.from(tags).sort();
}

/**
 * Get related posts (by tags, excluding current)
 */
export async function getRelatedPosts(
  slug: string,
  tags: string[],
  limit: number = 3
): Promise<Post[]> {

  const entries = await getCollection(
    "posts",
    (entry) =>
      entry.id !== slug && entry.data.tags.some((t) => tags.includes(t))
  );
  const posts = entries.map(contentCollectionToPost);
  return posts
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, limit);
}

/**
 * Render post content (for Content Collections only)
 */
export async function renderPostContent(slug: string) {
  const entry = await getEntry("posts", slug);
  if (!entry) return null;
  return render(entry);
}

// =============================================================================
// TEAM MEMBERS
// =============================================================================

/**
 * Get all team members
 */
export async function getAllTeamMembers(): Promise<TeamMember[]> {

  const entries = await getCollection("team");
  return entries.map(contentCollectionToTeamMember);
}

/**
 * Get a single team member by slug
 */
export async function getTeamMemberBySlug(
  slug: string
): Promise<TeamMember | null> {

  const entry = await getEntry("team", slug);
  return entry ? contentCollectionToTeamMember(entry) : null;
}

/**
 * Render team member content (for Content Collections only)
 */
export async function renderTeamMemberContent(slug: string) {
  const entry = await getEntry("team", slug);
  if (!entry) return null;
  return render(entry);
}

// =============================================================================
// CUSTOMERS
// =============================================================================

/**
 * Get all customers
 */
export async function getAllCustomers(): Promise<Customer[]> {

  const entries = await getCollection("customers");
  return entries.map(contentCollectionToCustomer);
}

/**
 * Get a single customer by slug
 */
export async function getCustomerBySlug(
  slug: string
): Promise<Customer | null> {

  const entry = await getEntry("customers", slug);
  return entry ? contentCollectionToCustomer(entry) : null;
}

/**
 * Render customer content (for Content Collections only)
 */
export async function renderCustomerContent(slug: string) {
  const entry = await getEntry("customers", slug);
  if (!entry) return null;
  return render(entry);
}

// =============================================================================
// HELP CENTER
// =============================================================================

/**
 * Get all help center articles
 */
export async function getAllHelpcenter(): Promise<Helpcenter[]> {

  const entries = await getCollection("helpcenter");
  return entries.map(contentCollectionToHelpcenter);
}

/**
 * Get a single help center article by slug
 */
export async function getHelpcenterBySlug(
  slug: string
): Promise<Helpcenter | null> {

  const entry = await getEntry("helpcenter", slug);
  return entry ? contentCollectionToHelpcenter(entry) : null;
}

/**
 * Render help center content (for Content Collections only)
 */
export async function renderHelpcenterContent(slug: string) {
  const entry = await getEntry("helpcenter", slug);
  if (!entry) return null;
  return render(entry);
}

// =============================================================================
// CHANGELOG
// =============================================================================

/**
 * Get all changelog entries
 */
export async function getAllChangelog(): Promise<Changelog[]> {

  const entries = await getCollection("changelog");
  const changelogs = entries.map(contentCollectionToChangelog);
  // Sort by date descending
  return changelogs.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/**
 * Get a single changelog entry by slug
 */
export async function getChangelogBySlug(
  slug: string
): Promise<Changelog | null> {

  const entry = await getEntry("changelog", slug);
  return entry ? contentCollectionToChangelog(entry) : null;
}

/**
 * Render changelog content (for Content Collections only)
 */
export async function renderChangelogContent(slug: string) {
  const entry = await getEntry("changelog", slug);
  if (!entry) return null;
  return render(entry);
}

// =============================================================================
// LEGAL PAGES
// =============================================================================

/**
 * Get all legal pages
 */
export async function getAllLegalPages(): Promise<LegalPage[]> {

  const entries = await getCollection("legal");
  return entries.map(contentCollectionToLegalPage);
}

/**
 * Get a single legal page by slug
 */
export async function getLegalPageBySlug(
  slug: string
): Promise<LegalPage | null> {

  const entry = await getEntry("legal", slug);
  return entry ? contentCollectionToLegalPage(entry) : null;
}

/**
 * Render legal page content (for Content Collections only)
 */
export async function renderLegalPageContent(slug: string) {
  const entry = await getEntry("legal", slug);
  if (!entry) return null;
  return render(entry);
}

// =============================================================================
// UTILITY EXPORTS
// =============================================================================


/**
 * Slugify a tag for use in URLs (e.g. "AI & Automation" -> "ai-automation").
 */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
