import {
  SearchBaseInput,
  StatusAllowed,
  useListAllCategoriesOptionsQuery,
  useListAllLocationsOptionsQuery
} from '@graphql'
import { createContext, ReactNode, useState } from 'react'
import {
  identifierTypesOptions,
  statusOptions,
  currencyOptions,
  IOption,
  yearOptions,
  monthsOptions,
  variablesOptions,
  permissionsOptions,
  articlesTypeOptions,
  articlesTypeAllowedOptions,
  merchantListingStatusOptions,
  priceTypeOptions
} from 'src/configs/options'

export type OptionsFilterType =
  | 'statusOptions'
  | 'locationsOptions'
  | 'identifierTypesOptions'
  | 'currencyOptions'
  | 'categoriesOptions'
  | 'locationsOptions'

export type OptionsType =
  | 'statusOptions'
  | 'monthOptions'
  | 'yearOptions'
  | 'merchantListingStatus'
  | 'variablesOptions'
  | 'permissionsOptions'
  | 'articlesTypeOptions'
  | 'articlesTypeAllowedOptions'
  | 'priceTypeOptions'

export type RefetchType = OptionsFilterType | OptionsType | 'all'

interface DefaultProvider {
  defaultOptions: Record<OptionsType, IOption[]>
  filterOptions: Record<OptionsFilterType, IOption[]>
  loadingOptions: boolean
  refetchQuery: (type: RefetchType[]) => void
}

const FilterContext = createContext<DefaultProvider>({
  defaultOptions: {
    statusOptions: [],
    monthOptions: [],
    yearOptions: [],
    merchantListingStatus: [],
    variablesOptions: [],
    permissionsOptions: [],
    articlesTypeOptions: [],
    articlesTypeAllowedOptions: [],
    priceTypeOptions: []
  },
  filterOptions: {
    locationsOptions: [],
    currencyOptions: [],
    identifierTypesOptions: [],
    statusOptions: [],
    categoriesOptions: []
  },
  loadingOptions: true,
  refetchQuery: () => {}
})

type Props = {
  isAuth: boolean
  children: ReactNode
}

const search = { all: true } satisfies SearchBaseInput

const FilterProvider = ({ children, isAuth }: Props) => {
  const [locationsOptions, setLocationsOptions] = useState<IOption[]>([])
  const [categoriesOptions, setCategoriesOptions] = useState<IOption[]>([])

  const { loading: loadingLocations, fetchMore: fetchMoreLocations } = useListAllLocationsOptionsQuery({
    variables: {
      search
    },
    onCompleted: ({ listLocationsPaginated }) => {
      setLocationsOptions(
        listLocationsPaginated.docs.map((item) => ({
          label: item.name,
          value: item._id,
          data: item
        }))
      )
    },
    skip: !isAuth
  })

  const { loading: loadingCategories, fetchMore: fetchMoreCategories } = useListAllCategoriesOptionsQuery({
    variables: {
      search
    },
    onCompleted: ({ listCategoriesPaginated }) => {
      setCategoriesOptions(
        listCategoriesPaginated.docs.map((item) => ({
          label: item.name,
          value: item._id,
          data: item
        }))
      )
    },
    skip: !isAuth
  })

  const refetchLocations = () => {
    fetchMoreLocations({
      updateQuery(previousFetch, { fetchMoreResult }) {
        setLocationsOptions(
          fetchMoreResult.listLocationsPaginated.docs.map((item) => ({
            label: item.name,
            value: item._id,
            data: item
          }))
        )

        return fetchMoreResult
      }
    })
  }

  const refetchCategories = () => {
    fetchMoreCategories({
      updateQuery(previousFetch, { fetchMoreResult }) {
        setCategoriesOptions(
          fetchMoreResult.listCategoriesPaginated.docs.map((item) => ({
            label: item.name,
            value: item._id,
            data: item
          }))
        )

        return fetchMoreResult
      }
    })
  }

  const refetchQuery = (types: RefetchType[]) => {
    for (const type of types) {
      if (type === 'all') {
        refetchLocations()
        refetchCategories()
      }
      if (type === 'locationsOptions') {
        refetchLocations()
      }
      if (type === 'categoriesOptions') {
        refetchCategories()
      }
    }
  }

  return (
    <FilterContext.Provider
      value={{
        loadingOptions: loadingCategories || loadingLocations || false,
        filterOptions: {
          statusOptions: [{ label: 'Select Status', value: StatusAllowed.Empty, disabled: true }, ...statusOptions],
          locationsOptions: [{ label: 'Select City', value: 'EMPTY', disabled: true }, ...locationsOptions],
          identifierTypesOptions: [{ label: 'Select one', value: '', disabled: true }, ...identifierTypesOptions],
          currencyOptions: [{ label: 'Select Currency', value: 'EMPTY', disabled: true }, ...currencyOptions],
          categoriesOptions: [{ label: 'Select Category', value: 'EMPTY', disabled: true }, ...categoriesOptions]
        },
        defaultOptions: {
          statusOptions: [{ label: 'Select Status', value: StatusAllowed.Empty }, ...statusOptions],
          monthOptions: [...monthsOptions.map((item) => ({ ...item, value: item.value - 1 }))],
          merchantListingStatus: merchantListingStatusOptions,
          yearOptions: [...yearOptions],
          variablesOptions: [...variablesOptions],
          priceTypeOptions: [...priceTypeOptions],
          permissionsOptions,
          articlesTypeAllowedOptions,
          articlesTypeOptions
        },
        refetchQuery
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
