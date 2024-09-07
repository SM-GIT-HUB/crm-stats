import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"
import useTime from "../zustand/useTime"
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function CategoryDistributionChart() {
    const [categoryData, setcategoryData] = useState([]);
    const { time } = useTime();

    async function getSalesData()
    {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/category/${time}`);
            const data = response.data;

            setcategoryData(data);
            toast.dismiss();
        }
        catch {
            toast.dismiss();
            toast.error("Couldn't get data");
        }
    }

    useEffect(() => {
        getSalesData();
    }, [time])

    const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setFontSize(10);
            } else {
                setFontSize(16);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="bg-gray-800 shadow-lg rounded-[12px] p-4 border border-gray-700 animate-fade-in">
        
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
                    outerRadius={`80`}
                    fill='#8884d8'
                    dataKey='value'
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    fontSize={fontSize}
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