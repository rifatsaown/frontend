import { useRef, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Keep this import to avoid errors

console.log(Chart); 

const AdminDashboard = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Passed', 'Failed', 'Rejected', 'Payments'],
    datasets: [
      {
        label: 'Students',
        data: [50, 20, 10, 40], // Example data
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3'],
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current;
    return () => { 
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg ">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="card bg-white shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2 ">Student Performance</h2>
          <Pie
            data={data}
            ref={(chart) => {
              if (chart && !chartRef.current) {
                chartRef.current = chart;
              }
            }}
          />
        </div>
        <div className="card bg-white shadow-lg grid place-items-center py-10">
          <h2 className="text-xl font-semibold mb-2">Total Registered Students</h2>
          <p className="text-4xl font-bold">120</p>
          <button className="btn btn-primary mt-4">View All Students</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
