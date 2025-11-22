import React from "react";
 const Dropdown = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
}) => (
  <div style={{ marginBottom: "20px" }}>
    <label
      style={{
        display: "block",
        marginBottom: "8px",
        fontWeight: "500",
        fontSize: "14px",
        color: "#333",
      }}
    >
      {label} {required && <span style={{ color: "#e74c3c" }}>*</span>}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "10px 12px",
        border: error ? "1px solid #e74c3c" : "1px solid #ddd",
        borderRadius: "6px",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
        backgroundColor: "white",
        cursor: "pointer",
      }}
    >
      <option value="">{placeholder || "Select an option"}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && (
      <div style={{ color: "#e74c3c", fontSize: "12px", marginTop: "4px" }}>
        {error}
      </div>
    )}
  </div>
);
export default Dropdown;
