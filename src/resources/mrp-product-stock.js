import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpProductStock */
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

/** Fragment: field-defs, model: MrpProductStock */

/** FragmentEnd */

const MrpProductStockFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpProductStock */ />
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='product' label='Продукт' reference='MrpProduct'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <TextInput source='type' label='Тип' />
    <DateInput source='date' label='Дата' />
    <NumberInput source='qnt' label='Количество' />
    <NumberInput source='price' label='Себестоимость' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpProductStockList = props => (
  <List {...props} title='Остатки продукции' filters={<MrpProductStockFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpProductStock */ />
      <ReferenceField source='product' label='Продукт' reference='MrpProduct'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <TextField source='type' label='Тип' />
      <DateField source='date' label='Дата' />
      <NumberField source='qnt' label='Количество' />
      <NumberField source='price' label='Себестоимость' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpProductStockForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpProductStock */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <ReferenceInput source='product' label='Продукт' reference='MrpProduct'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <TextInput source='type' label='Тип' />
      <DateInput source='date' label='Дата' />
      <NumberInput source='qnt' label='Количество' />
      <NumberInput source='price' label='Себестоимость' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpProductStockCreate = (props) => (
  <Create {...props}>
    <MrpProductStockForm />
  </Create>
)

const MrpProductStockEditTitle = ({ record }) => {
  return <span>Остатки продукции{record ? `"${record.caption}"` : ''}</span>
}

MrpProductStockEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpProductStockEdit = props => (
  <Edit title={<MrpProductStockEditTitle />} {...props}>
    <MrpProductStockForm />
  </Edit>
)
