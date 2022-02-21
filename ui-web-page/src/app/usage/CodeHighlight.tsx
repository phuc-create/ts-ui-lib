import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

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
