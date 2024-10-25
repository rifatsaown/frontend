import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">User Verification</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-700">User Details</h3>
                    {Object.entries({
                        'Name': `${userData.firstName} ${userData.lastName}`,
                        'Email': userData.email,
                        'Phone': userData.phone,
                        'Address': userData.address,
                        'Transaction ID': userData.trxId,
                        'Payment Details': userData.paymentDetails,
                    }).map(([key, value]) => (
                        <div key={key} className="mb-4">
                            <p className="text-sm font-medium text-gray-500">{key}</p>
                            <p className="text-lg text-gray-800">{value}</p>
                        </div>
                    ))}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-gray-600">Payment Details Image</h4>
                        <div className="aspect-[1/1.414] w-full max-w-[595px] mx-auto border rounded-lg overflow-hidden">
                            <img src={userData.paymentDetailsImage} alt="Payment Details Image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-700">Document Preview</h3>
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4 text-gray-600">W2 Form</h4>
                        <div className="aspect-[1/1.414] w-full max-w-[595px] mx-auto border rounded-lg overflow-hidden">
                            <img src="./wa-form.png" alt="W2 Form" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-gray-600">Experience Letter</h4>
                        <div className="aspect-[1/1.414] w-full max-w-[595px] mx-auto border rounded-lg overflow-hidden">
                            <img src="./ex-letter.png" alt="Experience Letter" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
                <button 
                    onClick={handleVerifyUser}
                    className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
                        isUserVerified 
                            ? 'bg-green-500 text-white hover:bg-green-600' 
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                >
                    {isUserVerified ? 'User Verified ✓' : 'Verify User'}
                </button>
                <button 
                    onClick={handleVerifyPayment}
                    className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
                        isPaymentVerified 
                            ? 'bg-green-500 text-white hover:bg-green-600' 
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                >
                    {isPaymentVerified ? 'Payment Verified ✓' : 'Verify Payment'}
                </button>
                <button>
                    <Link to="/course-material">Next</Link>
                </button>
            </div>
        </div>
    );
};

export default UserVarification;
