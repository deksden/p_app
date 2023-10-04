import React from 'react'
import PropTypes from 'prop-types'
import {
    Filter,
    TextInput,
    BooleanInput,
    List,
    Datagrid,
    TextField,
    EmailField,
    BooleanField,
    Create, Edit, SimpleForm, required, PasswordInput, NumberInput, DateInput, ReferenceField, DateField, NumberField
} from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import { FormStyles } from './form-styles'

const useStyles = makeStyles(FormStyles)

const MrpPlanFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput label='Name' source='name' />
    <TextInput label='E-mail' source='email' />
    <BooleanInput label='Disabled' source='disabled' />
  </Filter>
)

const ProductCaptionField = ({ record }) => <span>{record.caption}</span>

const MrpPlanForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {...props}>
      <TextInput disabled label='Id' className={classes.wide35} source='id' />
      <DateInput source='date' className={classes.wide35} validate={required()} />
      <ReferenceField label='Product' source='product' reference='MrpProduct'>
        <TextField source='caption' optionText={<ProductCaptionField />} optionValue='id' />
      </ReferenceField>
      <TextInput source='product' className={classes.wide35} validate={required()} />
      <NumberInput source='qnt' className={classes.wide35} validate={required()} />
    </SimpleForm>
  )
}

export const MrpPlanCreate = (props) => (
  <Create resource={props.resource || 'MrpPlan'} basePath={props.basePath || '/mrpplan'} {...props}>
    <MrpPlanForm {... props} />
  </Create>
)

MrpPlanCreate.propTypes = {
  resource: PropTypes.string,
  basePath: PropTypes.string
}

export const MrpPlanEdit = (props) => (
  <Edit {...props}>
    <MrpPlanForm />
  </Edit>
)

export const MrpPlanList = props => (
  <List {...props} filters={<MrpPlanFilter />}>
    <Datagrid rowClick='edit'>
      <DateField source='date' />
      <ReferenceField label='Product' source='product' reference='MrpProduct'>
        <TextField source='caption' />
      </ReferenceField>
      <NumberField source='qnt' />
    </Datagrid>
  </List>
)
