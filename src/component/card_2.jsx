import { useState } from "react"
import Card_2_part_1 from "./card_2part_1"
import { useContext } from 'react'
import {ThemeContext} from '../context/FlightContext'
import { Link,useParams } from 'react-router-dom'

import { MyContext } from '../context/emailContext';
import Card_2_part_2 from "./card_2_part2"

export default function Card_2(){

    const { state, setState } = useContext(MyContext);



console.log(state)

















const [on , seton] = useState(true)
const { id } = useParams();
const {theme,settheme} = useContext(ThemeContext)
console.log(theme)
const flight = theme.filter(flig =>flig.id == id)

const {rating,price,shortTakeoffLocation,shortLandingLocation,duration,takeoffTime,landingTime, company ,logo}= flight[0]
return<>


<div className="flex justify-center  ">
<div className=" flex-col flex ">
    <div className='flex w-[41.146vw]  flex flex-col py-8 px-2 mt-3 rounded-lg shadow-custom 	 border bg-white' >
<div className=' flex   '>
    <div className=' text-[20px] font-[700] leading-[20px] flex-1'>Return Wed, Dec 8</div><div className=' text-[20px] font-[500] leading-[20px] border-black flex-2'>{duration}</div>
</div>
<div className='  flex p-3 justify-between'> 
    <div className='flex p-6   border shadow-sm          '>
    <div className=' '><img className='w-[64px]' src={logo} alt="" /></div>
    <div className='flex flex-col ml-2 '><span>{company}</span>
    <span>Airbus A320</span></div>
    </div>
<div className=' flex flex-2 h-full'>
<div className=' py-2  my-auto  '>


<button className='border-r  p-6 '><svg  className='w-[20px] h-[20px]' viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.74733 19.75H7.49952C7.37414 19.75 7.25077 19.7185 7.14069 19.6585C7.03062 19.5984 6.93735 19.5118 6.86941 19.4064C6.80147 19.301 6.76104 19.1803 6.7518 19.0552C6.74257 18.9302 6.76483 18.8048 6.81655 18.6906L9.83811 12.0227L5.30108 11.9219L3.64639 13.9267C3.33092 14.3233 3.07921 14.5 2.43702 14.5H1.59702C1.46402 14.5043 1.33195 14.4764 1.212 14.4188C1.09205 14.3612 0.987757 14.2755 0.907956 14.1691C0.796393 14.0186 0.686706 13.7636 0.793581 13.3998L1.72264 10.0717C1.72967 10.0469 1.73811 10.022 1.74749 9.99766C1.74795 9.99534 1.74795 9.99295 1.74749 9.99063C1.73781 9.96627 1.72951 9.94139 1.72264 9.91609L0.792643 6.56687C0.691862 6.21016 0.802018 5.96078 0.912643 5.81406C0.986929 5.71549 1.08331 5.63573 1.19403 5.58118C1.30475 5.52664 1.42672 5.49883 1.55014 5.5H2.43702C2.91655 5.5 3.38202 5.71516 3.65577 6.0625L5.27624 8.03359L9.83811 7.96609L6.81749 1.30984C6.7657 1.19568 6.74335 1.07036 6.75249 0.945327C6.76163 0.820298 6.80196 0.699555 6.8698 0.594135C6.93764 0.488715 7.03082 0.401982 7.14083 0.341864C7.25083 0.281747 7.37416 0.250163 7.49952 0.25H8.76092C8.9369 0.253536 9.10983 0.29667 9.26685 0.376197C9.42388 0.455724 9.56097 0.569602 9.66796 0.709375L15.5297 7.83438L18.2376 7.76312C18.4359 7.75234 18.9853 7.74859 19.1123 7.74859C21.7026 7.75 23.2495 8.59094 23.2495 10C23.2495 10.4434 23.0723 11.2656 21.8869 11.7887C21.187 12.0981 20.2533 12.2547 19.1114 12.2547C18.9858 12.2547 18.4378 12.2509 18.2367 12.2402L15.5292 12.168L9.65296 19.293C9.54588 19.4321 9.40891 19.5454 9.25216 19.6246C9.0954 19.7037 8.92288 19.7465 8.74733 19.75Z" fill="#112211"/>
</svg>
</button>

<button className='border-r  p-6 '><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5818 14.5589C14.595 13.6819 13.3207 13.1974 12.0005 13.1974C10.6803 13.1974 9.40605 13.6819 8.4193 14.5589M18.4435 11.6972C16.6959 10.0631 14.3927 9.15399 12.0001 9.15399C9.60748 9.15399 7.30425 10.0631 5.55664 11.6972" stroke="#112211" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9864 8.53632C18.513 6.32979 15.3142 5.11035 11.9996 5.11035C8.68494 5.11035 5.48615 6.32979 3.0127 8.53632" stroke="#112211" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19.5C11.7033 19.5 11.4133 19.412 11.1666 19.2472C10.92 19.0824 10.7277 18.8481 10.6142 18.574C10.5006 18.2999 10.4709 17.9983 10.5288 17.7074C10.5867 17.4164 10.7296 17.1491 10.9393 16.9393C11.1491 16.7296 11.4164 16.5867 11.7074 16.5288C11.9983 16.4709 12.2999 16.5006 12.574 16.6142C12.8481 16.7277 13.0824 16.92 13.2472 17.1666C13.412 17.4133 13.5 17.7033 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5Z" fill="#112211"/>
</svg>

</button>

<button className='border-r  p-6 '><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75C11.25 13.1642 11.5858 13.5 12 13.5Z" fill="#112211"/>
<path d="M13.125 3.82031V3.375C13.125 3.07663 13.0065 2.79048 12.7955 2.5795C12.5845 2.36853 12.2984 2.25 12 2.25C11.7016 2.25 11.4155 2.36853 11.2045 2.5795C10.9935 2.79048 10.875 3.07663 10.875 3.375V3.82031C9.45433 3.99866 8.09716 4.51513 6.91735 5.32641L6.42188 4.82812C6.21053 4.61678 5.92389 4.49805 5.625 4.49805C5.32612 4.49805 5.03947 4.61678 4.82813 4.82812C4.61678 5.03947 4.49805 5.32611 4.49805 5.625C4.49805 5.92389 4.61678 6.21053 4.82813 6.42188L5.23125 6.825C3.79135 8.46272 2.99805 10.5693 3 12.75C3 17.7127 7.03735 21.75 12 21.75C16.9627 21.75 21 17.7127 21 12.75C21 8.16844 17.5584 4.37531 13.125 3.82031ZM12 15C11.4694 14.9998 10.9558 14.8121 10.5502 14.4701C10.1445 14.128 9.87279 13.6535 9.78305 13.1305C9.69331 12.6075 9.79131 12.0696 10.0597 11.6118C10.3282 11.1541 10.7498 10.8059 11.25 10.6289V7.125C11.25 6.92609 11.329 6.73532 11.4697 6.59467C11.6103 6.45402 11.8011 6.375 12 6.375C12.1989 6.375 12.3897 6.45402 12.5303 6.59467C12.671 6.73532 12.75 6.92609 12.75 7.125V10.6289C13.2503 10.8059 13.6718 11.1541 13.9403 11.6118C14.2087 12.0696 14.3067 12.6075 14.217 13.1305C14.1272 13.6535 13.8555 14.128 13.4498 14.4701C13.0442 14.8121 12.5307 14.9998 12 15Z" fill="#112211"/>
</svg>

</button>

<button className='border-r  p-6 '><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_69_5695)">
<path d="M17.2499 6H17.2541H17.2499ZM22.4788 4.5H18.2104L18.6285 2.82844L20.4248 2.21672C20.8068 2.08688 21.0342 1.68094 20.924 1.29282C20.896 1.19518 20.8484 1.10426 20.7842 1.02556C20.72 0.946861 20.6404 0.882029 20.5504 0.834996C20.4603 0.787963 20.3617 0.759709 20.2604 0.751948C20.1591 0.744187 20.0573 0.757081 19.9612 0.789847L17.7581 1.53985C17.6394 1.5803 17.5328 1.64985 17.448 1.74214C17.3631 1.83443 17.3028 1.9465 17.2724 2.06813L16.6645 4.5H10.521C10.1174 4.5 9.77103 4.81032 9.75087 5.21391C9.74598 5.31532 9.76174 5.41666 9.79717 5.5118C9.83261 5.60694 9.887 5.69389 9.95704 5.76739C10.0271 5.84089 10.1113 5.8994 10.2046 5.93939C10.2979 5.97937 10.3984 5.99999 10.4999 6H10.6288L10.6757 6.40594C10.6868 6.50074 10.7323 6.58817 10.8036 6.65161C10.8749 6.71505 10.967 6.75007 11.0624 6.75C12.8906 6.75 14.5152 7.26094 15.7556 8.2275C16.4454 8.75906 17.0047 9.44128 17.3906 10.222C17.6066 10.6612 17.766 11.126 17.8649 11.6053C17.8846 11.6987 17.94 11.7808 18.0191 11.8341C18.6568 12.2667 19.1272 12.9046 19.3522 13.6416C19.5771 14.3786 19.5431 15.1705 19.2557 15.8855C19.2223 15.9682 19.2198 16.0602 19.2487 16.1447C19.4147 16.6206 19.4997 17.121 19.4999 17.625C19.4999 18.6722 19.1437 19.6702 18.4968 20.4352C18.1301 20.8718 17.6687 21.2191 17.1477 21.4509C17.0576 21.4907 16.9867 21.5642 16.9504 21.6558C16.7557 22.1629 16.4808 22.6355 16.1362 23.0555C16.1218 23.0725 16.1126 23.0933 16.1097 23.1154C16.1067 23.1374 16.1101 23.1599 16.1195 23.1801C16.1288 23.2003 16.1437 23.2175 16.1625 23.2295C16.1812 23.2416 16.203 23.248 16.2252 23.2481H18.532C19.0967 23.2458 19.6402 23.0322 20.0553 22.6492C20.4704 22.2663 20.7271 21.7418 20.7749 21.1791L22.3781 6H22.4999C22.6015 6.00012 22.7021 5.97959 22.7955 5.93966C22.889 5.89974 22.9733 5.84124 23.0434 5.76773C23.1136 5.69422 23.168 5.60722 23.2035 5.51202C23.239 5.41682 23.2548 5.31539 23.2499 5.21391C23.2302 4.81032 22.8824 4.5 22.4788 4.5Z" fill="#112211"/>
<path d="M5.09484 15C5.24277 14.9993 5.38936 15.0279 5.52614 15.0843C5.66292 15.1406 5.78718 15.2235 5.89172 15.3281L6.61875 16.0552C6.63616 16.0726 6.65684 16.0864 6.67961 16.0959C6.70237 16.1053 6.72677 16.1101 6.75141 16.1101C6.77605 16.1101 6.80045 16.1053 6.82321 16.0959C6.84597 16.0864 6.86665 16.0726 6.88406 16.0552L7.60969 15.3281C7.71423 15.2235 7.83849 15.1406 7.97527 15.0843C8.11205 15.0279 8.25864 14.9993 8.40656 15H17.6213C17.6705 15.0005 17.7194 14.9913 17.765 14.9729C17.8107 14.9545 17.8523 14.9273 17.8875 14.8928C17.9227 14.8583 17.9507 14.8173 17.97 14.772C17.9893 14.7267 17.9995 14.678 18 14.6287V14.625C17.9995 14.1929 17.85 13.7742 17.5768 13.4395C17.3035 13.1048 16.9232 12.8745 16.5 12.7875C16.4616 11.3958 15.8906 10.2309 14.8355 9.4125C13.8595 8.65125 12.5555 8.25 11.0625 8.25H7.6875C4.48969 8.25 2.32359 10.0673 2.25 12.7875C1.82677 12.8745 1.44649 13.1048 1.17325 13.4395C0.90001 13.7742 0.750528 14.1929 0.75 14.625C0.75 14.7245 0.789509 14.8198 0.859835 14.8902C0.930161 14.9605 1.02554 15 1.125 15H5.09484ZM8.71594 16.5C8.66668 16.5 8.61789 16.5096 8.57237 16.5284C8.52685 16.5473 8.48548 16.5749 8.45063 16.6097L7.41281 17.648C7.23701 17.8237 6.99859 17.9225 6.75 17.9225C6.50141 17.9225 6.263 17.8237 6.08719 17.648L5.04938 16.6097C5.01452 16.5749 4.97315 16.5473 4.92763 16.5284C4.88211 16.5096 4.83332 16.5 4.78406 16.5H1.53094C1.35476 16.4992 1.18398 16.5608 1.04879 16.6737C0.913601 16.7867 0.82271 16.9438 0.792188 17.1173C0.764027 17.2851 0.749916 17.4549 0.75 17.625C0.75 19.0589 1.74047 20.227 2.96531 20.25C3.07922 20.9587 3.35484 21.5991 3.76969 22.1002C4.38328 22.8413 5.27531 23.25 6.28125 23.25H12.4688C13.4747 23.25 14.3667 22.8413 14.9803 22.0992C15.3952 21.5981 15.6708 20.9578 15.7847 20.2491C17.0095 20.227 18 19.0589 18 17.6241C18.0001 17.454 17.986 17.2842 17.9578 17.1164C17.9271 16.9431 17.8361 16.7861 17.7009 16.6734C17.5658 16.5606 17.3951 16.4992 17.2191 16.5H8.71594Z" fill="#112211"/>
</g>
<defs>
<clipPath id="clip0_69_5695">
<rect className="w-[20px] h-[20px]" fill="white"/>
</clipPath>
</defs>
</svg>

