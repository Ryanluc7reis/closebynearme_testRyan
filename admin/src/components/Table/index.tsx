import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { IData, IFilterTypes, IHeaderOptions, IVariablesBase } from './interfaces'
import Table from './Table'

interface Props<T, C, V extends FieldValues> {
  loading: boolean
  refetch: (values: any) => void
  data: IData
  rows: T[]
  variables: V
  columns: C[]
  headerOptions?: IHeaderOptions
  filterOptions: IFilterTypes
  sidebar?: any
}

function CustomTable<T, C, V extends IVariablesBase>({
  sidebar,
  variables,
  rows,
  refetch,
  data,
  loading,
  columns,
  filterOptions,
  headerOptions
}: Props<T, C, V>) {
  const { control, watch, setValue } = useForm({
    defaultValues: variables.search
  })
  const page = watch('page')

  useEffect(() => {
    const subscription = watch((search) => {
      refetch({
        search
      })
    })
    if (page > data.totalPages) {
      setValue('page', data.totalPages)
    }

    return () => subscription.unsubscribe()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch, loading, data])

  return (
    <div>
      <Table
        data={data}
        rows={rows}
        loading={loading}
        control={control}
        setValue={setValue}
        columns={columns}
        filterOptions={filterOptions}
        headerOptions={headerOptions}
      />
      {sidebar && sidebar}
    </div>
  )
}

export default CustomTable
