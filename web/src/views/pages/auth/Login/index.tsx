import React from 'react'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import LoginFormComponent from './form'
import NavbarHeader from '@core/components/navbar'

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: { maxWidth: 450 },
  [theme.breakpoints.up('lg')]: { maxWidth: 600 },
  [theme.breakpoints.up('xl')]: { maxWidth: 750 }
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 400,
  width: '100%'
}))

const LoginComponent = () => {
  return (
    <>
      <NavbarHeader isMobile={false} type='ProductHeader' />
      <Box
        className='content-right'
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <RightWrapper>
          <StyledBox>
            <Typography variant='h4' sx={{ mb: 1.5, textAlign: 'center' }}>
              {`Sign in with your seller account 👋🏻`}
            </Typography>
            <LoginFormComponent />
          </StyledBox>
        </RightWrapper>
      </Box>
    </>
  )
}

export default LoginComponent