</button>
<button className='border-r  p-6 '><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59 5.41C6.81 4.63 6.81 3.36 7.59 2.58C8.37 1.8 9.64 1.8 10.42 2.58C11.2 3.36 11.2 4.63 10.42 5.41C9.63 6.2 8.37 6.2 7.59 5.41ZM6 16V8C6 7.45 5.55 7 5 7C4.45 7 4 7.45 4 8V16C4 18.76 6.24 21 9 21H14C14.55 21 15 20.55 15 20C15 19.45 14.55 19 14 19H9C7.34 19 6 17.66 6 16ZM19.28 19.35L15.51 15.58C15.14 15.21 14.63 15 14.1 15H11.5V11.32C12.59 12.21 14.16 13.02 15.7 13.34C16.37 13.48 17 12.98 17 12.3C17 11.77 16.61 11.34 16.08 11.25C14.66 11.01 13.2 10.24 12.33 9.27999L10.93 7.73C10.74 7.52 10.5 7.35 10.24 7.23C9.95 7.09 9.62 7 9.28 7H9.25C8.01 7 7 8.01 7 9.25V15C7 16.66 8.34 18 10 18H15.07L17.85 20.78C18.24 21.17 18.89 21.17 19.28 20.78C19.68 20.39 19.68 19.75 19.28 19.35Z" fill="#112211"/>
</svg>


