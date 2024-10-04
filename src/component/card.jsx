export default function Card (){
    return <>
    <div className="w-[43.75vw] border-none flex shadow-custom h-[29vh] mx-auto items-center mt-10 px-3 py-6">
     <div className="  h-full w-1/4 "><img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/image%2040.png?alt=media&token=5389d510-2d72-4695-b977-ae4e497342eb" alt="" /></div>
     <div className="  w-3/4 flex flex-col ">

     <div className="w-[90%] my-auto 	 mx-auto">
            <div className="  border-none my-2   items-center flex justify-between  items-center">
                <div className="" >
                    <span className="border border-[#8DD3BB] px-[.8vw] rounded-[4px] text-center   py-[.4vw] text-[12px] ">4.2</span>
                    <span className=" ml-2 text-center  text-[12px] font-[700] ">very Good </span>
                    <span className=" text-center text-[12px]  font-[500]">50 rewies</span>
                    </div>
                <div className=" flex flex-col  py-1 px-1">
                    <div className="text-[12px] leading-[16px]">starting from</div>
                    <div className="text-[24px] leading-[16px] mt-[2px] text-[#FF8682] font-[700]">$104</div>
                </div>
            </div>


            <div className=" flex my-4 flex-col">

                <div className="border-none  flex w-3/4 justify-between   ">
                    <div className="border-none w-fit flex  h-fit">
                    <div><input type="checkbox" className="mr-3" /></div>

                        <div className="flex flex-col">
                        <span className="flex text-[16px] font-[600] leading-[20px] ">12:00 pm - 12:00 pm </span><span className="font-[400] text-[14px] leading-[18px] text-[#112211] ">Emirates</span>
                        </div>
                    </div>
                    <div className="border-none   flex"><span className="leading-[20px] text-[14px] mb-auto ">none stop</span></div>
                    <div className="border-none">

                    <div className="flex flex-col">
                        <span className="flex text-[16px] font-[600] leading-[20px] ">2h 28m </span><span className="font-[400] text-[14px] leading-[18px] text-[#112211] ">EWR-BNA</span>
                        </div>
                    </div>
                </div>

                <div className="border-none  flex w-3/4 justify-between mt-2   ">
                    <div className="border-none w-fit flex  h-fit">
                    <div><input type="checkbox" className="mr-3" /></div>

                        <div className="flex flex-col">
                        <span className="flex text-[16px] font-[600] leading-[20px] ">12:00 pm - 12:00 pm </span><span className="font-[400] text-[14px] leading-[18px] text-[#112211] ">Emirates</span>
                        </div>
                    </div>
                    <div className="border-none   flex"><span className="leading-[20px] text-[14px] mb-auto ">none stop</span></div>
                    <div className="border-none">

                    <div className="flex flex-col">
                        <span className="flex text-[16px] font-[600] leading-[20px] ">2h 28m </span><span className="font-[400] text-[14px] leading-[18px] text-[#112211] ">EWR-BNA</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-[#112211]  my-2 mx-auto "></div>
            <div className="flex my-auto ">
                <div>
                <button className="border-none py-[15px] px-4 rounded-[5px] inline text-[14px] font-[600] leading-[17px]"><svg width="18" height="17" viewBox="0 0 18 17" className="inline" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M12.7863 1.625C10.2504 1.625 9.0004 4.125 9.0004 4.125C9.0004 4.125 7.7504 1.625 5.21446 1.625C3.15352 1.625 1.52149 3.34922 1.5004 5.40664C1.45743 9.67734 4.88829 12.7145 8.64884 15.2668C8.75251 15.3373 8.87501 15.3751 9.0004 15.3751C9.12579 15.3751 9.24829 15.3373 9.35196 15.2668C13.1121 12.7145 16.543 9.67734 16.5004 5.40664C16.4793 3.34922 14.8473 1.625 12.7863 1.625V1.625Z" stroke="#4C4850" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
       </div>    
       <div>
            <button className="border-none px-[10vw] ml-3 py-3 font-[600]  inline bg-[#8DD3BB]  ">View Deals</button>
            </div>
            </div>
            

     </div>
     </div>
     </div>
    </>
}