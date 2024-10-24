const SingleUserCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <div className="flex items-start">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                Verified User
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                Payment Complete
              </span>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-1">john.doe@example.com</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserCard;
