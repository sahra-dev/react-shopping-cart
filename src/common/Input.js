import { AiFillEye } from 'react-icons/ai'
import style from './style.module.css'
const Input = ({
  formik,
  name,
  placeholder,
  label,
  type = 'text',
  min = 'null',
  eye,
  changeType,
}) => {
  return (
    <div className={style.textInput}>
      <div className={style.label}>
        <label> {label} :</label>
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <span className={style.error}>{formik.errors[name]}</span>
      )}
      <div className={style.input}>
        <input
          type={type}
          name={name}
          min={min}
          {...formik.getFieldProps(name)}
          placeholder={placeholder}
          style={
            formik.touched[name] && formik.errors[name]
              ?  {border:'1px solid #f58989'} : null
          }
        />
        {eye ?  <span className={style.eyePass} onClick={() => changeType(type)}>
            <AiFillEye />
          </span> : ''}
      </div>
    </div>
  )
}

export default Input
