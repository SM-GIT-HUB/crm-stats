import { FiShoppingCart } from "react-icons/fi"
import Card from "../components/Card"
import Header from "../components/Header"

function OrdersPage() {
  return (
    <div className="flex-1 overflow-auto relative">
        <Header title={"Orders"} />
        <div className="h-[85%] w-full flex items-center justify-center">
          <Card name={"Orders"} icon={FiShoppingCart}/>
        </div>
    </div>
  )
}

export default OrdersPage