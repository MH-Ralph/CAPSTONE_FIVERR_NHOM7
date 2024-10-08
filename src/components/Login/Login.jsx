import React, { useEffect, useState } from "react";
import "./login.scss";
import { Button, Modal } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { http } from "../../services/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  console.log("Hello: ", props.visible);
  // Check windown resize for responsive
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Kiểm tra khi mount component
    handleResize();

    window.addEventListener("resize", handleResize);

    // remove event when unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // TOASTIFY
  const notify = (input) => {
    {
      input === "success"
        ? toast.success("Bạn đã đăng nhập thành công!!")
        : toast.error("Có lỗi xảy ra, vui lòng thử lại!!");
    }
  };
  // ANT BASIC MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // SET UP FORMIK
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      http
        .post("/auth/signin", values)
        .then((res) => {
          console.log(res);
          notify("success");
          formik.resetForm();
        })
        .catch((err) => {
          console.log(err);
          notify("error");
        });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
  });

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Sign In
      </Button> */}
      <Modal
        title=""
        // open={isModalOpen}
        open={props.visible}
        onOk={handleOk}
        onCancel={props.onClose}
        width={880}
        // bodyStyle={{ height: "645px" }}
      >
        <ToastContainer />

        <div className="login_modal">
          {isVisible && (
            <div className="login_left">
              <h2 className="login_left_title">Success starts here</h2>
              <ul>
                <li>Over 700 categories</li>
                <li>Quality work done faster</li>
                <li>Access to talent and businesses across the globe</li>
              </ul>
            </div>
          )}
          <div className="login_right">
            <div className="login_right_title">
              <h2>Sign in to your account</h2>
              <p>
                Don’t have an account?{" "}
                <a>
                  <u>Join here</u>
                </a>
              </p>
            </div>
            <div className="login_form">
              <form onSubmit={formik.handleSubmit}>
                <div className="login_form_input">
                  <input
                    placeholder="Enter your email"
                    type="text"
                    name="email"
                    id="formAccount"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div style={{ color: "red", textAlign: "left" }}>
                      {formik.errors.email}
                    </div>
                  ) : null}
                  <input
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    id="formPassword"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div style={{ color: "red", textAlign: "left" }}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="login_button">
                  <button type="submit">Sign In</button>
                </div>
              </form>
            </div>
            <div className="strong">
              <strong>OR</strong>
            </div>
            <div className="login_google">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 7.844v3.463h4.844a4.107 4.107 0 0 1-1.795 2.7v2.246h2.907c1.704-1.558 2.685-3.85 2.685-6.575 0-.633-.056-1.246-.162-1.83H9v-.004Z"
                    fill="#3E82F1"
                  ></path>
                  <path
                    d="M9 14.861c-2.346 0-4.328-1.573-5.036-3.69H.956v2.323A9.008 9.008 0 0 0 9 18.42c2.432 0 4.47-.8 5.956-2.167l-2.907-2.247c-.804.538-1.835.855-3.049.855Z"
                    fill="#32A753"
                  ></path>
                  <path
                    d="M3.964 5.456H.956a8.928 8.928 0 0 0 0 8.033l3.008-2.318a5.3 5.3 0 0 1-.283-1.699 5.3 5.3 0 0 1 .283-1.699V5.456Z"
                    fill="#F9BB00"
                  ></path>
                  <path
                    d="m.956 5.456 3.008 2.317c.708-2.116 2.69-3.69 5.036-3.69 1.32 0 2.508.453 3.438 1.338l2.584-2.569C13.465 1.41 11.427.525 9 .525A9.003 9.003 0 0 0 .956 5.456Z"
                    fill="#E74133"
                  ></path>
                </svg>
              </span>
              <p>Continue with Google</p>
            </div>
            <div className="login_email">
              <span>
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.5 0H1.5C0.671562 0 0 0.671562 0 1.5V10.5C0 11.3284 0.671562 12 1.5 12H14.5C15.3284 12 16 11.3284 16 10.5V1.5C16 0.671562 15.3284 0 14.5 0ZM14.5 1.5V2.77516C13.7993 3.34575 12.6823 4.233 10.2942 6.10297C9.76787 6.51694 8.72538 7.51147 8 7.49988C7.27475 7.51159 6.23191 6.51678 5.70584 6.10297C3.31813 4.23328 2.20078 3.34584 1.5 2.77516V1.5H14.5ZM1.5 10.5V4.69994C2.21606 5.27028 3.23153 6.07063 4.77931 7.28263C5.46234 7.82028 6.6585 9.00719 8 8.99997C9.33491 9.00719 10.5159 7.8375 11.2204 7.28288C12.7682 6.07091 13.7839 5.27034 14.5 4.69997V10.5H1.5Z"></path>
                </svg>
              </span>
              <p>Continue with email/username</p>
            </div>
            <div className="strong">
              <strong>OR</strong>
            </div>
            <div className="login_bottom">
              <div className="login_apple">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 18"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                  >
                    <path d="M12.644 9.51c-.008-1.474.66-2.587 2.01-3.407-.756-1.08-1.897-1.675-3.404-1.792-1.426-.112-2.985.832-3.556.832-.602 0-1.985-.792-3.07-.792C2.384 4.388 0 6.14 0 9.703c0 1.053.193 2.14.579 3.263.514 1.474 2.37 5.09 4.307 5.03 1.012-.024 1.727-.72 3.045-.72 1.278 0 1.94.72 3.07.72 1.953-.028 3.632-3.315 4.122-4.793-2.62-1.234-2.479-3.616-2.479-3.693ZM10.37 2.913c1.097-1.302.997-2.487.964-2.913-.968.056-2.089.659-2.728 1.402-.703.796-1.117 1.78-1.028 2.89 1.048.08 2.005-.459 2.792-1.379Z"></path>
                  </svg>
                </span>
                <p>Apple</p>
              </div>
              <div className="login_facebook">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.492 19.854v-8.622H.25V7.806h3.242V5.107c0-2.933 2.012-4.529 4.95-4.529 1.408 0 2.617.094 2.967.136v3.064H9.372c-1.598 0-1.906.678-1.906 1.668v2.36h3.605l-.494 3.426H7.466v8.622"
                      fill="#1877F2"
                    ></path>
                  </svg>
                </span>
                <p>Facebook</p>
              </div>
            </div>
            <div className="login_terms">
              <p>
                By joining, you agree to the Fiverr{" "}
                <a>
                  <u>Terms of Service</u>
                </a>{" "}
                and to occasionally receive emails from us. Please read our{" "}
                <a>
                  <u>Privacy Policy</u>
                </a>{" "}
                to learn how we use your personal data.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
