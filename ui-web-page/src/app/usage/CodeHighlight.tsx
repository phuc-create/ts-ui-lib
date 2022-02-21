import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeHighlightProps {
  children: string
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ children }) => {
  return (
    <SyntaxHighlighter language='javascript'>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeHighlight
