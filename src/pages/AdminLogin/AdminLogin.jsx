import React, { useContext } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputCustom from "../../components/Input/InputCustom";
import * as yup from "yup";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { pathDefault } from "../../common/pathDefault";
import { setValueUser } from "../../redux/authSlice";
import signInAnimation from "../../assets/animation/login.json";
import { useLottie } from "lottie-react";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleNotifycation } = useContext(NotificationContext);

  const options = {
    animationData: signInAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        authService
          .signIn(values)
          .then((res) => {
            console.log(res);

            if (res.data.content.user.role === "USER") {
              // Thong bao nguoi dung khong duoc phep truy cap
              handleNotifycation("Bạn không được phép truy cập", "error");
              let viPham = getLocalStorage("viPham");
              if (!viPham) {
                setLocalStorage("viPham", 1);
              } else {
                viPham++;
                viPham === 3
                  ? (window.location.href = "https://google.com")
                  : setLocalStorage("viPham", viPham);
              }
            } else {
              setLocalStorage("user", res.data.content);
              dispatch(setValueUser(res.data.content));

              localStorage.removeItem("viPham");
              navigate(pathDefault.admin);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // validationSchema: yup.object({
      //   email: yup
      //     .string()
      //     .required("Vui long khong bo trong truong nay ")
      //     .email("Truong nay phai la email"),
      //   password: yup
      //     .string()
      //     .required("Vui long khong bo trong truong nay ")
      //     .matches(
      //       /^(?=.*[A-Z])(?=.*\d).+$/,
      //       "Vui lòng nhập ít nhất 1 chữ cái viết hoa và số"
      //     ),
      // }),
    });

  return (
    <div className="px-8">
      <div className="container">
        <div className="admin_login flex max-md:justify-center max-md:items-center h-screen">
          <div className="admin_login_animation hidden md:block md:w-1/2 flex-1 ">
            {View}
          </div>
          <div className="admin_login_form w-1/2 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h1 className="text-3xl font-bold text-center text-red-500">
                Trang đăng nhập cho admin
              </h1>
              <InputCustom
                contentLabel={"Email"}
                name={"email"}
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                onBlur={handleBlur}
              />
              <InputCustom
                contentLabel={"Password"}
                type="password"
                name={"password"}
                value={values.password}
                error={errors.password}
                touched={touched.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <div>
                <button
                  type="submit"
                  className="py-2 px-5 bg-black text-white rounded-lg w-full"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
