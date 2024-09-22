import React from "react";
import registerAnimation from "../../assets/animation/registerAnimation.json";
import { useLottie } from "lottie-react";
import FormRegister from "../../components/FormRegister/FormRegister";

const RegisterPage = () => {
  const options = {
    animationData: registerAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="register py-5 px-4">
      <div className="container flex items-center">
        <div className="w-1/2 h-screen pr-4">{View}</div>
        <div className="w-1/2 pl-4">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