</button>
</div></div>
    
</div>
     
<div className='flex mx-auto text-center py-1'>
    <div className='mx-2 flex my-auto '>
        <span className='text-[24px] leading-[30px] font-[600]'>12:00 pm</span>
        <span className='text-[16px] mx-1 my-2 leading-[20px] font-[500]'>Newark(EWR)</span>
    </div>
    <div className='mx-2'><svg width="174" height="48" viewBox="0 0 174 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.66667 24C5.66667 22.5272 4.47276 21.3333 3 21.3333C1.52724 21.3333 0.333336 22.5272 0.333336 24C0.333336 25.4728 1.52724 26.6667 3 26.6667C4.47276 26.6667 5.66667 25.4728 5.66667 24ZM39 23.5L3 23.5L3 24.5L39 24.5L39 23.5Z" fill="black"/>
<path d="M80.4947 43.5H77.999C77.7483 43.4999 77.5015 43.437 77.2814 43.3169C77.0612 43.1969 76.8747 43.0235 76.7388 42.8128C76.6029 42.602 76.5221 42.3606 76.5036 42.1105C76.4851 41.8604 76.5297 41.6097 76.6331 41.3812L82.6762 28.0453L73.6022 27.8438L70.2928 31.8534C69.6618 32.6466 69.1584 33 67.874 33H66.194C65.928 33.0086 65.6639 32.9529 65.424 32.8377C65.1841 32.7224 64.9755 32.5511 64.8159 32.3381C64.5928 32.0372 64.3734 31.5272 64.5872 30.7997L66.4453 24.1434C66.4593 24.0938 66.4762 24.0441 66.495 23.9953C66.4959 23.9907 66.4959 23.9859 66.495 23.9813C66.4756 23.9325 66.459 23.8828 66.4453 23.8322L64.5853 17.1337C64.3837 16.4203 64.604 15.9216 64.8253 15.6281C64.9739 15.431 65.1666 15.2715 65.3881 15.1624C65.6095 15.0533 65.8534 14.9977 66.1003 15L67.874 15C68.8331 15 69.764 15.4303 70.3115 16.125L73.5525 20.0672L82.6762 19.9322L76.635 6.61969C76.5314 6.39136 76.4867 6.14071 76.505 5.89065C76.5233 5.6406 76.6039 5.39911 76.7396 5.18827C76.8753 4.97743 77.0616 4.80396 77.2817 4.68373C77.5017 4.56349 77.7483 4.50033 77.999 4.5L80.5218 4.5C80.8738 4.50707 81.2197 4.59334 81.5337 4.75239C81.8478 4.91145 82.1219 5.1392 82.3359 5.41875L94.0593 19.6688L99.4753 19.5262C99.8718 19.5047 100.971 19.4972 101.225 19.4972C106.405 19.5 109.499 21.1819 109.499 24C109.499 24.8869 109.145 26.5313 106.774 27.5775C105.374 28.1963 103.507 28.5094 101.223 28.5094C100.972 28.5094 99.8756 28.5019 99.4734 28.4803L94.0584 28.3359L82.3059 42.5859C82.0918 42.8643 81.8178 43.0909 81.5043 43.2491C81.1908 43.4073 80.8458 43.4931 80.4947 43.5Z" fill="#112211"/>
<path d="M173.667 24C173.667 22.5272 172.473 21.3333 171 21.3333C169.527 21.3333 168.333 22.5272 168.333 24C168.333 25.4728 169.527 26.6667 171 26.6667C172.473 26.6667 173.667 25.4728 173.667 24ZM171 23.5L135 23.5L135 24.5L171 24.5L171 23.5Z" fill="black"/>
</svg>
</div>
    <div className='mx-2 flex my-auto'>
        <span className='text-[24px] leading-[30px] font-[600]'>12:00 pm</span>
        <span className='text-[16px] mx-1 my-2 leading-[20px] font-[500]'>Newark(EWR)</span>
    </div>
    <div></div>
