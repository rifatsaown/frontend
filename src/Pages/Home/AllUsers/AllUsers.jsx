const AllUsers = () => {
  const users = [
    // Sample user data
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      applicationDate: '2023-01-01',
      language: 'English',
      screenCalling: 'done',
      qualifiedForInterview: 'y',
      worksInCandT: 'y',
      documentRequired: 'Yes',
      payment: 'Paid',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      applicationDate: '2023-01-01',
      language: 'English',
      screenCalling: 'done',
      qualifiedForInterview: 'y',
      worksInCandT: 'y',
      documentRequired: 'Yes',
      payment: 'Paid',
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      applicationDate: '2023-01-01',
      language: 'English',
      screenCalling: 'done',
      qualifiedForInterview: 'y',
      worksInCandT: 'y',
      documentRequired: 'Yes',
      payment: 'Paid',
    },

    // Add more user objects as needed
  ];

  return (
    <div className="min-h-screen p-10">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">First Name</th>
            <th className="p-4">Last Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone Number</th>
            <th className="p-4">Application Date</th>
            <th className="p-4">Language</th>
            <th className="p-4">Screen Calling</th>
            <th className="p-4">Qualified for Interview</th>
            <th className="p-4">Works in Cand T</th>
            <th className="p-4">Document Required</th>
            <th className="p-4">Payment</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 hover:bg-gray-300'}>
              <td className="p-4">{user.id}</td>
              <td className="p-4">{user.firstName}</td>
              <td className="p-4">{user.lastName}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.phoneNumber}</td>
              <td className="p-4">{user.applicationDate}</td>
              <td className="p-4">{user.language}</td>
              <td className="p-4">{user.screenCalling}</td>
              <td className="p-4">{user.qualifiedForInterview}</td>
              <td className="p-4">{user.worksInCandT}</td>
              <td className="p-4">{user.documentRequired}</td>
              <td className="p-4">{user.payment}</td>
              <td className="p-4">
                <button className="btn btn-primary">Manage User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AllUsers;
