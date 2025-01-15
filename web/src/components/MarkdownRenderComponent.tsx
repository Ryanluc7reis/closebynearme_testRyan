import { HTMLProps } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
  text: string
}

export function MarkdownRenderComponent({ text, className }: Props) {
  return (
    <Markdown rehypePlugins={[rehypeRaw]} className={`custom-markdown ${className}`}>
      {`${text}`}
    </Markdown>
  )
}
