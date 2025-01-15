import TextInput from '@components/Inputs/TextInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { handleToastPromise } from 'src/configs/handleToast'
import {
  CreateAmenitiesDefaultValues,
  CreateAmenitiesSchema,
  UpdateAmenitiesDefaultValues,
  UpdateAmenitiesSchema
} from './amenities.schema'
import {
  CreateAmenitiesDocument,
  CreateAmenitiesMutationResult,
  CreateAmenitiesMutationVariables,
  UpdateAmenitiesDocument,
  UpdateAmenitiesMutationVariables
} from '@graphql'
import IconifyIcon from '@core/components/icon'

export interface EditAmenitiesProps {
  editMode: true
  defaultValues: UpdateAmenitiesDefaultValues
}

export interface CreateAmenitiesProps {
  editMode: false
  defaultValues: CreateAmenitiesDefaultValues
}

type Data = CreateAmenitiesProps | EditAmenitiesProps

interface Props {
  setAmenities: (action: string, ids: string) => void
  data: Data
  refetch?: () => void
}

function AmeForm({ setAmenities, data: { defaultValues, editMode }, refetch }: Props) {
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: editMode ? defaultValues.data : defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(editMode ? UpdateAmenitiesSchema : CreateAmenitiesSchema)
  })
  const [handle, { loading }] = useMutation(editMode ? UpdateAmenitiesDocument : CreateAmenitiesDocument)

  const icon = watch('icon')

  const onSubmit = async (data: any) => {
    const sendData = { ...data }

    let variables = {
      input: sendData
    } satisfies CreateAmenitiesMutationVariables

    if (editMode) {
      const updateData = {
        _id: defaultValues._id,
        data: sendData
      }
      variables = {
        input: updateData
      } as UpdateAmenitiesMutationVariables
    }

    await handleToastPromise<CreateAmenitiesMutationResult>({
      handle,
      cb: ({ data }) => {
        if (data) {
          if (data.createAmenities) {
            setAmenities('add', data.createAmenities)
            reset()
          } else if (refetch) {
            refetch()
          }
        }
      },
      editMode,
      variables
    })
  }

  const removeAmenities = () => {
    if (editMode) {
      setAmenities('remove', defaultValues._id)
    }
  }

  return (
    <form
      style={{
        margin: editMode ? '20px 0px' : ''
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextInput
          name='name'
          label='Name'
          id='sidebar-text-name-input-01'
          fullWidth
          autoFocus
          placeholder='Space'
          control={control}
          required
          mb={4}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextInput
          name='description'
          label='Description'
          id='sidebar-text-description-input-01'
          placeholder='20x20'
          fullWidth
          control={control}
          required
          mb={4}
        />
      </Box>
      <a href=' https://tablericons.com/' target='_blank' referrerPolicy='no-referrer'>
        Icons from: https://tablericons.com/
      </a>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, mt: 4 }}>
        <TextInput
          name='icon'
          label='Icon'
          id='sidebar-text-icon-input-01'
          fullWidth
          placeholder='tabler:icon'
          control={control}
          required
          mb={4}
        />
        {icon && <IconifyIcon icon={icon} fontSize={40} />}
      </Box>
      <Box display='flex' justifyContent='space-between' gap={4} alignItems='center'>
        {editMode && <IconifyIcon icon='tabler:trash' fontSize={40} onClick={removeAmenities} />}

        <Button
          type='button'
          onClick={handleSubmit(onSubmit)}
          variant='contained'
          color='primary'
          fullWidth
          disabled={loading}
        >
          {editMode ? 'Save' : 'Add'}
        </Button>
      </Box>
    </form>
  )
}

export default AmeForm
