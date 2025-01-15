import React, { useState } from 'react'
import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'
import { ContentState, EditorState } from 'draft-js'

import { EditorWrapper } from '@core/styles/libs/react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { convertToHTML } from 'draft-convert'

interface Props {
  onChange: (text: any) => void
  contentState: ContentState
}

function EditorComponent({ onChange, contentState }: Props) {
  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(contentState)) // ContentState JSON

  const updateTextDescription = (state: any) => {
    setEditorState(state)

    const data = convertToHTML(editorState.getCurrentContent())

    onChange(data)
  }

  return (
    <EditorWrapper>
      <ReactDraftWysiwyg editorState={editorState} onEditorStateChange={updateTextDescription} toolbarHidden />
    </EditorWrapper>
  )
}

export default EditorComponent
