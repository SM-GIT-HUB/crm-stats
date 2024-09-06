
function Card({ name, icon: Icon }) {
  return (
    <div className="transition-all duration-[0.25s] bg-gray-800 overflow-hidden shadow-lg rounded-[4px] border border-gray-700 hover:cursor-pointer hover:shadow-[#0000007b] animate-fade-in px-10 sm:px-20 py-8 sm:py-16">
        <span className="flex items-center text-sm font-medium text-gray-300">
            <Icon size={30} className="mr-2 text-[#0051ff]"/>
            {name}
        </span>
    </div>
  )
}

export default Card