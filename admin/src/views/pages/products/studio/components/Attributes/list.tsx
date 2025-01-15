import { Control, FieldValues, useWatch } from 'react-hook-form'
import { UpdateAmenitiesFormDefaultValues } from './amenities.schema'
import { FindAmenitiesQuery, useFindAmenitiesQuery } from '@graphql'
import { List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import IconifyIcon from 'src/@core/components/icon'
import { Fragment, useMemo, useState } from 'react'
import Typography from '@mui/material/Typography'
import AmeForm, { EditAmenitiesProps } from './form'
import Collapse from '@mui/material/Collapse'

interface Props<V extends FieldValues> {
  control: Control<V>
  setAmenities: (action: string, ids: string) => void
}

interface ItemProps {
  setAmenities: (action: string, ids: string) => void
  data: FindAmenitiesQuery['findAmenities'][0]
  refetch: () => void
}

const ListItemCustom = ({ data, refetch, setAmenities }: ItemProps) => {
  const defaultValues = useMemo<EditAmenitiesProps>(
    () => ({
      editMode: true,
      defaultValues: UpdateAmenitiesFormDefaultValues(data._id, {
        description: data.description,
        icon: data.icon,
        name: data.name
      })
    }),
    [data]
  )
  const [editable, setEditable] = useState(false)

  const handleEdit = () => {
    setEditable(!editable)
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
          {editable ? (
            <IconifyIcon icon='tabler:minus' fontSize={20} />
          ) : (
            <IconifyIcon icon='tabler:plus' fontSize={20} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={editable} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <AmeForm
            data={defaultValues}
            setAmenities={setAmenities}
            refetch={() => {
              setEditable(false)
              refetch()
            }}
          />
        </List>
      </Collapse>
    </>
  )
}

function AmeList<V extends FieldValues>({ control, setAmenities }: Props<V>) {
  const values = useWatch({ control })

  const { data, loading, refetch } = useFindAmenitiesQuery({
    variables: {
      ids: values.amenities || []
    }
  })

  return (
    <List>
      {!loading &&
        data?.findAmenities.map((item) => (
          <ListItemCustom
            key={`list-attributes-${item._id}`}
            data={item}
            refetch={refetch}
            setAmenities={setAmenities}
          />
        ))}
    </List>
  )
}

export default AmeList
