import { useState } from 'react'
import useTime from '../zustand/useTime'

const ToggleSwitch = () => {
  const [selected, setSelected] = useState('Year');
  const { time, setTime } = useTime();

  const handleToggle = (option) => {
    setSelected(option);
    setTime(option.toLowerCase());
  };

  console.log(time);

  return (
    <div className="flex items-center justify-center rounded-lg shadow-lg">
      {['Week', 'Month', 'Year'].map((option, index) => (
        <button
          key={option}
          onClick={() => handleToggle(option)}
          className={`flex justify-center text-center py-2 font-medium transition-all px-[10px] sm:px-6 lg:px-8
          ${selected === option ? 'bg-blue-950 text-white' : 'bg-gray-200 text-gray-800'}
          ${index === 0 ? 'rounded-l-lg' : ''} 
          ${index === 2 ? 'rounded-r-lg' : ''}
          ${index !== 2 ? 'border-r-2 border-gray-300' : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch
