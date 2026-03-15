import Markdoc, { type Config, type Node } from "@markdoc/markdoc"

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9àèéìòùç\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function getTextContent(node: Node): string {
  let text = ''
  for (const child of node.walk()) {
    if (child.type === 'text' && typeof child.attributes.content === 'string') {
      text += child.attributes.content
    }
  }
  return text
}

export const markdocConfig: Config = {
  nodes: {
    heading: {
      render: 'Heading',
      attributes: {
        level: { type: Number, required: true },
        id: { type: String },
      },
      transform(node, config) {
        const level = node.attributes.level
        const children = node.transformChildren(config)
        const text = getTextContent(node)
        const id = generateId(text)

        return new Markdoc.Tag(`h${level}`, { id }, children)
      },
    },
  },
}
