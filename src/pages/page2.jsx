import Asad from "../component/Datepicker";
import Example from "../component/nav-bar";
import { useState,useContext } from "react";
import './page2.css'
import Footer from "../component/footer";
import Sec5 from "../component/sec5";
import Sec6 from "../component/sec6";
import { AuthContext } from "../context/UserContext";
import Example2 from "../component/nav-bar-2";


export default function Page2(){
  const {user1,setUser1} = useContext(AuthContext)
  const length = Object.keys(user1).length;
console.log(length)
console.log(user1)
    const [btn , setbtn]= useState(true)

    return<>
<div>
  {
  length==0?<Example/>:<Example2/>}

</div>


<div className="border border-black w-[100vw] lg:h-[60vh]  " id="page2">

<div className="  lg:w-1/4 lg:h-2/4 z-10 relative lg:m-[9vw] ">
    <h1 className="lg:text-[50px]   lg:leading-[55px] text-white lg:font-[600]">Make your travel whishlist, we’ll do the rest</h1>
    <h1 className="lg:text-[30px]  my-2 lg:leading-[40px] text-white lg:font-[500]">Special offers to suit your plan</h1>
</div>
</div>

<div className='mb-10 w-[70vw] relative mt-[-15vh] pb-6  rounded-[10px] shadow-custom bg-white mx-auto  rounded-[30p]'>
    <div className='navbar'>
<div className="navbar-start mt-3">
  <button id='centeredbutton' className={btn==true?"btn1 h-[4.8vh] ":" h-[4.8vh] "}  onClick={()=>{setbtn(true)}} >
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.74733 21.75H7.49952C7.37414 21.75 7.25077 21.7185 7.14069 21.6585C7.03062 21.5984 6.93735 21.5118 6.86941 21.4064C6.80147 21.301 6.76104 21.1803 6.7518 21.0552C6.74257 20.9302 6.76483 20.8048 6.81655 20.6906L9.83811 14.0227L5.30108 13.9219L3.64639 15.9267C3.33092 16.3233 3.07921 16.5 2.43702 16.5H1.59702C1.46402 16.5043 1.33195 16.4764 1.212 16.4188C1.09205 16.3612 0.987757 16.2755 0.907956 16.1691C0.796393 16.0186 0.686706 15.7636 0.793581 15.3998L1.72264 12.0717C1.72967 12.0469 1.73811 12.022 1.74749 11.9977C1.74795 11.9953 1.74795 11.9929 1.74749 11.9906C1.73781 11.9663 1.72951 11.9414 1.72264 11.9161L0.792643 8.56687C0.691862 8.21016 0.802018 7.96078 0.912643 7.81406C0.986929 7.71549 1.08331 7.63573 1.19403 7.58118C1.30475 7.52664 1.42672 7.49883 1.55014 7.5H2.43702C2.91655 7.5 3.38202 7.71516 3.65577 8.0625L5.27624 10.0336L9.83811 9.96609L6.81749 3.30984C6.7657 3.19568 6.74335 3.07036 6.75249 2.94533C6.76163 2.8203 6.80196 2.69956 6.8698 2.59414C6.93764 2.48872 7.03082 2.40198 7.14083 2.34186C7.25083 2.28175 7.37416 2.25016 7.49952 2.25H8.76092C8.9369 2.25354 9.10983 2.29667 9.26685 2.3762C9.42388 2.45572 9.56097 2.5696 9.66796 2.70937L15.5297 9.83438L18.2376 9.76312C18.4359 9.75234 18.9853 9.74859 19.1123 9.74859C21.7026 9.75 23.2495 10.5909 23.2495 12C23.2495 12.4434 23.0723 13.2656 21.8869 13.7887C21.187 14.0981 20.2533 14.2547 19.1114 14.2547C18.9858 14.2547 18.4378 14.2509 18.2367 14.2402L15.5292 14.168L9.65296 21.293C9.54588 21.4321 9.40891 21.5454 9.25216 21.6246C9.0954 21.7037 8.92288 21.7465 8.74733 21.75Z" fill="#112211"/>
</svg>


<span className='text-[16px]'>find flight</span>
  </button>
  <div className='border h-[5vh] border-current mx-[2vw]'></div>
    <button  id='centeredbutton' className={btn==false?"btn1 h-[4.8vh]   ":" h-[4.8vh] "} onClick={()=>{setbtn(false)}} >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 10.8141C19.7772 10.6065 19.2664 10.4996 18.75 10.5H5.25C4.73368 10.4995 4.22288 10.6063 3.75 10.8136C3.08166 11.1059 2.51294 11.5865 2.11336 12.1968C1.71377 12.8071 1.50064 13.5205 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00122 19.0259 3.04112 18.9312 3.11118 18.8612C3.18124 18.7911 3.27592 18.7512 3.375 18.75H20.625C20.7241 18.7512 20.8188 18.7911 20.8888 18.8612C20.9589 18.9312 20.9988 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8073 21.8865 12.1971C21.4869 11.5869 20.9183 11.1063 20.25 10.8141ZM17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51884 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.75002 9.77906 3.75679 9.80771 3.76979 9.8337C3.78278 9.85969 3.80163 9.8823 3.82486 9.89976C3.84809 9.91721 3.87505 9.92903 3.90363 9.93428C3.93221 9.93953 3.96162 9.93806 3.98953 9.93C4.39896 9.81025 4.82341 9.74964 5.25 9.75H5.44828C5.49456 9.75029 5.53932 9.73346 5.57393 9.70274C5.60855 9.67202 5.63058 9.62958 5.63578 9.58359C5.67669 9.21712 5.85115 8.87856 6.12586 8.63256C6.40056 8.38656 6.75625 8.25037 7.125 8.25H9.75C10.119 8.25003 10.475 8.38606 10.75 8.63209C11.025 8.87812 11.1997 9.21688 11.2406 9.58359C11.2458 9.62958 11.2679 9.67202 11.3025 9.70274C11.3371 9.73346 11.3818 9.75029 11.4281 9.75H12.5747C12.621 9.75029 12.6657 9.73346 12.7003 9.70274C12.735 9.67202 12.757 9.62958 12.7622 9.58359C12.8031 9.21736 12.9773 8.87899 13.2517 8.63303C13.5261 8.38706 13.8815 8.25072 14.25 8.25H16.875C17.244 8.25003 17.6 8.38606 17.875 8.63209C18.15 8.87812 18.3247 9.21688 18.3656 9.58359C18.3708 9.62958 18.3929 9.67202 18.4275 9.70274C18.4621 9.73346 18.5068 9.75029 18.5531 9.75H18.75C19.1766 9.74979 19.6011 9.81057 20.0105 9.93047C20.0384 9.93854 20.0679 9.94 20.0965 9.93473C20.1251 9.92945 20.1521 9.91759 20.1753 9.90009C20.1986 9.88258 20.2174 9.8599 20.2304 9.83385C20.2433 9.8078 20.2501 9.7791 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z" fill="#112211"/>
</svg>

<span className='text-[16px]'>Find stays</span>
</button>
 
  </div>
  
</div>


{/* input wala div */}
<div className='flex lg:flex-row'>
<div className="coolinput mx-auto">
    <label for="input" className="text">From to Pakistan</label>
    <select name="" id="" className='input1 border border-black'>
      <option value="asad">asad</option>
    </select>
</div>



<div className="coolinput1 mx-auto">
    <label for="input2" className="text">Trip</label>
    <select name="" id="" className='input2 border border-black'>
      
      <option value="asad">asad</option>
    </select>
</div>





<Asad/>


<div className="coolinput mx-auto">
    <label for="input" className="text">From to Pakistan</label>
    <select name="" id="" className='input1 border border-black'>
      <option value="asad">asad</option>
    </select>
</div>


</div>
 <div className='  mt-6'>
  <div className='flex justify-end'>
    <button className='flex  py-[1vh] px-1'><svg className='mt-2 mr-2 ' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.5V10.5V1.5ZM10.5 6H1.5H10.5Z" fill="#112211"/>
<path d="M6 1.5V10.5M10.5 6H1.5" stroke="#112211" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Add Promo Code</button>
    <button className='flex  rounded-sm py-[1.2vh] px-[1vw] mr-4 bg-[#8DD3BB] ml-2 '><svg className='mt-[5px] mr-1 '  width="14"  height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.46858 13.9999H8.49983C8.65427 14.0008 8.80542 13.9552 8.9336 13.8691C9.06178 13.7829 9.16108 13.6602 9.21858 13.5168L9.19666 13.5085L9.19674 13.5083C9.14098 13.6472 9.04474 13.7661 8.92052 13.8496C8.79624 13.9331 8.64971 13.9774 8.49996 13.9765H8.49983H8.4691M8.46858 13.9999L8.46963 13.9765C8.46945 13.9765 8.46928 13.9765 8.4691 13.9765M8.46858 13.9999V13.9765H8.4691M8.46858 13.9999L8.4691 13.9765M8.4691 13.9765C8.17379 13.963 7.92874 13.7657 7.83168 13.4845L7.83151 13.484C7.82949 13.4786 7.82777 13.4734 7.82603 13.4676L7.82617 13.4675L7.82513 13.4651L5.99283 9.17318C5.96895 9.09376 5.9662 9.00949 5.98487 8.92868C6.00363 8.84747 6.04336 8.7726 6.1001 8.71155L8.4691 13.9765ZM13.7645 0.236791C13.8636 0.33626 13.9317 0.462305 13.9607 0.599682C13.9896 0.737059 13.9781 0.879884 13.9276 1.01088L13.9276 1.01102L9.19683 13.5081L6.10012 8.71152L12.5164 1.82901C12.5165 1.82891 12.5166 1.82882 12.5167 1.82872C12.5393 1.80608 12.5572 1.77924 12.5694 1.74972C12.5817 1.72007 12.588 1.68829 12.588 1.65619C12.588 1.62409 12.5817 1.59231 12.5694 1.56266C12.5571 1.533 12.5391 1.50606 12.5164 1.48337C12.4937 1.46067 12.4668 1.44267 12.4371 1.43038C12.4075 1.4181 12.3757 1.41178 12.3436 1.41178C12.3115 1.41178 12.2797 1.4181 12.25 1.43038C12.2205 1.44261 12.1937 1.46051 12.1711 1.48307C12.171 1.48317 12.1709 1.48327 12.1708 1.48337L5.28512 7.89933C5.22406 7.95608 5.14918 7.99582 5.06797 8.01458C4.98716 8.03325 4.90288 8.03051 4.82347 8.00663L0.534033 6.17495L0.534076 6.17485L0.531912 6.17416L0.519453 6.17021C0.519391 6.17019 0.519329 6.17017 0.519268 6.17015C0.377472 6.12266 0.25378 6.03258 0.165074 5.91219C0.0763296 5.79175 0.0269276 5.64685 0.0236156 5.49728C0.0203037 5.34771 0.0632432 5.20077 0.14657 5.07652C0.228717 4.95403 0.346169 4.85948 0.483266 4.80537V4.80625L0.491562 4.80311L12.9925 0.0715461L12.9925 0.0715329C13.1235 0.0217435 13.266 0.0108564 13.4029 0.0401821C13.5399 0.0695044 13.6654 0.13778 13.7645 0.236791ZM13.7645 0.236791C13.7645 0.236803 13.7645 0.236814 13.7645 0.236826L13.7811 0.220251L13.7645 0.236791Z" fill="black" stroke="#112211" stroke-width="0.046875"/>
</svg>

Show Filghts</button>
  </div>
 </div>

</div>
<div className=" flex w-[70vw] mt-[10vh] mx-auto justify-between">
    <div>
        <h1 className="lg:text-[32px]   lg:leading-[40px] text-black lg:font-[600]">Let's go places together</h1>
        <h1 className="lg:text-[16px]   lg:leading-[19px] text-black lg:font-[500]">Discover the latest offers and news and start planning your next trip with us.</h1>
    </div>
    <div><button className="border border-black px-4 py-4">See All</button></div>
</div>
<div id="kol" className="w-[100vw] mt-10 h-[64vh]">

</div>
<div className="my-[6vh]">

<Sec5/>
</div>
<div className="my-[6vh]">

<Sec6/>
</div>


<div className="mt-[6vh]">

<Footer/>
</div>

    </>
}