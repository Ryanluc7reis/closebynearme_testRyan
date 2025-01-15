import { ThemeColor } from 'src/@core/layouts/types'
import { TableColumnsOptionsAction } from 'src/interfaces'

export interface ColumnDefaultData {
  _id: string
  permissions?: any[]
  email?: string
  avatar?: string
  avatarColor?: ThemeColor
  fullName?: string
  status: any
}

export interface ColumnUserStatusType {
  [key: string]: {
    name: string
    color: ThemeColor
  }
}

interface ColumnActionExtraItem {
  _id: string
  disabled: boolean
  label: string
  isLink: boolean
  href: string
  icon: string
  iconSize: number
}

export interface CellType<V> {
  row: V
}

export interface ColumnExtraProps<V> {
  handleAction: (action: TableColumnsOptionsAction, row: V | any) => void
  showView?: boolean
  viewPath?: string
  extraOptions?: ColumnActionExtraItem[]
}
