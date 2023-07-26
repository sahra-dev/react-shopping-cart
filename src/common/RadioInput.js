import style from './style.module.css'

const InputRadio = ({ formik, name, options, label }) => {
  return (
    <div className={style.InputRadio}>
      <div className={style.label}>
        <label>{label} :</label>
      {formik.errors[name] && formik.touched[name] && (
        <div className={style.error}>{formik.errors[name]}</div>
      )}
      </div>
      {options.map((item) => (
        <div className={style.radioOption} key={item.value}>
          <label htmlFor={item.value} className={style.formControl}>
            <input
              type="radio"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name] === item.value}
            />
            {item.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default InputRadio
