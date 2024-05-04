import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
// import { CHANGE_THEME, ThemeName } from '../core/actions'
import {
  useNotify, fetchStart, fetchEnd, fetchUtils,
  Loading
} from 'react-admin'
import { Headers } from 'node-fetch'

// const changeTheme = (theme) => ({
//   type: CHANGE_THEME,
//   payload: theme
// })

const DEF_FOLDER = '(Основной)'
const ApiUrl = process.env.REACT_APP_API_PATH
const { fetchJson } = fetchUtils
const fetch = fetchJson

const useStyles = makeStyles({
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
})

const Dashboard = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const classes = useStyles()
  // const redirect = useRedirect()
  const notify = useNotify()
  const [loading, setLoading] = useState(false)
  const token = window.localStorage.getItem('token')
  const options = { method: 'GET' }
  const [folder, setFolder] = useState('(Основной)')

  if (token) {
    options.headers = new Headers({ Authorization: `Bearer ${token}` })
  }

  const VariantFolders = () => {
  // const dataProvider = useDataProvider()
    const [variantFolders, setVariantFolders] = useState()
    // const [folder, setFolder] = useState(DEF_FOLDER)
    // const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
      fetch(`${ApiUrl}/seed/variant-folders`)
      // dataProvider.getMany('/seed/variant-folders')
        .then((ret) => {
          console.log('data get')
          console.log(`data: ${JSON.stringify(ret.json)}`)
          setVariantFolders(ret.json)
          setLoading(false)
        })
        .catch(error => {
          console.log(`error: ${JSON.stringify(error)}`)
          setError(error)
          setLoading(false)
        })
    }, [])

    const handleChange = (event) => {
      setFolder(event.target.value)
    }

    if (loading) return <Loading />
    if (error) return <p>ERROR: {JSON.stringify(error)} </p>
    if (!variantFolders || !Array.isArray(variantFolders)) return null

    return (
      <Select
        labelId='folder-select'
        id='folder-select'
        value={folder}
        onChange={handleChange}
      >
        <MenuItem key='none' value={DEF_FOLDER}>{DEF_FOLDER}</MenuItem>
        {variantFolders.map(aFolder =>
          <MenuItem key={aFolder} value={aFolder}>{aFolder}</MenuItem>
        )}
      </Select>
    )
  }

  const onReports = () => {
    setLoading(true)
    dispatch(fetchStart()) // start the global loading indicator
    // const updatedRecord = { ...record, is_approved: true };
    // fetch(`/comments/${record.id}`, { method: 'PUT', body: updatedRecord })
    fetch(`${ApiUrl}/mrp/reports/all`, options)
      .then(() => {
        notify('XLSX отчеты сформированы')
        // redirect('/comments')
      })
      .catch((e) => {
        notify(`Ошибка: отчеты не сформированы (${JSON.stringify(e)})`, { type: 'error' })
      })
      .finally(() => {
        setLoading(false)
        dispatch(fetchEnd()) // stop the global loading indicator
      })
  }

  const onPlanAll = (aFolder) => {
    console.log(`current folder is ${aFolder}`)
    let params = ''
    if (aFolder !== DEF_FOLDER) params = `?version=${aFolder}`
    console.log(`params=${params}`)
    setLoading(true)
    dispatch(fetchStart()) // start the global loading indicator
    // const updatedRecord = { ...record, is_approved: true };
    // fetch(`/comments/${record.id}`, { method: 'PUT', body: updatedRecord })
    fetch(`${ApiUrl}/mrp/plan${params}`, options)
      .then(() => {
        notify('Планирование выполнено')
        // redirect('/comments')
      })
      .catch((e) => {
        notify(`Ошибка при выполнении планирования (${JSON.stringify(e)})`, { type: 'error' })
      })
      .finally(() => {
        setLoading(false)
        dispatch(fetchEnd()) // stop the global loading indicator
      })
  }

  return (
    <>
      {/* <Card> */}
      {/*  <CardHeader title='Welcome to APP!' /> */}
      {/*  <CardContent> */}
      {/*    <div className={classes.label}> */}
      {/*      Theme: */}
      {/*    </div> */}
      {/*    <Button */}
      {/*      variant='contained' */}
      {/*      className={classes.button} */}
      {/*      color={theme === 'light' ? 'primary' : 'default'} */}
      {/*      onClick={() => dispatch(changeTheme(ThemeName.light))} */}
      {/*    > */}
      {/*      Light */}
      {/*    </Button> */}
      {/*    <Button */}
      {/*      variant='contained' */}
      {/*      className={classes.button} */}
      {/*      color={theme === 'dark' ? 'primary' : 'default'} */}
      {/*      onClick={() => dispatch(changeTheme(ThemeName.dark))} */}
      {/*    > */}
      {/*      Dark */}
      {/*    </Button> */}
      {/*  </CardContent> */}
      {/* </Card> */}
      <Card>
        <CardHeader title='MRP планирование:' />
        <CardContent>
          <Button
            variant='contained'
            className={classes.button}
            color={theme === 'light' ? 'primary' : 'default'}
            onClick={() => onPlanAll(folder)}
            disabled={loading}
          >
          Планировать
          </Button>
          <Button
            variant='contained'
            className={classes.button}
            color={theme === 'dark' ? 'primary' : 'default'}
            onClick={onReports}
            disabled={loading}
          >
          XLSX отчеты
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title='Вариант данных:' />
        <CardContent>
          <VariantFolders />
        </CardContent>
      </Card>
    </>
  )
}

export default Dashboard
