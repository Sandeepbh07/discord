import React from "react";
import InputWithLabel from "../../components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUserName, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUserName}
        label="Username"
        type="text"
        placeholder="Enter username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="text"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInputs;
