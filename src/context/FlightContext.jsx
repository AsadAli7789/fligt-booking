


import { createContext, useState } from "react";

export const ThemeContext = createContext();




function ThemeContextProvider({ children }) {
    const flights = [
        { flightName: "Air Express 101", company: "Air Express", takeoffLocation: "New York (JFK)", landingLocation: "Los Angeles (LAX)", takeoffTime: "2024-10-10T08:00:00", landingTime: "2024-10-10T11:30:00", rating: 4.5, price: 350, duration: "6h 30m" },
        { flightName: "Skyway 202", company: "Skyway Airlines", takeoffLocation: "Chicago (ORD)", landingLocation: "Miami (MIA)", takeoffTime: "2024-10-11T09:00:00", landingTime: "2024-10-11T12:00:00", rating: 4.0, price: 250, duration: "3h 0m" },
        { flightName: "Oceanic Airlines 303", company: "Oceanic Airlines", takeoffLocation: "San Francisco (SFO)", landingLocation: "Seattle (SEA)", takeoffTime: "2024-10-12T14:00:00", landingTime: "2024-10-12T16:00:00", rating: 4.8, price: 150, duration: "2h 0m" },
        { flightName: "JetStream 404", company: "JetStream Airlines", takeoffLocation: "Dallas (DFW)", landingLocation: "Boston (BOS)", takeoffTime: "2024-10-13T07:30:00", landingTime: "2024-10-13T12:00:00", rating: 4.2, price: 280, duration: "4h 30m" },
        { flightName: "Global Air 505", company: "Global Air", takeoffLocation: "Atlanta (ATL)", landingLocation: "New York (JFK)", takeoffTime: "2024-10-14T15:00:00", landingTime: "2024-10-14T17:00:00", rating: 4.7, price: 200, duration: "2h 0m" },
        { flightName: "Skyline 606", company: "Skyline Airlines", takeoffLocation: "Denver (DEN)", landingLocation: "San Diego (SAN)", takeoffTime: "2024-10-15T10:00:00", landingTime: "2024-10-15T12:30:00", rating: 4.3, price: 220, duration: "2h 30m" },
        { flightName: "Pacific Air 707", company: "Pacific Air", takeoffLocation: "Houston (IAH)", landingLocation: "Phoenix (PHX)", takeoffTime: "2024-10-16T09:00:00", landingTime: "2024-10-16T10:30:00", rating: 4.6, price: 180, duration: "1h 30m" },
        { flightName: "Northwest 808", company: "Northwest Airlines", takeoffLocation: "Seattle (SEA)", landingLocation: "Chicago (ORD)", takeoffTime: "2024-10-17T13:00:00", landingTime: "2024-10-17T19:00:00", rating: 4.4, price: 290, duration: "5h 0m" },
        { flightName: "Sunset Airlines 909", company: "Sunset Airlines", takeoffLocation: "Las Vegas (LAS)", landingLocation: "San Francisco (SFO)", takeoffTime: "2024-10-18T16:00:00", landingTime: "2024-10-18T17:00:00", rating: 4.5, price: 200, duration: "1h 0m" },
        { flightName: "Midwest Airlines 1010", company: "Midwest Airlines", takeoffLocation: "Detroit (DTW)", landingLocation: "Newark (EWR)", takeoffTime: "2024-10-19T14:00:00", landingTime: "2024-10-19T16:00:00", rating: 4.1, price: 260, duration: "2h 0m" },
        { flightName: "East Coast 1111", company: "East Coast Airlines", takeoffLocation: "Boston (BOS)", landingLocation: "Washington D.C. (DCA)", takeoffTime: "2024-10-20T09:00:00", landingTime: "2024-10-20T10:00:00", rating: 4.3, price: 150, duration: "1h 0m" },
        { flightName: "Alaska Air 1212", company: "Alaska Airlines", takeoffLocation: "Anchorage (ANC)", landingLocation: "Juneau (JNU)", takeoffTime: "2024-10-21T11:00:00", landingTime: "2024-10-21T12:00:00", rating: 4.7, price: 120, duration: "1h 0m" },
        { flightName: "Caribbean Air 1313", company: "Caribbean Airlines", takeoffLocation: "Miami (MIA)", landingLocation: "Bahamas (NAS)", takeoffTime: "2024-10-22T13:00:00", landingTime: "2024-10-22T14:00:00", rating: 4.8, price: 300, duration: "1h 0m" },
        { flightName: "Skyway 1414", company: "Skyway Airlines", takeoffLocation: "Los Angeles (LAX)", landingLocation: "Las Vegas (LAS)", takeoffTime: "2024-10-23T17:00:00", landingTime: "2024-10-23T18:00:00", rating: 4.5, price: 150, duration: "1h 0m" },
        { flightName: "JetBlue 1515", company: "JetBlue Airways", takeoffLocation: "New York (JFK)", landingLocation: "San Juan (SJU)", takeoffTime: "2024-10-24T09:00:00", landingTime: "2024-10-24T13:00:00", rating: 4.6, price: 320, duration: "4h 0m" },
        { flightName: "Southwest 1616", company: "Southwest Airlines", takeoffLocation: "San Antonio (SAT)", landingLocation: "Dallas (DFW)", takeoffTime: "2024-10-25T08:00:00", landingTime: "2024-10-25T09:00:00", rating: 4.2, price: 80, duration: "1h 0m" },
        { flightName: "Allegiant 1717", company: "Allegiant Air", takeoffLocation: "Orlando (MCO)", landingLocation: "Tampa (TPA)", takeoffTime: "2024-10-26T12:00:00", landingTime: "2024-10-26T12:30:00", rating: 4.1, price: 75, duration: "0h 30m" },
        { flightName: "Frontier 1818", company: "Frontier Airlines", takeoffLocation: "Denver (DEN)", landingLocation: "Phoenix (PHX)", takeoffTime: "2024-10-27T14:00:00", landingTime: "2024-10-27T15:30:00", rating: 4.0, price: 120, duration: "1h 30m" },
        { flightName: "Spirit 1919", company: "Spirit Airlines", takeoffLocation: "Fort Lauderdale (FLL)", landingLocation: "Atlanta (ATL)", takeoffTime: "2024-10-28T16:00:00", landingTime: "2024-10-28T18:00:00", rating: 3.9, price: 100, duration: "2h 0m" },
        { flightName: "Delta 2020", company: "Delta Airlines", takeoffLocation: "New York (JFK)", landingLocation: "Seattle (SEA)", takeoffTime: "2024-10-29T11:00:00", landingTime: "2024-10-29T14:00:00", rating: 4.6, price: 450, duration: "6h 0m" },
        { flightName: "United 2121", company: "United Airlines", takeoffLocation: "San Francisco (SFO)", landingLocation: "Chicago (ORD)", takeoffTime: "2024-10-30T13:00:00", landingTime: "2024-10-30T19:00:00", rating: 4.3, price: 300, duration: "4h 0m" }
    ];
  const [theme, setTheme] = useState([]);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;