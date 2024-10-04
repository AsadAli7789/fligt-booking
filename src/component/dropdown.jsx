import { useState } from "react"
import './dropdrown.css'
import { Slider } from "antd"
export default function Dropdown(){
    
    const [drop ,setdrop] = useState(true)
    return<>
    

    <div>

   <div className="border border-black w-[17.708vw]  py-3 h-[15vh] " >
    <div className="border  border-black  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline">Price</h1>
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
        <div className={drop== true ?' mt-1 transition border-[2px] border-red-900 h-[4.5vh] absolute w-[17.708vw]   ':' transition border-[2px] border-red-900 h-[200px] hidden w-1/2  '} >
        <span className="flex mt-3">
    <input type="range" />

        </span>
     
        </div>
        </div>

    










        <div className="border border-black w-[17.708vw] py-3 h-[12vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px]">Departure Time</h1>
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
        <div className={drop== true ?' mt-1 transition border-[2px] border-red-900 h-[4.5vh] absolute w-[17.708vw]   ':' transition border-[2px] border-red-900 h-[200px] hidden w-1/2  '} >
        <span className="flex mt-3">
    <input type="range" />

        </span>
     
        </div>
        </div>

    




        <div className="border border-black w-[17.708vw] py-3 h-[12vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px]">Departure Time</h1>
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
        <div className={drop== true ?' mt-1 transition border-[2px] border-red-900 h-[4.5vh] absolute w-[17.708vw]   ':' transition border-[2px] border-red-900 h-[200px] hidden w-1/2  '} >
        <span className="flex mt-3">
    <input type="range" />

        </span>
     
        </div>
        </div>



        <div className="border border-black w-[17.708vw] py-3 h-[12vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px]">Departure Time</h1>
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
        <div className={drop== true ?' mt-1 transition border-[2px] border-red-900 h-[7vh] absolute w-[17.708vw]   ':' transition border-[2px] border-red-900 h-[200px] hidden w-1/2  '} >
        <div className="flex  ">
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">0</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">1+</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">2+</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">3+</button>
    <button className="border border-black px-[.8vw] mx-auto my-2 rounded-[5px] py-[.5vh] ">4+</button>
        </div>
     
        </div>
        </div>





        <div className="border border-black w-[17.708vw] py-3 h-[25vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px]">Airlines</h1>
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
        <div className={drop== true ?' mt-1 transition  border-red-900 h-[4.5vh] absolute w-[17.708vw]   ':' transition border-[2px] border-red-900 h-[200px] hidden w-1/2  '} >
        
        <span className="flex my-auto text-[20px]  items-center py-1  ">

    <input type="checkbox" className="  ml-3" /><span className="px-2 ">Emirated</span>

        </span>
        <span className="flex my-auto text-[20px] items-center py-1  ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">Fly Dubai</span>

    </span>  
<span className="flex my-auto text-[20px] items-center  py-1  ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">Qatar</span>

    </span>  
<span className="flex my-auto text-[20px] items-center  py-1 ">

<input type="checkbox" className=" ml-3" /><span className="px-2 ">Etihad</span>

    </span>
        </div>
        </div>





        
        <div className="border border-black w-[17.708vw] py-3 h-[27vh]" >
    <div className="  h-8 w-[17.708vw] flex justify-between"   > <h1 className="inline text-[16px]">Airlines</h1>
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
        <div className={drop== true ?' mt-1 transition  border-red-900 h-[4.5vh] absolute w-[17.708vw]   ':' transition border-[2px] border-red-900 h-[200px] hidden w-1/2  '} >
        
        <span className="flex my-auto text-[20px]  items-center py-1  ">

    <input type="checkbox" className="  ml-3" /><span className="px-2 ">Emirated</span>

        </span>
        <span className="flex my-auto text-[20px] items-center py-1  ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">Fly Dubai</span>

    </span>  
<span className="flex my-auto text-[20px] items-center  py-1  ">

<input type="checkbox" className="   ml-3" /><span className="px-2 ">Qatar</span>

    </span>  
<span className="flex my-auto text-[20px] items-center  py-1 ">

<input type="checkbox" className=" ml-3" /><span className="px-2 ">Etihad</span>

    </span>
        </div>
        </div>








    </div>
    </>
}