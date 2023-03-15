import React from "react";
import "./Input.css";

export default function Input({
  label,
  type,
  value,
  handleChange,
  error,
  showErrors,
}) {
  return (
    <>
      <div className="input-container">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <input
          id={label}
          type={type}
          className="input"
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        {showErrors && error && <p className="error">{error}</p>}
      </div>
    </>
  );
}
