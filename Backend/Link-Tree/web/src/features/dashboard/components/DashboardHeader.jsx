import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const DashboardHeader = () => {
  const { user } = useContext(AuthContext);
  console.log("userr-->" , user)

  return (
    <div>
      <h1>Welcome {user?.username} </h1>
    </div>
  );
};

export default DashboardHeader;