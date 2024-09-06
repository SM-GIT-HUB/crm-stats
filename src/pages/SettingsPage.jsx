import { FiSettings } from "react-icons/fi"
import Card from "../components/Card"
import Header from "../components/Header"

function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto relative">
        <Header title={"Settings"} />
        <div className="h-[85%] w-full flex items-center justify-center">
          <Card name={"Settings"} icon={FiSettings}/>
        </div>
    </div>
  )
}

export default SettingsPage