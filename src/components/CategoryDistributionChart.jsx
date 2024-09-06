import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"

function CategoryDistributionChart() {
    const categoryData = [
        { name: "RAM", value: 4500 },
        { name: "SSD", value: 3200 },
        { name: "CPU", value: 2800 },
        { name: "GPU", value: 2100 },
        { name: "HDD", value: 1900 },
    ]

    const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

  return (
    <div className="bg-gray-800 shadow-lg rounded-[12px] p-4 border border-gray-700">
        
        <h2 className="text-lg font-medium mb-4 text-gray-100">
            Category Distribution
        </h2>

        <div className="h-[280px] ">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <PieChart>
                    <Pie data={categoryData}
                    cx={'50%'}
                    cy={'50%'}
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {
                            categoryData.map((entry, idx) => (
                                <Cell key={idx} fill={COLORS[idx]} />
                            ))
                        }
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB" }} 
                    />
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default CategoryDistributionChart