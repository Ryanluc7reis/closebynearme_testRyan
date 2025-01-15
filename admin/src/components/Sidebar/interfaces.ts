import { FieldValues, Path } from 'react-hook-form'
import { IOption } from 'src/configs/options'
import { OptionsFilterType, OptionsType } from 'src/context/FilterContext'

export type SidebarPrebuildComponentFormType = 'admin' | 'category' | 'company' | 'location' | 'review' | 'faq'

type CustomInputType =
  | 'textInput'
  | 'textEditor'
  | 'selectInput'
  | 'selectMultipleInput'
  | 'datepicker'
  | 'datepickerrange'
  | 'passwordInput'
  | 'image-upload'
  | 'ranking'

export interface SideFormValue<V extends FieldValues> {
  id: string
  name: Path<V>
  type: React.InputHTMLAttributes<unknown>['type']
  required?: boolean
  autoFocus?: boolean
  fullWidth?: boolean
  label?: string
  placeholder?: string
  mb?: number
  multiline?: boolean
  rows?: number
  minRows?: number
  maxRows?: number
  autoComplete?: string

  image_upload_path?: string
  image_upload_subFix?: string
  setValue?: (value: any) => void
  options?: IOption[]
  inputType: CustomInputType
}

export interface SideFormValues<V extends FieldValues> {
  id: string
  values: SideFormValue<V>[]
}

export interface FormProps {
  editMode: boolean
  defaultOptions: Record<OptionsType, IOption[]>
  filterOptions: Record<OptionsFilterType, IOption[]>
  setValue: (name: string, value: any) => void
}

export interface PopulateValues {
  filterName: OptionsFilterType
  key: string
  from: string
  resolve: (data: any) => any
}

export interface Redirect {
  href: string
  path: string
  wildcard: string
}
