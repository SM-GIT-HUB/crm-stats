import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts"

function SalesChannelChart() {
  const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

  const SALES_CHANNEL_DATA = [
    { name: "Website", value: 45600 },
    { name: "Mobile App", value: 38200 },
    { name: "Marketplace", value: 29800 },
    { name: "Social Media", value: 18700 },
  ]

  return (
    <div className="bg-gray-800 shadow-lg rounded-[12px] p-4 border border-gray-700 lg:col-span-2">

      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Channel
      </h2>

      <div className="h-[280px]">
        <ResponsiveContainer>

          <BarChart data={SALES_CHANNEL_DATA} >

            <CartesianGrid strokeDasharray='3 3' stroke="#4B5563" />
            <XAxis dataKey='name' stroke="#9CA3AF"/>
            <YAxis stroke="#9CA3AF"/>

            <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
            <Legend/>

            <Bar dataKey={'value'} fill="#8884d8">
               {
                SALES_CHANNEL_DATA.map((entry, idx) => (
                  <Cell key={idx} fill={COLORS[idx]}/>
                ))
               }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesChannelChart