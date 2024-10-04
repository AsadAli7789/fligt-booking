import { useState } from "react"
import'./sort.css'
export default  function Sort(){


const [bord , setbord]=useState('first')

    return<>
    
    <div className="w-[43.75vw] border rounded-lg shadow-custom  justify-center  flex">



<div className={bord=="first"?"bord py-5":"trans  py-5"} onClick={()=>{setbord("first")}} >
<div className=" h-full  pr-10 "     >
    <h1>Cheapest</h1>
    <span>$99</span><span>2h 18m</span>
</div>
</div>

<div className="border h-[6.5vh] my-auto mx-5 border-inherit	 mx-5"></div>

<div className={bord=="second"?"bord  py-5":"trans  py-5"} onClick={()=>{setbord("second")}} >
<div className=" h-full  pr-10 ">
    <h1>Best</h1>
    <span>$99</span><span>2h 18m</span>
</div>
</div>
<div className="border border-inherit	 h-[6.5vh] my-auto mx-5 mx-5"></div>

<div className={bord=="third"?"bord  py-5":"trans py-5"} onClick={()=>{setbord("third")}}>
<div className=" h-full  pr-10 ">
    <h1>Quickest</h1>
    <span>$99</span><span>2h 18m</span>
</div>

</div>
<div className="border border-inherit	 h-[6.5vh] my-auto mx-5"></div>

<div  className={bord=="fourth"?"bord  py-5":"trans  py-5"} onClick={()=>{setbord("fourth")}}>
<div className=" h-full  pr-10 flex items-center justify-center ">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 7.5H20.25M3.75 12H20.25M3.75 16.5H20.25" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

    <span className="">Other sort</span>
</div>
</div>
    </div>
    </>
}