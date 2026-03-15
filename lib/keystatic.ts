import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'

export const reader = createReader(process.cwd(), keystaticConfig)

export async function getPostsByLocale(locale: 'it' | 'en') {
  const col = locale === 'it' ? reader.collections.posts : reader.collections.postsEn
  return col.all()
}

export async function getPost(slug: string, locale: 'it' | 'en') {
  const col = locale === 'it' ? reader.collections.posts : reader.collections.postsEn
  return col.read(slug)
}

export async function getTranslation(slug: string, locale: 'it' | 'en') {
  const post = await getPost(slug, locale)
  if (!post?.translationOf) return null

  const targetLocale = locale === 'it' ? 'en' : 'it'
  const translatedPost = await getPost(post.translationOf, targetLocale)
  if (!translatedPost) return null

  return {
    slug: post.translationOf,
    locale: targetLocale,
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
