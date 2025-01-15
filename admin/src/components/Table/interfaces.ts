import { BasePaginateResponse } from '@graphql'
import { IOption } from '../../configs/options'
import { IconifyIcon } from '@iconify/types'
import { OptionsType } from 'src/context/FilterContext'

type FilterType = 'select' | 'multiselect' | 'rangepicker' | 'button'

interface IExtraButtonOption {
  _id: string
  name: string
  handle: () => void
  icon?: any
}

export interface IHeaderOptions {
  type: 'add' | 'none'
  notShowRowList?: boolean
  rowListType?: 'month' | 'normal'
  name: string
  icon?: IconifyIcon | string
  handle: () => void
  hideSearch?: boolean
  customFilter?: any
  extraButton?: IExtraButtonOption[]
}

export interface IFilterTypes {
  types: {
    id: string
    type: FilterType
    name: string
    placeholder?: string
    label?: string
    nameOptions: OptionsType
    customOptions?: IOption[]
    icon?: any
    handle?: () => void
  }[]
}

export interface IData extends BasePaginateResponse {
  docs?: undefined
}

export interface IVariablesBase {
  search: {
    page: number
    q: string
    perPage: number
  }
}
