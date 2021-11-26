import React from "react";
import ExpertRegister from "../components/ExpertRegister";
import { Stack } from "react-bootstrap";


const Register = () => {
  return (
    <>
      <Stack gap={2} className="col-md-5 mx-auto">
        <ExpertRegister />
      </Stack>
    </>
  );
};

export default Register;
