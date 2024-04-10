import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpVendorPayment */
  TextInput,
  TextField,
  ReferenceInput,
  ReferenceField,
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

/** Fragment: field-defs, model: MrpVendorPayment */

/** FragmentEnd */

const MrpVendorPaymentFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpVendorPayment */ />
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='vendor' label='Поставщик' reference='MrpVendor'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <TextInput source='type' label='Тип' />
    <TextInput source='term' label='Условие' />
    <NumberInput source='value' label='Значение' />
    <TextInput source='currency' label='Валюта' />
    <TextInput source='base' label='База' />
    <NumberInput source='time' label='Период' />
    <TextInput source='caption' label='Описание' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpVendorPaymentList = props => (
  <List {...props} title='Схема оплаты' filters={<MrpVendorPaymentFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpVendorPayment */ />
      <ReferenceField source='vendor' label='Поставщик' reference='MrpVendor'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <TextField source='type' label='Тип' />
      <TextField source='term' label='Условие' />
      <NumberField source='value' label='Значение' />
      <TextField source='currency' label='Валюта' />
      <TextField source='base' label='База' />
      <NumberField source='time' label='Период' />
      <TextField source='caption' label='Описание' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpVendorPaymentForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpVendorPayment */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <ReferenceInput source='vendor' label='Поставщик' reference='MrpVendor'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <TextInput source='type' label='Тип' />
      <TextInput source='term' label='Условие' />
      <NumberInput source='value' label='Значение' />
      <TextInput source='currency' label='Валюта' />
      <TextInput source='base' label='База' />
      <NumberInput source='time' label='Период' />
      <TextInput source='caption' label='Описание' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpVendorPaymentCreate = (props) => (
  <Create {...props}>
    <MrpVendorPaymentForm />
  </Create>
)

const MrpVendorPaymentEditTitle = ({ record }) => {
  return <span>Схема оплаты{record ? `"${record.caption}"` : ''}</span>
}

MrpVendorPaymentEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpVendorPaymentEdit = props => (
  <Edit title={<MrpVendorPaymentEditTitle />} {...props}>
    <MrpVendorPaymentForm />
  </Edit>
)
