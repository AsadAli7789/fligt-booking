import "./page6.css"
import { useState,useContext, } from 'react'
import Asad from '../component/Datepicker'
import { Link } from 'react-router-dom'
import Dropdown from "../component/dropdown"
import Card from "../component/card"
import Sort from "../component/sort"
import Example2 from "../component/nav-bar-2"
import {ThemeContext} from '../context/FlightContext'


export default function Page6(){
    const {theme,settheme} = useContext(ThemeContext)
    console.log(theme)


    const [btn2 , setbtn2]= useState("")

    const [btn , setbtn]= useState("")
    const karachiFlights = theme.filter(flight => flight.takeoffLocation.includes(btn) && flight.landingLocation.includes(btn2));
    console.log(btn)
    return<>
    <div className="w-[100vw] bg-[#FAFBFC]">
        <div className="mb-[3vw] w-full bg-white">
            <Example2/>
        </div>
    <div className=' w-[70vw] relative pb-6  rounded-[10px] shadow-custom bg-white mx-auto  '>
 


{/* input wala div */}
<div className='flex lg:flex-row'>
<div className="coolinput mx-9 ">
    <label for="input" className="text">From to Pakistan</label>
    <select name="" id="" className='input1 border border-black' onChange={(e)=>{setbtn(e.target.value)}} >
    <option value=""></option>

      <option value="Karachi">Karachi</option>
      <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
    <option value="Multan">Multan</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Quetta">Quetta</option>
    </select>
</div>



<div className="coolinput1 mx-9">
    <label for="input2" className="text">Trip</label>
    <select name="" id="" className='input2 border border-black'>
        <option value="">trip</option>
    <option value="Karachi">Karachi</option>
      <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
    <option value="Multan">Multan</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Quetta">Quetta</option>
    
    </select>
</div>





<Asad/>


<div className="coolinput mx-9 ">
    <label for="input" className="text">From to Pakistan</label>
    <select name="" id="" className='input1 border border-black' onChange={(e)=>{setbtn2(e.target.value)}} >
    <option value=""></option>

    <option value="Karachi">Karachi</option>
      <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
    <option value="Multan">Multan</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Quetta">Quetta</option>
    
    </select>
</div>

<div>
    <button className="rounded-lg p-4 my-5 bg-[#8DD3BB] mx-9"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9781 13.3281L14.9659 13.3444L14.9803 13.3588L19.3903 17.7688C19.5856 17.9875 19.6898 18.2727 19.6816 18.5658C19.6734 18.8591 19.5532 19.1382 19.3457 19.3457C19.1382 19.5532 18.8591 19.6734 18.5658 19.6816C18.2727 19.6898 17.9875 19.5856 17.7688 19.3903L13.3588 14.9803L13.3444 14.9659L13.3281 14.9781C11.9186 16.0369 10.2029 16.6085 8.44003 16.6066C3.93701 16.6066 0.273438 12.943 0.273438 8.44C0.273438 3.93701 3.93701 0.273438 8.44 0.273438C12.943 0.273438 16.6066 3.93701 16.6066 8.44C16.6085 10.2029 16.0369 11.9186 14.9781 13.3281ZM2.56656 8.44V8.44003C2.56843 9.99718 3.18783 11.49 4.28891 12.5911C5.38998 13.6922 6.88282 14.3116 8.43997 14.3134H8.44C9.60166 14.3134 10.7372 13.969 11.7031 13.3236C12.669 12.6782 13.4218 11.7609 13.8664 10.6877C14.3109 9.61444 14.4272 8.43349 14.2006 7.29415C13.974 6.15481 13.4146 5.10827 12.5931 4.28685C11.7717 3.46544 10.7252 2.90605 9.58585 2.67942C8.44652 2.45279 7.26556 2.56911 6.19233 3.01365C5.1191 3.4582 4.2018 4.21101 3.55642 5.17689C2.91103 6.14278 2.56656 7.27834 2.56656 8.44Z" fill="#112211" stroke="#112211" stroke-width="0.046875"/>
</svg>
</button>
</div>

</div>
 

</div>

<div className="flex border-none border-none-black mx-auto w-fit p-6">
    <div className=" border-none border-none-black p-4"><Dropdown/></div>
    <div className="border-none border-none-black flex flex-col p-6 w-fit">
        <div>

        <Sort/>
        </div>
   
        <div className="h-[1300px] px-4 overflow-scroll mt-4 ">
        {karachiFlights.map((data, ind) => (
  <div className="" key={data.id}>{<Card id={data.id} src={data.logo} rating={data.rating} price={data.price} landingTime={data.landingTime} takeoffTime={data.takeoffTime} company={data.company} shortLandingLocation={data.shortLandingLocation}  shortTakeoffLocation={data.shortTakeoffLocation} duration={data.duration} />}</div>
))}




        </div>
    <button className="border border-black w-full my-4 py-3 bg-[#112211] text-white">show more result</button>    
    </div>
</div>
</div></>
}