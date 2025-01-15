import authConfig from 'src/configs/auth'
import { ApolloError } from '@apollo/client/errors'
import toast from 'react-hot-toast'

// import toast from 'react-hot-toast'
// import { ErrorToast } from '@/components/shared/CustomToast';

interface GraphqlErrorFormated {
  es: string
  en: string
}

export const onErrorFormat = (error: ApolloError) => {
  throw error.graphQLErrors.map((item) => JSON.parse(item.message))
}

export const handleCatchError = (er: GraphqlErrorFormated[]) => {
  if (er.length) {
    er.forEach(({}: any) => {
      console.log('fix this toast error')
      toast.error('Error')

      //   toast((t) => <ErrorToast t={t} message={es} />);
    })
  }
}

export const handleAuthContext = () => {
  const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!

  return {
    context: {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    }
  }
}
