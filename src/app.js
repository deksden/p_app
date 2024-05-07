/* eslint-disable spaced-comment */
import React from 'react'
import { Admin, Resource, Login, Layout, AppBar } from 'react-admin'
import { useSelector } from 'react-redux'
import dataProvider from './core/data-provider'
import { UserList, UserCreate, UserEdit } from './resources/users'
import { UserGroupCreate, UserGroupEdit, UserGroupList } from './resources/user-groups'
// import { MrpPlanList, MrpPlanEdit, MrpPlanCreate } from './resources/mrp-plan'

import UserIcon from '@material-ui/icons/Person'
import UserGroupIcon from '@material-ui/icons/Group'
// import AccountTreeIcon from '@material-ui/icons/AccountTree'
// import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
// import BarChartIcon from '@material-ui/icons/BarChart'

import Dashboard from './forms/dashboard'
import authProvider from './core/auth-provider'
import MyMenu from './ui/my-menu'
import { Route } from 'react-router-dom'
import themeReducer from './core/theme-reducer'
import { darkTheme, lightTheme } from './core/themes'
import { ThemeName } from './core/actions'

// import {
//   DeployProjectList, DeployProjectCreate, DeployProjectEdit,
//   DeployEventList, DeployEventEdit
// } from './resources/deploys'
// import { MrpVendorCreate, MrpVendorEdit, MrpVendorList } from './resources/mrp-vendor'
/** Fragment: app-import */
import BarChartIcon from '@material-ui/icons/BarChart'
import { MrpPlanList, MrpPlanEdit, MrpPlanCreate } from './resources/mrp-plan'
import { MrpStageList, MrpStageEdit, MrpStageCreate } from './resources/mrp-stage'
import { MrpTermList, MrpTermEdit, MrpTermCreate } from './resources/mrp-term'
import { MrpProductList, MrpProductEdit, MrpProductCreate } from './resources/mrp-product'
import { MrpProductStockList, MrpProductStockEdit, MrpProductStockCreate } from './resources/mrp-product-stock'
import { MrpResourceList, MrpResourceEdit, MrpResourceCreate } from './resources/mrp-resource'
import { MrpResourceStockList, MrpResourceStockEdit, MrpResourceStockCreate } from './resources/mrp-resource-stock'
import { MrpStageResourceList, MrpStageResourceEdit, MrpStageResourceCreate } from './resources/mrp-stage-resource'
import { MrpProductStageList, MrpProductStageEdit, MrpProductStageCreate } from './resources/mrp-product-stage'
/** FragmentEnd */

const MyLoginPage = () => <Login backgroundImage='https://loremflickr.com/1024/768/city,factory,plant' />
const MyAppBar = props => <AppBar {...props} userMenu={<MyMenu />} />
const MyLayout = props => {
  const theme = useSelector((state) =>
    state.theme === ThemeName.dark ? darkTheme : lightTheme
  )

  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      theme={theme}
    />
  )
}
const MyRoutes = [
  <Route key='1' exact path='/signup' component={UserCreate} />
]

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    loginPage={MyLoginPage}
    layout={MyLayout}
    customRoutes={MyRoutes}
    customReducers={{ theme: themeReducer }}
  >
    {/*<Resource*/}
    {/*  name='DeployProject'*/}
    {/*  options={{ label: 'Deploy projects' }}*/}
    {/*  list={DeployProjectList}*/}
    {/*  icon={AccountTreeIcon}*/}
    {/*  edit={DeployProjectEdit}*/}
    {/*  create={DeployProjectCreate}*/}
    {/*/>*/}
    {/*<Resource*/}
    {/*  name='DeployEvent'*/}
    {/*  options={{ label: 'Deploy events' }}*/}
    {/*  list={DeployEventList}*/}
    {/*  icon={LibraryBooksIcon}*/}
    {/*  edit={DeployEventEdit}*/}
    {/*/>*/}
    <Resource
      name='user'
      options={{ label: 'Users' }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      icon={UserIcon}
    />
    <Resource
      name='usergroup'
      options={{ label: 'User groups' }}
      list={UserGroupList}
      icon={UserGroupIcon}
      edit={UserGroupEdit}
      create={UserGroupCreate}
    />
    <div /** Fragment: app-resource */ />
    <Resource
      name='MrpPlan'
      options={{ label: 'План' }}
      list={MrpPlanList}
      icon={BarChartIcon}
      edit={MrpPlanEdit}
      create={MrpPlanCreate}
    />
    <Resource
      name='MrpStage'
      options={{ label: 'Этап производства' }}
      list={MrpStageList}
      icon={BarChartIcon}
      edit={MrpStageEdit}
      create={MrpStageCreate}
    />
    <Resource
      name='MrpTerm'
      options={{ label: 'Условия поставки' }}
      list={MrpTermList}
      icon={BarChartIcon}
      edit={MrpTermEdit}
      create={MrpTermCreate}
    />
    <Resource
      name='MrpProduct'
      options={{ label: 'Продукция' }}
      list={MrpProductList}
      icon={BarChartIcon}
      edit={MrpProductEdit}
      create={MrpProductCreate}
    />
    <Resource
      name='MrpProductStock'
      options={{ label: 'Остатки продукции' }}
      list={MrpProductStockList}
      icon={BarChartIcon}
      edit={MrpProductStockEdit}
      create={MrpProductStockCreate}
    />
    <Resource
      name='MrpResource'
      options={{ label: 'Ресурсы' }}
      list={MrpResourceList}
      icon={BarChartIcon}
      edit={MrpResourceEdit}
      create={MrpResourceCreate}
    />
    <Resource
      name='MrpResourceStock'
      options={{ label: 'Остатки ресурсов' }}
      list={MrpResourceStockList}
      icon={BarChartIcon}
      edit={MrpResourceStockEdit}
      create={MrpResourceStockCreate}
    />
    <Resource
      name='MrpStageResource'
      options={{ label: 'Нормы расхода' }}
      list={MrpStageResourceList}
      icon={BarChartIcon}
      edit={MrpStageResourceEdit}
      create={MrpStageResourceCreate}
    />
    <Resource
      name='MrpProductStage'
      options={{ label: 'Запланированный этап' }}
      list={MrpProductStageList}
      icon={BarChartIcon}
      edit={MrpProductStageEdit}
      create={MrpProductStageCreate}
    />
    <div /** FragmentEnd */ />
  </Admin>
)

export default App
