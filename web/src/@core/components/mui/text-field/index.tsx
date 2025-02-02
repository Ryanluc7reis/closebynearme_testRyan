import { forwardRef } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'

const TextFieldStyled = styled(TextField)<TextFieldProps>(() => ({
  alignItems: 'flex-start',
  '& .MuiInputLabel-root': {
    transform: 'none',
    lineHeight: 1.154,
    position: 'relative',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333 !important' // Cor fixa para os labels
  },
  '& .MuiInputBase-root': {
    borderRadius: 8,
    backgroundColor: 'white !important', // Fundo branco fixo
    border: `1px solid rgba(0, 0, 0, 0.2)`, // Borda fixa
    transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

    '&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover': {
      borderColor: `rgba(0, 0, 0, 0.4)` // Cor mais forte no hover
    },

    '&:before, &:after': {
      display: 'none'
    },

    '&.Mui-focused': {
      borderColor: '#1976d2', // Azul ao focar
      boxShadow: '0 0 4px rgba(25, 118, 210, 0.5)'
    },

    '&.Mui-error': {
      borderColor: '#d32f2f' // Vermelho para erro
    },

    '&.Mui-disabled': {
      backgroundColor: '#f0f0f0 !important',
      borderColor: 'rgba(0, 0, 0, 0.1)'
    }
  },

  '& .MuiInputBase-input': {
    color: '#333',
    padding: '12px',
    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.5)',
      transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out'
    }
  },

  '& .MuiFormHelperText-root': {
    marginTop: '4px',
    fontSize: '12px',
    color: '#666',
    '&.Mui-error': {
      color: '#d32f2f'
    }
  }
}))

const CustomTextField = forwardRef((props: TextFieldProps, ref) => {
  // ** Props
  const { size = 'small', InputLabelProps, ...rest } = props

  return (
    <TextFieldStyled
      size={size}
      inputRef={ref}
      {...rest}
      variant="filled"
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
    />
  )
})

export default CustomTextField
