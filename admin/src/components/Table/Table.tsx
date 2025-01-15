import { Card, Divider, Grid } from '@mui/material'
import React from 'react'
import Filters from './Filters'

const DataGrid = dynamic(() => import('@mui/x-data-grid/DataGrid').then((mod) => mod.DataGrid), {
  ssr: false
})
import { Control, FieldValues } from 'react-hook-form'
import { IData, IFilterTypes, IHeaderOptions } from './interfaces'
import CustomHeader from './Header'
import dynamic from 'next/dynamic'

interface Props<V extends FieldValues> {
  filterOptions: IFilterTypes
  rows: any[]
  data: IData
  loading: boolean
  control: Control<V>
  setValue: (key: any, val: any) => void
  columns: any[]
  headerOptions?: IHeaderOptions
}

function TableComponent<V extends FieldValues>({
  data,
  rows,
  loading,
  control,
  columns,
  headerOptions,
  filterOptions,
  setValue
}: Props<V>) {
  const [rowCountState, setRowCountState] = React.useState<number>(data.totalDocs)

  React.useEffect(() => {
    setRowCountState((prevRowCountState) => (data.totalDocs !== undefined ? data.totalDocs : prevRowCountState))
  }, [data.totalDocs, setRowCountState])

  return (
    <Grid container spacing={6.5}>
      {/* <Grid item xs={12}>
      {apiData && (
        <Grid container spacing={6}>
          {apiData.statsHorizontalWithDetails.map((item: CardStatsHorizontalWithDetailsProps, index: number) => {
            return (
              <Grid item xs={12} md={3} sm={6} key={index}>
                <CardStatsHorizontalWithDetails {...item} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </Grid> */}
      <Grid item xs={12}>
        <Card>
          {filterOptions.types.length ? <Filters control={control} filterOptions={filterOptions} /> : null}
          <Divider sx={{ m: '0 !important' }} />
          <CustomHeader control={control} headerOptions={headerOptions} />
          <DataGrid
            autoHeight
            rows={rows}
            getRowId={(row) => row._id || row.id}
            loading={loading}
            columns={columns}
            rowCount={rowCountState}
            disableRowSelectionOnClick
            paginationMode='server'
            pageSizeOptions={[10, 25, 50, 100]}
            paginationModel={{
              page: data.hasPrevPage ? data?.prevPage || 0 : 0,
              pageSize: data.limit
            }}
            onPaginationModelChange={({ page, pageSize }) => {
              if (page >= data.page) {
                if (data.hasNextPage) {
                  setValue('page', data.nextPage)
                }
              } else {
                if (data.hasPrevPage) {
                  setValue('page', data.prevPage)
                }
              }

              setValue('perPage', pageSize)
            }}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default TableComponent