</div>

</div>


<div className=" border w-[41.146vw] mt-2 flex flex-col p-4 items-center shadow-custom rounded-2xl  bg-white mt-8 ">
    <div className={on==true?" flex bg-[#8DD3BB]  w-full rounded-lg" : " flex   bg-white w-full rounded-lg"} onClick={()=>{seton(true)}}>
        <div className="w-3/4 ml-4 py-4"> 
        <h1 className="text-[16px] font-[700]">Pay in full</h1>
        <h1 className="text-[16px] font-[500] leading=[20px]">Pay the total and you are all set</h1></div>
        <div className="w-1/4 justify-end items-center flex mr-3">
            <input type="radio" className="w-[16px] h-[16px]" checked={on} />
        </div>
       
    </div>

    <div className={on==false?" flex bg-[#8DD3BB]  w-full rounded-lg mt-3" : " flex   bg-white w-full rounded-lg mt-3"} onClick={()=>{seton(false)}}>
        <div className="w-3/4 ml-4 py-4"> 
        <h1 className="text-[16px] font-[700]">Pay part now, part later</h1>
        <h1 className="text-[16px] font-[500] leading=[20px]">Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</h1></div>
        <div className="w-1/4 justify-end items-center flex mr-3">
            <input type="radio" checked={on==false&&true} />
        </div>
       
    </div>

    

