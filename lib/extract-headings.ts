import type { RenderableTreeNode } from "@markdoc/markdoc"

export function extractHeadings(node: RenderableTreeNode): { id: string; title: string }[] {
  const headings: { id: string; title: string }[] = []

  function walk(n: RenderableTreeNode) {
    if (n === null || typeof n === 'undefined' || typeof n === 'string' || typeof n === 'number' || typeof n === 'boolean') {
      return
    }

    if (typeof n === 'object' && 'name' in n && n.name === 'h2') {
      const text = getTextContent(n)
      if (text) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9àèéìòùç\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
        headings.push({ id, title: text })
      }
    }

    if (typeof n === 'object' && 'children' in n && Array.isArray(n.children)) {
      for (const child of n.children) {
        walk(child)
      }
    }
  }

  walk(node)
  return headings
}

function getTextContent(node: RenderableTreeNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node || typeof node !== 'object') return ''
  if ('children' in node && Array.isArray(node.children)) {
    return node.children.map(getTextContent).join('')
  }
  return ''
}
