import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpProductStage */
  TextInput,
  TextField,
  ReferenceInput,
  SelectInput,
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

/** Fragment: field-defs, model: MrpProductStage */

/** FragmentEnd */

const MrpProductStageFilter = (props) => {
  // const classes = useStyles()

  return (
    <Filter {...props}>
      <div /** Fragment: filter-fields, model: MrpProductStage */ />
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput source='plan' label='План' reference='MrpPlan'>
        <SelectInput optionText='caption' label='caption' />
      </ReferenceInput>
      <ReferenceInput source='stage' label='Этап' reference='MrpStage'>
        <SelectInput optionText='caption' label='caption' />
      </ReferenceInput>
      <DateInput source='dateStart' label='Дата начала' />
      <DateInput source='dateEnd' label='Дата завершения' />
      <NumberInput source='totalQntForProd' label='Количество в партии' />
      <NumberInput source='price' label='Цена' />
      <div /** FragmentEnd */ />
    </Filter>
  )
}

export const MrpProductStageList = props => (
  <List {...props} title='Запланированный этап' filters={<MrpProductStageFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpProductStage */ />
      <ReferenceField source='plan' label='План' reference='MrpPlan'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <ReferenceField source='stage' label='Этап' reference='MrpStage'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <DateField source='dateStart' label='Дата начала' />
      <DateField source='dateEnd' label='Дата завершения' />
      <NumberField source='totalQntForProd' label='Количество в партии' />
      <NumberField source='price' label='Цена' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpProductStageForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpProductStage */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <ReferenceInput source='plan' label='План' reference='MrpPlan'>
        <SelectInput optionText='caption' label='План' />
      </ReferenceInput>
      <ReferenceInput source='stage' label='Этап' reference='MrpStage'>
        <SelectInput optionText='caption' label='Этап' />
      </ReferenceInput>
      <DateInput source='dateStart' label='Дата начала' />
      <DateInput source='dateEnd' label='Дата завершения' />
      <NumberInput source='totalQntForProd' label='Количество в партии' />
      <NumberInput source='price' label='Цена' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpProductStageCreate = (props) => (
  <Create {...props}>
    <MrpProductStageForm />
  </Create>
)

const MrpProductStageEditTitle = ({ record }) => {
  return <span>Запланированный этап{record ? `"${record.caption}"` : ''}</span>
}

MrpProductStageEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpProductStageEdit = props => (
  <Edit title={<MrpProductStageEditTitle />} {...props}>
    <MrpProductStageForm />
  </Edit>
)
