import { SchemasPreBuild } from './schemas'
import { SidebarPrebuildComponentFormType } from './interfaces'

interface Props {
  formType: SidebarPrebuildComponentFormType
  editMode: boolean
}

function useSidebarFormSchema({ formType, editMode }: Props) {
  return SchemasPreBuild({ editMode })['data'][formType]
}

export default useSidebarFormSchema
