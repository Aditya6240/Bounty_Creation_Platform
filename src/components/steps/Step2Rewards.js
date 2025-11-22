import React from "react";
import useBounty from "../../hooks/useBounty";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown";
import Toggle from "../common/Toggle";
import MultiSelectDropdown from "../common/MultiSelectDropdown";

const Step2Rewards = () => {
  const { formData, updateFormData, errors } = useBounty();

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "24px", color: "#333" }}>
        Rewards & Timeline
      </h2>

      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "#333" }}>
          Bounty Reward
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "16px",
          }}
        >
          <Dropdown
            label="Currency"
            value={formData.reward.currency}
            onChange={(val) =>
              updateFormData("reward", { ...formData.reward, currency: val })
            }
            options={["USD", "EUR", "INR", "GBP", "AUD", "CAD"]}
            placeholder="Select currency"
            required
            error={errors.currency}
          />

          <Input
            label="Total Reward Amount"
            type="number"
            value={formData.reward.amount}
            onChange={(val) =>
              updateFormData("reward", { ...formData.reward, amount: val })
            }
            placeholder="Enter amount"
            required
            error={errors.amount}
          />
        </div>

        <Input
          label="Number of Winners"
          type="number"
          value={formData.reward.winners}
          onChange={(val) =>
            updateFormData("reward", { ...formData.reward, winners: val })
          }
          placeholder="How many winners?"
          required
          error={errors.winners}
        />
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "#333" }}>
          Timeline
        </h3>

        <Input
          label="Expiration Date"
          type="date"
          value={formData.timeline.expiration_date}
          onChange={(val) =>
            updateFormData("timeline", {
              ...formData.timeline,
              expiration_date: val,
            })
          }
          required
          error={errors.expiration_date}
        />

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            fontSize: "14px",
            color: "#333",
          }}
        >
          Estimated Completion Time
        </label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <Input
            label="Days"
            type="number"
            value={formData.timeline.estimated_completion.days}
            onChange={(val) =>
              updateFormData("timeline", {
                ...formData.timeline,
                estimated_completion: {
                  ...formData.timeline.estimated_completion,
                  days: val,
                },
              })
            }
            placeholder="0"
          />
          <Input
            label="Hours"
            type="number"
            value={formData.timeline.estimated_completion.hours}
            onChange={(val) =>
              updateFormData("timeline", {
                ...formData.timeline,
                estimated_completion: {
                  ...formData.timeline.estimated_completion,
                  hours: val,
                },
              })
            }
            placeholder="0"
          />
          <Input
            label="Minutes"
            type="number"
            value={formData.timeline.estimated_completion.minutes}
            onChange={(val) =>
              updateFormData("timeline", {
                ...formData.timeline,
                estimated_completion: {
                  ...formData.timeline.estimated_completion,
                  minutes: val,
                },
              })
            }
            placeholder="0"
          />
        </div>
      </div>

      <Toggle
        label="Impact Certificate"
        value={formData.hasImpactCertificate}
        onChange={(val) => updateFormData("hasImpactCertificate", val)}
        description="Would you like to issue impact certificates for this bounty?"
      />

      {formData.hasImpactCertificate && (
        <Input
          label="Impact Brief"
          value={formData.impactBriefMessage}
          onChange={(val) => updateFormData("impactBriefMessage", val)}
          placeholder="Creating digital assets for climate-aware members"
          required
          error={errors.impactBriefMessage}
        />
      )}

      <MultiSelectDropdown
        label="SDGs (Sustainable Development Goals)"
        value={formData.sdgs}
        onChange={(val) => updateFormData("sdgs", val)}
        options={[
          "No Poverty",
          "Zero Hunger",
          "Good Health and Well-being",
          "Quality Education",
          "Gender Equality",
          "Clean Water and Sanitation",
          "Affordable and Clean Energy",
          "Decent Work and Economic Growth",
          "Industry, Innovation and Infrastructure",
          "Reduced Inequalities",
          "Sustainable Cities and Communities",
          "Responsible Consumption and Production",
          "Climate Action",
          "Life Below Water",
          "Life on Land",
          "Peace, Justice and Strong Institutions",
          "Partnerships for the Goals",
        ]}
      />
    </div>
  );
};

export default Step2Rewards;
