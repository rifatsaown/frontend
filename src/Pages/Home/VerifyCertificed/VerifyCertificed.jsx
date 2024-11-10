import { useState } from 'react';
import { FaCheckCircle, FaSearch, FaTimesCircle } from 'react-icons/fa';

const VerifyCertificed = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleVerify = async () => {
    setTimeout(() => {
      if (certificateId === '12345') {
        setVerificationStatus('valid');
        setUserData({
          name: 'Alex Johnson',
          email: 'alex.johnson@example.com',
          examDate: '2024-10-25',
          score: 25,
          totalMarks: 30,
          grade: 'A',
          examStatus: 'Pass',
        });
      } else {
        setVerificationStatus('invalid');
        setUserData(null);
      }
    }, 500);
  };

  return (
    <div className=" bg-gradient-to-br from-purple-100 to-indigo-200 p-8 rounded-xl">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Verify Certificate
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Enter Certificate ID(12345)"
              className="input input-bordered w-full"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
            />
            <button className="btn btn-primary ml-2" onClick={handleVerify}>
              <FaSearch className="mr-2" /> Verify
            </button>
          </div>

          {verificationStatus === 'valid' && (
            <div className="alert alert-success mb-6">
              <FaCheckCircle className="mr-2" /> Certificate is valid!
            </div>
          )}

          {verificationStatus === 'invalid' && (
            <div className="alert alert-error mb-6">
              <FaTimesCircle className="mr-2" /> Certificate is invalid or not
              found.
            </div>
          )}

          {userData && (
            <div className="bg-indigo-50 rounded-lg p-6 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
                {userData.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    {userData.email}
                  </p>
                  <p>
                    <span className="font-semibold">Exam Date:</span>{' '}
                    {userData.examDate}
                  </p>
                  <p className="font-semibold">
                    Exam Status: {userData.examStatus}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Score:</span>{' '}
                    {userData.score}/{userData.totalMarks}
                  </p>
                  <p>
                    <span className="font-semibold">Grade:</span>{' '}
                    {userData.grade}
                  </p>
                  <div className="mt-2">
                    <div className="text-sm font-medium text-indigo-700 mb-1">
                      Performance
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (userData.score / userData.totalMarks) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificed;
