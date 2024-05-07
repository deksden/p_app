import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpPlan */
  TextInput,
  TextField,
  DateInput,
  DateField,
  ReferenceInput,
  SelectInput,
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

/** Fragment: field-defs, model: MrpPlan */

/** FragmentEnd */

const MrpPlanFilter = (props) => {
  const classes = useStyles()

  return (
    <Filter {...props}>
      <div /** Fragment: filter-fields, model: MrpPlan */ />
      <TextInput label='Search' source='q' alwaysOn />
      <DateInput source='date' label='Дата' />
      <ReferenceInput source='product' label='Продукт' reference='MrpProduct'>
        <SelectInput optionText='caption' label='caption' className={classes.wide} />
      </ReferenceInput>
      <NumberInput source='qnt' label='Количество' />
      <TextInput source='status' label='Статус' />
      <TextInput source='vendorTermSelector' label='Выбор условий' />
      <div /** FragmentEnd */ />
    </Filter>
  )
}

export const MrpPlanList = props => (
  <List {...props} title='MRP Plan' filters={<MrpPlanFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpPlan */ />
      <DateField source='date' label='Дата' />
      <ReferenceField source='product' label='Продукт' reference='MrpProduct'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <NumberField source='qnt' label='Количество' />
      <TextField source='status' label='Статус' />
      <TextField source='vendorTermSelector' label='Выбор условий' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpPlanForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpPlan */ />
      <TextInput source='id' label='Код' disabled className={classes.wide} />
      <DateInput source='date' label='Дата' />
      <ReferenceInput source='product' label='Продукт' reference='MrpProduct'>
        <SelectInput optionText='caption' label='Продукт' className={classes.wide} />
      </ReferenceInput>
      <NumberInput source='qnt' label='Количество' />
      <TextInput source='status' label='Статус' />
      <TextInput source='vendorTermSelector' label='Выбор условий' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpPlanCreate = (props) => (
  <Create {...props}>
    <MrpPlanForm />
  </Create>
)

const MrpPlanEditTitle = ({ record }) => {
  return <span>MRP Plan{record ? `"${record.caption}"` : ''}</span>
}

MrpPlanEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpPlanEdit = props => (
  <Edit title={<MrpPlanEditTitle />} {...props}>
    <MrpPlanForm />
  </Edit>
)
