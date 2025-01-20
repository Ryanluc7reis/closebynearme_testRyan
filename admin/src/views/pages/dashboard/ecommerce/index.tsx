'use client'

// ** MUI Import
import Grid from '@mui/material/Grid'

// // ** Demo Component Imports
// import EcommerceOrders from './EcommerceOrders'
// import EcommerceStatistics from './EcommerceStatistics'
// import EcommerceInvoiceTable from './EcommerceInvoiceTable'
// import EcommerceEarningReports from './EcommerceEarningReports'
// import EcommercePopularProducts from './EcommercePopularProducts'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const DashboardView = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={12}>
          <EcommerceStatistics />
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}>
          <EcommerceEarningReports />
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}>
          <EcommercePopularProducts />
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}>
          <EcommerceOrders />
        </Grid> */}
        {/* <Grid item xs={12} lg={12}>
          <EcommerceInvoiceTable />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default DashboardView
