import { useState } from "react"
import './dropdrown.css'
import { Slider } from "antd"
import Sllider from "./slider"
export default function Dropdown(){
    
    const [drop ,setdrop] = useState(true)
    const [drop1 ,setdrop1] = useState(true)
    const [drop2 ,setdrop2] = useState(true)
    const [drop3 ,setdrop3] = useState(true)
    const [drop4 ,setdrop4] = useState(true)

    return<>
    

    <div className="w-[17.708vw] bg-transparent">
<hr className="border-[1px]" />
    <div className="border-none-none border-none-black w-[17.708vw] lg:h-[15vh]  xl:h-[10vh]" >
    <div className="  h-8 border-none border-none-black w-[17.708vw] flex justify-between pt-2"   > <h1 className="inline leading-[19px] font-[600] text-[16px]">Price</h1>
<button className=" h-8  " onClick={(event)=>{

event.preventDefault();
if(drop){
setdrop(false)

}
else{
setdrop(true)
}



}}>
    <svg className={drop?"":"rotate-180 "} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 15.5L12 8.75L5.25 15.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>
        <div className={drop== true ?' mt-1 transition h-[4vh] absolute w-[17.708vw]   ':' transition border-none-[2px] border-none-red-900 h-[200px] hidden w-1/2  '} >
        <span className="flex ">
    {/* <input type="range" /> */}
<Sllider />
        </span>
     
        </div>
        </div>


    

        <hr className="border-[1px]" />








        <div className="border-none border-none-black w-[17.708vw] lg:h-[15vh]  xl:h-[10vh]" >
    <div className="  h-8 border-none border-none-black w-[17.708vw] flex justify-between  "   > 
        <h1 className="inline text-[16px] font-[600] leading-[19px] pt-2">Departure Time</h1>
<button className=" h-8  " onClick={(event)=>{

event.preventDefault();
if(drop1){
setdrop1(false)

}
else{
setdrop1(true)
}



}}>
    <svg className={drop?"":"rotate-180 "} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 15.5L12 8.75L5.25 15.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>
        <div className={drop1== true ?' mt-1 transition h-[4vh] absolute w-[17.708vw]   ':' transition border-none-[2px] border-none-red-900 h-[200px] hidden w-1/2  '} >
        <span className="flex ">
    {/* <input type="range" /> */}
<Sllider/>
        </span>
     
        </div>
        </div>




        <hr className="border-[1px]" />
       


        <div className="border-none border-none-black w-[17.708vw] py-3 h-[12vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px] leading-[19px] font-[600]">Rating</h1>
<button className=" h-8  " onClick={(event)=>{

event.preventDefault();
if(drop2){
setdrop2(false)

}
else{
setdrop2(true)
}



}}>
    <svg className={drop2?"":"rotate-180 "} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 15.5L12 8.75L5.25 15.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>
        <div className={drop2== true ?' mt-1 transition border-none-[2px] border-none-red-900 h-[7vh] absolute w-[17.708vw]   ':' transition border-none-[2px] border-none-red-900 h-[200px] hidden w-1/2  '} >
        <div className="flex  ">
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">0</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">1+</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">2+</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">3+</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">4+</button>
        </div>
     
        </div>
        </div>

        <hr className="border-[1px]" />



        <div className="border-none border-none-black w-[17.708vw] py-3 h-[25vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px] leading-[19px] font-[600]">Airlines</h1>
<button className=" h-8  " onClick={(event)=>{

event.preventDefault();
if(drop3){
setdrop3(false)

}
else{
setdrop3(true)
}



}}>
    <svg className={drop3?"":"rotate-180 "} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 15.5L12 8.75L5.25 15.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>
        <div className={drop3== true ?' mt-1 transition  border-none-red-900 h-[4.5vh] absolute w-[17.708vw]   ':' transition border-none-[2px] border-none-red-900 h-[200px] hidden w-1/2  '} >
        
        <span className="flex my-auto text-[20px]  items-center   ">

    <input type="checkbox" className="  ml-3" /><span className="px-2 ">Emirated</span>

        </span>
        <span className="flex my-auto text-[20px] items-center   ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">Fly Dubai</span>

    </span>  
<span className="flex my-auto text-[20px] items-center    ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">Qatar</span>

    </span>  
<span className="flex my-auto text-[20px] items-center   ">

<input type="checkbox" className=" ml-3" /><span className="px-2 ">Etihad</span>

    </span>
        </div>
        </div>



        <hr className="border-[1px]" />

        
        <div className="border-none border-none-black w-[17.708vw] py-3 h-[27vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px] leading-[19px] font-[600]">Trips</h1>
<button className=" h-8  " onClick={(event)=>{

event.preventDefault();
if(drop4){
setdrop4(false)

}
else{
setdrop4(true)
}



}}>
    <svg className={drop4?"":"rotate-180 "} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 15.5L12 8.75L5.25 15.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>
        <div className={drop4== true ?' mt-1 transition  border-none-red-900 h-[4.5vh] absolute w-[17.708vw]   ':' transition border-none-[2px] border-none-red-900 h-[200px] hidden w-1/2  '} >
        
        <span className="flex my-auto text-[20px]  items-center   ">

    <input type="checkbox" className="  ml-3" /><span className="px-2 ">Round trip</span>

        </span>
        <span className="flex my-auto text-[20px] items-center   ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">On Way</span>

    </span>  
<span className="flex my-auto text-[20px] items-center    ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">Multi-city</span>

    </span>  
<span className="flex my-auto text-[20px] items-center   ">

<input type="checkbox" className=" ml-3" /><span className="px-2 ">My Dates Are Flexible</span>

    </span>
        </div>
        </div>



        <hr className="border-[1px]" />




    </div>
    </>
}