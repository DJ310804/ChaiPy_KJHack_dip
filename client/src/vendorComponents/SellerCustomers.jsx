import { useState } from 'react';
import { CSVLink } from 'react-csv';

const SellerCustomers = () => {
  // Sample data for customers and their inquiries
  const [customers, setCustomers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      totalOrders: 15, 
      joined: '2023-01-10',
      inquiries: ['What’s the delivery time?']
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      totalOrders: 8, 
      joined: '2023-02-14',
      inquiries: ['Do you have a return policy?']
    },
    { 
      id: 3, 
      name: 'Tom Brown', 
      email: 'tom@example.com', 
      totalOrders: 22, 
      joined: '2022-12-05',
      inquiries: ['What payment methods are accepted?']
    }
    // Add more customer data here...
  ]);

  // CSV headers
  const csvHeaders = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Total Orders', key: 'totalOrders' },
    { label: 'Joined', key: 'joined' },
    { label: 'Inquiries', key: 'inquiries' }
  ];

  // Remove a customer
  const removeCustomer = (customerId) => {
    setCustomers(customers.filter(customer => customer.id !== customerId));
  };

  return (
    <div className="md:ml-[14%] h-screen mx-4 bg-black p-6 rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-primary">Customer Management</h2>

      {/* Table of customers */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-dark">
              <th className="border text-primary border-gray-300 px-4 py-2">ID</th>
              <th className="border text-primary border-gray-300 px-4 py-2">Name</th>
              <th className="border text-primary border-gray-300 px-4 py-2">Email</th>
              <th className="border text-primary border-gray-300 px-4 py-2">Total Orders</th>
              <th className="border text-primary border-gray-300 px-4 py-2">Joined</th>
              <th className="border text-primary border-gray-300 px-4 py-2">Inquiries</th>
              <th className="border text-primary border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id} className="text-center">
                <td className="border text-primary border-gray-300 px-4 py-2">{customer.id}</td>
                <td className="border text-primary border-gray-300 px-4 py-2">{customer.name}</td>
                <td className="border text-primary border-gray-300 px-4 py-2">{customer.email}</td>
                <td className="border text-primary border-gray-300 px-4 py-2">{customer.totalOrders}</td>
                <td className="border text-primary border-gray-300 px-4 py-2">{customer.joined}</td>
                <td className="border text-primary border-gray-300 px-4 py-2">
                  {/* Display inquiries creatively */}
                  <ul>
                    {customer.inquiries.map((inquiry, index) => (
                      <li key={index} className="text-sm text-white">{`• ${inquiry}`}</li>
                    ))}
                  </ul>
                </td>
                <td className="border text-primary border-gray-300 px-4 py-2">
                  <button 
                    onClick={() => removeCustomer(customer.id)} 
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Export CSV */}
      <div className="flex justify-end">
        <CSVLink 
          data={customers} 
          headers={csvHeaders} 
          filename={"customers-data.csv"}
          className="px-4 py-2 bg-dark text-white rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Export to CSV
        </CSVLink>
      </div>

      {/* Gamification: Reward points display */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-primary">Total Customer Engagement Points</h3>
        <p className="text-lg text-gray-300">You have earned <span className="text-green-400 font-semibold">320</span> points for excellent customer engagement!</p>
      </div>

      
    </div>
  );
};

export default SellerCustomers;
