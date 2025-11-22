
import Button from "../common/Button";

 const ConfirmationScreen = ({ onViewResults }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "48px", marginBottom: "24px" }}>🎉</div>
      <h2 style={{ fontSize: "28px", marginBottom: "16px", color: "#333" }}>
        Bounty is published and live on Impact Miner!
      </h2>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "32px" }}>
        Your bounty has been successfully created and is now visible to the
        community.
      </p>
      <Button onClick={onViewResults}>View Bounty Details</Button>
    </div>
  );
};


export default ConfirmationScreen;