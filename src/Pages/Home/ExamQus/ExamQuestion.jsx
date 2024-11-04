import confetti from 'canvas-confetti';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ExamQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [examFinished, setExamFinished] = useState(false);
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

    // Generate and shuffle questions
    const generatedQuestions = generateQuestions(30);
    setQuestions(shuffleArray(generatedQuestions));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setExamFinished(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setExamFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const generateQuestions = (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      questions.push({
        question: `Question ${i + 1}: What is the capital of Country X?`,
        options: ['City A', 'City B', 'City C', 'City D'],
        correctAnswer: 'City A',
      });
    }
    return questions;
  };

  if (examFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Exam Completed!</h1>
        <p className="text-xl">Thank you for taking the exam.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg"
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
              <p className="text-blue-100">
                User Verified: 
                <span className={userData.isVerified ? "text-green-300 ml-1" : "text-red-300 ml-1"}>
                  {userData.isVerified ? "Yes" : "No"}
                </span>
              </p>
              <p className="text-blue-100">
                Payment Verified: 
                <span className={userData.paymentVerified ? "text-green-300 ml-1" : "text-red-300 ml-1"}>
                  {userData.paymentVerified ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-center mb-6">Exam Question</h1>
      <div className="mb-6 flex justify-between items-center">
        <p className="text-xl font-semibold">
          Time Left: {Math.floor(timeLeft / 60)}:
          {('0' + (timeLeft % 60)).slice(-2)}
        </p>
        <p className="text-xl font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
      <AnimatePresence mode="wait">
        {questions.length > 0 && (
          <motion.div 
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl mb-4">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 text-left rounded-lg transition-colors ${
                    selectedOption === option
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="mt-8 w-full btn btn-primary text-lg"
        disabled={!selectedOption}
      >
        {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
      </motion.button>
    </motion.div>
  );
};

export default ExamQuestion;
