import React, { useState , useContext} from 'react';
import emailjs from 'emailjs-com';
import { data } from 'autoprefixer';
import { MyContext } from '../context/emailContext';


export default function Card_2_part_1(){
    const [formData, setFormData] = useState({
        name: 'Asad',
        email: '',
        message: '',
      });
      const { state, setState } = useContext(MyContext);

  const [Data,setData ] = useState()
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .send('service_27tmpqo', 'template_qj8yyxd', formData, 'xyfkoEuMzwN0KSP94')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            // Clear the form or show a success message
            setState(true)
          })
          .catch((error) => {
            console.error('Failed to send email:', error);
          });
      };











    return<>
    
    <div className=" w-[41.146vw]    p-8 rounded-lg bg-white shadow-custom mt-5  flex flex-col mx-auto ">
        <div className="flex flex-col ">
        <form  onSubmit={sendEmail}>
        <h1 className="text-[25px] leading-[25px] font-[700] my-2 ">Login or Sign up to book</h1>
   
        <input    type="email"
        name="email"
        placeholder="Your Email" className="border w-full pr-5 border-black my-3 p-4 text-[16px] font-[400] leading-[20px] "  />
       
        <h1 className="text-[14px] leading-[17px] font-[400] my-2">We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
        </h1>
        <button type='submit' className=" text-[16px] leading-[19px] my-2 font-[500] py-3 w-full bg-[#8DD3BB]">Continue</button>
        </form>
<div className="flex items-center justify-center  my-2">
   <div className="border-black border-t-[.5px] w-[45%]"></div>
   <div className="w-[10%] flex justify-center text-[16px] font-[500] leading-[20px]">Or</div>
   <div className="border-black border-t-[.5px] w-[45%]"></div> 
 

</div>
<div className="flex flex-col">

<div className="flex mx-auto my-4 w-full ">
    <button className="border border-black w-[34%] rounded-md  flex items-center justify-center mx-2 py-4"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.333 12.0733C24.333 5.40546 18.9604 0 12.333 0C5.70563 0 0.333008 5.40536 0.333008 12.0733C0.333008 18.0994 4.72126 23.0943 10.458 24V15.5633H7.41113V12.0733H10.458V9.41343C10.458 6.38755 12.2496 4.71615 14.9905 4.71615C16.3035 4.71615 17.6768 4.95195 17.6768 4.95195V7.92313H16.1636C14.6728 7.92313 14.208 8.85381 14.208 9.80864V12.0733H17.5361L17.0041 15.5633H14.208V24C19.9448 23.0943 24.333 18.0995 24.333 12.0733Z" fill="#1877F2"/>
</svg>
</button>
    <button className="border border-black   w-[34%] rounded-md flex items-center justify-center mx-2 py-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
<path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00"/>
<path d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z" fill="#4CAF50"/>
<path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
</svg>
</button>
    <button className="border border-black   w-[34%] rounded-md  flex items-center justify-center mx-2 py-4"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1832 12.5555C18.1738 10.957 18.898 9.75234 20.3605 8.86406C19.5426 7.69219 18.3051 7.04766 16.6738 6.92344C15.1293 6.80156 13.4395 7.82344 12.8207 7.82344C12.1668 7.82344 10.6715 6.96563 9.49492 6.96563C7.0668 7.00313 4.48633 8.90156 4.48633 12.7641C4.48633 13.9055 4.69492 15.0844 5.11211 16.2984C5.66992 17.8969 7.68086 21.8133 9.77852 21.75C10.8754 21.7242 11.6512 20.9719 13.0785 20.9719C14.4637 20.9719 15.1809 21.75 16.4043 21.75C18.5207 21.7195 20.3395 18.1594 20.8691 16.5563C18.0309 15.218 18.1832 12.6375 18.1832 12.5555ZM15.7199 5.40703C16.9082 3.99609 16.8004 2.71172 16.7652 2.25C15.7152 2.31094 14.5012 2.96484 13.8098 3.76875C13.048 4.63125 12.6004 5.69766 12.6965 6.9C13.8309 6.98672 14.8668 6.40313 15.7199 5.40703Z" fill="black"/>
</svg>
</button>
</div>
<div className="w-full ">
<button className="border mx-auto rounded-md flex w-full justify-center items-center border-black  py-4 ">
<svg width="24" height="24" className="inline mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z" fill="#112211"/>
</svg>
<span>Continue with email</span>
</button>
</div>

        </div>




</div>





    </div>
    </>
}
