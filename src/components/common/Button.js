import React from "react";

 const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled,
  type = "button",
}) => {
  const styles = {
    primary: {
      backgroundColor: disabled ? "#ccc" : "#3498db",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: "white",
      color: "#333",
      border: "1px solid #ddd",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "12px 24px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
};

export default Button;