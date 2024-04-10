import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpStageResource */
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

/** Fragment: field-defs, model: MrpStageResource */

/** FragmentEnd */

const MrpStageResourceFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpStageResource */ />
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput source='stage' label='Этап' reference='MrpStage'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
      <TextInput source='caption' label='caption' />
    </ReferenceInput>
    <NumberInput source='qnt' label='Количество' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpStageResourceList = props => (
  <List {...props} title='Нормы расхода' filters={<MrpStageResourceFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpStageResource */ />
      <ReferenceField source='stage' label='Этап' reference='MrpStage'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <ReferenceField source='resource' label='Ресурс' reference='MrpResource'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <NumberField source='qnt' label='Количество' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpStageResourceForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpStageResource */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <ReferenceInput source='stage' label='Этап' reference='MrpStage'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
        <TextInput source='caption' label='caption' />
      </ReferenceInput>
      <NumberInput source='qnt' label='Количество' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpStageResourceCreate = (props) => (
  <Create {...props}>
    <MrpStageResourceForm />
  </Create>
)

const MrpStageResourceEditTitle = ({ record }) => {
  return <span>Нормы расхода{record ? `"${record.caption}"` : ''}</span>
}

MrpStageResourceEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpStageResourceEdit = props => (
  <Edit title={<MrpStageResourceEditTitle />} {...props}>
    <MrpStageResourceForm />
  </Edit>
)
