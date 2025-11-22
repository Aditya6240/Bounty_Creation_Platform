 const ProgressIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: step <= currentStep ? "#3498db" : "#e0e0e0",
              color: step <= currentStep ? "white" : "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProgressIndicator;