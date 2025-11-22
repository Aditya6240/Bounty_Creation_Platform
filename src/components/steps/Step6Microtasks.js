import React from "react";
import useBounty from "../../hooks/useBounty";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Toggle from "../common/Toggle";
import Button from "../common/Button";

const Step6Microtasks = () => {
  const { formData, updateFormData, errors } = useBounty();

  const addMicrotask = () => {
    updateFormData("microtasks", [
      ...formData.microtasks,
      { id: Date.now(), title: "", description: "", points: "" },
    ]);
  };

  const updateMicrotask = (id, field, value) => {
    updateFormData(
      "microtasks",
      formData.microtasks.map((m) =>
        m.id === id ? { ...m, [field]: value } : m
      )
    );
  };

  const removeMicrotask = (id) => {
    updateFormData(
      "microtasks",
      formData.microtasks.filter((m) => m.id !== id)
    );
  };

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "#333" }}>
        Microtasks
      </h2>
      <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
        Break down the bounty into smaller, manageable tasks. Each microtask can
        have its own point value.
      </p>

      <Toggle
        label="Enable Microtasks"
        value={formData.hasMicrotasks}
        onChange={(val) => updateFormData("hasMicrotasks", val)}
        description="Break down the bounty into smaller tasks"
      />

      {formData.hasMicrotasks && (
        <>
          {formData.microtasks.map((task, index) => (
            <div
              key={task.id}
              style={{
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                marginBottom: "16px",
                marginTop: "16px",
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
                  Microtask {index + 1}
                </h4>
                {formData.microtasks.length > 1 && (
                  <button
                    onClick={() => removeMicrotask(task.id)}
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
                label="Task Title"
                value={task.title}
                onChange={(val) => updateMicrotask(task.id, "title", val)}
                placeholder="e.g., Design Logo, Write Content"
                required
                error={errors[`microtask_${task.id}_title`]}
              />

              <Textarea
                label="Task Description"
                value={task.description}
                onChange={(val) => updateMicrotask(task.id, "description", val)}
                placeholder="Describe what needs to be done"
                rows={3}
              />

              <Input
                label="Points/Reward"
                type="number"
                value={task.points}
                onChange={(val) => updateMicrotask(task.id, "points", val)}
                placeholder="Points for completing this task"
              />
            </div>
          ))}

          <Button onClick={addMicrotask} variant="secondary">
            + Add Another Microtask
          </Button>
        </>
      )}

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          backgroundColor: "#f0f8ff",
          borderRadius: "8px",
          border: "1px solid #d0e8ff",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={formData.terms_accepted}
            onChange={(e) => updateFormData("terms_accepted", e.target.checked)}
            style={{ marginRight: "12px", marginTop: "4px", cursor: "pointer" }}
          />
          <span style={{ fontSize: "14px", color: "#333" }}>
            I accept the{" "}
            <a
              href="#"
              style={{ color: "#3498db", textDecoration: "underline" }}
            >
              Terms & Conditions
            </a>{" "}
            and confirm that all information provided is accurate.
          </span>
        </label>
        {errors.terms && (
          <div
            style={{
              color: "#e74c3c",
              fontSize: "12px",
              marginTop: "8px",
              marginLeft: "28px",
            }}
          >
            {errors.terms}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step6Microtasks;
