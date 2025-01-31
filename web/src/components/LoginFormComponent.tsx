import React from 'react'

//import { useForm } from 'react-hook-form'

//import { useAuth } from 'src/hooks/useAuth'


// const defaultValues = {
//   password: '',
//   email: ''
// }
// interface Props {
//   loginSeller: boolean
// }

// export interface LoginValues {
//   email: string
//   password: string
// }


const LoginFormComponent = () => {
 // const auth = useAuth()

  // const { control, setError, handleSubmit } = useForm({
  //   defaultValues,
  //   mode: 'onBlur',
  
  // })

  // const onSubmit = (data: LoginValues) => {
  //   const { email, password } = data
  //   if (loginSeller) {
  //     auth.loginSeller({ email, password, rememberMe: true }, () => {
  //       setError('email', {
  //         type: 'manual',
  //         message: 'Email or Password is invalid'
  //       })
  //     })
  //   }
  //   auth.login({ email, password, rememberMe: true }, () => {
  //     setError('email', {
  //       type: 'manual',
  //       message: 'Email or Password is invalid'
  //     })
  //   })
  // }

  return (
    <h1>component login</h1>
    
    // <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
    //   {/* <div sx={{ mb: 4 }}>
    //     <input
    //       control={control}
    //       autoFocus
    //       fullWidth
    //       name='email'
    //       type='email'
    //       placeholder='john@doe.com'
    //       required
    //     />
    //   </div>
    //   <div sx={{ mb: 1.5 }}>
    //     <input control={control} fullWidth name='password' placeholder='********' required />
    //   </div>
    //   <div
    //     sx={{
    //       mt: 3,
    //       mb: 3,
    //       display: 'flex',
    //       flexWrap: 'wrap',
    //       alignItems: 'center',
    //       justifyContent: 'space-between'
    //     }}
    //   >
    //     <div />

    //   </div>
    //   <button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
    //     Login
    //   </button> */}
    // </form>
  )
}

export default LoginFormComponent
