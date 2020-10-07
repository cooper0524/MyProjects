import React, { useState } from "react";
import CustomField from "../common/CustomField";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { auth } from "../services/firebase";
import * as Yup from "yup";

import useFetchUser from "../customHook/useFetchUser";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const authUser = useFetchUser();

  function handleSignIn() {
    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        console.log(errorMessage);
      }
    });
  }

  // const forgotPassword = (email) => {
  //   auth.sendPasswordResetEmail(email).then(() => {
  //     setEmailHasBeenSent(true);
  //     setTimeout(() => {
  //       setEmailHasBeenSent(false);
  //     }, 3000);
  //     alert("郵件已寄出，請至郵箱確認");
  //   });
  // };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("First Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required(" Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    email: email,
    password: password,
  };

  return (
    <div id="form">
      {authUser && <Redirect to="/" />}
      <h1 id="formTitle">會員登入</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <CustomField
              label="郵件"
              name="email"
              type="email"
              errors={errors.email}
              touched={touched.email}
              onKeyUp={(e) => {
                setEmail(e.target.value);
              }}
            />
            <CustomField
              label="密碼"
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
              onKeyUp={(e) => {
                setPassword(e.target.value);
              }}
            />

            <p>暫未開放一般會員註冊，敬請見諒</p>

            <div className="form-group mt-4 d-flex justify-content-center">
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary m-auto"
                onClick={handleSignIn}
              >
                登入
              </button>

              {/* <button
                className="btn btn-primary"
                type="button"
                onClick={forgotPassword(email)}
              >
                忘記密碼
              </button> */}

              <Link className="m-auto" to="/註冊">
                <button className="btn btn-primary " disabled>
                  註冊
                </button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
