import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter, Datagrid,
  /** Fragment: import-components, model: MrpResourceStock */
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

/** Fragment: field-defs, model: MrpResourceStock */

/** FragmentEnd */

const MrpResourceStockFilter = (props) => (
  <Filter {...props}>
    <div /** Fragment: filter-fields, model: MrpResourceStock */ />
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput source='batchId' label='Партия' />
    <TextInput source='type' label='Тип' />
    <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
      <SelectInput optionText='caption' label='caption' />
    </ReferenceInput>
    <DateInput source='date' label='Дата' />
    <NumberInput source='qnt' label='Количество' />
    <NumberInput source='qntReq' label='Требуемое количество' />
    <NumberInput source='price' label='Цена' />
    <ReferenceInput source='term' label='Условия поставки' reference='MrpTerm'>
      <SelectInput optionText='caption' label='caption' />
    </ReferenceInput>
    <ReferenceInput source='productStage' label='Этап производства' reference='MrpProductStage'>
      <SelectInput optionText='caption' label='caption' />
    </ReferenceInput>
    <ReferenceInput source='stageResource' label='Ресурсы этап' reference='MrpStageResource'>
      <SelectInput optionText='caption' label='caption' />
    </ReferenceInput>
    <DateInput source='dateOrder' label='Дата заказа' />
    <DateInput source='dateProd' label='Дата производства' />
    <DateInput source='dateExp' label='Дата годности' />
    <TextInput source='comments' label='Примечания' />
    <div /** FragmentEnd */ />
  </Filter>
)

export const MrpResourceStockList = props => (
  <List {...props} title='Остатки ресурсов' filters={<MrpResourceStockFilter />}>
    <Datagrid rowClick='edit'>
      <div /** Fragment: list-fields, model: MrpResourceStock */ />
      <TextField source='batchId' label='Партия' />
      <TextField source='type' label='Тип' />
      <ReferenceField source='resource' label='Ресурс' reference='MrpResource'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <DateField source='date' label='Дата' />
      <NumberField source='qnt' label='Количество' />
      <NumberField source='qntReq' label='Требуемое количество' />
      <NumberField source='price' label='Цена' />
      <ReferenceField source='term' label='Условия поставки' reference='MrpTerm'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <ReferenceField source='productStage' label='Этап производства' reference='MrpProductStage'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <ReferenceField source='stageResource' label='Ресурсы этап' reference='MrpStageResource'>
        <TextField source='caption' label='caption' />
      </ReferenceField>
      <DateField source='dateOrder' label='Дата заказа' />
      <DateField source='dateProd' label='Дата производства' />
      <DateField source='dateExp' label='Дата годности' />
      <TextField source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </Datagrid>
  </List>
)

const MrpResourceStockForm = (props) => {
  const classes = useStyles()

  return (
    <SimpleForm {... props}>
      <div /** Fragment: form-fields, model: MrpResourceStock */ />
      <TextInput source='id' label='Id' disabled className={classes.wide} />
      <TextInput source='batchId' label='Партия' />
      <TextInput source='type' label='Тип' />
      <ReferenceInput source='resource' label='Ресурс' reference='MrpResource'>
        <SelectInput optionText='caption' label='Ресурс' />
      </ReferenceInput>
      <DateInput source='date' label='Дата' />
      <NumberInput source='qnt' label='Количество' />
      <NumberInput source='qntReq' label='Требуемое количество' />
      <NumberInput source='price' label='Цена' />
      <ReferenceInput source='term' label='Условия поставки' reference='MrpTerm'>
        <SelectInput optionText='caption' label='Условия поставки' />
      </ReferenceInput>
      <ReferenceInput source='productStage' label='Этап производства' reference='MrpProductStage'>
        <SelectInput optionText='caption' label='Этап производства' />
      </ReferenceInput>
      <ReferenceInput source='stageResource' label='Ресурсы этап' reference='MrpStageResource'>
        <SelectInput optionText='caption' label='Ресурсы этап' />
      </ReferenceInput>
      <DateInput source='dateOrder' label='Дата заказа' />
      <DateInput source='dateProd' label='Дата производства' />
      <DateInput source='dateExp' label='Дата годности' />
      <TextInput source='comments' label='Примечания' />
      <div /** FragmentEnd */ />
    </SimpleForm>
  )
}

export const MrpResourceStockCreate = (props) => (
  <Create {...props}>
    <MrpResourceStockForm />
  </Create>
)

const MrpResourceStockEditTitle = ({ record }) => {
  return <span>Остатки ресурсов{record ? `"${record.caption}"` : ''}</span>
}

MrpResourceStockEditTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const MrpResourceStockEdit = props => (
  <Edit title={<MrpResourceStockEditTitle />} {...props}>
    <MrpResourceStockForm />
  </Edit>
)
