import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SingleUserCard from '../AllUsers/SingleUserCard';

const ExamDate = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  return (
    <div>
        <SingleUserCard />
        <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Select Your Preferred Exam Date and Time
      </h2>
      <div className="mb-4 text-center">
        <DatePicker
          selected={selectedDateTime}
          onChange={handleDateTimeChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          placeholderText="Click to select a date and time"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex items-center justify-center mb-4">
        <input type="checkbox" className="mr-2 checkbox checkbox-primary" />
        <label>Send Date in Email</label>
      </div>
      <div className="text-center">
        <button
          className={`transition-colors duration-300 btn btn-primary ${
            selectedDateTime
              ? 'hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!selectedDateTime}
        >
          Continue
        </button>
      </div>
    </div>
    </div>
  );
};

export default ExamDate;
