import React from "react";
 const RadioGroup = ({ label, value, onChange, options, required }) => (
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
    <div style={{ display: "flex", gap: "20px" }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            style={{ marginRight: "8px", cursor: "pointer" }}
          />
          <span style={{ fontSize: "14px" }}>{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);


export default RadioGroup;