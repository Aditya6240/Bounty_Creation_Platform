import React from "react";
import useBounty from "../../hooks/useBounty";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Toggle from "../common/Toggle";

const Step3Backer = () => {
  const { formData, updateFormData, errors } = useBounty();

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "#333" }}>
        Backer Information
      </h2>

      <Toggle
        label="Does the bounty have a sponsor or backer?"
        value={formData.has_backer}
        onChange={(val) => updateFormData("has_backer", val)}
        description="Select this option if you wish to display the bounty sponsor/backer's logo and name on the bounty"
      />

      {formData.has_backer && (
        <div
          style={{
            marginTop: "24px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          }}
        >
          <Input
            label="Enter sponsor or backer's name"
            value={formData.backer.name}
            onChange={(val) =>
              updateFormData("backer", { ...formData.backer, name: val })
            }
            placeholder="Sponsor or backer's full name & organization name"
            required
            error={errors.backerName}
          />

          <Input
            label="Upload sponsor or backer's logo"
            value={formData.backer.logo}
            onChange={(val) =>
              updateFormData("backer", { ...formData.backer, logo: val })
            }
            placeholder="Enter logo URL or upload file"
            required
            error={errors.backerLogo}
          />

          <Textarea
            label="Enter Sponsor Message"
            value={formData.backer.message}
            onChange={(val) =>
              updateFormData("backer", { ...formData.backer, message: val })
            }
            placeholder="Add sponsor message if any, optional"
            rows={3}
          />
        </div>
      )}
    </div>
  );
};

export default Step3Backer;
