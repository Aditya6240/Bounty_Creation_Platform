 const Input = ({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  required,
  type = "text",
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
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      style={{
        width: "100%",
        padding: "10px 12px",
        border: error ? "1px solid #e74c3c" : "1px solid #ddd",
        borderRadius: "6px",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
      }}
    />
    {maxLength && (
      <div
        style={{
          textAlign: "right",
          fontSize: "12px",
          color: "#999",
          marginTop: "4px",
        }}
      >
        {value.length}/{maxLength}
      </div>
    )}
    {error && (
      <div style={{ color: "#e74c3c", fontSize: "12px", marginTop: "4px" }}>
        {error}
      </div>
    )}
  </div>
);

export default Input;