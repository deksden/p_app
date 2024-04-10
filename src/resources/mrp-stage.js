import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpStage */
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

/** Fragment: field-defs, model: MrpStage */

/** FragmentEnd */

const MrpStageFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpStage */ />
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='product' label='Продукт' reference='MrpProduct'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <NumberInput source='order' label='Порядок' />
    <TextInput source='caption' label='Название' />
    <NumberInput source='duration' label='Длительность' />
    <TextInput source='comments' label='Примечания' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpStageList = props => (
  <List {...props} title='Этап производства' filters={<MrpStageFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpStage */ />
      <ReferenceField source='product' label='Продукт' reference='MrpProduct'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <NumberField source='order' label='Порядок' />
      <TextField source='caption' label='Название' />
      <NumberField source='duration' label='Длительность' />
      <TextField source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpStageForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpStage */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <ReferenceInput source='product' label='Продукт' reference='MrpProduct'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <NumberInput source='order' label='Порядок' />
      <TextInput source='caption' label='Название' />
      <NumberInput source='duration' label='Длительность' />
      <TextInput source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpStageCreate = (props) => (
  <Create {...props}>
    <MrpStageForm />
  </Create>
)

const MrpStageEditTitle = ({ record }) => {
  return <span>Этап производства{record ? `"${record.caption}"` : ''}</span>
}

MrpStageEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpStageEdit = props => (
  <Edit title={<MrpStageEditTitle />} {...props}>
    <MrpStageForm />
  </Edit>
)
