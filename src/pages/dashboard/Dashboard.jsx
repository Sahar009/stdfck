import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Bell } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-green-700">unity</h1>
          </div>

          {/* Welcome message and badge */}
          <div className="flex items-center ml-8">
            <span className="text-gray-900">Welcome, Kolawole</span>
            <Badge 
              variant="warning" 
              className="ml-2 bg-amber-100 text-amber-800 px-2 py-0.5 text-xs rounded-md border-none"
            >
              ✓ Verified
            </Badge>
          </div>

          {/* Icons - pushed to the right */}
          <div className="flex items-center ml-auto">
            <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
            <Avatar className="h-8 w-8 ml-4">
              <AvatarImage 
                src="https://github.com/shadcn.png" 
                alt="User avatar"
              />
              <AvatarFallback className="bg-gray-100">
                <span className="text-gray-600">KA</span>
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white px-6 py-3 border-t border-b">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-1.5 rounded-md text-sm">
            <span>Overview</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-green-700 text-sm">
            <span>Product</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-green-700 text-sm">
            <span>Order History</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-green-700 text-sm">
            <span>Settings</span>
          </button>
        </div>
      </nav>

      {/* Stats Overview */}
      <div className="p-6 grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Total amount received</p>
          <p className="text-2xl font-bold mt-1">₦20,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Total Product</p>
          <p className="text-2xl font-bold mt-1">4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Total Product sold</p>
          <p className="text-2xl font-bold mt-1">4</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-8">
        {/* Account Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Account Information */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Account Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Account Number</p>
                {/* <p className="font-medium">{user?.accountNumber}</p> */}
                <p className="font-medium">1234567890</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Name</p>
                {/* <p className="font-medium">{`${user?.firstName} ${user?.lastName}`}</p> */}
                <p className="font-medium">kunle afolayan</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                {/* <p className="font-medium">{user?.email}</p> */}
                <p className="font-medium">kunle@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="rounded-lg bg-green-50 p-4 text-center hover:bg-green-100">
                <span className="block text-2xl">💸</span>
                <span className="text-sm font-medium">Transfer</span>
              </button>
              <button className="rounded-lg bg-blue-50 p-4 text-center hover:bg-blue-100">
                <span className="block text-2xl">📊</span>
                <span className="text-sm font-medium">Transactions</span>
              </button>
              <button className="rounded-lg bg-purple-50 p-4 text-center hover:bg-purple-100">
                <span className="block text-2xl">🔒</span>
                <span className="text-sm font-medium">Security</span>
              </button>
              <button className="rounded-lg bg-orange-50 p-4 text-center hover:bg-orange-100">
                <span className="block text-2xl">⚙️</span>
                <span className="text-sm font-medium">Settings</span>
              </button>
            </div>
          </div>

          {/* Profile Information */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Profile Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Address</p>
                {/* <p className="font-medium">{user?.address}</p> */}
                <p className="font-medium">1234567890</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Region</p>
                {/* <p className="font-medium">{user?.region}</p> */}
                <p className="font-medium">Lagos</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                {/* <p className="font-medium">{user?.phoneNumber}</p> */}
                <p className="font-medium">08012345678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recent Transactions</h3>
              <button className="text-sm text-green-600 hover:underline">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b text-left">
                  <tr>
                    <th className="pb-4 font-medium">Type</th>
                    <th className="pb-4 font-medium">Amount</th>
                    <th className="pb-4 font-medium">Status</th>
                    <th className="pb-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {/* Sample transaction rows - replace with actual data */}
                  <tr className="text-sm">
                    <td className="py-4">Transfer</td>
                    <td className="py-4">₦20,000.00</td>
                    <td className="py-4">
                      <Badge variant="success">Completed</Badge>
                    </td>
                    <td className="py-4">2024-03-20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <span>Chat with us</span>
        </button>
      </div>
    </div>
  );
}