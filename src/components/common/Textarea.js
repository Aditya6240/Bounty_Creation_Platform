import React from "react";

 const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  rows = 4,
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
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%",
        padding: "10px 12px",
        border: error ? "1px solid #e74c3c" : "1px solid #ddd",
        borderRadius: "6px",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
        resize: "vertical",
        fontFamily: "inherit",
      }}
    />
    {error && (
      <div style={{ color: "#e74c3c", fontSize: "12px", marginTop: "4px" }}>
        {error}
      </div>
    )}
  </div>
);


export default Textarea;