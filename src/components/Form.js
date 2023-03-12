import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { MdRefresh } from "react-icons/md";
import { useEffect, useState } from "react";
import { randomId } from "../utils/Random";
import InputComponent from "../common/Input";
const initialValues = {
  firstName: "",
  lastName: "",
  nationalCode: "",
  phone: "",
  email: "",
  company: "",
  confirmRandomValue: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("نام را وارد نمایید"),
  lastName: Yup.string().required(" نام خانوادگی را وارد نمایید"),
  nationalCode: Yup.number("باید عدد وارد کنید")
    .required("کد ملی را وارد کنید")
    .positive()
    .integer()
    .min(10, "کدملی حداقل  10 رقم باشد"),
  phone: Yup.string().required("شماره تلفن را وارد"),
  email: Yup.string()
    .required("ایمیل را وارد کنید")
    .email("فرمت ایمیل صحیح نیست"),
  confirmRandomValue: Yup.string().required("تصویر کد را وارد کنید"),
});
const FormComponent = () => {
  const [randomNum, setRandomNum] = useState();
  useEffect(() => {
    setRandomNum(randomId());
  }, []);
  const randomHandler = () => {
    setRandomNum(randomId());
  };
  const onSubmit = (values) => {
    console.log(formik.values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="mt-10">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center"
      >
        <h2 className="text-center text-primarycolor text-lg font-bold">
          ثبت نام
        </h2>
        <div className="flex mb-6">
          <Link href="#">
            <p className="text-linkColor">وارد شوید</p>
          </Link>
          <span>قبلا ثبت نام کردید؟</span>
        </div>
        <InputComponent
          name="firstName"
          label="نام"
          formik={formik}
          type="text"
        />
        <InputComponent
          name="lastName"
          label="نام خانوادگی "
          formik={formik}
          type="text"
        />
        <InputComponent
          name="nationalCode"
          label="کد ملی"
          formik={formik}
          type="text"
        />
        <InputComponent
          name="phone"
          label="شماره تلفن"
          formik={formik}
          type="text"
        />
        <InputComponent
          name="email"
          label="آدرس ایمیل"
          formik={formik}
          type="text"
        />
        <div className="flex flex-col mb-3">
          <label htmlFor="company" className="ml-2 text-textcolor" dir="rtl">
            نام شرکت
          </label>
          <input
            className="  outline-0  border-2 border-borderColor rounded-md py-2 w-[300px] md:w-[250px] lg:w-[396px] lg:h-[48px] px-3"
            type="text"
            name="company"
            value={formik.values.company}
            id="company"
            onChange={formik.handleChange}
          />
        </div>
        <div className="bg-blue-50 w-fit lg:w-[400px] p-6 flex flex-col items-end">
          <div className="flex items-center mb-2">
            <MdRefresh
              className="w-6 h-6 fill-buttonColor mr-2 cursor-pointer"
              onClick={randomHandler}
            />
            <input
              name="random"
              type="text"
              value={randomNum}
              className="py-2 px-3 text-lg font-bold "
            />
          </div>
          <p className="mb-2 text-gray-400">کد بالا را وارد کنید</p>
          <input
            value={formik.values.confirmRandomValue}
            type="text"
            name="email"
            className="py-2 px-3 text-lg font-bold "
            {...formik.getFieldProps("confirmRandomValue")}
          />
        </div>
        {formik.touched.confirmRandomValue &&
          formik.errors.confirmRandomValue && (
            <span className="text-red-400">
              {formik.errors.confirmRandomValue}
            </span>
          )}
        <button
          className={` mb-4 w-[300px] lg:w-[396px] lg:h-[48px] bg-buttonColor text-white rounded-md py-2 mt-4 ${
            !formik.isValid
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          disabled={!formik.isValid}
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
