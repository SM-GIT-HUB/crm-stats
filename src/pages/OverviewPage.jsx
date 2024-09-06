import { FiBarChart2, FiShoppingBag, FiUsers, FiZap } from "react-icons/fi"

import Header from "../components/Header"
import StatCard from "../components/StatCard"
import SalesOverviewChart from "../components/SalesOverviewChart"
import CategoryDistributionChart from "../components/CategoryDistributionChart"
import SalesChannelChart from "../components/SalesChannelChart"
import ToogleSwitch from "../components/ToogleSwitch"

function OverviewPage() {

  return (
    <div className="flex-1 overflow-auto relative">
        <Header title={"Overview"} />

        <main className="mx-auto py-6 px-4 lg:px-8">
            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 transition-all">
                <StatCard name='Total Sales' icon={FiZap} value='956000/-' color='#6366F1'/>
                <StatCard name='New Users' icon={FiUsers} value='1387' color='#8B5CF6'/>
                <StatCard name='Total Products' icon={FiShoppingBag} value='589' color='#EC4899'/>
                <StatCard name='Conversion Rate' icon={FiBarChart2} value='12.5%' color='#10B981'/>
            </div>
            <div className="w-full flex items-center justify-center mb-[15px]">
              <ToogleSwitch/>
            </div>
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SalesOverviewChart/>
              <CategoryDistributionChart/>
              <SalesChannelChart/>
            </div>
        </main>
    </div>
  )
}

export default OverviewPage