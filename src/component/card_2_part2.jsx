import { useState } from "react"
import { Button, Modal } from 'antd';
import'./card_2_part2.css'
export default function Card_2_part_2(){
    
    const [on , seton] = useState(true)



    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    };
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };























    return<>
    <div className=" border w-[41.146vw] mt-2 flex flex-col p-4 items-center shadow-custom rounded-2xl  bg-white mt-8 ">
    <div className={on==true?" flex bg-[#8DD3BB]  w-full rounded-lg" : " flex   bg-white w-full rounded-lg"} onClick={()=>{seton(true)}}>
        <div className="w-3/4 ml-4 py-4"> 
        <svg width="32" height="32" className="inline mr-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_141_21587)">
<path d="M1.28 5.9519C0.573216 5.9519 0 6.52496 0 7.2319V24.7679C0 25.4748 0.573504 26.0479 1.28 26.0479H30.72C31.4268 26.0479 32 25.4748 32 24.7679V7.2319C32 6.52499 31.4265 5.9519 30.72 5.9519H1.28ZM19.112 11.9409C19.8908 11.9409 20.515 12.1129 20.913 12.2729L20.641 13.9839L20.461 13.8929C20.0902 13.7329 19.614 13.579 18.957 13.5899C18.1706 13.5899 17.807 13.9407 17.807 14.2689C17.8024 14.6388 18.2318 14.8827 18.934 15.2479C20.0929 15.8114 20.6286 16.4947 20.621 17.3929C20.6054 19.0318 19.2347 20.0909 17.123 20.0909C16.2221 20.081 15.3542 19.8903 14.885 19.6699L15.167 17.9019L15.426 18.0279C16.0858 18.3227 16.513 18.4419 17.317 18.4419C17.8944 18.4419 18.5141 18.2002 18.519 17.6709C18.5228 17.3253 18.26 17.0789 17.478 16.6919C16.716 16.3142 15.7058 15.6814 15.717 14.5469C15.7289 13.0122 17.127 11.9409 19.112 11.9409ZM2.82998 12.1919H6.07299C6.5097 12.2084 6.86227 12.349 6.984 12.8229L7.68301 16.4309C7.6831 16.4312 7.68288 16.4325 7.68301 16.4329L7.89299 17.5139L9.86199 12.1919H11.992L8.82598 19.9819L6.69798 19.9839L5.004 13.6979C6.01194 14.2319 6.87005 14.8497 7.36701 15.6999C7.23888 15.4309 7.07005 15.1272 6.85402 14.8279C6.60243 14.4794 6.0591 14.0293 5.832 13.8379C5.04064 13.1708 3.96592 12.632 2.80499 12.3469L2.82998 12.1919ZM12.839 12.2009H14.922L13.619 19.9789H11.536L12.839 12.2009ZM24.604 12.2009H26.182L27.834 19.9789H25.94C25.94 19.9789 25.7521 19.0853 25.691 18.8129C25.3933 18.8129 23.3113 18.8099 23.077 18.8099C22.9977 19.0205 22.647 19.9789 22.647 19.9789H20.504L23.535 12.8469C23.7496 12.3401 24.1154 12.2009 24.604 12.2009ZM24.759 14.2929C24.6565 14.5822 24.4781 15.0494 24.49 15.0289C24.49 15.0289 23.8488 16.739 23.681 17.1829L25.366 17.1819C25.2095 16.4402 25.0528 15.6986 24.896 14.957L24.759 14.293V14.2929Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_141_21587">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
<span className=" text-[16px] font-[700] leading-[20px]" >**** 4321</span>
<span className=" mx-2 text-[14px] font-[500] leading-[20px]" >02/27</span>
</div>
        <div className="w-1/4 justify-end items-center flex mr-3">
            <input type="radio" className="w-[16px] h-[16px]" checked={on} />
        </div>
       
    </div>

    <div className="flex   bg-white w-full rounded-lg mt-3">
        
       <button onClick={showModal} className="border-2 rounded-lg border-dashed border-[#8DD3BB]	 flex-col py-10 justify-center items-center w-full flex">
       <svg width="64" height="65" viewBox="0 0 64 65" fill="none" className="" xmlns="http://www.w3.org/2000/svg">
<path d="M56 32.917C56 19.667 45.25 8.91699 32 8.91699C18.75 8.91699 8 19.667 8 32.917C8 46.167 18.75 56.917 32 56.917C45.25 56.917 56 46.167 56 32.917Z" stroke="#8DD3BB" stroke-width="2" stroke-miterlimit="10"/>
<path d="M32 22.917V42.917M42 32.917H22" stroke="#8DD3BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




     













<h1>Add a new card</h1>

       </button>
    </div>

    <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={650}
      >
        <div className="p-8  w-fit rounded-lg ">
<div className="w-[26.667vw] ">
            <div className="text-[40px] font-[700] leading-[50px]">Add a new card</div>
            <div className="my-2">

                

<div className="coolinput1 mx-auto">
    <label for="input2" className="text">Card Number</label>
 <input type="text" className="input2 w-[26.6vw] rounded-md" placeholder="4321 4321 4321 4321" />


</div>

            </div>
            <div className="border border black flex my-2 w-[26.667vw]">
            <div className="coolinput1 mr-1 ">
    <label for="input2" className="text">Exp. Dater</label>
 <input type="text" className="input2 rounded-md w-[13vw]"  placeholder="4321 4321 4321 4321" />


</div>
<div className="coolinput1 ml-1">
    <label for="input2" className="text">CVC</label>
 <input type="text" className="input2  w-[13vw] rounded-md "  placeholder="4321 4321 4321 4321" />


</div>


            </div>
            <div className="my-2">
            <div className="coolinput1 mx-auto">
    <label for="input2" className="text">Name on Card</label>
 <input type="text" className="input2 w-[26.6vw] rounded-md" placeholder="4321 4321 4321 4321" />


</div>
            </div>
            <div className=" my-2">
            <div className="coolinput1 mx-auto ">
    <label for="input2" className="text">Country or Region</label>
 <select name="" id="" className="input2 w-[26.6vw]  rounded-md">
    <option value="">UnitedState</option>
    <option value="pakistan">pakistan</option>
 
 
 
 </select>


</div>
            </div>
            <div className="flex   items-center my-4">
                <input type="checkbox" className="inline w-[10px] h-[10px]"/>
                <span className="text-[14px] font-[500] ml-2 ">Securely save my information for 1-click checkout</span>
            </div>
            <div className="w-full">
                <button className="w-full bg-[#8DD3BB]  py-3 text-[14px] font-[600] leading-[17px] my-2">Add Card</button>
            </div>
            <div className="w-full text-[12px] font-[400] leading-[14px] flex text-center my-2">
            By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
            </div>

</div>
</div>
      </Modal>
 










</div>
    </>
}