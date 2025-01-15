import SidebarForm from '@components/Sidebar/SidebarForm'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import useSidebarFormSchema from './useSidebarFormSchema'
import { PopulateValues, Redirect, SidebarPrebuildComponentFormType } from './interfaces'
import { useFilters } from 'src/hooks/useFilters'
import { RefetchType } from 'src/context/FilterContext'
import { handleToastPromise } from 'src/configs/handleToast'
import { useRouter } from 'next/router'

interface Props {
  open: boolean
  toggle: () => void
  defaultValues: any
  refetch: () => void
  formType: SidebarPrebuildComponentFormType
  resetValues?: string[]
  redirect?: Redirect
  refetchQueries?: RefetchType[]
  populateValues?: PopulateValues[]
}

function SidebarComponent({
  defaultValues,
  open,
  toggle,
  refetch,
  formType,
  resetValues = [],
  refetchQueries,
  populateValues = [],
  redirect
}: Props) {
  const router = useRouter()
  const editMode = !!defaultValues?._id
  const { document, schema, title, sidebarValues } = useSidebarFormSchema({ editMode, formType })
  const { defaultOptions, filterOptions, loadingOptions, refetchQuery } = useFilters()

  const { control, reset, handleSubmit, setValue, resetField } = useForm({
    defaultValues: editMode ? defaultValues.data : defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  })

  const [handle, { loading }] = useMutation(document)

  const onSubmit = async (data: any) => {
    const extraData: any = {}

    if (resetValues && resetValues.length) {
      resetValues.map((key) => {
        resetField(key)
        data[key] = undefined as any
      })
    }

    if (populateValues && populateValues.length) {
      populateValues.map((_item) => {
        extraData[_item.key] = filterOptions[_item.filterName]
          .filter((item) => data[_item.from].indexOf(item.value) > -1)
          .map((item) => _item.resolve(item))
      })
    }

    const sendData = { ...data, ...extraData }

    let variables = {
      input: sendData
    } as any

    if (editMode) {
      const updateData = {
        _id: defaultValues._id,
        data: sendData
      }
      variables = {
        input: updateData
      } as any
    }

    await handleToastPromise({
      cb: ({ data }) => {
        if (refetchQueries?.length) {
          refetchQuery(refetchQueries)
        }
        if (redirect && data[redirect.path]) {
          const route = redirect.href.replace(redirect.wildcard, data[redirect.path])

          router.push(route)
        } else {
          refetch()
        }
        handleClose()
      },
      editMode,
      handle,
      variables
    })
  }

  const handleClose = () => {
    toggle()
    reset()
  }

  return (
    <SidebarForm
      title={title}
      open={open}
      loading={loadingOptions || loading}
      handleClose={handleClose}
      values={sidebarValues({
        defaultOptions,
        filterOptions,
        editMode,
        setValue
      })}
      editMode={editMode}
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default SidebarComponent
