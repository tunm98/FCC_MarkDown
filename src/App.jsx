import { useState } from "react"
import { marked } from "marked"
import "./App.css"

function App() {
  const [content, setContent] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  [FreeCodeCamp](https://markdown-previewer.freecodecamp.rocks/)
  \`code\`
  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  console.log(firstLine);
}
\`\`\`
- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.
![a house]()
> don't forget the blockquote!
**bold text**
    `)
  const [isExpandedEdit, setIsExpandedEdit] = useState(false)
  const [isExpandedPreview, setIsExpandedPreview] = useState(false)
  const markdown = marked(content)
  marked.setOptions({
    breaks: true,
  })
  return (
    <div className="App">
      {!isExpandedPreview && (
        <div className={`edit-container ${isExpandedEdit ? "expand" : ""}`}>
          <h2>Content Editor</h2>
          <i
            className={`fa-solid ${
              isExpandedEdit ? "fa-compress" : "fa-expand"
            }`}
            onClick={() => setIsExpandedEdit(!isExpandedEdit)}
          ></i>
          <textarea
            id="editor"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      )}
      {!isExpandedEdit && (
        <div
          className={`preview-container ${isExpandedPreview ? "expand" : ""}`}
        >
          <h2>Previewer</h2>
          <i
            className={`fa-solid ${
              isExpandedPreview ? "fa-compress" : "fa-expand"
            }`}
            onClick={() => setIsExpandedPreview(!isExpandedPreview)}
          ></i>
          <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      )}
    </div>
  )
}

export default App
