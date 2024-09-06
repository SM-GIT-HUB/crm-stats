import { FiTrendingUp } from "react-icons/fi"
import Card from "../components/Card"
import Header from "../components/Header"

function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative">
        <Header title={"Analytics"} />
        <div className="h-[85%] w-full flex items-center justify-center">
          <Card name={"Analytics"} icon={FiTrendingUp}/>
        </div>
    </div>
  )
}

export default AnalyticsPage