import React, { useContext } from "react";
import { NotificationContext } from "../../App";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { authService } from "../../services/auth.service";
import { notiValidation as notify } from "../../common/notiValidation";
import * as yup from "yup";
import InputCustom from "../Input/InputCustom";
import { DatePicker } from "antd";
import { pathDefault } from "../../common/pathDefault";

const FormRegister = () => {
  // Context
  const toastValue = useContext(NotificationContext);
  // Navigate
  const navigate = useNavigate();

  // Formik
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log("Dữ liệu đăng kí: ", values);
      const data = { ...values, gender: values.gender == "Nam" ? true : false };

      //   Call API
      authService
        .signUp(data)
        .then((res) => {
          console.log("response Signup: ", res);
          // Toast
          toastValue.handleNotifycation("Tạo tài khoản thành công", "success");
          // Navigate
          setTimeout(() => {
            navigate(pathDefault.homePage);
          }, 2000);
        })
        .catch((err) => {
          console.log("error Signup: ", err);
          toastValue.handleNotifycation(err.response.data.content, "error");
        });
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required(notify.emty)
        .matches(/^[A-Za-zÀ-ỹà-ỹ\s]+$/, notify.letter),
      email: yup.string().required(notify.emty).email(notify.email),
      password: yup
        .string()
        .required(notify.emty)
        .matches(
          /^(?=.*[A-Z])(?=.*\d).+$/,
          "Vui lòng nhập ít nhất 1 chữ cái viết hoa và số"
        ),
      phone: yup
        .string()
        .required(notify.emty)
        .matches(
          /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
          "Vui lòng nhập đúng số điện thoại"
        ),
      birthday: yup.string().required(notify.emty),
      gender: yup.string().required(notify.emty),
    }),
  });
  return (
    <div>
      <h1 className="text-center text-[24px] font-medium">Form Đăng kí</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <InputCustom
            contentLabel="Họ tên"
            name="name"
            placeHolder="Vui lòng nhập tên"
            classWrapper="w-1/2 p-3"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            touched={touched.name}
            error={errors.name}
          />

          <InputCustom
            contentLabel="Email"
            name="email"
            placeHolder="Vui lòng nhập email"
            classWrapper="w-1/2 p-3"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
          />
        </div>

        <InputCustom
          contentLabel="Mật khẩu"
          name="password"
          placeHolder="Vui lòng nhập password"
          type="password"
          classWrapper="w-full p-3"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          touched={touched.password}
          error={errors.password}
        />

        <div className="flex items-center">
          <InputCustom
            contentLabel="Phone"
            name="phone"
            placeHolder="Vui lòng nhập số điện thoại"
            classWrapper="w-1/3 p-3"
            onChange={handleChange}
            value={values.phone}
            onBlur={handleBlur}
            touched={touched.phone}
            error={errors.phone}
          />

          <div className="w-1/3 p-3">
            <h2 className="block mb-2 text-sm font-medium text-gray-900">
              Ngày sinh
            </h2>
            <DatePicker
              className="w-full"
              format={"DD-MM-YYYY"}
              onChange={(dayjs, dateString) => {
                setFieldValue("birthday", dateString);
              }}
            />

            {errors.birthday && touched.birthday ? (
              <p className="text-red-500">{errors.birthday}</p>
            ) : null}
          </div>

          <div className="w-1/3 p-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Giới tính
              </label>
              <select
                name="gender"
                onChange={handleChange}
                value={values.gender}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="">Vui lòng chọn giới tính</option>
                <option value="Name">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>

              {errors.gender && touched.gender ? (
                <p className="text-red-500">{errors.gender}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-full p-3">
          <button
            type="submit"
            className="py-3 px-6 bg-black text-white rounded-md w-full hover:opacity-90"
          >
            Đăng kí
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
