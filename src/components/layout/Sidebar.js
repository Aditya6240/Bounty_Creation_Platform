 const Sidebar = ({ currentStep, onStepClick, completedSteps }) => {
  const steps = [
    { id: 1, label: "Brief" },
    { id: 2, label: "Rewards" },
    { id: 3, label: "Backer" },
    { id: 4, label: "Config" },
    { id: 5, label: "Criteria" },
    { id: 6, label: "Microtasks" },
  ];

  return (
    <div
      style={{
        width: "240px",
        backgroundColor: "#f8f9fa",
        padding: "24px",
        borderRight: "1px solid #e0e0e0",
        minHeight: "100vh",
      }}
    >
      <h3
        style={{
          fontSize: "14px",
          color: "#999",
          marginBottom: "16px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Bounty Steps
      </h3>

      {steps.map((step) => {
        const isActive = currentStep === step.id;
        const isCompleted = completedSteps.includes(step.id);
        const isClickable =
          completedSteps.includes(step.id - 1) || step.id === 1;

        return (
          <div
            key={step.id}
            onClick={() => isClickable && onStepClick(step.id)}
            style={{
              marginBottom: "12px",
              cursor: isClickable ? "pointer" : "not-allowed",
              opacity: isClickable || isActive ? 1 : 0.5,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: isActive
                  ? "#3498db"
                  : isCompleted
                  ? "#e8f4f8"
                  : "transparent",
                color: isActive ? "white" : "#333",
                fontWeight: isActive ? "600" : "500",
                transition: "all 0.3s",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: isActive
                    ? "white"
                    : isCompleted
                    ? "#3498db"
                    : "#ddd",
                  color: isActive ? "#3498db" : isCompleted ? "white" : "#666",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {isCompleted ? "✓" : step.id}
              </span>
              <span style={{ fontSize: "14px" }}>{step.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
