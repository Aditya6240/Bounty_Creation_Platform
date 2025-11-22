import React from "react";
import useBounty from "../../hooks/useBounty";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Dropdown from "../common/Dropdown";
import Toggle from "../common/Toggle";

const Step4Config = () => {
  const { formData, updateFormData, errors } = useBounty();

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "#333" }}>
        Configuration
      </h2>

      <Toggle
        label="Enable Auto-Approval"
        value={formData.config.autoApproval}
        onChange={(val) =>
          updateFormData("config", { ...formData.config, autoApproval: val })
        }
        description="Automatically approve submissions that meet criteria"
      />

      <Toggle
        label="Allow Multiple Submissions"
        value={formData.config.multipleSubmissions}
        onChange={(val) =>
          updateFormData("config", {
            ...formData.config,
            multipleSubmissions: val,
          })
        }
        description="Allow participants to submit multiple entries"
      />

      <Toggle
        label="Public Leaderboard"
        value={formData.config.publicLeaderboard}
        onChange={(val) =>
          updateFormData("config", {
            ...formData.config,
            publicLeaderboard: val,
          })
        }
        description="Display public leaderboard with top performers"
      />

      <Dropdown
        label="Submission Format"
        value={formData.config.submissionFormat}
        onChange={(val) =>
          updateFormData("config", {
            ...formData.config,
            submissionFormat: val,
          })
        }
        options={[
          "File Upload",
          "URL Link",
          "Text Response",
          "Video",
          "Any Format",
        ]}
        placeholder="Select submission format"
        required
        error={errors.submissionFormat}
      />

      <Input
        label="Maximum Submissions Per User"
        type="number"
        value={formData.config.maxSubmissionsPerUser}
        onChange={(val) =>
          updateFormData("config", {
            ...formData.config,
            maxSubmissionsPerUser: val,
          })
        }
        placeholder="Enter maximum number (leave empty for unlimited)"
      />

      <Textarea
        label="Additional Instructions"
        value={formData.config.additionalInstructions}
        onChange={(val) =>
          updateFormData("config", {
            ...formData.config,
            additionalInstructions: val,
          })
        }
        placeholder="Any additional instructions for participants"
        rows={4}
      />
    </div>
  );
};
export default Step4Config;
