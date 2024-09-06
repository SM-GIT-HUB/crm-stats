import { FiDollarSign } from "react-icons/fi"
import Header from "../components/Header"
import Card from "../components/Card"

function SalesPage() {
  return (
    <div className="flex-1 overflow-auto relative">
        <Header title={"Sales"} />
        <div className="h-[85%] w-full flex items-center justify-center">
          <Card name={"Sales"} icon={FiDollarSign}/>
        </div>
    </div>
  )
}

export default SalesPage