import React, { useState ,useEffect } from 'react';

import { collection, addDoc,getFirestore,getDocs } from "firebase/firestore"; 
import {app} from '../utils/utils'






















export default function FlightBookingForm() {





    const db = getFirestore(app);










  const [formData, setFormData] = useState({
    id: '',
    flightName:'',
    company: '',
    takeoffLocation: '',
    landingLocation: '',
    shortTakeoffLocation: '',
    shortLandingLocation: '',
    takeoffTime: '',
    landingTime: '',
    rating: '',
    price: '',
    duration: '',
    logo: ""
    
  });



  async function Add(formData){
    try {
        const docRef = await addDoc(collection(db, "flights"),formData);
        console.log("Document written with ID: ", docRef.id);
        // window.location.href="/page2"

alert("your flights is created")
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}












  
const lund =formData.company
console.log(formData)
  useEffect(() => {
    
    merjan1()

  }, [lund]);
  
  function merjan1(){



    lund=="Pakistan International Airlines"?setFormData((dta)=>({...dta,logo:"https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/Air-Sial-removebg-preview.png?alt=media&token=fb422fa1-6cbe-405f-a2ef-48ad7f022dcc"})):
    lund=="Air Sial"?setFormData((dta)=>({...dta,logo:"https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/Air-Sial-removebg-preview.png?alt=media&token=fb422fa1-6cbe-405f-a2ef-48ad7f022dcc"})):
    lund=="Fly Jinnah"?setFormData((dta)=>({...dta,logo:"https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/fly_jinnah-removebg-preview.png?alt=media&token=62de2d16-5d05-4e1d-953a-3290b97394e7"})):
    lund=="Shaheen Air"?setFormData((dta)=>({...dta,logo:"https://media.licdn.com/dms/image/v2/C4E0BAQHOuf8BMaTYsA/company-logo_200_200/company-logo_200_200/0/1631348094339?e=2147483647&v=beta&t=Oqx4eA6B5vtpFwmlhBpfz2atgwPWvFNaSrg0Pw40xps"})):
    lund=="SereneAir"?setFormData((dta)=>({...dta,logo:"https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/images-removebg-preview.png?alt=media&token=38e9e7cc-db47-4651-b274-64ba04050695"})):
     lund=="Airblue"?setFormData((dta)=>({...dta,logo:"https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/airblue-removebg-preview.png?alt=media&token=d940aea1-97fc-4c8a-9824-9fc59513c8b5"})):"nothing"
      
     
}



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    // Handle form submission logic here
  };

  const renderInput = (name, label, type = 'text') => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        step={type === 'number' ? 'any' : undefined}
      />
    </div>
  );

  const renderDropdown = (name, label, options) => (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Flight Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInput('id', 'ID')}
          {renderDropdown('company', 'Company', [
            'Pakistan International Airlines', 'SereneAir', 'Airblue',
            'Shaheen Air', 'Fly Jinnah', 'Air Sial'
          ])}
          {renderDropdown('takeoffLocation', 'Takeoff Location', [
            'Karachi', 'Multan', 'Islamabad', 'Lahore', 'Quetta'
          ])}
          {renderDropdown('landingLocation', 'Landing Location', [
            'Karachi', 'Multan', 'Islamabad', 'Lahore', 'Quetta'
          ])}
          {renderDropdown('shortTakeoffLocation', 'Short Takeoff Location', [
            'ISB', 'LHE', 'UET', 'KHI', 'PEW', 'MUX'
          ])}
          {renderDropdown('shortLandingLocation', 'Short Landing Location', [
            'ISB', 'LHE', 'UET', 'KHI', 'PEW', 'MUX'
          ])}
           {renderDropdown('flightName', 'Flight Name', [
            'Pakistan International Airlines 101', 'Airblue 202', 'SereneAir 303', 'Air Sial 404', 'Fly Jinnah 606', 'Shaheen Air 707'
          ])}
          {renderInput('takeoffTime', 'Takeoff Time', 'time')}
          {renderInput('landingTime', 'Landing Time', 'time')}
          {renderInput('rating', 'Rating', 'number')}
          {renderInput('price', 'Price', 'number')}
          {renderInput('duration', 'Duration', 'time')}

        
        </div>
        <div className="flex justify-end">
          <button 
        
            type="submit"
            onClick={()=>{Add(formData)}}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
