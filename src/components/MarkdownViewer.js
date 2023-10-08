import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

const MarkdownViewer = ({ filepath }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (filepath != '') {
            // fetch markdown content from the file
            fetch(filepath)
                .then((response) => response.text())
                .then((text) => {
                    console.log(filepath)
                    // console.log(text);
                    setMarkdownContent(text);
                }) 
        }
    }, [filepath]);

    return (
        <Markdown>{markdownContent}</Markdown>
    )
}

export default MarkdownViewer;