</div>


{
    state==true?<Card_2_part_2/>:<Card_2_part_1/>
}

















</div>
<div className="ml-8 mt-4 rounded-lg px-6 py-6 flex flex-col h-fit shadow-custom ">
    <div className=" ">
        <div className="flex my-3">
            <div><img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=9f135bda-e15c-4775-9504-da3e475b09d3" alt="" /></div>
            <div>
            <div className='  mx-2 my-2 flex flex-col'>
            <h1 className='text-[16px] my-1 mt-1 font-[600] leading-[20px]'>Ecnomy</h1>

                    <h1 className='text-[20px] my-1 mt-1 font-[700] leading-[30px]'>Emirates A380 Airbus</h1>
        <h1 className='my-1 '><button className='py-1 px-2 rounded-md  border border-black' >4.2</button><span className='text-[12px] mx-1 font-[700]'>Very Good</span> <span className='text-[12px] font-[500]'>54 reviews</span> </h1>
    </div>
            </div>
        </div>
        <div className="border-t border-[#112211] my-3"></div>
        <div><span className="text-[16px] leading-[20px] font-[500] my-3">Your booking is protected </span> <span className="text-[16px] leading-[20px] font-[700]">by golobe</span></div>
    <div className="border-t border-[#112211] my-3"></div>
    <div className="flex justify-between my-3"> <span className="text-[16px] font-[700] leading-[20px]">Price Detail</span></div>
    <div className="flex justify-between my-3"> <span className="text-[16px] font-[500] leading-[20px]">Base Fare</span> <span className="text-[16px] font-[600] leading-[20px]">$400</span></div>
    <div className="flex justify-between my-3"> <span className="text-[16px] font-[500] leading-[20px]">Discount</span> <span className="text-[16px] font-[600] leading-[20px]">$400</span></div>
    <div className="flex justify-between my-3"> <span className="text-[16px] font-[500] leading-[20px]">Taxes</span> <span className="text-[16px] font-[600] leading-[20px]">$400</span></div>
    <div className="flex justify-between my-3"> <span className="text-[16px] font-[500] leading-[20px]">Service Fee</span> <span className="text-[16px] font-[600] leading-[20px]">$400</span></div>
    <div className="border-t border-[#112211] my-3"></div>
    <div className="flex justify-between my-3"> <span className="text-[16px] font-[700] leading-[20px]">Total</span> <span className="text-[16px] font-[600] leading-[20px]">$400</span></div>
    
    
    </div>
</div>

    </div>
    </>
}