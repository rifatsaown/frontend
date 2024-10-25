import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

const ExamDate = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data
    // This is a placeholder. Replace with actual API call
    const fetchUserData = async () => {
      // Simulated API call
      setUserData({
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Anytown, AN 12345",
        isVerified: true,
        paymentVerified: true,
      });
    };

    fetchUserData();
  }, []);

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-3xl mx-auto"
    >
      {userData && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-6 rounded-lg text-white mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
              <p className="text-blue-100">{userData.email}</p>
              <p className="text-blue-100">{userData.phone}</p>
            </div>
            <div className="md:text-right">
              
            </div>
          </div>
        </div>
      )}
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
    </motion.div>
  );
};

export default ExamDate;
