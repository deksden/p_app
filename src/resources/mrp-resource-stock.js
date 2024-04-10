import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpResourceStock */
  TextInput,
  TextField,
  ReferenceInput,
  ReferenceField,
  DateInput,
  DateField,
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

/** Fragment: field-defs, model: MrpResourceStock */

/** FragmentEnd */

const MrpResourceStockFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpResourceStock */ />
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput source='type' label='Тип' />
    <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <DateInput source='date' label='Дата' />
    <NumberInput source='qnt' label='Количество' />
    <NumberInput source='price' label='Цена' />
    <ReferenceInput source='vendor' label='Поставщик' reference='MrpVendor'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <TextInput source='comments' label='Примечания' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpResourceStockList = props => (
  <List {...props} title='Остатки ресурсов' filters={<MrpResourceStockFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpResourceStock */ />
      <TextField source='type' label='Тип' />
      <ReferenceField source='resource' label='Ресурс' reference='MrpResource'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <DateField source='date' label='Дата' />
      <NumberField source='qnt' label='Количество' />
      <NumberField source='price' label='Цена' />
      <ReferenceField source='vendor' label='Поставщик' reference='MrpVendor'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <TextField source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpResourceStockForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpResourceStock */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <TextInput source='type' label='Тип' />
      <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <DateInput source='date' label='Дата' />
      <NumberInput source='qnt' label='Количество' />
      <NumberInput source='price' label='Цена' />
      <ReferenceInput source='vendor' label='Поставщик' reference='MrpVendor'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <TextInput source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpResourceStockCreate = (props) => (
  <Create {...props}>
    <MrpResourceStockForm />
  </Create>
)

const MrpResourceStockEditTitle = ({ record }) => {
  return <span>Остатки ресурсов{record ? `"${record.caption}"` : ''}</span>
}

MrpResourceStockEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpResourceStockEdit = props => (
  <Edit title={<MrpResourceStockEditTitle />} {...props}>
    <MrpResourceStockForm />
  </Edit>
)
