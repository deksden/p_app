import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpTerm */
  TextInput,
  TextField,
  ReferenceInput,
  SelectInput,
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

/** Fragment: field-defs, model: MrpTerm */

/** FragmentEnd */

const MrpTermFilter = (props) => {
  const classes = useStyles()
  return (
    <Filter {...props}>
      <div /** Fragment: filter-fields, model: MrpTerm */ />
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
        <SelectInput optionText='caption' label='caption' className={classes.wide} />
      </ReferenceInput>
      <TextInput source='caption' label='Название' fullWidth />
      <TextInput source='address' label='Адрес' fullWidth />
      <DateInput source='date' label='Дата нач' />
      <DateInput source='dateEnd' label='Дата ок' />
      <NumberInput source='price' label='Цена' />
      <TextInput source='invoiceCurrency' label='Валюта' />
      <NumberInput source='orderDuration' label='Длительность заказа' />
      <BooleanInput source='inWorkingDays' label='Рабочие дни' />
      <NumberInput source='orderMin' label='Минимальное количество' />
      <TextInput source='unit' label='Единица' />
      <NumberInput source='orderStep' label='Шаг количества' />
      <TextInput source='deliveryCompany' label='Доставка' className={classes.wide} />
      <NumberInput source='deliveryDuration' label='Длительность доставки' />
      <BooleanInput source='deliveryInWorkingDays' label='Доставка, рабочие дни' />
      <NumberInput source='expDuration' label='Длительность годности' />
      <div /** FragmentEnd */ />
    </Filter>
  )
}

export const MrpTermList = props => (
  <List {...props} title='Поставщик' filters={<MrpTermFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpTerm */ />
      <ReferenceField source='resource' label='Ресурс' reference='MrpResource'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <TextField source='caption' label='Название' />
      <TextField source='address' label='Адрес' />
      <DateField source='date' label='Дата нач' />
      <DateField source='dateEnd' label='Дата ок' />
      <NumberField source='price' label='Цена' />
      <TextField source='invoiceCurrency' label='Валюта' />
      <NumberField source='orderDuration' label='Длительность заказа' />
      <BooleanField source='inWorkingDays' label='Рабочие дни' />
      <NumberField source='orderMin' label='Минимальное количество' />
      <TextField source='unit' label='Единица' />
      <NumberField source='orderStep' label='Шаг количества' />
      <TextField source='deliveryCompany' label='Доставка' />
      <NumberField source='deliveryDuration' label='Длительность доставки' />
      <BooleanField source='deliveryInWorkingDays' label='Доставка, рабочие дни' />
      <NumberField source='expDuration' label='Длительность годности' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpTermForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpTerm */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
        <SelectInput optionText='caption' label='Ресурс' className={classes.wide} />
      </ReferenceInput>
      <TextInput source='caption' label='Название' fullWidth />
      <TextInput source='address' label='Адрес' fullWidth />
      <DateInput source='date' label='Дата нач' />
      <DateInput source='dateEnd' label='Дата ок' />
      <NumberInput source='price' label='Цена' />
      <TextInput source='invoiceCurrency' label='Валюта' />
      <NumberInput source='orderDuration' label='Длительность заказа' />
      <BooleanInput source='inWorkingDays' label='Рабочие дни' />
      <NumberInput source='orderMin' label='Минимальное количество' />
      <TextInput source='unit' label='Единица' />
      <NumberInput source='orderStep' label='Шаг количества' />
      <TextInput source='deliveryCompany' label='Доставка' className={classes.wide} />
      <NumberInput source='deliveryDuration' label='Длительность доставки' />
      <BooleanInput source='deliveryInWorkingDays' label='Доставка, рабочие дни' />
      <NumberInput source='expDuration' label='Длительность годности' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpTermCreate = (props) => (
  <Create {...props}>
    <MrpTermForm />
  </Create>
)

const MrpTermEditTitle = ({ record }) => {
  return <span>Поставщик{record ? `"${record.caption}"` : ''}</span>
}

MrpTermEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpTermEdit = props => (
  <Edit title={<MrpTermEditTitle />} {...props}>
    <MrpTermForm />
  </Edit>
)
