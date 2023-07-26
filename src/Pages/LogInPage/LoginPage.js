import { useFormik } from 'formik'
import Input from '../../common/Input'
import Layout from '../../components/Layout/Layout'
import style from './loginPage.module.css'
import { useState } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const initialValues = {
  userName: '',
  password: '',
  email: '',
}
const validationSchema = Yup.object({
  userName: Yup.string()
    .required('الزامی')
    .matches(/^[A-Za-z0-9]+$/, 'غیرقابل قبول'),
  password: Yup.string().required('الزامی'),
  email: Yup.string().required('الزامی'),
})
const onSubmit = (e) => {
  console.log(e)
}

const LoginPage = () => {
  const [passtype, setPassType] = useState('password')
  const changeType = (e) => {
    if (e === 'password') setPassType('text')
    if (e === 'text') setPassType('password')
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  })
  return (
    <Layout>
      <div className={style.loginContainer}>
        <h2> وارد حساب کاربری خود شوید</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            label="نام کاربری"
            name="userName"
            placeholder="نام کاربری خود را وارد کنید"
            style={style}
          />
          <Input
            formik={formik}
            type="email"
            name="email"
            label="ایمیل"
            placeholder="example@ex.com"
            style={style}
          />
          <Input
            formik={formik}
            type={passtype}
            label="رمز ورور"
            name="password"
            style={style}
            placeholder="●●●●●●●●●"
            eye={true}
            changeType={changeType}
          />
          <button
            type="submit"
            className={style.loginBtn}
            disabled={!formik.isValid}
          >
            ورود
          </button>
          <Link to="/signup">حساب کاربری ندارید؟ لطفا اینجا کلیک کنید</Link>
        </form>
      </div>
    </Layout>
  )
}

export default LoginPage
