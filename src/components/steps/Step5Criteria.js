import React from "react";
import useBounty from "../../hooks/useBounty";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
// import  Toggle  from "../common/Toggle";
import Button from "../common/Button";

const Step5Criteria = () => {
  const { formData, updateFormData, errors } = useBounty();

  const addCriterion = () => {
    updateFormData("criteria", [
      ...formData.criteria,
      { id: Date.now(), name: "", description: "", weight: "" },
    ]);
  };

  const updateCriterion = (id, field, value) => {
    updateFormData(
      "criteria",
      formData.criteria.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const removeCriterion = (id) => {
    updateFormData(
      "criteria",
      formData.criteria.filter((c) => c.id !== id)
    );
  };

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "#333" }}>
        Evaluation Criteria
      </h2>
      <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
        Define the criteria that will be used to evaluate submissions for this
        bounty.
      </p>

      {formData.criteria.map((criterion, index) => (
        <div
          key={criterion.id}
          style={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            marginBottom: "16px",
            border: "1px solid #e0e0e0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h4 style={{ fontSize: "16px", color: "#333", margin: 0 }}>
              Criterion {index + 1}
            </h4>
            {formData.criteria.length > 1 && (
              <button
                onClick={() => removeCriterion(criterion.id)}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                Remove
              </button>
            )}
          </div>

          <Input
            label="Criterion Name"
            value={criterion.name}
            onChange={(val) => updateCriterion(criterion.id, "name", val)}
            placeholder="e.g., Creativity, Quality, Innovation"
            required
            error={errors[`criterion_${criterion.id}_name`]}
          />

          <Textarea
            label="Description"
            value={criterion.description}
            onChange={(val) =>
              updateCriterion(criterion.id, "description", val)
            }
            placeholder="Describe what this criterion evaluates"
            rows={3}
          />

          <Input
            label="Weight (%)"
            type="number"
            value={criterion.weight}
            onChange={(val) => updateCriterion(criterion.id, "weight", val)}
            placeholder="e.g., 25"
            error={errors[`criterion_${criterion.id}_weight`]}
          />
        </div>
      ))}

      <Button onClick={addCriterion} variant="secondary">
        + Add Another Criterion
      </Button>

      {errors.criteriaTotal && (
        <div style={{ color: "#e74c3c", fontSize: "14px", marginTop: "12px" }}>
          {errors.criteriaTotal}
        </div>
      )}
    </div>
  );
};

export default Step5Criteria;
