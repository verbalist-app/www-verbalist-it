import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    // Per sviluppo locale usa 'local', per produzione usa 'cloud'
    kind: process.env.NODE_ENV === 'development' ? 'local' : 'cloud',
  },
  cloud: {
    project: 'verbalist/www-verbalist-it',
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titolo' } }),
        description: fields.text({
          label: 'Descrizione',
          description: 'Breve descrizione per SEO e anteprima',
          multiline: true,
        }),
        publishedAt: fields.date({
          label: 'Data pubblicazione',
        }),
        author: fields.text({
          label: 'Autore',
          defaultValue: 'Team Verbalist',
        }),
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'SEO', value: 'seo' },
            { label: 'Content Marketing', value: 'content-marketing' },
            { label: 'AI & Automation', value: 'ai-automation' },
            { label: 'Guide', value: 'guide' },
            { label: 'News', value: 'news' },
          ],
          defaultValue: 'seo',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value,
          }
        ),
        featuredImage: fields.image({
          label: 'Immagine in evidenza',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        locale: fields.select({
          label: 'Lingua',
          options: [
            { label: 'Italiano', value: 'it' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'it',
        }),
        content: fields.markdoc({
          label: 'Contenuto',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    }),
  },
})
