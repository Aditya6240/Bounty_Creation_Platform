import React from "react";

 const Toggle = ({ label, value, onChange, description }) => (
  <div style={{ marginBottom: "20px" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <label
          style={{
            display: "block",
            fontWeight: "500",
            fontSize: "14px",
            color: "#333",
            marginBottom: "4px",
          }}
        >
          {label}
        </label>
        {description && (
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            {description}
          </p>
        )}
      </div>
      <div
        onClick={() => onChange(!value)}
        style={{
          width: "50px",
          height: "26px",
          backgroundColor: value ? "#3498db" : "#ccc",
          borderRadius: "13px",
          position: "relative",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            backgroundColor: "white",
            borderRadius: "50%",
            position: "absolute",
            top: "2px",
            left: value ? "26px" : "2px",
            transition: "left 0.3s",
          }}
        />
      </div>
    </div>
  </div>
);

export default Toggle;