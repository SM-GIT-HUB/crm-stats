import { useEffect, useState } from "react"
import { FiBarChart2, FiDollarSign, FiMenu, FiSettings, FiShoppingBag, FiShoppingCart, FiTrendingUp, FiUsers } from "react-icons/fi"
import { Link } from "react-router-dom"

function Sidebar() {
    const items = [
        { name: "Overview", icon: FiBarChart2, color: "#6366f1", href: "/" },
        { name: "Products", icon: FiShoppingBag, color: "#8B5CF6", href: "/products" },
        { name: "Users", icon: FiUsers, color: "#EC4899", href: "/users" },
        { name: "Sales", icon: FiDollarSign, color: "#10B981", href: "/sales" },
        { name: "Orders", icon: FiShoppingCart, color: "#F59E0B", href: "/orders" },
        { name: "Analytics", icon: FiTrendingUp, color: "#3B82F6", href: "/analytics" },
        { name: "Settings", icon: FiSettings, color: "#6EE7B7", href: "/settings" }
    ]

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        }

        // Set initial state
        handleResize();

        // Add event listener for screen resizing
        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`sm:relative transition-all duration-[0.2s] ease-in-out ${isSidebarOpen? "w-30 sm:w-64" : "w-20"}`}>
            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">

                <button className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
                    <FiMenu size={24}/>
                </button>
                
                <div className="mt-8 flex-grow">
                    {
                        items.map((item, idx) => (

                            <Link key={idx} to={item.href}>
                                <div className="flex items-center p-4 text-sm rounded-[7px] font-medium hover:bg-gray-700 transition-all duration-[0.1s] mb-2 animate-fade-in">
                                    <item.icon color={item.color} className="min-w-[20px]"/>

                                    <span className={`transition-all duration-[0.2s] ml-2 min-w-[20px] ${isSidebarOpen? "text-[16px]" : "text-[0px]"}`}>
                                        {
                                            item.name
                                        }
                                    </span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar