import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpResource */
  TextInput,
  TextField,
  NumberInput,
  NumberField,
  /** FragmentEnd */
  SimpleForm
} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  wide: {
    width: '45%',
    minWidth: '251px'
  }
})

/** Fragment: field-defs, model: MrpResource */

/** FragmentEnd */

const MrpResourceFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpResource */ />
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput source='caption' label='Название' />
    <TextInput source='unit' label='Единица' />
    <NumberInput source='minStock' label='Мин остаток' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpResourceList = props => (
  <List {...props} title='Ресурсы' filters={<MrpResourceFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpResource */ />
      <TextField source='caption' label='Название' />
      <TextField source='unit' label='Единица' />
      <NumberField source='minStock' label='Мин остаток' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpResourceForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpResource */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <TextInput source='caption' label='Название' />
      <TextInput source='unit' label='Единица' />
      <NumberInput source='minStock' label='Мин остаток' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpResourceCreate = (props) => (
  <Create {...props}>
    <MrpResourceForm />
  </Create>
)

const MrpResourceEditTitle = ({ record }) => {
  return <span>Ресурсы{record ? `"${record.caption}"` : ''}</span>
}

MrpResourceEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpResourceEdit = props => (
  <Edit title={<MrpResourceEditTitle />} {...props}>
    <MrpResourceForm />
  </Edit>
)
