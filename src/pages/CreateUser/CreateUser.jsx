import React, { useEffect, useState } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { DatePicker, Space } from "antd";
import { Radio, Select } from "antd";
import { http } from "../../services/config";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const CreateUser = () => {
  // SETUP NEXT PAGE STEP
  const [step, setStep] = useState(0);
  // SETUP TOASTIFY
  const notify = (event) =>
    event === "success"
      ? toast.success("Thêm thông tin thành công!!")
      : toast.error("Có Lỗi Xảy Ra, Vui Lòng Thử Lại!");

  // SETUP FORMIK
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [],
      certification: [],
    },
    onSubmit: (values) => {
      console.log(values);
      http
        .post("/users", values)
        .then((res) => {
          console.log(res);
          notify("success");
          setTimeout(() => {
            setStep((step) => step + 1);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          notify("error");
        });
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
  });
  // DATEPICKER
  // const [birthString, setBirthString] = useState("");
  const onChangeDate = (date, dateString) => {
    formik.values.birthday = `${dateString}`;
  };

  // SELECT MULTI-OPTIONS
  const [skillData, setSkill] = useState([]);
  // const [selectSkill, setSelectSkill] = useState([]);

  useEffect(() => {
    http
      .get("/skill")
      .then((res) => {
        const arr = res.data.content.map((item, index) => {
          return {
            value: item.tenSkill,
            label: item.tenSkill,
          };
        });
        setSkill(arr);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangeSkill = (value) => {
    formik.values.skill = value;
  };

  // SETUP CERTIFICATE SSTATE
  const handleChangeCer = (value) => {
    formik.values.certification = value;
  };

  // IMAGE SUBMIT
  const [imgFile, setImgFile] = useState("");
  const [sizeMessage, setSizeMessage] = useState("");

  const handleImgSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (imgFile) {
      formData.append("formFile", imgFile.imageObject);
    }
    const localData = JSON.parse(localStorage.getItem("user"));
    console.log(localData.token);

    http
      .post("/users/upload-avatar", formData, {
        headers: {
          token: localData.token,
        },
      })
      .then((res) => {
        console.log(res);
        notify("success");
        // setImgFile("");
      })
      .catch((err) => {
        console.log(err);
        notify("error");
      });
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-center text-2xl font-bold ">
        Tạo Người Dùng Trong Hệ Thống
      </h2>
      {step === 0 && (
        <form className="space-y-3" action="" onSubmit={formik.handleSubmit}>
          <InputCustom
            contentLabel={"Name"}
            placeHolder={"Nhập Tên Người Dùng"}
            type={"text"}
            name={"name"}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
          <InputCustom
            contentLabel={"Email"}
            placeHolder={"Nhập Email"}
            type={"text"}
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <InputCustom
            contentLabel={"Password"}
            placeHolder={"Nhập password"}
            type={"password"}
            name={"password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <InputCustom
            contentLabel={"Phone"}
            placeHolder={"Nhập Phone"}
            type={"text"}
            name={"phone"}
            value={formik.values.phone}
            onChange={formik.handleChange}
          />

          <div className="datepicker">
            <h3>Chọn ngày sinh</h3>
            <DatePicker
              format="DD-MM-YYYY"
              name="birthday"
              onChange={onChangeDate}
            />
          </div>

          <div className="gender">
            <h3>Chọn Giới Tính</h3>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              className="gioiTinh w-full py-2 border border-2 rounded-md"
            >
              {/* <option value="">Chọn Giới Tính</option> */}
              <option value={true}>Nam</option>
              <option value={false}>Nữ</option>
            </select>
          </div>
          <div className="role">
            <h3>Chọn Vai Trò</h3>
            <select
              value={formik.values.role}
              onChange={formik.handleChange}
              name="role"
              className="gioiTinh w-full py-2 border border-2 rounded-md"
            >
              <option value="">Chọn Vai Trò</option>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <div className="skill">
            <h3>Chọn kỸ Năng</h3>

            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Chọn Kỹ Năng"
              defaultValue={[]}
              onChange={handleChangeSkill}
              options={skillData}
            />
          </div>

          <div className="certificate">
            <h3>Chọn Bằng Cấp</h3>
            <Select
              // className="py-10"
              mode="tags"
              style={{
                width: "100%",
              }}
              placeholder="Tags Mode"
              onChange={handleChangeCer}
              options={""}
              defaultValue={[]}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-5 bg-black text-white rounded-md"
            >
              Tạo Người Dùng
            </button>
          </div>
        </form>
      )}
      {step === 1 && (
        <div>
          <h2>Upload Ảnh</h2>
          <form action="" onSubmit={handleImgSubmit}>
            <input
              onChange={(e) => {
                e.preventDefault();
                const imageObject = e.target.files[0];
                if (imageObject) {
                  if (imageObject.size > 500000) {
                    setSizeMessage("Kích thước tối đa 500kb");
                    setImgFile("");
                  } else {
                    const imgLink = URL.createObjectURL(imageObject);
                    setImgFile({ imageObject, imgLink });
                    setSizeMessage("");
                  }
                }
              }}
              className="imgInput"
              type="file"
              accept="image/*"
            />
            <img src={imgFile.imgLink} alt="" />
            <p className="text-red-500">{sizeMessage}</p>
            <div className="text-center">
              <button
                className="py-3 px-5 bg-orange-500 text-white rounded-md"
                type="submit"
              >
                Upload Ảnh
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        onClick={() => setStep((step) => step + 1)}
        className="py-2 px-3 bg-blue-500 text-white rounded-md"
      >
        Bước Tiếp Theo
      </button>
    </div>
  );
};

export default CreateUser;
