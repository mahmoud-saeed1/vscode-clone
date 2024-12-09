import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface IContentSyntaxHighlighter {
    content: string
}

const ContentSyntaxHighlighter = ({ content }: IContentSyntaxHighlighter) => {
    return (
        <SyntaxHighlighter language='javascript' style={nightOwl} customStyle={{
            background: "transparent",
            width: "100%",
            maxHeight: "100vh",
            overflowX: "auto",
            fontSize: "1.5rem"

        }}
            showLineNumbers
        >
            {String(content)}
        </SyntaxHighlighter>
    )
}

export default ContentSyntaxHighlighter