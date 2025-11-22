import { useContext } from "react";
import { BountyContext } from "../context/BountyContext";

const useBounty = () => {
  const context = useContext(BountyContext);
  if (!context) {
    throw new Error("useBounty must be used within BountyProvider");
  }
  return context;
};

export default useBounty;
