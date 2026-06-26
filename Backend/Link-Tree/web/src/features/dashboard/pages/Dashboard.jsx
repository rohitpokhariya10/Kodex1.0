import AddLinkForm from "../components/AddLinkForm"
import DashboardHeader from "../components/DashboardHeader"
import DashboardStats from "../components/DashboardStats"
import UserLinks from "../components/UserLinks"


const Dashboard = () => {
  return (
    <div>
        <DashboardHeader/>
        <DashboardStats/>
        <AddLinkForm/>
        <UserLinks/>
    </div>
  )
}

export default Dashboard