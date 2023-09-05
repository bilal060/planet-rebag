import React from "react";
import { ErrorMessage, useField } from "formik";

import "../assets/css/text-field.css";

import PropTypes from "prop-types";

const TextField = ({ righticon, icon, margin, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <div className="mb-3 w-100">
        <div className={`field-container ${margin}`}>
          <div className="d-flex align-items-center">
            {icon}

            <input
              className={`form-control custom-field shadow-none p-0 ${
                meta.touched && meta.error && "is-invalid"
              } `}
              {...field}
              {...props}
              autoComplete="off"
            />
            {righticon}
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <ErrorMessage
            component="small"
            name={field.name}
            className="text-danger fw-bold mt-1"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
TextField.propTypes = {
  righticon: PropTypes.any,
  icon: PropTypes.any,
  margin: PropTypes.any,
};

export default TextField;
