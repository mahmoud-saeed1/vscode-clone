import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IContentSyntaxHighlighter {
    content: string;
}

const ContentSyntaxHighlighter = ({ content }: IContentSyntaxHighlighter) => {
    return (
        <div style={{ overflowX: "auto", maxHeight: "100vh", position: "relative" }}>
            <SyntaxHighlighter
                language='javascript'
                style={nightOwl}
                customStyle={{
                    background: "transparent",
                    width: "100%",
                    maxHeight: "100vh",
                    fontSize: "1.5rem",
                    padding: '1rem',
                }}
                showLineNumbers
                className="syntax-highlighter" // Apply the class name for styling
            >
                {String(content)}
            </SyntaxHighlighter>
        </div>
    );
};

export default ContentSyntaxHighlighter;