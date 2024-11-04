import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const UserVarification = () => {
    const [userData, setUserData] = useState(null);
    const [isUserVerified, setIsUserVerified] = useState(false);
    const [isPaymentVerified, setIsPaymentVerified] = useState(false);
    const { userId } = useParams();

    useEffect(() => {
        // Fetch user data based on userId
        // This is a placeholder. Replace with actual API call
        const fetchUserData = async () => {
            // const response = await fetch(`/api/users/${userId}`);
            // const data = await response.json();
            // setUserData(data);

            // Placeholder data
            setUserData({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                phone: '123-456-7890',
                address: '123 Main St, City, Country',
                w2FormUrl: 'https://www.taxformexpress.com/wp-content/uploads/2024/07/L87-2024.jpg',
                experienceLetterUrl: 'https://example.com/experience.pdf',
                trxId: 'TRX123456',
                paymentDetails: 'Payment made via bank transfer',
                paymentDetailsImage: './payment.png'
            });
        };

        fetchUserData();
    }, [userId]);

    const handleVerifyUser = () => {
        setIsUserVerified(!isUserVerified);
        // Add API call to update user verification status
    };

    const handleVerifyPayment = () => {
        setIsPaymentVerified(!isPaymentVerified);
        // Add API call to update payment verification status
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const slideIn = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    if (!userData) {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600"
            >
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-12 text-center text-white">User Verification</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div variants={slideIn} className="bg-white p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">User Details</h3>
                        {Object.entries({
                            'Name': `${userData.firstName} ${userData.lastName}`,
                            'Email': userData.email,
                            'Phone': userData.phone,
                            'Address': userData.address,
                            'Transaction ID': userData.trxId,
                            'Payment Details': userData.paymentDetails,
                        }).map(([key, value], index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg"
                            >
                                <p className="text-sm font-medium text-blue-600">{key}</p>
                                <p className="text-lg font-semibold text-gray-800">{value}</p>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8"
                        >
                            <h4 className="text-2xl font-bold mb-4 text-gray-700">Payment Details Image</h4>
                            <div className="aspect-[1/1.414] w-full max-w-[595px] mx-auto rounded-lg overflow-hidden shadow-lg">
                                <img src={userData.paymentDetailsImage} alt="Payment Details Image" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={slideIn} className="bg-white p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Document Preview</h3>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-8"
                        >
                            <h4 className="text-2xl font-bold mb-4 text-gray-700">W2 Form</h4>
                            <div className="aspect-[1/1.414] w-full max-w-[595px] mx-auto rounded-lg overflow-hidden shadow-lg">
                                <img src="./wa-form.png" alt="W2 Form" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h4 className="text-2xl font-bold mb-4 text-gray-700">Experience Letter</h4>
                            <div className="aspect-[1/1.414] w-full max-w-[595px] mx-auto rounded-lg overflow-hidden shadow-lg">
                                <img src="./ex-letter.png" alt="Experience Letter" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex flex-wrap justify-center gap-6"
                >
                    <button 
                        onClick={handleVerifyUser}
                        className={`px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow ${
                            isUserVerified 
                                ? 'bg-green-500 text-white hover:bg-green-600' 
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                    >
                        {isUserVerified ? 'User Verified ✓' : 'Verify User'}
                    </button>
                    <button 
                        onClick={handleVerifyPayment}
                        className={`px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow ${
                            isPaymentVerified 
                                ? 'bg-green-500 text-white hover:bg-green-600' 
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                    >
                        {isPaymentVerified ? 'Payment Verified ✓' : 'Verify Payment'}
                    </button>
                    
                </motion.div>
            </div>
        </motion.div>
    );
};

export default UserVarification;
