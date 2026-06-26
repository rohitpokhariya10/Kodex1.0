import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { createLink } from "../services/dashboard.api";

const useDashboard = () => {
  const { accessToken } = useContext(AuthContext);

  const handleCreateLink = async (data) => {
    try {
      const response = await createLink(data, accessToken);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleCreateLink,
  };
};

export default useDashboard;