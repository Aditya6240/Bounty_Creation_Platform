import React from "react";
import  useBounty  from "../../hooks/useBounty";
import  Input  from "../common/Input";
import  Textarea  from "../common/Textarea";
import  Dropdown  from "../common/Dropdown";
import  RadioGroup from "../common/RadioGroup";

 const Step1BasicDetails = () => {
  const { formData, updateFormData, errors } = useBounty();

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "#333" }}>
        Basic Details
      </h2>

      <Input
        label="Bounty Title"
        value={formData.title}
        onChange={(val) => updateFormData("title", val)}
        placeholder="Enter bounty title"
        maxLength={40}
        required
        error={errors.title}
      />

      <Textarea
        label="Bounty Description"
        value={formData.description}
        onChange={(val) => updateFormData("description", val)}
        placeholder="Briefly describe what the bounty does"
        required
        error={errors.description}
      />

      <Input
        label="Project Title"
        value={formData.projectTitle}
        onChange={(val) => updateFormData("projectTitle", val)}
        placeholder="Choose a project to link the bounty"
      />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
      >
        <Dropdown
          label="Bounty Type"
          value={formData.type}
          onChange={(val) => updateFormData("type", val)}
          options={["Content", "Design", "Development", "Marketing", "Other"]}
          placeholder="Choose category"
          required
          error={errors.type}
        />

        <Dropdown
          label="Dominant Impact Core"
          value={formData.dominant_core}
          onChange={(val) => updateFormData("dominant_core", val)}
          options={["Water", "Earth", "Social", "Energy"]}
          placeholder="Choose core"
          required
          error={errors.dominant_core}
        />
      </div>

      <RadioGroup
        label="Bounty Mode"
        value={formData.mode}
        onChange={(val) => updateFormData("mode", val)}
        options={[
          { value: "digital", label: "Digital Bounty" },
          { value: "physical", label: "Physical Bounty" },
        ]}
        required
      />

      {formData.mode === "physical" && (
        <Input
          label="Enter Location"
          value={formData.location}
          onChange={(val) => updateFormData("location", val)}
          placeholder="City/Town where the bounty is live"
          required
          error={errors.location}
        />
      )}
    </div>
  );
};


export default Step1BasicDetails;