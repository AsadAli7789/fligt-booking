import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const flightsInPakistan = [
        { 
            id: 1, 
            flightName: "Pakistan International Airlines 101", 
            company: "Pakistan International Airlines", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/iamge-removebg-preview.png?alt=media&token=7ba59762-d1d7-46b2-a732-1b8bbe0a8d35",
            takeoffLocation: "Karachi", 
            landingLocation: "Lahore", 
            shortTakeoffLocation: "KHI", // Short form for Karachi
            shortLandingLocation: "LHE", // Short form for Lahore
            takeoffTime: "08:00 AM", 
            landingTime: "09:30 AM", 
            rating: 4.5, 
            price: 150, 
            duration: "1h 30m" 
        },
        { 
            id: 2, 
            flightName: "Airblue 202", 
            company: "Airblue", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/airblue-removebg-preview.png?alt=media&token=d940aea1-97fc-4c8a-9824-9fc59513c8b5",
            takeoffLocation: "Islamabad", 
            landingLocation: "Karachi", 
            shortTakeoffLocation: "ISB", // Short form for Islamabad
            shortLandingLocation: "KHI", // Short form for Karachi
            takeoffTime: "02:00 PM", 
            landingTime: "03:30 PM", 
            rating: 4.2, 
            price: 120, 
            duration: "1h 30m" 
        },
        { 
            id: 3, 
            flightName: "SereneAir 303", 
            company: "SereneAir", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/images-removebg-preview.png?alt=media&token=38e9e7cc-db47-4651-b274-64ba04050695",
            takeoffLocation: "Lahore", 
            landingLocation: "Peshawar", 
            shortTakeoffLocation: "LHE", // Short form for Lahore
            shortLandingLocation: "PEW", // Short form for Peshawar
            takeoffTime: "10:00 AM", 
            landingTime: "11:00 AM", 
            rating: 4.6, 
            price: 100, 
            duration: "1h 0m" 
        },
        { 
            id: 4, 
            flightName: "Air Sial 404", 
            company: "Air Sial", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/Air-Sial-removebg-preview.png?alt=media&token=fb422fa1-6cbe-405f-a2ef-48ad7f022dcc",
            takeoffLocation: "Multan", 
            landingLocation: "Karachi", 
            shortTakeoffLocation: "MUX", // Short form for Multan
            shortLandingLocation: "KHI", // Short form for Karachi
            takeoffTime: "04:00 PM", 
            landingTime: "05:00 PM", 
            rating: 4.1, 
            price: 140, 
            duration: "1h 0m" 
        },
        { 
            id: 5, 
            flightName: "Pakistan International Airlines 505", 
            company: "Pakistan International Airlines", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/iamge-removebg-preview.png?alt=media&token=7ba59762-d1d7-46b2-a732-1b8bbe0a8d35",
            takeoffLocation: "Karachi", 
            landingLocation: "Islamabad", 
            shortTakeoffLocation: "KHI", // Short form for Karachi
            shortLandingLocation: "ISB", // Short form for Islamabad
            takeoffTime: "09:00 AM", 
            landingTime: "10:30 AM", 
            rating: 4.7, 
            price: 160, 
            duration: "1h 30m" 
        },
        { 
            id: 6, 
            flightName: "Fly Jinnah 606", 
            company: "Fly Jinnah", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/fly_jinnah-removebg-preview.png?alt=media&token=62de2d16-5d05-4e1d-953a-3290b97394e7",
            takeoffLocation: "Karachi", 
            landingLocation: "Lahore", 
            shortTakeoffLocation: "KHI", // Short form for Karachi
            shortLandingLocation: "LHE", // Short form for Lahore
            takeoffTime: "11:00 AM", 
            landingTime: "12:30 PM", 
            rating: 4.4, 
            price: 130, 
            duration: "1h 30m" 
        },
        { 
            id: 7, 
            flightName: "Shaheen Air 707", 
            company: "Shaheen Air", 
            logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHOuf8BMaTYsA/company-logo_200_200/company-logo_200_200/0/1631348094339?e=2147483647&v=beta&t=Oqx4eA6B5vtpFwmlhBpfz2atgwPWvFNaSrg0Pw40xps",
            takeoffLocation: "Peshawar", 
            landingLocation: "Islamabad", 
            shortTakeoffLocation: "PEW", // Short form for Peshawar
            shortLandingLocation: "ISB", // Short form for Islamabad
            takeoffTime: "03:30 PM", 
            landingTime: "04:00 PM", 
            rating: 4.0, 
            price: 90, 
            duration: "0h 30m" 
        },
        { 
            id: 8, 
            flightName: "Pakistan International Airlines 808", 
            company: "Pakistan International Airlines", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/iamge-removebg-preview.png?alt=media&token=7ba59762-d1d7-46b2-a732-1b8bbe0a8d35",
            takeoffLocation: "Lahore", 
            landingLocation: "Karachi", 
            shortTakeoffLocation: "LHE", // Short form for Lahore
            shortLandingLocation: "KHI", // Short form for Karachi
            takeoffTime: "06:00 PM", 
            landingTime: "07:30 PM", 
            rating: 4.3, 
            price: 170, 
            duration: "1h 30m" 
        },
        { 
            id: 9, 
            flightName: "SereneAir 909", 
            company: "SereneAir", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/images-removebg-preview.png?alt=media&token=38e9e7cc-db47-4651-b274-64ba04050695",
            takeoffLocation: "Karachi", 
            landingLocation: "Quetta", 
            shortTakeoffLocation: "KHI", // Short form for Karachi
            shortLandingLocation: "UET", // Short form for Quetta
            takeoffTime: "07:30 AM", 
            landingTime: "09:00 AM", 
            rating: 4.2, 
            price: 150, 
            duration: "1h 30m" 
        },
        { 
            id: 10, 
            flightName: "Airblue 1010", 
            company: "Airblue", 
            logo: "https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/airblue-removebg-preview.png?alt=media&token=d940aea1-97fc-4c8a-9824-9fc59513c8b5",
            takeoffLocation: "Islamabad", 
            landingLocation: "Lahore", 
            shortTakeoffLocation: "ISB", // Short form for Islamabad
            shortLandingLocation: "LHE", // Short form for Lahore
            takeoffTime: "12:00 PM", 
            landingTime: "01:30 PM", 
            rating: 4.5, 
            price: 110, 
            duration: "1h 30m" 
        }
    ];
    
    

  const [theme, setTheme] = useState(flightsInPakistan);

//   useEffect(() => {
//     setTheme(flightsInPakistan);
//   }, []);
//   console.log(theme)

  return (
    <ThemeContext.Provider value={{ theme ,setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
