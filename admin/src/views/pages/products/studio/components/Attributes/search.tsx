import { useForm } from 'react-hook-form'
import {
  FindAmenitiesQuery,
  ListAmenitiesPaginatedDocument,
  ListAmenitiesPaginatedSuspenseQueryHookResult
} from '@graphql'
import { Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import IconifyIcon from 'src/@core/components/icon'
import { Fragment, Suspense, useState } from 'react'
import Typography from '@mui/material/Typography'
import TextInput from '@components/Inputs/TextInput'
import { useSuspenseQuery } from '@apollo/client'

interface Props {
  setAmenities: (action: string, ids: string) => void
}

interface ItemProps {
  data: FindAmenitiesQuery['findAmenities'][0]
  setAmenities: (action: string, ids: string) => void
}

const ListItemCustom = ({ data, setAmenities }: ItemProps) => {
  const [editable, setEditable] = useState(false)

  const handleEdit = () => {
    setEditable(!editable)
    setAmenities('add', data._id)
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton role={undefined} onClick={handleEdit} dense>
          <ListItemAvatar>
            <IconifyIcon icon={data.icon} fontSize={40} />
          </ListItemAvatar>

          <ListItemText
            id={data._id}
            primary={`${data.name}`}
            secondary={
              <Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  {data.description}
                </Typography>
              </Fragment>
            }
          />
          <IconifyIcon icon='tabler:plus' fontSize={20} />
        </ListItemButton>
      </ListItem>
    </>
  )
}

interface ISearchProps {
  q: string
  setAmenities: (action: string, ids: string) => void
}

const SearchComponent = ({ q, setAmenities }: ISearchProps) => {
  const { data } = useSuspenseQuery(ListAmenitiesPaginatedDocument, {
    variables: {
      search: {
        q,
        perPage: 3
      }
    }
  }) as ListAmenitiesPaginatedSuspenseQueryHookResult

  return (
    <List>
      {data.listAmenitiesPaginated.docs.map((item) => (
        <ListItemCustom key={`list-attributes-search-${item._id}`} data={item} setAmenities={setAmenities} />
      ))}
    </List>
  )
}

function AmeSearch({ setAmenities }: Props) {
  const { watch, control } = useForm({
    defaultValues: {
      q: ''
    }
  })

  const q = watch('q')

  return (
    <div>
      <TextInput name='q' placeholder='Search attributes' fullWidth control={control} />
      <Divider sx={{ my: 3 }} />
      <Suspense fallback={<div>Loading</div>}>
        <SearchComponent q={q} setAmenities={setAmenities} />
      </Suspense>
    </div>
  )
}

export default AmeSearch
