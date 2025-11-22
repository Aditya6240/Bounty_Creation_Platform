import React from "react";
import { useState } from "react";
import ResultsPage from "./components/screens/ResultsPage";
import  Sidebar  from "./components/layout/Sidebar";
import Step1BasicDetails from "./components/steps/Step1BasicDetails";
import  Step3Backer  from "./components/steps/Step3Backer";
import Step2Rewards from "./components/steps/Step2Rewards";
import Step4Config from "./components/steps/Step4Config";
import Step5Criteria from "./components/steps/Step5Criteria";
import Step6Microtasks from "./components/steps/Step6Microtasks";
import  ProgressIndicator  from "./components/layout/ProgressIndicator";
import ConfirmationScreen from "./components/screens/ConfirmationScreen";
import { BountyContext } from "./context/BountyContext";
import  Button  from "./components/common/Button";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    projectTitle: "",
    type: "",
    dominant_core: "",
    mode: "digital",
    location: "",
    reward: {
      currency: "",
      amount: "",
      winners: "",
    },
    timeline: {
      expiration_date: "",
      estimated_completion: {
        days: "",
        hours: "",
        minutes: "",
      },
    },
    hasImpactCertificate: false,
    impactBriefMessage: "",
    sdgs: [],
    has_backer: false,
    backer: {
      name: "",
      logo: "",
      message: "",
    },
    config: {
      autoApproval: false,
      multipleSubmissions: false,
      publicLeaderboard: false,
      submissionFormat: "",
      maxSubmissionsPerUser: "",
      additionalInstructions: "",
    },
    criteria: [{ id: Date.now(), name: "", description: "", weight: "" }],
    hasMicrotasks: false,
    microtasks: [{ id: Date.now(), title: "", description: "", points: "" }],
    terms_accepted: false,
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[key];
        return newErrors;
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.title) newErrors.title = "Title is required";
      if (!formData.description)
        newErrors.description = "Description is required";
      if (!formData.type) newErrors.type = "Bounty Type is required";
      if (!formData.dominant_core)
        newErrors.dominant_core = "Dominant Impact Core is required";
      if (formData.mode === "physical" && !formData.location) {
        newErrors.location = "Location is required for physical bounties";
      }
    } else if (step === 2) {
      if (!formData.reward.currency)
        newErrors.currency = "Currency is required";
      if (!formData.reward.amount || formData.reward.amount <= 0) {
        newErrors.amount = "Amount must be greater than 0";
      }
      if (!formData.reward.winners || formData.reward.winners <= 0) {
        newErrors.winners = "Number of winners must be greater than 0";
      }
      if (!formData.timeline.expiration_date) {
        newErrors.expiration_date = "Expiration date is required";
      }
      if (formData.hasImpactCertificate && !formData.impactBriefMessage) {
        newErrors.impactBriefMessage =
          "Impact Brief is required when certificate is enabled";
      }
    } else if (step === 3) {
      if (formData.has_backer) {
        if (!formData.backer.name)
          newErrors.backerName = "Backer name is required";
        if (!formData.backer.logo)
          newErrors.backerLogo = "Backer logo is required";
      }
    } else if (step === 4) {
      if (!formData.config.submissionFormat) {
        newErrors.submissionFormat = "Submission format is required";
      }
    } else if (step === 5) {
      formData.criteria.forEach((criterion) => {
        if (!criterion.name) {
          newErrors[`criterion_${criterion.id}_name`] =
            "Criterion name is required";
        }
        if (
          criterion.weight &&
          (criterion.weight < 0 || criterion.weight > 100)
        ) {
          newErrors[`criterion_${criterion.id}_weight`] =
            "Weight must be between 0 and 100";
        }
      });

      const totalWeight = formData.criteria.reduce(
        (sum, c) => sum + (Number(c.weight) || 0),
        0
      );
      if (totalWeight > 100) {
        newErrors.criteriaTotal = "Total weight cannot exceed 100%";
      }
    } else if (step === 6) {
      if (formData.hasMicrotasks) {
        formData.microtasks.forEach((task) => {
          if (!task.title) {
            newErrors[`microtask_${task.id}_title`] = "Task title is required";
          }
        });
      }
      if (!formData.terms_accepted) {
        newErrors.terms = "You must accept the terms and conditions";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }

      if (currentStep < 6) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleStepClick = (step) => {
    if (
      completedSteps.includes(step - 1) ||
      step === 1 ||
      step <= currentStep
    ) {
      setCurrentStep(step);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    if (!validateStep(6)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const payload = {
        title: formData.title,
        description: formData.description,
        projectTitle: formData.projectTitle || undefined,
        type: formData.type,
        dominant_core: formData.dominant_core,
        mode: formData.mode,
        ...(formData.mode === "physical" && { location: formData.location }),
        reward: {
          currency: formData.reward.currency,
          amount: Number(formData.reward.amount),
          winners: Number(formData.reward.winners),
        },
        timeline: {
          expiration_date: new Date(
            formData.timeline.expiration_date
          ).toISOString(),
          estimated_completion: {
            days: Number(formData.timeline.estimated_completion.days) || 0,
            hours: Number(formData.timeline.estimated_completion.hours) || 0,
            minutes:
              Number(formData.timeline.estimated_completion.minutes) || 0,
          },
        },
        hasImpactCertificate: formData.hasImpactCertificate,
        ...(formData.hasImpactCertificate && {
          impactBriefMessage: formData.impactBriefMessage,
        }),
        sdgs: formData.sdgs,
        has_backer: formData.has_backer,
        ...(formData.has_backer && {
          backer: {
            name: formData.backer.name,
            logo: formData.backer.logo,
            message: formData.backer.message || undefined,
          },
        }),
        config: {
          autoApproval: formData.config.autoApproval,
          multipleSubmissions: formData.config.multipleSubmissions,
          publicLeaderboard: formData.config.publicLeaderboard,
          submissionFormat: formData.config.submissionFormat,
          maxSubmissionsPerUser: formData.config.maxSubmissionsPerUser
            ? Number(formData.config.maxSubmissionsPerUser)
            : undefined,
          additionalInstructions:
            formData.config.additionalInstructions || undefined,
        },
        criteria: formData.criteria.map((c) => ({
          name: c.name,
          description: c.description || undefined,
          weight: c.weight ? Number(c.weight) : undefined,
        })),
        hasMicrotasks: formData.hasMicrotasks,
        ...(formData.hasMicrotasks && {
          microtasks: formData.microtasks.map((m) => ({
            title: m.title,
            description: m.description || undefined,
            points: m.points ? Number(m.points) : undefined,
          })),
        }),
        terms_accepted: formData.terms_accepted,
      };

      setSubmittedData(payload);
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 1500);
  };

  const handleViewResults = () => {
    setShowConfirmation(false);
    setShowResults(true);
  };

  const handleCreateAnother = () => {
    setCurrentStep(1);
    setCompletedSteps([]);
    setShowResults(false);
    setShowConfirmation(false);
    setErrors({});
    setFormData({
      title: "",
      description: "",
      projectTitle: "",
      type: "",
      dominant_core: "",
      mode: "digital",
      location: "",
      reward: {
        currency: "",
        amount: "",
        winners: "",
      },
      timeline: {
        expiration_date: "",
        estimated_completion: {
          days: "",
          hours: "",
          minutes: "",
        },
      },
      hasImpactCertificate: false,
      impactBriefMessage: "",
      sdgs: [],
      has_backer: false,
      backer: {
        name: "",
        logo: "",
        message: "",
      },
      config: {
        autoApproval: false,
        multipleSubmissions: false,
        publicLeaderboard: false,
        submissionFormat: "",
        maxSubmissionsPerUser: "",
        additionalInstructions: "",
      },
      criteria: [{ id: Date.now(), name: "", description: "", weight: "" }],
      hasMicrotasks: false,
      microtasks: [{ id: Date.now(), title: "", description: "", points: "" }],
      terms_accepted: false,
    });
  };

  const contextValue = {
    formData,
    updateFormData,
    errors,
    setErrors,
  };

  if (showResults && submittedData) {
    return (
      <ResultsPage data={submittedData} onCreateAnother={handleCreateAnother} />
    );
  }

  if (showConfirmation) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "48px",
            maxWidth: "600px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <ConfirmationScreen onViewResults={handleViewResults} />
        </div>
      </div>
    );
  }

  return (
    <BountyContext.Provider value={contextValue}>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Sidebar
          currentStep={currentStep}
          onStepClick={handleStepClick}
          completedSteps={completedSteps}
        />

        <div
          style={{
            flex: 1,
            padding: "40px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <ProgressIndicator currentStep={currentStep} totalSteps={6} />

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "40px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {currentStep === 1 && <Step1BasicDetails />}
            {currentStep === 2 && <Step2Rewards />}
            {currentStep === 3 && <Step3Backer />}
            {currentStep === 4 && <Step4Config />}
            {currentStep === 5 && <Step5Criteria />}
            {currentStep === 6 && <Step6Microtasks />}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "40px",
                paddingTop: "24px",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <Button
                variant="secondary"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Back
              </Button>

              <Button onClick={handleNext} disabled={isSubmitting}>
                {isSubmitting
                  ? "Creating..."
                  : currentStep === 6
                  ? "Create Bounty"
                  : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BountyContext.Provider>
  );
};

export default App;
