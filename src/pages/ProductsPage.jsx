import { FiShoppingBag } from "react-icons/fi"
import Header from "../components/Header"
import Card from "../components/Card"

function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative">
        <Header title={"Products"} />
        <div className="h-[85%] w-full flex items-center justify-center">
          <Card name={"Products"} icon={FiShoppingBag}/>
        </div>
    </div>
  )
}

export default ProductsPage