import { FiUsers } from "react-icons/fi"
import Header from "../components/Header"
import Card from "../components/Card"

function UsersPage() {
  return (
    <div className="flex-1 overflow-auto relative">
        <Header title={"Users"} />
        <div className="h-[85%] w-full flex items-center justify-center">
          <Card name={"Users"} icon={FiUsers}/>
        </div>
    </div>
  )
}

export default UsersPage