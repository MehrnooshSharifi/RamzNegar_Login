const InputComponent = ({formik, label, type, name }) => {
    return ( 
        <div className="flex flex-col mb-3">
          <label htmlFor="phone" className="ml-2 text-textcolor" dir="rtl">
             {label}
            <span className="text-red-600">*</span>
          </label>
          <input
            className="  outline-0  border-2 border-borderColor rounded-md py-2 w-[300px] md:w-[250px] lg:w-[396px] lg:h-[48px] px-3"
            type={type}
            name={name}
            {...formik.getFieldProps(name)}
            id={name}
          />
          {formik.touched[name] && formik.errors[name] && (
            <span className="text-red-400">{formik.errors[name]}</span>
          )}
        </div>
     );
}
 
export default InputComponent;