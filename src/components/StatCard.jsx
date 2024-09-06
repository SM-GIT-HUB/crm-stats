
function StatCard({ name, icon: Icon, value, color }) {
  return (
    <div className="transition-all duration-[0.25s] bg-gray-800 overflow-hidden shadow-lg rounded-[4px] border border-gray-700 hover:cursor-pointer hover:shadow-[#0000007b] animate-fade-in">
        
        <div className="px-4 py-5 sm:p-6">

            <span className="flex items-center text-sm font-medium text-gray-300">
                <Icon size={20} className="mr-2" color={color}/>
                {name}
            </span>

            <p className="mt-[12px] text-3xl font-semibold text-gray-200">
                {value}
            </p>
        </div>
    </div>
  )
}

export default StatCard