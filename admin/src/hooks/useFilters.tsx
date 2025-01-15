import { useContext } from 'react'
import { FilterContext } from 'src/context/FilterContext'

export const useFilters = () => useContext(FilterContext)
