import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import { CHANGE_THEME, ThemeName } from '../core/actions'
import { useNotify, fetchStart, fetchEnd, fetchUtils } from 'react-admin'
import { Headers } from 'node-fetch'

// const changeTheme = (theme) => ({
//   type: CHANGE_THEME,
//   payload: theme
// })

const useStyles = makeStyles({
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
})

const Dashboard = () => {
  const { fetchJson } = fetchUtils
  const fetch = fetchJson
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const classes = useStyles()
  // const redirect = useRedirect()
  const notify = useNotify()
  const [loading, setLoading] = useState(false)
  const ApiUrl = process.env.REACT_APP_API_PATH
  const token = window.localStorage.getItem('token')
  const options = { method: 'GET' }

  if (token) {
    options.headers = new Headers({ Authorization: `Bearer ${token}` })
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

  const onPlanAll = () => {
    setLoading(true)
    dispatch(fetchStart()) // start the global loading indicator
    // const updatedRecord = { ...record, is_approved: true };
    // fetch(`/comments/${record.id}`, { method: 'PUT', body: updatedRecord })
    fetch(`${ApiUrl}/mrp/plan`, options)
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
            onClick={onPlanAll}
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
    </>
  )
}

export default Dashboard
