import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import useTime from "../zustand/useTime"
import axios from "axios"

function SalesOverviewChart() {
    const [salesData, setSalesData] = useState([]);
    const { time } = useTime();

    async function getSalesData()
    {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/overview/${time}`);
        const data = response.data;

        setSalesData(data);
    }

    useEffect(() => {
        getSalesData();
    }, [time])

  return (
    <div className="bg-gray-800 shadow-lg rounded-[12px] p-4 border border-gray-700 animate-fade-in">
        
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