import React from "react";
import { Field, ErrorMessage } from "formik";

const CustomField = ({
  label,
  name,
  type,
  errors,
  touched,
  onKeyUp,
  placeholder,
  component,
}) => {
  return (
    <div className="form-group text-left">
      <label htmlFor={name}>{label}</label>
      <Field
        component={component}
        name={name}
        type={type}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        className={"form-control" + (errors && touched ? " is-invalid" : "")}
      />

      <ErrorMessage name={name} component="div" className="invalid-feedback" />
    </div>
  );
};

export default CustomField;
