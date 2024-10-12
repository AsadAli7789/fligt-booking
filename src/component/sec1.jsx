import './sec1.css'
import { useState } from 'react'
import Asad from './Datepicker'
import { Link } from 'react-router-dom'


export default function Sec1(){
    const [btn , setbtn]= useState(true)
    return(
    
    <>
    
    <div  id='sec1'
    className=' mt-5 flex flex-col  lg:h-[65vh] rounded-[30px] xl:w-[90vw] mx-auto'
    >

<div>
    <div className="navbar w-full mx-auto  bg-base-100 bg-transparent">
  <div className="navbar-start mt-3">
  <Link to={"/page2"}>
  <button id='centered-button' className="   h-[4.8vh] mx-3  "  >
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.74733 21.75H7.49952C7.37414 21.75 7.25077 21.7185 7.14069 21.6585C7.03062 21.5984 6.93735 21.5118 6.86941 21.4064C6.80147 21.301 6.76104 21.1803 6.7518 21.0552C6.74257 20.9302 6.76483 20.8048 6.81655 20.6906L9.83811 14.0227L5.30108 13.9219L3.64639 15.9267C3.33092 16.3233 3.07921 16.5 2.43702 16.5H1.59702C1.46402 16.5043 1.33195 16.4764 1.212 16.4188C1.09205 16.3612 0.987757 16.2755 0.907956 16.1691C0.796393 16.0186 0.686706 15.7636 0.793581 15.3998L1.72264 12.0717C1.72967 12.0469 1.73811 12.022 1.74749 11.9977C1.74795 11.9953 1.74795 11.9929 1.74749 11.9906C1.73781 11.9663 1.72951 11.9414 1.72264 11.9161L0.792643 8.56687C0.691862 8.21016 0.802018 7.96078 0.912643 7.81406C0.986929 7.71549 1.08331 7.63573 1.19403 7.58118C1.30475 7.52664 1.42672 7.49883 1.55014 7.5H2.43702C2.91655 7.5 3.38202 7.71516 3.65577 8.0625L5.27624 10.0336L9.83811 9.96609L6.81749 3.30984C6.7657 3.19568 6.74335 3.07036 6.75249 2.94533C6.76163 2.8203 6.80196 2.69956 6.8698 2.59414C6.93764 2.48872 7.03082 2.40198 7.14083 2.34186C7.25083 2.28175 7.37416 2.25016 7.49952 2.25H8.76092C8.9369 2.25354 9.10983 2.29667 9.26685 2.3762C9.42388 2.45572 9.56097 2.5696 9.66796 2.70937L15.5297 9.83438L18.2376 9.76312C18.4359 9.75234 18.9853 9.74859 19.1123 9.74859C21.7026 9.75 23.2495 10.5909 23.2495 12C23.2495 12.4434 23.0723 13.2656 21.8869 13.7887C21.187 14.0981 20.2533 14.2547 19.1114 14.2547C18.9858 14.2547 18.4378 14.2509 18.2367 14.2402L15.5292 14.168L9.65296 21.293C9.54588 21.4321 9.40891 21.5454 9.25216 21.6246C9.0954 21.7037 8.92288 21.7465 8.74733 21.75Z" fill="white"/>
</svg>


<span className='text-white'>find flight</span>
  </button>
  </Link>
    <button  id='centered-button' className="   h-[4.8vh] mx-3  " >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.25 10.8141C19.7772 10.6065 19.2664 10.4996 18.75 10.5H5.25C4.73368 10.4995 4.22288 10.6063 3.75 10.8136C3.08166 11.1059 2.51294 11.5865 2.11336 12.1968C1.71377 12.8071 1.50064 13.5205 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00122 19.0259 3.04112 18.9312 3.11118 18.8612C3.18124 18.7911 3.27592 18.7512 3.375 18.75H20.625C20.7241 18.7512 20.8188 18.7911 20.8888 18.8612C20.9589 18.9312 20.9988 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8073 21.8865 12.1971C21.4869 11.5869 20.9183 11.1063 20.25 10.8141ZM17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51884 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.75002 9.77906 3.75679 9.80771 3.76979 9.8337C3.78278 9.85969 3.80163 9.8823 3.82486 9.89976C3.84809 9.91721 3.87505 9.92903 3.90363 9.93428C3.93221 9.93953 3.96162 9.93806 3.98953 9.93C4.39896 9.81025 4.82341 9.74964 5.25 9.75H5.44828C5.49456 9.75029 5.53932 9.73346 5.57393 9.70274C5.60855 9.67202 5.63058 9.62958 5.63578 9.58359C5.67669 9.21712 5.85115 8.87856 6.12586 8.63256C6.40056 8.38656 6.75625 8.25037 7.125 8.25H9.75C10.119 8.25003 10.475 8.38606 10.75 8.63209C11.025 8.87812 11.1997 9.21688 11.2406 9.58359C11.2458 9.62958 11.2679 9.67202 11.3025 9.70274C11.3371 9.73346 11.3818 9.75029 11.4281 9.75H12.5747C12.621 9.75029 12.6657 9.73346 12.7003 9.70274C12.735 9.67202 12.757 9.62958 12.7622 9.58359C12.8031 9.21736 12.9773 8.87899 13.2517 8.63303C13.5261 8.38706 13.8815 8.25072 14.25 8.25H16.875C17.244 8.25003 17.6 8.38606 17.875 8.63209C18.15 8.87812 18.3247 9.21688 18.3656 9.58359C18.3708 9.62958 18.3929 9.67202 18.4275 9.70274C18.4621 9.73346 18.5068 9.75029 18.5531 9.75H18.75C19.1766 9.74979 19.6011 9.81057 20.0105 9.93047C20.0384 9.93854 20.0679 9.94 20.0965 9.93473C20.1251 9.92945 20.1521 9.91759 20.1753 9.90009C20.1986 9.88258 20.2174 9.8599 20.2304 9.83385C20.2433 9.8078 20.2501 9.7791 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z" fill="white"/>
</svg>

<span className='text-white'>Find stays</span>
</button>
 
  </div>
  <div className="navbar-center">
  <svg width="111" height="36" viewBox="0 0 111 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7282 5.57669L17.9466 8.00813L15.9805 10.5097C17.3379 12.0457 17.8382 13.7983 17.8382 15.7295C17.8382 17.9092 17.0161 20.9843 14.1195 22.3068C17.0512 23.7727 17.7649 25.8823 17.7649 28.1352C17.7649 32.9981 14.0463 36 8.93505 36C3.82384 36 0 32.8898 0 28.1352H4.32413C4.32413 30.4233 6.43362 31.9242 8.93505 31.9242C11.4365 31.9242 13.4026 30.5667 13.4026 28.1352C13.4026 25.7038 11.1146 24.5948 8.93505 24.5948C3.4319 24.5948 0 21.2361 0 15.7295C0 10.2229 4.00229 6.79082 8.93823 6.79082C10.3339 6.79082 11.7615 6.96927 12.9788 7.79144L14.7282 5.57669ZM4.32413 15.7295C4.32413 18.8046 6.39857 20.6274 8.93505 20.6274C11.4365 20.6274 13.5109 18.7696 13.5109 15.7295C13.5109 12.6894 11.4397 10.7614 8.93823 10.7614C6.39856 10.7614 4.32413 12.6543 4.32413 15.7295Z" fill="white"/>
<path d="M50.5673 0V24.99H46.2432V0H50.5673Z" fill="white"/>
<path d="M69.9987 16.1948C69.9987 21.2711 66.5317 25.382 60.8119 25.382C55.0921 25.382 51.6602 21.2711 51.6602 16.1948C51.6602 11.1534 55.1622 7.00754 60.7768 7.00754C66.3915 7.00754 69.9987 11.1534 69.9987 16.1948ZM56.0193 16.1948C56.0193 18.8748 57.6285 21.3795 60.8087 21.3795C63.9889 21.3795 65.5981 18.8779 65.5981 16.1948C65.5981 13.5498 63.7403 10.975 60.8087 10.975C57.6636 10.975 56.0193 13.5498 56.0193 16.1948Z" fill="white"/>
<path d="M75.4507 0V9.76082C76.4864 7.93804 79.3829 6.93742 81.2407 6.93742C86.3869 6.93742 90.214 10.0827 90.214 16.1597C90.214 21.9499 86.3168 25.382 81.1355 25.382C78.991 25.382 76.8114 24.6681 75.4507 22.5586L75.164 24.99H71.0884V0H75.4507ZM75.7343 16.1597C75.7343 19.34 78.0924 21.3444 80.8456 21.3444C83.6338 21.3444 85.8516 19.2348 85.8516 16.1597C85.8516 12.9794 83.6338 11.0132 80.8456 11.0132C78.0956 11.01 75.7343 13.0845 75.7343 16.1597Z" fill="white"/>
<path d="M96.6987 19.2317C97.712 21.1819 100.032 22.0136 102.922 20.962C104.432 20.4107 106.207 19.1201 106.794 17.804L110.356 19.4356C109.27 21.8862 106.733 23.7982 104.213 24.7159C98.5023 26.7937 93.8244 24.5024 91.8934 19.1934C90.058 14.1553 92.1643 9.27963 97.5399 7.32301C103.081 5.30584 107.791 7.47278 109.633 14.5249L96.6987 19.2317ZM104.467 12.5619C103.416 10.5097 101.345 10.0476 98.993 10.9017C96.7752 11.7079 95.354 13.4446 95.5324 15.8123L104.467 12.5619Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.7626 11.9898C38.3489 9.04026 35.4017 7.00754 31.4702 7.00754C25.8555 7.00754 22.3535 11.1534 22.3535 16.1948C22.3535 19.4132 23.733 22.2436 26.2006 23.8843C26.3412 23.779 26.4258 23.7108 26.4258 23.7108C27.6566 22.9077 28.8573 22.0624 30.0258 21.1765C27.8244 20.5287 26.7127 18.4223 26.7127 16.1948C26.7127 13.5498 28.3601 10.975 31.5021 10.975C34.269 10.975 36.0793 13.2686 36.274 15.7501C37.4868 14.5464 38.6508 13.292 39.7626 11.9898ZM31.0601 25.3736C34.5418 22.9057 37.7611 20.0866 40.6652 16.9631C40.3328 21.6795 36.9335 25.382 31.5052 25.382C31.3553 25.382 31.2069 25.3791 31.0601 25.3736Z" fill="#8DD3BB"/>
<path d="M43.3179 4.53785C38.8631 2.89989 35.6607 6.42437 35.6607 6.42437L38.6974 8.18979C39.835 7.53652 40.3417 8.17067 40.4723 8.51802C40.5648 8.76339 40.4405 9.03108 40.3417 9.17766L39.6024 10.1114C35.6129 14.9233 30.9223 19.1042 25.6868 22.5203C25.6868 22.5203 24.1063 23.795 23.265 23.8141C22.5576 23.8301 22.2422 23.2341 22.838 22.3801L21.3722 19.0723C21.3722 19.0723 17.558 21.5707 18.2972 25.9619C18.6095 27.8166 20.3525 29.1359 22.2039 28.8013C23.1503 28.6324 24.3198 28.1703 25.7505 27.2239L28.3826 25.5031C33.6181 22.0806 38.3119 17.8869 42.2982 13.0686L43.2032 11.9756C44.567 10.4237 45.1789 9.1458 45.386 8.13562C45.7046 6.59007 44.7901 5.07959 43.3179 4.53785Z" fill="#8DD3BB"/>
</svg>


</div>
  <div className="navbar-end py-1">
    <Link to={"/page2/login"}>
    <button className="btn w-[5.417vw] h-[4.8vh] shadow-none border-none  bg-transparent text-white mx-2 ">
     Login
    </button>
    </Link>
   <Link to={'/page2/signup'}>
    <button className="btn w-[5.417vw] text-[#112211] h-[4.8vh] border-none bg-white mr-5 ">
      
      sign up
    </button>
    </Link>
  </div>
</div>
</div>
<div className='flex flex-col lg:mt-[7.5vh] items-center'>
    <h1 className='text-white text-[6vw]  leading-tight'>Helping Others</h1>
    <h1 className='text-white text-[6vw]  leading-tight'>Live & Travel</h1>
    <h1 className='text-white text-[2vw]  leading-tight'>Special offers to suit your plan</h1>
</div>
        
    </div>
    
<div className=' w-[70vw] relative mt-[-12vh] pb-6  rounded-[10px] shadow-custom bg-white mx-auto  rounded-[30p]'>
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
<Link to={"/page2"}>
    <button className='flex  rounded-sm py-[1.2vh] px-[1vw] mr-4 bg-[#8DD3BB] ml-2 '><svg className='mt-[5px] mr-1 '  width="14"  height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.46858 13.9999H8.49983C8.65427 14.0008 8.80542 13.9552 8.9336 13.8691C9.06178 13.7829 9.16108 13.6602 9.21858 13.5168L9.19666 13.5085L9.19674 13.5083C9.14098 13.6472 9.04474 13.7661 8.92052 13.8496C8.79624 13.9331 8.64971 13.9774 8.49996 13.9765H8.49983H8.4691M8.46858 13.9999L8.46963 13.9765C8.46945 13.9765 8.46928 13.9765 8.4691 13.9765M8.46858 13.9999V13.9765H8.4691M8.46858 13.9999L8.4691 13.9765M8.4691 13.9765C8.17379 13.963 7.92874 13.7657 7.83168 13.4845L7.83151 13.484C7.82949 13.4786 7.82777 13.4734 7.82603 13.4676L7.82617 13.4675L7.82513 13.4651L5.99283 9.17318C5.96895 9.09376 5.9662 9.00949 5.98487 8.92868C6.00363 8.84747 6.04336 8.7726 6.1001 8.71155L8.4691 13.9765ZM13.7645 0.236791C13.8636 0.33626 13.9317 0.462305 13.9607 0.599682C13.9896 0.737059 13.9781 0.879884 13.9276 1.01088L13.9276 1.01102L9.19683 13.5081L6.10012 8.71152L12.5164 1.82901C12.5165 1.82891 12.5166 1.82882 12.5167 1.82872C12.5393 1.80608 12.5572 1.77924 12.5694 1.74972C12.5817 1.72007 12.588 1.68829 12.588 1.65619C12.588 1.62409 12.5817 1.59231 12.5694 1.56266C12.5571 1.533 12.5391 1.50606 12.5164 1.48337C12.4937 1.46067 12.4668 1.44267 12.4371 1.43038C12.4075 1.4181 12.3757 1.41178 12.3436 1.41178C12.3115 1.41178 12.2797 1.4181 12.25 1.43038C12.2205 1.44261 12.1937 1.46051 12.1711 1.48307C12.171 1.48317 12.1709 1.48327 12.1708 1.48337L5.28512 7.89933C5.22406 7.95608 5.14918 7.99582 5.06797 8.01458C4.98716 8.03325 4.90288 8.03051 4.82347 8.00663L0.534033 6.17495L0.534076 6.17485L0.531912 6.17416L0.519453 6.17021C0.519391 6.17019 0.519329 6.17017 0.519268 6.17015C0.377472 6.12266 0.25378 6.03258 0.165074 5.91219C0.0763296 5.79175 0.0269276 5.64685 0.0236156 5.49728C0.0203037 5.34771 0.0632432 5.20077 0.14657 5.07652C0.228717 4.95403 0.346169 4.85948 0.483266 4.80537V4.80625L0.491562 4.80311L12.9925 0.0715461L12.9925 0.0715329C13.1235 0.0217435 13.266 0.0108564 13.4029 0.0401821C13.5399 0.0695044 13.6654 0.13778 13.7645 0.236791ZM13.7645 0.236791C13.7645 0.236803 13.7645 0.236814 13.7645 0.236826L13.7811 0.220251L13.7645 0.236791Z" fill="black" stroke="#112211" stroke-width="0.046875"/>
</svg>

Show Filghts</button></Link>
  </div>
 </div>

</div>

    
    </>)
}