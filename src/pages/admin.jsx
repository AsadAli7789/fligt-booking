import React, { useState } from 'react'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts'
import FlightBookingForm from './form'
import Example2 from '../component/nav-bar-2'
import { doc, getDocs,collection ,getFirestore} from "firebase/firestore";
import { app } from '../utils/utils';

// Icons (you can replace these with an icon library of your choice)
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
const FlightIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
const BookingIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
const UserIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
const PaymentIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>

const bookingData = [
  { date: '2023-06-01', bookings: 31 },
  { date: '2023-06-02', bookings: 40 },
  { date: '2023-06-03', bookings: 28 },
  { date: '2023-06-04', bookings: 45 },
  { date: '2023-06-05', bookings: 53 },
  { date: '2023-06-06', bookings: 49 },
  { date: '2023-06-07', bookings: 62 },





]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const db = getFirestore(app);

const FUND = []
  async function document(){
    const querySnapshot = await getDocs(collection(db, "users"));
      console.log()
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${FUND.push(doc.data())}`)});
  }
  const sidebarItems = [
    { icon: DashboardIcon, label: 'Dashboard', value: 'dashboard' },
    { icon: FlightIcon, label: 'Flights', value: 'Flights' }
    

  ]
  document()
  console.log(FUND)
  const [data, setdata] = useState(FUND)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">Admin</h1>
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <button
              key={item.value}
              className={`flex items-center w-full px-4 py-2 text-left ${
                activeTab === item.value ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(item.value)}
            >
              <item.icon />
              <span className="ml-3">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <Example2/>
        </header>

        {/* Dashboard Content */}
        <div className={activeTab=="dashboard"?"p-8":"p-8 hidden"}>
          <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Total Bookings', value: '1,284', change: '+20.1%' },
              { title: 'Revenue', value: '$45,231.89', change: '+15.2%' },
              { title: 'Active Flights', value: '132', change: '+7' },
              { title: 'New Users', value: '573', change: '+201' },
            ].map((card, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
                <div className="mt-2 text-3xl font-bold">{card.value}</div>
                <p className="mt-1 text-sm text-green-600">{card.change} from last month</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-lg font-semibold">Booking Trends</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bookings" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-lg font-semibold">Recent Bookings</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Booking ID</th>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">email</th>
                      <th className="px-6 py-3">Date  </th>
                      <th className="px-6 py-3">password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((res,ind) => (
                      <tr key={ind} className="bg-white border-b">
                        <td className="px-6 py-4">{res.
uid
}</td>
                        <td className="px-6 py-4">{res.name
                        }</td>
                        <td className="px-6 py-4">{res.email
                        }</td>
                        <td className="px-6 py-4">{res.dob}</td>
                        <td className="px-6 py-4">
                         {res.password}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

|<div  className={activeTab=="Flights"?"":" hidden"}>
  <FlightBookingForm/>
</div>
























      </main>
    </div>
  )
}