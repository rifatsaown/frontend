import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CourseMaterial = () => {
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

  const pdfMaterials = [
    { name: 'Lecture Notes', url: '/path/to/lecture-notes.pdf' },
    { name: 'Assignment Guide', url: '/path/to/assignment-guide.pdf' },
    { name: 'Reference Material', url: '/path/to/reference-material.pdf' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-6xl mx-auto"
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

      <div className="bg-gray-100 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Course Material
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Course PDFs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pdfMaterials.map((pdf, index) => (
              <a
                key={index}
                href={pdf.url}
                download
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Download {pdf.name}
              </a>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Course Video
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/z_EhAiRuKjk"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/z_EhAiRuKjk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseMaterial;
