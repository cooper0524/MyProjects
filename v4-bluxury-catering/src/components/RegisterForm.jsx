import React, { useState } from "react";
import CustomField from "../common/CustomField";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import firebase, { auth } from "../services/firebase";
import * as Yup from "yup";
import useFetchUser from "../customHook/useFetchUser";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const authUser = useFetchUser();

  function handleSignUp() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        //Once the user creation has happened successfully, we can add the currentUser into firestore
        //with the appropriate details.
        firebase
          .firestore()
          .collection("users")
          .doc(auth.currentUser.uid)
          .set({
            email: email,
            password: password,
            username: username,
            admin: false,
          })
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch((error) => {
            console.log(
              "Something went wrong with added user to firestore: ",
              error
            );
          });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          console.log(errorMessage);
        }

        // [END_EXCLUDE]
      });
    // [END createwithemail]
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  return (
    <div id="form">
      {authUser && <Redirect to="/" />}
      <h1 id="formTitle">會員註冊</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <CustomField
              label="名稱"
              name="username"
              type="text"
              errors={errors.username}
              touched={touched.username}
              onKeyUp={(e) => {
                setUsername(e.target.value);
              }}
            />
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
            <CustomField
              label="確認密碼"
              name="confirmPassword"
              type="password"
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
              onKeyUp={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />

            <div className="form-group mt-2">
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary mt-2"
                onClick={handleSignUp}
              >
                確認送出
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
