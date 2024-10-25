import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ExamResult = () => {
    const [userData, setUserData] = useState(null);
    const { examId } = useParams();

    useEffect(() => {
        // Fetch user and exam result data
        // This is a placeholder. Replace with actual API call
        const fetchData = async () => {
            // Simulated API call
            setUserData({
                name: "Alex Johnson",
                email: "alex.johnson@example.com",
                phone: "+1 (555) 123-4567",
                address: "123 Main St, Anytown, AN 12345",
                isVerified: true,
                paymentVerified: true,
                examDate: "2024-10-25",
                examStatus: "Pass",
                examName: "Advanced Web Development",
                score: 25,
                totalMarks: 30,
                grade: "A",
                feedback: "Excellent work on the practical project. Consider diving deeper into advanced state management concepts."
            });
        };

        fetchData();
    }, [examId]);

    if (!userData) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>;
    }

    const percentage = (userData.score / userData.totalMarks) * 100;

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 rounded-xl">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">Exam Result</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
                            <p className="text-blue-100">{userData.email}</p>
                            <p className="text-blue-100">{userData.phone}</p>
                            <p className="text-blue-100">{userData.address}</p>
                        </div>
                        <div className="md:text-right">
                            <p className="text-blue-100">Exam Date: {userData.examDate}</p>
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
                            <p className="text-blue-100">Exam Status: {userData.examStatus}</p>
                        </div>
                    </div>
                </div>
                
                <div className="px-8 py-10">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
                            <p className="text-gray-500">Completed on {userData.examDate}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-5xl font-bold text-indigo-600">{userData.grade}</span>
                            <p className="text-sm text-gray-500 mt-1">Grade</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Score</span>
                            <span className="font-semibold">{userData.score} / {userData.totalMarks}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div 
                                className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out"
                                style={{width: `${percentage}%`}}
                            ></div>
                        </div>
                        <p className="text-right mt-2 text-sm text-indigo-600 font-medium">{percentage.toFixed(1)}%</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Feedback</h3>
                        <p className="text-gray-600 bg-indigo-50 p-4 rounded-lg">{userData.feedback}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamResult;
