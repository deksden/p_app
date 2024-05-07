import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpProduct */
  TextInput,
  TextField,
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

/** Fragment: field-defs, model: MrpProduct */

/** FragmentEnd */

const MrpProductFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpProduct */ />
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput source='caption' label='Название' />
    <TextInput source='unit' label='Единица' />
    <DateInput source='initialDate' label='Дата' />
    <NumberInput source='qntMin' label='Количество' />
    <NumberInput source='qntStep' label='Шаг' />
    <BooleanInput source='inWorkingDays' label='Рабочие дни' />
    <TextInput source='comments' label='Примечания' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpProductList = props => (
  <List {...props} title='Продукция' filters={<MrpProductFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpProduct */ />
      <TextField source='caption' label='Название' />
      <TextField source='unit' label='Единица' />
      <DateField source='initialDate' label='Дата' />
      <NumberField source='qntMin' label='Количество' />
      <NumberField source='qntStep' label='Шаг' />
      <BooleanField source='inWorkingDays' label='Рабочие дни' />
      <TextField source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpProductForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpProduct */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <TextInput source='caption' label='Название' />
      <TextInput source='unit' label='Единица' />
      <DateInput source='initialDate' label='Дата' />
      <NumberInput source='qntMin' label='Количество' />
      <NumberInput source='qntStep' label='Шаг' />
      <BooleanInput source='inWorkingDays' label='Рабочие дни' />
      <TextInput source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpProductCreate = (props) => (
  <Create {...props}>
    <MrpProductForm />
  </Create>
)

const MrpProductEditTitle = ({ record }) => {
  return <span>Продукция{record ? `"${record.caption}"` : ''}</span>
}

MrpProductEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpProductEdit = props => (
  <Edit title={<MrpProductEditTitle />} {...props}>
    <MrpProductForm />
  </Edit>
)
