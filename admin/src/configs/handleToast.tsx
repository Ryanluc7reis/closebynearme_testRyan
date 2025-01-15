import toast from 'react-hot-toast'
import { handleCatchError, onErrorFormat } from './errorResponse'
import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables } from '@apollo/client'

interface Props<V> {
  handle: (
    options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined
  ) => Promise<any>
  variables: any
  editMode: boolean
  cb: (data: V) => void
  prev?: () => Promise<void>
}

export async function handleToastPromise<V = any>({ handle, variables, editMode, cb, prev }: Props<V>) {
  if (prev) {
    await toast.promise(prev(), {
      error: 'Something happen when perfoming cleaning',
      loading: 'Please hold...',
      success: 'Success cleaning'
    })
  }

  return toast
    .promise(
      handle({
        variables,
        onError: onErrorFormat
      }),
      {
        loading: editMode ? 'Updating...' : 'Adding...',
        success: <b>{`${editMode ? 'Updated' : 'Added'} with success`}!</b>,
        error: <b>Can't not be {editMode ? 'updated' : 'added'}.</b>
      }
    )
    .then((res: any) => {
      cb(res)
    })
    .catch(handleCatchError)
}
