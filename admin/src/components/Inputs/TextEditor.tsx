import EditorComponent from '@components/Editor'
import { ContentState, convertFromHTML } from 'draft-js'
import React from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

interface Props<V extends FieldValues> {
  control: Control<V>
  name: Path<V>
}

function TextEditor<V extends FieldValues>({ control, name }: Props<V>) {
  const { field } = useController({ control, name })

  const handleParse = (): ContentState => {
    if (field.value) {
      const contentState = convertFromHTML(field.value)

      return ContentState.createFromBlockArray(contentState.contentBlocks, contentState.entityMap)
    } else {
      return ContentState.createFromText('')
    }
  }

  return <EditorComponent onChange={field.onChange} contentState={handleParse()} />
}

export default TextEditor
