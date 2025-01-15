import { ArticlesType, ArticlesTypeAllowed, MerchantPublishedStatus, PermissionsMenu, ProductPriceType } from '@graphql'
import { TCities } from './cities'

interface IPermissionMenu {
  value: PermissionsMenu
  label: string
}

export interface IOption {
  value: any
  label: any
  data?: any
  disabled?: boolean
}

export const statusOptions = [
  { value: 'ACTIVE', label: 'Active' },
  { value: 'INACTIVE', label: 'Inactive' }
]

export const merchantListingStatusOptions = [
  { value: MerchantPublishedStatus.Published, label: 'Published' },
  { value: MerchantPublishedStatus.NotListing, label: 'Not Listing' }
]

export const genderOptions = [
  { value: 'MALE', label: 'Male' },
  { value: 'FEMALE', label: 'Female' },
  { value: 'OTHER', label: 'Otro' }
]

export const membershipOptions = [
  { value: 'FREE', label: 'Free' },
  { value: 'FREEMIUM', label: 'Freemium' },
  { value: 'PREMIUM', label: 'Premium' }
]

export const variablesOptions = [
  {
    value: 'DEFAULT',
    label: 'Predeterminado'
  }

  //   {
  //     value: 'CUSTOM',
  //     label: 'Customizado'
  //   }
]

export const priceTypeOptions = [
  {
    value: ProductPriceType.Day,
    label: 'Day'
  },
  {
    value: ProductPriceType.Hour,
    label: 'Hour'
  }
]

export const identifierTypesOptions = [
  {
    value: 'Driver License',
    label: 'Driver License'
  },
  {
    value: 'ID',
    label: 'ID'
  },
  {
    value: 'Passport',
    label: 'Passport'
  }
]

export const articlesTypeOptions: IOption[] = [
  { value: ArticlesType.Default, label: 'Default' },
  { value: ArticlesType.Guide, label: 'Guide' }
]
export const articlesTypeAllowedOptions: IOption[] = [
  {
    value: ArticlesTypeAllowed.Empty,
    label: 'Select Type'
  },
  {
    value: ArticlesTypeAllowed.Default,
    label: 'Default'
  },
  {
    value: ArticlesTypeAllowed.Guide,
    label: 'Guide'
  }
]

export const permissionsAdminOptions: IPermissionMenu[] = [
  { value: PermissionsMenu.Admins, label: 'Admins' },
  { value: PermissionsMenu.Categories, label: 'Categories' },
  { value: PermissionsMenu.Locations, label: 'Locations' },
  { value: PermissionsMenu.Companies, label: 'Companies' },
  { value: PermissionsMenu.Articles, label: 'Articles' },
  { value: PermissionsMenu.Faqs, label: 'Faqs' },
  { value: PermissionsMenu.Settings, label: 'Settings' }
]

export const permissionsOptions = [...permissionsAdminOptions]

export const CitiesOptions = TCities.map((item) => ({
  label: item,
  value: item
}))

export const monthsOptions = [
  {
    value: 1,
    label: 'Enero'
  },
  {
    value: 2,
    label: 'Febrero'
  },
  {
    value: 3,
    label: 'Marzo'
  },
  {
    value: 4,
    label: 'Abril'
  },
  {
    value: 5,
    label: 'Mayo'
  },
  {
    value: 6,
    label: 'Junio'
  },
  {
    value: 7,
    label: 'Julio'
  },
  {
    value: 8,
    label: 'Agosto'
  },
  {
    value: 9,
    label: 'Septiembre'
  },
  {
    value: 10,
    label: 'Octubre'
  },
  {
    value: 11,
    label: 'Noviembre'
  },
  {
    value: 12,
    label: 'Diciembre'
  }
]

export const yearOptions = [
  {
    value: 2018,
    label: 2018
  },
  {
    value: 2019,
    label: 2019
  },
  {
    value: 2020,
    label: 2020
  },
  {
    value: 2021,
    label: 2021
  },
  {
    value: 2022,
    label: 2022
  },
  {
    value: 2023,
    label: 2023
  }
]

export const currencyOptions = [
  {
    value: 'COP',
    label: 'COP'
  },
  {
    value: 'USD',
    label: 'USD'
  },
  {
    value: 'VES',
    label: 'VES'
  },
  {
    value: 'ARS',
    label: 'ARS'
  },
  {
    value: 'BRL',
    label: 'BRL'
  },
  {
    value: 'CLP',
    label: 'CLP'
  },
  {
    value: 'EUR',
    label: 'EUR'
  },
  {
    value: 'MXN',
    label: 'MXN'
  },
  {
    value: 'PEN',
    label: 'PEN'
  },
  {
    value: 'UYU',
    label: 'UYU'
  }
]
