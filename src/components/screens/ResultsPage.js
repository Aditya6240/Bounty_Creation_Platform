import Button from "../common/Button";

const ResultsPage = ({ data, onCreateAnother }) => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "24px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Bounty Creation Successful
      </h2>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginBottom: "24px",
        }}
      >
        <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "#333" }}>
          Payload Details:
        </h3>
        <pre
          style={{
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            padding: "20px",
            borderRadius: "6px",
            overflow: "auto",
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>

      <div style={{ textAlign: "center" }}>
        <Button onClick={onCreateAnother}>Create Another Bounty</Button>
      </div>
    </div>
  );
};

export default ResultsPage;
