import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'

export const reader = createReader(process.cwd(), keystaticConfig)

export async function getAllPosts() {
  const posts = await reader.collections.posts.all()
  return posts
}

export async function getPostsByLocale(locale: 'it' | 'en') {
  const posts = await reader.collections.posts.all()
  return posts.filter(post => post.entry.locale === locale)
}

export async function getPost(slug: string) {
  const post = await reader.collections.posts.read(slug)
  return post
}

export async function getTranslation(slug: string) {
  const post = await reader.collections.posts.read(slug)
  if (!post?.translationOf) return null

  const translatedPost = await reader.collections.posts.read(post.translationOf)
  if (!translatedPost) return null

  return {
    slug: post.translationOf,
    locale: translatedPost.locale,
  }
}

export function formatDate(dateString: string | null, locale: 'it' | 'en' = 'it') {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
