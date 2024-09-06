import axios from "axios";
import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts"
import useTime from "../zustand/useTime"

function SalesChannelChart() {
  const [salesChannelData, setsalesChannelData] = useState([]);
    const { time } = useTime();

    async function getSalesData()
    {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/channel/${time}`);
        const data = response.data;

        setsalesChannelData(data);
    }

    useEffect(() => {
        getSalesData();
    }, [time])

  const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

  return (
    <div className="bg-gray-800 shadow-lg rounded-[12px] p-4 border border-gray-700 lg:col-span-2 animate-fade-in">

      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Channel
      </h2>

      <div className="h-[280px]">
        <ResponsiveContainer>

          <BarChart data={salesChannelData} >

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
                salesChannelData.map((entry, idx) => (
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