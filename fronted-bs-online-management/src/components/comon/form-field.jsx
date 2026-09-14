import React from "react";
import { Field, ErrorMessage } from "formik";
import { Form as BootstrapForm } from "react-bootstrap";

const FormField = ({
  name,
  label,
  type = "text",
  as = BootstrapForm.Control,
  options = [],
  required = false,
  placeholder = "",
  inline = false,
  rows,
  onChange,
  accept,
  maxLength,
}) => {
  return (
    <BootstrapForm.Group className="mb-3">
      {label && (
        <BootstrapForm.Label>
          {label} {required && <span className="text-danger">*</span>}
        </BootstrapForm.Label>
      )}

      {/* Handle select */}
      {type === "select" && (
        <Field name={name} as={BootstrapForm.Select}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Field>
      )}

      {/* Handle radio */}
      {type === "radio" &&
        options.map((opt) => (
          <Field
            key={opt.value}
            name={name}
            type="radio"
            value={opt.value}
            as={BootstrapForm.Check}
            inline={inline}
            label={opt.label}
          />
        ))}

      {/* Handle file */}
      {type === "file" && (
        <input
          name={name}
          type="file"
          className="form-control"
          accept={accept}
          onChange={onChange}
        />
      )}

      {/* Handle all other inputs */}
      {type !== "radio" && type !== "file" && type !== "select" && (
        <Field
          name={name}
          type={type}
          as={as}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
        />
      )}

      <ErrorMessage name={name} component="div" className="text-danger small" />
    </BootstrapForm.Group>
  );
};

export { FormField };
