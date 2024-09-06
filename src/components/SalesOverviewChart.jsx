import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

function SalesOverviewChart() {
    const salesData = [
        { name: "Sep", sales: 5100 },
        { name: "Oct", sales: 4600 },
        { name: "Nov", sales: 5400 },
        { name: "Dec", sales: 7200 },
        { name: "Jan", sales: 6100 },
        { name: "Feb", sales: 5900 },
        { name: "Mar", sales: 6800 },
        { name: "Apr", sales: 6300 },
        { name: "May", sales: 7100 },
        { name: "Jun", sales: 7500 },
        { name: "Jul", sales: 4200 },
        { name: "Aug", sales: 3800 },
    ]

  return (
    <div className="bg-gray-800 shadow-lg rounded-[12px] p-4 border border-gray-700">
        
        <h2 className="text-lg font-medium mb-4 text-gray-100">
            Sales Overview
        </h2>

        <div className="h-[280px] ">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray='3' stroke='#4B5563' />

                    <XAxis dataKey={'name'} />
                    <YAxis stroke="#9ca3af" />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Line
                        type='monotone'
                        dataKey='sales'
                        stroke='#6366F1'
                        strokeWidth={3}
                        dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default SalesOverviewChart