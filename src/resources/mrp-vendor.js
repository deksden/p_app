import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpVendor */
  TextInput,
  TextField,
  ReferenceInput,
  ReferenceField,
  DateInput,
  DateField,
  NumberInput,
  NumberField,
  BooleanInput,
  BooleanField,
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

/** Fragment: field-defs, model: MrpVendor */

/** FragmentEnd */

const MrpVendorFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpVendor */ />
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <TextInput source='caption' label='Название' />
    <TextInput source='address' label='Адрес' />
    <DateInput source='date' label='Дата' />
    <NumberInput source='invoicePrice' label='Цена' />
    <TextInput source='invoiceCurrency' label='Валюта' />
    <NumberInput source='orderDuration' label='Длительность заказа' />
    <BooleanInput source='inWorkingDays' label='Рабочие дни' />
    <NumberInput source='orderMin' label='Минимальное количество' />
    <TextInput source='unit' label='Единица' />
    <NumberInput source='orderStep' label='Шаг количества' />
    <TextInput source='deliveryCompany' label='Доставка' />
    <NumberInput source='deliveryDuration' label='Длительность доставки' />
    <BooleanInput source='deliveryInWorkingDays' label='Доставка, рабочие дни' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpVendorList = props => (
  <List {...props} title='Поставщик' filters={<MrpVendorFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpVendor */ />
      <ReferenceField source='resource' label='Ресурс' reference='MrpResource'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <TextField source='caption' label='Название' />
      <TextField source='address' label='Адрес' />
      <DateField source='date' label='Дата' />
      <NumberField source='invoicePrice' label='Цена' />
      <TextField source='invoiceCurrency' label='Валюта' />
      <NumberField source='orderDuration' label='Длительность заказа' />
      <BooleanField source='inWorkingDays' label='Рабочие дни' />
      <NumberField source='orderMin' label='Минимальное количество' />
      <TextField source='unit' label='Единица' />
      <NumberField source='orderStep' label='Шаг количества' />
      <TextField source='deliveryCompany' label='Доставка' />
      <NumberField source='deliveryDuration' label='Длительность доставки' />
      <BooleanField source='deliveryInWorkingDays' label='Доставка, рабочие дни' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpVendorForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpVendor */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <TextInput source='caption' label='Название' />
      <TextInput source='address' label='Адрес' />
      <DateInput source='date' label='Дата' />
      <NumberInput source='invoicePrice' label='Цена' />
      <TextInput source='invoiceCurrency' label='Валюта' />
      <NumberInput source='orderDuration' label='Длительность заказа' />
      <BooleanInput source='inWorkingDays' label='Рабочие дни' />
      <NumberInput source='orderMin' label='Минимальное количество' />
      <TextInput source='unit' label='Единица' />
      <NumberInput source='orderStep' label='Шаг количества' />
      <TextInput source='deliveryCompany' label='Доставка' />
      <NumberInput source='deliveryDuration' label='Длительность доставки' />
      <BooleanInput source='deliveryInWorkingDays' label='Доставка, рабочие дни' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpVendorCreate = (props) => (
  <Create {...props}>
    <MrpVendorForm />
  </Create>
)

const MrpVendorEditTitle = ({ record }) => {
  return <span>Поставщик{record ? `"${record.caption}"` : ''}</span>
}

MrpVendorEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpVendorEdit = props => (
  <Edit title={<MrpVendorEditTitle />} {...props}>
    <MrpVendorForm />
  </Edit>
)
