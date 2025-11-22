import React, { useState } from "react";

const MultiSelectDropdown = ({
  label,
  value,
  onChange,
  options,
  required,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    const newValue = value.includes(option)
      ? value.filter((v) => v !== option)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <div style={{ marginBottom: "20px", position: "relative" }}>
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
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: error ? "1px solid #e74c3c" : "1px solid #ddd",
          borderRadius: "6px",
          fontSize: "14px",
          backgroundColor: "white",
          cursor: "pointer",
          boxSizing: "border-box",
        }}
      >
        {value.length > 0 ? `${value.length} SDGs selected` : "Select SDGs"}
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginTop: "4px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1000,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {options.map((option) => (
            <label
              key={option}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => toggleOption(option)}
                style={{ marginRight: "8px", cursor: "pointer" }}
              />
              <span style={{ fontSize: "14px" }}>{option}</span>
            </label>
          ))}
        </div>
      )}
      {error && (
        <div style={{ color: "#e74c3c", fontSize: "12px", marginTop: "4px" }}>
          {error}
        </div>
      )}
    </div>
  );
};
export default MultiSelectDropdown;