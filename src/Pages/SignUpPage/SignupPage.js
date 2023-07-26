import Layout from '../../components/Layout/Layout'
import style from './Signup.module.css'
import Input from '../../common/Input'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import InputRadio from '../../common/RadioInput'

const initialValues = {
  firstName: '',
  lastName: '',
  gender: '',
  userName: '',
  phoneNumber: '',
  email: '',
  password: '',
  passwordConfrim: '',
}
const genderOption = [
  { label: 'مرد', value: '0' },
  { label: 'زن', value: '1' },
]
const validationSchema = Yup.object({
  firstName: Yup.string().required('الزامی'),
  lastName: Yup.string().required('الزامی'),
  gender: Yup.string().required('الزامی'),
  userName: Yup.string()
    .required('الزامی')
    .matches(/^[A-Za-z0-9]+$/, 'غیرقابل قبول'),
  phoneNumber: Yup.string()
    .required('الزامی')
    .matches(/^[0-9]{11}$/, 'غیرقابل قبول'),
  email: Yup.string().required('الزامی'),
  password: Yup.string()
    .required('الزامی')
    .matches(/^[a-zA-Z0-9]+$/, 'غیرقابل قبول'),
  passwordConfrim: Yup.string()
    .required('الزامی')
    .oneOf([Yup.ref('password'), null], 'اشتباه وارد کردید'),
})
const SignUpPage = () => {
  const [passtype, setPassType] = useState('password')
  const changeType = (e) => {
    if (e === 'password') setPassType('text')
    if (e === 'text') setPassType('password')
  }
  const onSubmit = (e) => {
    console.log(e)
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount:true 
  })
  return (
    <Layout>
      <div className={style.signupBody}>
        <h2> ثبت نام</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            label="نام"
            name="firstName"
            placeholder="نام خود را وارد کنید"
            style={style}
          />
          <Input
            formik={formik}
            label="نام خانوادگی"
            name="lastName"
            placeholder="نام خانوادگی خود را وارد کنید"
            style={style}
          />
          <InputRadio
            formik={formik}
            name="gender"
            options={genderOption}
            label="جنسیت"
          />
          <Input
            formik={formik}
            label="نام کاربری"
            name="userName"
            placeholder="نام کاربری برای خود بسازید"
            style={style}
          />
          <Input
            formik={formik}
            label="تلفن همراه"
            name="phoneNumber"
            placeholder="شماره خودا را وارد کنید"
            style={style}
            type="tel"
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
            label="رمز عبور"
            name="password"
            style={style}
            placeholder="●●●●●●●●●"
            eye={true}
            changeType={changeType}
          />
          <Input
            formik={formik}
            type="password"
            label="تایید رمز عبور"
            name="passwordConfrim"
            style={style}
            placeholder="●●●●●●●●●"
          />
          <button
            disabled={!formik.isValid}
            type="submit"
            className={style.signupBtn}
          >
            ثبت نام
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default SignUpPage
