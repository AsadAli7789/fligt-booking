import { useState } from "react";
import  "./sec4.css";
import { Rate } from 'antd';



export default function sec4(){
    const [hidden ,sethidden]= useState(true)
    const [hidden1 ,sethidden1]= useState(true)
    const [hidden2 ,sethidden2]= useState(true)

    return<>
    <div className="flex ">
  <div className="relative top-[10px] border border-black  w-[20.135vw]  ">
          <div className=" border-[4px]   border-red-900 h-full w-[20.135vw] rounded-[30px] px-4 relative  pt-5  ">
    <div className="">
        <h1 className="leading-[31px] text-[24px] mb-4">“A real sense of community, nurtured”</h1>
       <div className=" flex pt-3 flex flex-col h-[100px]  "><h2 className="leading-[17.5px] text-[14px] inline">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for <span className={ hidden==true?"hidden":"" }>helping me always, even when I was out of the country. And always available when needed.</span></h2>
       
       <button className="text-[14px] text-end  w-full   "  onClick={()=>{
if(hidden){
  sethidden(false)
}
else{
sethidden(true)
}}} >View more</button>
       </div> 
     </div>
      
      <div className="my-4"><h2><Rate/></h2></div>     
        
        <div ><h3 className="leading-[17.5px] text-[14px] ">Olga</h3>
        <h3 className="leading-[14.5px] text-[12px] mt-3 ">Weave Studios – Kai Tak</h3></div>  
        <div className=" mt-4">
<svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
<path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00"/>
<path d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.5719 17.5743 13.3039 18.0011 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z" fill="#4CAF50"/>
<path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
</svg>
<svg width="46" className="inline" height="12" viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10.032 5.024V9.596H9L8.664 8.696C8.496 8.808 8.312 8.924 8.112 9.044C7.912 9.156 7.68 9.264 7.416 9.368C7.16 9.472 6.864 9.556 6.528 9.62C6.2 9.684 5.824 9.716 5.4 9.716C5.032 9.716 4.652 9.684 4.26 9.62C3.868 9.556 3.488 9.452 3.12 9.308C2.76 9.164 2.416 8.976 2.088 8.744C1.768 8.504 1.488 8.216 1.248 7.88C1.008 7.544 0.816 7.152 0.672 6.704C0.536 6.248 0.468 5.732 0.468 5.156C0.468 4.572 0.56 4.004 0.744 3.452C0.928 2.9 1.216 2.412 1.608 1.988C2 1.556 2.504 1.212 3.12 0.956C3.736 0.691999 4.48 0.559999 5.352 0.559999C5.856 0.559999 6.36 0.611999 6.864 0.715999C7.368 0.812 7.832 0.976 8.256 1.208C8.68 1.44 9.044 1.744 9.348 2.12C9.66 2.488 9.868 2.948 9.972 3.5H8.232C8.184 3.388 8.108 3.248 8.004 3.08C7.908 2.912 7.76 2.752 7.56 2.6C7.368 2.44 7.112 2.304 6.792 2.192C6.472 2.08 6.06 2.024 5.556 2.024C4.868 2.024 4.304 2.128 3.864 2.336C3.432 2.536 3.088 2.792 2.832 3.104C2.584 3.408 2.412 3.74 2.316 4.1C2.22 4.452 2.172 4.78 2.172 5.084C2.172 5.604 2.252 6.06 2.412 6.452C2.58 6.836 2.808 7.16 3.096 7.424C3.384 7.68 3.724 7.876 4.116 8.012C4.516 8.14 4.948 8.204 5.412 8.204C6.26 8.204 6.924 8.056 7.404 7.76C7.884 7.464 8.228 7.008 8.436 6.392H5.376V5.024H10.032ZM14.6601 8.444C15.3321 8.444 15.8481 8.252 16.2081 7.868C16.5761 7.476 16.7601 6.936 16.7601 6.248C16.7601 5.872 16.7041 5.548 16.5921 5.276C16.4801 5.004 16.3281 4.784 16.1361 4.616C15.9441 4.44 15.7201 4.312 15.4641 4.232C15.2081 4.152 14.9401 4.112 14.6601 4.112C14.3721 4.112 14.1001 4.152 13.8441 4.232C13.5961 4.312 13.3761 4.44 13.1841 4.616C12.9921 4.784 12.8401 5.004 12.7281 5.276C12.6161 5.548 12.5601 5.872 12.5601 6.248C12.5601 6.936 12.7401 7.476 13.1001 7.868C13.4681 8.252 13.9881 8.444 14.6601 8.444ZM14.6601 9.716C14.2201 9.716 13.7841 9.656 13.3521 9.536C12.9201 9.424 12.5321 9.232 12.1881 8.96C11.8521 8.688 11.5761 8.332 11.3601 7.892C11.1521 7.452 11.0481 6.912 11.0481 6.272C11.0481 5.84 11.1161 5.42 11.2521 5.012C11.3881 4.596 11.6001 4.228 11.8881 3.908C12.1841 3.588 12.5601 3.332 13.0161 3.14C13.4721 2.94 14.0201 2.84 14.6601 2.84C15.3001 2.84 15.8481 2.94 16.3041 3.14C16.7601 3.332 17.1321 3.588 17.4201 3.908C17.7161 4.228 17.9321 4.596 18.0681 5.012C18.2041 5.42 18.2721 5.84 18.2721 6.272C18.2721 6.912 18.1641 7.452 17.9481 7.892C17.7401 8.332 17.4641 8.688 17.1201 8.96C16.7841 9.232 16.4001 9.424 15.9681 9.536C15.5361 9.656 15.1001 9.716 14.6601 9.716ZM22.6523 8.444C23.3243 8.444 23.8403 8.252 24.2003 7.868C24.5683 7.476 24.7523 6.936 24.7523 6.248C24.7523 5.872 24.6963 5.548 24.5843 5.276C24.4723 5.004 24.3203 4.784 24.1283 4.616C23.9363 4.44 23.7123 4.312 23.4563 4.232C23.2003 4.152 22.9323 4.112 22.6523 4.112C22.3643 4.112 22.0923 4.152 21.8363 4.232C21.5883 4.312 21.3683 4.44 21.1763 4.616C20.9843 4.784 20.8323 5.004 20.7203 5.276C20.6083 5.548 20.5523 5.872 20.5523 6.248C20.5523 6.936 20.7323 7.476 21.0923 7.868C21.4603 8.252 21.9803 8.444 22.6523 8.444ZM22.6523 9.716C22.2123 9.716 21.7763 9.656 21.3443 9.536C20.9123 9.424 20.5243 9.232 20.1803 8.96C19.8443 8.688 19.5683 8.332 19.3523 7.892C19.1443 7.452 19.0403 6.912 19.0403 6.272C19.0403 5.84 19.1083 5.42 19.2443 5.012C19.3803 4.596 19.5923 4.228 19.8803 3.908C20.1763 3.588 20.5523 3.332 21.0083 3.14C21.4643 2.94 22.0123 2.84 22.6523 2.84C23.2923 2.84 23.8403 2.94 24.2963 3.14C24.7523 3.332 25.1243 3.588 25.4123 3.908C25.7083 4.228 25.9243 4.596 26.0603 5.012C26.1963 5.42 26.2643 5.84 26.2643 6.272C26.2643 6.912 26.1563 7.452 25.9403 7.892C25.7323 8.332 25.4563 8.688 25.1123 8.96C24.7763 9.232 24.3923 9.424 23.9603 9.536C23.5283 9.656 23.0923 9.716 22.6523 9.716ZM30.4404 6.464C30.6404 6.464 30.8444 6.444 31.0524 6.404C31.2604 6.356 31.4524 6.284 31.6284 6.188C31.8044 6.084 31.9484 5.952 32.0604 5.792C32.1724 5.632 32.2284 5.432 32.2284 5.192C32.2284 4.952 32.1724 4.752 32.0604 4.592C31.9484 4.432 31.8044 4.304 31.6284 4.208C31.4604 4.112 31.2724 4.044 31.0644 4.004C30.8564 3.964 30.6524 3.944 30.4524 3.944C30.2444 3.944 30.0364 3.964 29.8284 4.004C29.6284 4.044 29.4444 4.112 29.2764 4.208C29.1164 4.304 28.9844 4.436 28.8804 4.604C28.7764 4.764 28.7244 4.964 28.7244 5.204C28.7244 5.46 28.7764 5.668 28.8804 5.828C28.9844 5.988 29.1164 6.116 29.2764 6.212C29.4444 6.308 29.6284 6.376 29.8284 6.416C30.0364 6.448 30.2404 6.464 30.4404 6.464ZM29.3604 9.584C29.2724 9.584 29.1764 9.588 29.0724 9.596C28.9764 9.612 28.8844 9.636 28.7964 9.668C28.7164 9.708 28.6484 9.756 28.5924 9.812C28.5364 9.876 28.5084 9.956 28.5084 10.052C28.5084 10.316 28.6724 10.48 29.0004 10.544C29.3284 10.608 29.7884 10.64 30.3804 10.64C30.6684 10.64 30.9564 10.628 31.2444 10.604C31.5324 10.588 31.7884 10.556 32.0124 10.508C32.2444 10.46 32.4324 10.392 32.5764 10.304C32.7204 10.224 32.7924 10.12 32.7924 9.992C32.7924 9.88 32.7684 9.796 32.7204 9.74C32.6804 9.684 32.5924 9.644 32.4564 9.62C32.3204 9.596 32.1244 9.584 31.8684 9.584C31.6204 9.584 31.2924 9.584 30.8844 9.584H29.3604ZM34.4124 4.1C34.3484 4.084 34.2644 4.06 34.1604 4.028C34.0564 3.996 33.9604 3.988 33.8724 4.004C33.7844 4.004 33.6924 4.02 33.5964 4.052C33.5084 4.076 33.4404 4.1 33.3924 4.124C33.4404 4.188 33.5004 4.312 33.5724 4.496C33.6524 4.68 33.6924 4.912 33.6924 5.192C33.6924 5.632 33.6004 6.004 33.4164 6.308C33.2404 6.604 33.0004 6.848 32.6964 7.04C32.4004 7.224 32.0524 7.36 31.6524 7.448C31.2604 7.528 30.8524 7.568 30.4284 7.568C30.1244 7.568 29.8564 7.548 29.6244 7.508C29.4004 7.468 29.2164 7.42 29.0724 7.364C28.9844 7.42 28.8924 7.492 28.7964 7.58C28.7084 7.668 28.6644 7.768 28.6644 7.88C28.6644 7.936 28.6764 7.988 28.7004 8.036C28.7324 8.084 28.7964 8.124 28.8924 8.156C28.9964 8.188 29.1404 8.212 29.3244 8.228C29.5164 8.244 29.7764 8.252 30.1044 8.252H32.1324C32.8604 8.276 33.4244 8.404 33.8244 8.636C34.2244 8.86 34.4244 9.224 34.4244 9.728C34.4244 10.112 34.2964 10.432 34.0404 10.688C33.7844 10.944 33.4564 11.144 33.0564 11.288C32.6564 11.44 32.2084 11.548 31.7124 11.612C31.2164 11.676 30.7244 11.708 30.2364 11.708C29.7884 11.708 29.3604 11.684 28.9524 11.636C28.5444 11.588 28.1844 11.508 27.8724 11.396C27.5684 11.284 27.3244 11.136 27.1404 10.952C26.9644 10.768 26.8764 10.544 26.8764 10.28C26.8764 10.088 26.9124 9.932 26.9844 9.812C27.0644 9.7 27.1644 9.608 27.2844 9.536C27.4124 9.472 27.5524 9.424 27.7044 9.392C27.8644 9.352 28.0204 9.316 28.1724 9.284V9.26C27.8924 9.236 27.6604 9.148 27.4764 8.996C27.2924 8.836 27.2004 8.592 27.2004 8.264C27.2004 8.104 27.2324 7.956 27.2964 7.82C27.3684 7.676 27.4564 7.552 27.5604 7.448C27.6724 7.336 27.7964 7.248 27.9324 7.184C28.0684 7.112 28.2004 7.068 28.3284 7.052V7.028C27.9684 6.828 27.7004 6.572 27.5244 6.26C27.3484 5.948 27.2604 5.588 27.2604 5.18C27.2604 4.708 27.3564 4.32 27.5484 4.016C27.7484 3.712 28.0084 3.476 28.3284 3.308C28.6484 3.132 29.0044 3.012 29.3964 2.948C29.7884 2.876 30.1844 2.84 30.5844 2.84C31.1524 2.84 31.6084 2.9 31.9524 3.02C32.3044 3.14 32.5924 3.276 32.8164 3.428C32.8724 3.372 32.9444 3.304 33.0324 3.224C33.1204 3.144 33.2204 3.068 33.3324 2.996C33.4524 2.924 33.5804 2.864 33.7164 2.816C33.8604 2.76 34.0124 2.732 34.1724 2.732H34.4124V4.1ZM35.5763 0.775999H37.0643V9.5H35.5763V0.775999ZM45.4562 7.568C45.4322 7.704 45.3522 7.892 45.2162 8.132C45.0882 8.372 44.8922 8.608 44.6282 8.84C44.3642 9.072 44.0242 9.276 43.6082 9.452C43.2002 9.628 42.6962 9.716 42.0962 9.716C41.5202 9.716 41.0042 9.632 40.5482 9.464C40.0922 9.288 39.7042 9.048 39.3842 8.744C39.0722 8.44 38.8322 8.076 38.6642 7.652C38.4962 7.228 38.4122 6.764 38.4122 6.26C38.4122 5.804 38.4842 5.372 38.6282 4.964C38.7802 4.548 39.0042 4.184 39.3002 3.872C39.6042 3.552 39.9802 3.3 40.4282 3.116C40.8762 2.932 41.3962 2.84 41.9882 2.84C42.5962 2.848 43.1242 2.944 43.5722 3.128C44.0202 3.312 44.3922 3.572 44.6882 3.908C44.9842 4.236 45.2042 4.636 45.3482 5.108C45.5002 5.58 45.5762 6.108 45.5762 6.692H39.9242C39.9402 6.796 39.9722 6.948 40.0202 7.148C40.0762 7.34 40.1762 7.536 40.3202 7.736C40.4642 7.928 40.6722 8.104 40.9442 8.264C41.2242 8.416 41.5922 8.5 42.0482 8.516C42.5202 8.516 42.9042 8.424 43.2002 8.24C43.5042 8.048 43.7122 7.824 43.8242 7.568H45.4562ZM43.9922 5.54C43.8802 4.996 43.6442 4.612 43.2842 4.388C42.9322 4.156 42.4882 4.04 41.9522 4.04C41.7602 4.04 41.5602 4.06 41.3522 4.1C41.1522 4.14 40.9602 4.216 40.7762 4.328C40.6002 4.44 40.4402 4.592 40.2962 4.784C40.1522 4.976 40.0442 5.228 39.9722 5.54H43.9922Z" fill="#112211"/>
</svg>

</div>

<img className="mx-auto my-6 " src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Rectangle%2036.png?alt=media&token=ca4e28e5-67bd-469a-ae54-b41d20974e5d" alt="" />
     </div>

</div>
<div className="relative top-[10px] border border-black  w-[20.135vw]  ">
          <div className=" border-[4px]   border-red-900 h-full w-[20.135vw] rounded-[30px] px-4 relative  pt-5  ">
    <div className="">
        <h1 className="leading-[31px] text-[24px] mb-4">“A real sense of community, nurtured”</h1>
       <div className=" flex pt-3 flex flex-col h-[100px]  "><h2 className="leading-[17.5px] text-[14px] inline">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for <span className={ hidden2==true?"hidden":"" }>helping me always, even when I was out of the country. And always available when needed.</span></h2>
       
       <button className="text-[14px] text-end  w-full   "  onClick={()=>{
if(hidden2){
  sethidden2(false)
}
else{
sethidden2(true)
}}} >View more</button>
       </div> 
     </div>
      
      <div className="my-4"><h2><Rate/></h2></div>     
        
        <div ><h3 className="leading-[17.5px] text-[14px] ">Olga</h3>
        <h3 className="leading-[14.5px] text-[12px] mt-3 ">Weave Studios – Kai Tak</h3></div>  
        <div className=" mt-4">
<svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
<path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00"/>
<path d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.5719 17.5743 13.3039 18.0011 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z" fill="#4CAF50"/>
<path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
</svg>
<svg width="46" className="inline" height="12" viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10.032 5.024V9.596H9L8.664 8.696C8.496 8.808 8.312 8.924 8.112 9.044C7.912 9.156 7.68 9.264 7.416 9.368C7.16 9.472 6.864 9.556 6.528 9.62C6.2 9.684 5.824 9.716 5.4 9.716C5.032 9.716 4.652 9.684 4.26 9.62C3.868 9.556 3.488 9.452 3.12 9.308C2.76 9.164 2.416 8.976 2.088 8.744C1.768 8.504 1.488 8.216 1.248 7.88C1.008 7.544 0.816 7.152 0.672 6.704C0.536 6.248 0.468 5.732 0.468 5.156C0.468 4.572 0.56 4.004 0.744 3.452C0.928 2.9 1.216 2.412 1.608 1.988C2 1.556 2.504 1.212 3.12 0.956C3.736 0.691999 4.48 0.559999 5.352 0.559999C5.856 0.559999 6.36 0.611999 6.864 0.715999C7.368 0.812 7.832 0.976 8.256 1.208C8.68 1.44 9.044 1.744 9.348 2.12C9.66 2.488 9.868 2.948 9.972 3.5H8.232C8.184 3.388 8.108 3.248 8.004 3.08C7.908 2.912 7.76 2.752 7.56 2.6C7.368 2.44 7.112 2.304 6.792 2.192C6.472 2.08 6.06 2.024 5.556 2.024C4.868 2.024 4.304 2.128 3.864 2.336C3.432 2.536 3.088 2.792 2.832 3.104C2.584 3.408 2.412 3.74 2.316 4.1C2.22 4.452 2.172 4.78 2.172 5.084C2.172 5.604 2.252 6.06 2.412 6.452C2.58 6.836 2.808 7.16 3.096 7.424C3.384 7.68 3.724 7.876 4.116 8.012C4.516 8.14 4.948 8.204 5.412 8.204C6.26 8.204 6.924 8.056 7.404 7.76C7.884 7.464 8.228 7.008 8.436 6.392H5.376V5.024H10.032ZM14.6601 8.444C15.3321 8.444 15.8481 8.252 16.2081 7.868C16.5761 7.476 16.7601 6.936 16.7601 6.248C16.7601 5.872 16.7041 5.548 16.5921 5.276C16.4801 5.004 16.3281 4.784 16.1361 4.616C15.9441 4.44 15.7201 4.312 15.4641 4.232C15.2081 4.152 14.9401 4.112 14.6601 4.112C14.3721 4.112 14.1001 4.152 13.8441 4.232C13.5961 4.312 13.3761 4.44 13.1841 4.616C12.9921 4.784 12.8401 5.004 12.7281 5.276C12.6161 5.548 12.5601 5.872 12.5601 6.248C12.5601 6.936 12.7401 7.476 13.1001 7.868C13.4681 8.252 13.9881 8.444 14.6601 8.444ZM14.6601 9.716C14.2201 9.716 13.7841 9.656 13.3521 9.536C12.9201 9.424 12.5321 9.232 12.1881 8.96C11.8521 8.688 11.5761 8.332 11.3601 7.892C11.1521 7.452 11.0481 6.912 11.0481 6.272C11.0481 5.84 11.1161 5.42 11.2521 5.012C11.3881 4.596 11.6001 4.228 11.8881 3.908C12.1841 3.588 12.5601 3.332 13.0161 3.14C13.4721 2.94 14.0201 2.84 14.6601 2.84C15.3001 2.84 15.8481 2.94 16.3041 3.14C16.7601 3.332 17.1321 3.588 17.4201 3.908C17.7161 4.228 17.9321 4.596 18.0681 5.012C18.2041 5.42 18.2721 5.84 18.2721 6.272C18.2721 6.912 18.1641 7.452 17.9481 7.892C17.7401 8.332 17.4641 8.688 17.1201 8.96C16.7841 9.232 16.4001 9.424 15.9681 9.536C15.5361 9.656 15.1001 9.716 14.6601 9.716ZM22.6523 8.444C23.3243 8.444 23.8403 8.252 24.2003 7.868C24.5683 7.476 24.7523 6.936 24.7523 6.248C24.7523 5.872 24.6963 5.548 24.5843 5.276C24.4723 5.004 24.3203 4.784 24.1283 4.616C23.9363 4.44 23.7123 4.312 23.4563 4.232C23.2003 4.152 22.9323 4.112 22.6523 4.112C22.3643 4.112 22.0923 4.152 21.8363 4.232C21.5883 4.312 21.3683 4.44 21.1763 4.616C20.9843 4.784 20.8323 5.004 20.7203 5.276C20.6083 5.548 20.5523 5.872 20.5523 6.248C20.5523 6.936 20.7323 7.476 21.0923 7.868C21.4603 8.252 21.9803 8.444 22.6523 8.444ZM22.6523 9.716C22.2123 9.716 21.7763 9.656 21.3443 9.536C20.9123 9.424 20.5243 9.232 20.1803 8.96C19.8443 8.688 19.5683 8.332 19.3523 7.892C19.1443 7.452 19.0403 6.912 19.0403 6.272C19.0403 5.84 19.1083 5.42 19.2443 5.012C19.3803 4.596 19.5923 4.228 19.8803 3.908C20.1763 3.588 20.5523 3.332 21.0083 3.14C21.4643 2.94 22.0123 2.84 22.6523 2.84C23.2923 2.84 23.8403 2.94 24.2963 3.14C24.7523 3.332 25.1243 3.588 25.4123 3.908C25.7083 4.228 25.9243 4.596 26.0603 5.012C26.1963 5.42 26.2643 5.84 26.2643 6.272C26.2643 6.912 26.1563 7.452 25.9403 7.892C25.7323 8.332 25.4563 8.688 25.1123 8.96C24.7763 9.232 24.3923 9.424 23.9603 9.536C23.5283 9.656 23.0923 9.716 22.6523 9.716ZM30.4404 6.464C30.6404 6.464 30.8444 6.444 31.0524 6.404C31.2604 6.356 31.4524 6.284 31.6284 6.188C31.8044 6.084 31.9484 5.952 32.0604 5.792C32.1724 5.632 32.2284 5.432 32.2284 5.192C32.2284 4.952 32.1724 4.752 32.0604 4.592C31.9484 4.432 31.8044 4.304 31.6284 4.208C31.4604 4.112 31.2724 4.044 31.0644 4.004C30.8564 3.964 30.6524 3.944 30.4524 3.944C30.2444 3.944 30.0364 3.964 29.8284 4.004C29.6284 4.044 29.4444 4.112 29.2764 4.208C29.1164 4.304 28.9844 4.436 28.8804 4.604C28.7764 4.764 28.7244 4.964 28.7244 5.204C28.7244 5.46 28.7764 5.668 28.8804 5.828C28.9844 5.988 29.1164 6.116 29.2764 6.212C29.4444 6.308 29.6284 6.376 29.8284 6.416C30.0364 6.448 30.2404 6.464 30.4404 6.464ZM29.3604 9.584C29.2724 9.584 29.1764 9.588 29.0724 9.596C28.9764 9.612 28.8844 9.636 28.7964 9.668C28.7164 9.708 28.6484 9.756 28.5924 9.812C28.5364 9.876 28.5084 9.956 28.5084 10.052C28.5084 10.316 28.6724 10.48 29.0004 10.544C29.3284 10.608 29.7884 10.64 30.3804 10.64C30.6684 10.64 30.9564 10.628 31.2444 10.604C31.5324 10.588 31.7884 10.556 32.0124 10.508C32.2444 10.46 32.4324 10.392 32.5764 10.304C32.7204 10.224 32.7924 10.12 32.7924 9.992C32.7924 9.88 32.7684 9.796 32.7204 9.74C32.6804 9.684 32.5924 9.644 32.4564 9.62C32.3204 9.596 32.1244 9.584 31.8684 9.584C31.6204 9.584 31.2924 9.584 30.8844 9.584H29.3604ZM34.4124 4.1C34.3484 4.084 34.2644 4.06 34.1604 4.028C34.0564 3.996 33.9604 3.988 33.8724 4.004C33.7844 4.004 33.6924 4.02 33.5964 4.052C33.5084 4.076 33.4404 4.1 33.3924 4.124C33.4404 4.188 33.5004 4.312 33.5724 4.496C33.6524 4.68 33.6924 4.912 33.6924 5.192C33.6924 5.632 33.6004 6.004 33.4164 6.308C33.2404 6.604 33.0004 6.848 32.6964 7.04C32.4004 7.224 32.0524 7.36 31.6524 7.448C31.2604 7.528 30.8524 7.568 30.4284 7.568C30.1244 7.568 29.8564 7.548 29.6244 7.508C29.4004 7.468 29.2164 7.42 29.0724 7.364C28.9844 7.42 28.8924 7.492 28.7964 7.58C28.7084 7.668 28.6644 7.768 28.6644 7.88C28.6644 7.936 28.6764 7.988 28.7004 8.036C28.7324 8.084 28.7964 8.124 28.8924 8.156C28.9964 8.188 29.1404 8.212 29.3244 8.228C29.5164 8.244 29.7764 8.252 30.1044 8.252H32.1324C32.8604 8.276 33.4244 8.404 33.8244 8.636C34.2244 8.86 34.4244 9.224 34.4244 9.728C34.4244 10.112 34.2964 10.432 34.0404 10.688C33.7844 10.944 33.4564 11.144 33.0564 11.288C32.6564 11.44 32.2084 11.548 31.7124 11.612C31.2164 11.676 30.7244 11.708 30.2364 11.708C29.7884 11.708 29.3604 11.684 28.9524 11.636C28.5444 11.588 28.1844 11.508 27.8724 11.396C27.5684 11.284 27.3244 11.136 27.1404 10.952C26.9644 10.768 26.8764 10.544 26.8764 10.28C26.8764 10.088 26.9124 9.932 26.9844 9.812C27.0644 9.7 27.1644 9.608 27.2844 9.536C27.4124 9.472 27.5524 9.424 27.7044 9.392C27.8644 9.352 28.0204 9.316 28.1724 9.284V9.26C27.8924 9.236 27.6604 9.148 27.4764 8.996C27.2924 8.836 27.2004 8.592 27.2004 8.264C27.2004 8.104 27.2324 7.956 27.2964 7.82C27.3684 7.676 27.4564 7.552 27.5604 7.448C27.6724 7.336 27.7964 7.248 27.9324 7.184C28.0684 7.112 28.2004 7.068 28.3284 7.052V7.028C27.9684 6.828 27.7004 6.572 27.5244 6.26C27.3484 5.948 27.2604 5.588 27.2604 5.18C27.2604 4.708 27.3564 4.32 27.5484 4.016C27.7484 3.712 28.0084 3.476 28.3284 3.308C28.6484 3.132 29.0044 3.012 29.3964 2.948C29.7884 2.876 30.1844 2.84 30.5844 2.84C31.1524 2.84 31.6084 2.9 31.9524 3.02C32.3044 3.14 32.5924 3.276 32.8164 3.428C32.8724 3.372 32.9444 3.304 33.0324 3.224C33.1204 3.144 33.2204 3.068 33.3324 2.996C33.4524 2.924 33.5804 2.864 33.7164 2.816C33.8604 2.76 34.0124 2.732 34.1724 2.732H34.4124V4.1ZM35.5763 0.775999H37.0643V9.5H35.5763V0.775999ZM45.4562 7.568C45.4322 7.704 45.3522 7.892 45.2162 8.132C45.0882 8.372 44.8922 8.608 44.6282 8.84C44.3642 9.072 44.0242 9.276 43.6082 9.452C43.2002 9.628 42.6962 9.716 42.0962 9.716C41.5202 9.716 41.0042 9.632 40.5482 9.464C40.0922 9.288 39.7042 9.048 39.3842 8.744C39.0722 8.44 38.8322 8.076 38.6642 7.652C38.4962 7.228 38.4122 6.764 38.4122 6.26C38.4122 5.804 38.4842 5.372 38.6282 4.964C38.7802 4.548 39.0042 4.184 39.3002 3.872C39.6042 3.552 39.9802 3.3 40.4282 3.116C40.8762 2.932 41.3962 2.84 41.9882 2.84C42.5962 2.848 43.1242 2.944 43.5722 3.128C44.0202 3.312 44.3922 3.572 44.6882 3.908C44.9842 4.236 45.2042 4.636 45.3482 5.108C45.5002 5.58 45.5762 6.108 45.5762 6.692H39.9242C39.9402 6.796 39.9722 6.948 40.0202 7.148C40.0762 7.34 40.1762 7.536 40.3202 7.736C40.4642 7.928 40.6722 8.104 40.9442 8.264C41.2242 8.416 41.5922 8.5 42.0482 8.516C42.5202 8.516 42.9042 8.424 43.2002 8.24C43.5042 8.048 43.7122 7.824 43.8242 7.568H45.4562ZM43.9922 5.54C43.8802 4.996 43.6442 4.612 43.2842 4.388C42.9322 4.156 42.4882 4.04 41.9522 4.04C41.7602 4.04 41.5602 4.06 41.3522 4.1C41.1522 4.14 40.9602 4.216 40.7762 4.328C40.6002 4.44 40.4402 4.592 40.2962 4.784C40.1522 4.976 40.0442 5.228 39.9722 5.54H43.9922Z" fill="#112211"/>
</svg>

</div>

<img className="mx-auto my-6 " src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Rectangle%2036.png?alt=media&token=ca4e28e5-67bd-469a-ae54-b41d20974e5d" alt="" />
     </div>

</div>
<div className="relative top-[10px] border border-black  w-[20.135vw]  ">
          <div className=" border-[4px]   border-red-900 h-full w-[20.135vw] rounded-[30px] px-4 relative  pt-5  ">
    <div className="">
        <h1 className="leading-[31px] text-[24px] mb-4">“A real sense of community, nurtured”</h1>
       <div className=" flex pt-3 flex flex-col h-[100px]  "><h2 className="leading-[17.5px] text-[14px] inline">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for <span className={ hidden1==true?"hidden":"" }>helping me always, even when I was out of the country. And always available when needed.</span></h2>
       
       <button className="text-[14px] text-end  w-full   "  onClick={()=>{
if(hidden1){
  sethidden1(false)
}
else{
sethidden1(true)
}}} >View more</button>
       </div> 
     </div>
      
      <div className="my-4"><h2><Rate/></h2></div>     
        
        <div ><h3 className="leading-[17.5px] text-[14px] ">Olga</h3>
        <h3 className="leading-[14.5px] text-[12px] mt-3 ">Weave Studios – Kai Tak</h3></div>  
        <div className=" mt-4">
<svg className="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
<path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00"/>
<path d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.5719 17.5743 13.3039 18.0011 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z" fill="#4CAF50"/>
<path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
</svg>
<svg width="46" className="inline" height="12" viewBox="0 0 46 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10.032 5.024V9.596H9L8.664 8.696C8.496 8.808 8.312 8.924 8.112 9.044C7.912 9.156 7.68 9.264 7.416 9.368C7.16 9.472 6.864 9.556 6.528 9.62C6.2 9.684 5.824 9.716 5.4 9.716C5.032 9.716 4.652 9.684 4.26 9.62C3.868 9.556 3.488 9.452 3.12 9.308C2.76 9.164 2.416 8.976 2.088 8.744C1.768 8.504 1.488 8.216 1.248 7.88C1.008 7.544 0.816 7.152 0.672 6.704C0.536 6.248 0.468 5.732 0.468 5.156C0.468 4.572 0.56 4.004 0.744 3.452C0.928 2.9 1.216 2.412 1.608 1.988C2 1.556 2.504 1.212 3.12 0.956C3.736 0.691999 4.48 0.559999 5.352 0.559999C5.856 0.559999 6.36 0.611999 6.864 0.715999C7.368 0.812 7.832 0.976 8.256 1.208C8.68 1.44 9.044 1.744 9.348 2.12C9.66 2.488 9.868 2.948 9.972 3.5H8.232C8.184 3.388 8.108 3.248 8.004 3.08C7.908 2.912 7.76 2.752 7.56 2.6C7.368 2.44 7.112 2.304 6.792 2.192C6.472 2.08 6.06 2.024 5.556 2.024C4.868 2.024 4.304 2.128 3.864 2.336C3.432 2.536 3.088 2.792 2.832 3.104C2.584 3.408 2.412 3.74 2.316 4.1C2.22 4.452 2.172 4.78 2.172 5.084C2.172 5.604 2.252 6.06 2.412 6.452C2.58 6.836 2.808 7.16 3.096 7.424C3.384 7.68 3.724 7.876 4.116 8.012C4.516 8.14 4.948 8.204 5.412 8.204C6.26 8.204 6.924 8.056 7.404 7.76C7.884 7.464 8.228 7.008 8.436 6.392H5.376V5.024H10.032ZM14.6601 8.444C15.3321 8.444 15.8481 8.252 16.2081 7.868C16.5761 7.476 16.7601 6.936 16.7601 6.248C16.7601 5.872 16.7041 5.548 16.5921 5.276C16.4801 5.004 16.3281 4.784 16.1361 4.616C15.9441 4.44 15.7201 4.312 15.4641 4.232C15.2081 4.152 14.9401 4.112 14.6601 4.112C14.3721 4.112 14.1001 4.152 13.8441 4.232C13.5961 4.312 13.3761 4.44 13.1841 4.616C12.9921 4.784 12.8401 5.004 12.7281 5.276C12.6161 5.548 12.5601 5.872 12.5601 6.248C12.5601 6.936 12.7401 7.476 13.1001 7.868C13.4681 8.252 13.9881 8.444 14.6601 8.444ZM14.6601 9.716C14.2201 9.716 13.7841 9.656 13.3521 9.536C12.9201 9.424 12.5321 9.232 12.1881 8.96C11.8521 8.688 11.5761 8.332 11.3601 7.892C11.1521 7.452 11.0481 6.912 11.0481 6.272C11.0481 5.84 11.1161 5.42 11.2521 5.012C11.3881 4.596 11.6001 4.228 11.8881 3.908C12.1841 3.588 12.5601 3.332 13.0161 3.14C13.4721 2.94 14.0201 2.84 14.6601 2.84C15.3001 2.84 15.8481 2.94 16.3041 3.14C16.7601 3.332 17.1321 3.588 17.4201 3.908C17.7161 4.228 17.9321 4.596 18.0681 5.012C18.2041 5.42 18.2721 5.84 18.2721 6.272C18.2721 6.912 18.1641 7.452 17.9481 7.892C17.7401 8.332 17.4641 8.688 17.1201 8.96C16.7841 9.232 16.4001 9.424 15.9681 9.536C15.5361 9.656 15.1001 9.716 14.6601 9.716ZM22.6523 8.444C23.3243 8.444 23.8403 8.252 24.2003 7.868C24.5683 7.476 24.7523 6.936 24.7523 6.248C24.7523 5.872 24.6963 5.548 24.5843 5.276C24.4723 5.004 24.3203 4.784 24.1283 4.616C23.9363 4.44 23.7123 4.312 23.4563 4.232C23.2003 4.152 22.9323 4.112 22.6523 4.112C22.3643 4.112 22.0923 4.152 21.8363 4.232C21.5883 4.312 21.3683 4.44 21.1763 4.616C20.9843 4.784 20.8323 5.004 20.7203 5.276C20.6083 5.548 20.5523 5.872 20.5523 6.248C20.5523 6.936 20.7323 7.476 21.0923 7.868C21.4603 8.252 21.9803 8.444 22.6523 8.444ZM22.6523 9.716C22.2123 9.716 21.7763 9.656 21.3443 9.536C20.9123 9.424 20.5243 9.232 20.1803 8.96C19.8443 8.688 19.5683 8.332 19.3523 7.892C19.1443 7.452 19.0403 6.912 19.0403 6.272C19.0403 5.84 19.1083 5.42 19.2443 5.012C19.3803 4.596 19.5923 4.228 19.8803 3.908C20.1763 3.588 20.5523 3.332 21.0083 3.14C21.4643 2.94 22.0123 2.84 22.6523 2.84C23.2923 2.84 23.8403 2.94 24.2963 3.14C24.7523 3.332 25.1243 3.588 25.4123 3.908C25.7083 4.228 25.9243 4.596 26.0603 5.012C26.1963 5.42 26.2643 5.84 26.2643 6.272C26.2643 6.912 26.1563 7.452 25.9403 7.892C25.7323 8.332 25.4563 8.688 25.1123 8.96C24.7763 9.232 24.3923 9.424 23.9603 9.536C23.5283 9.656 23.0923 9.716 22.6523 9.716ZM30.4404 6.464C30.6404 6.464 30.8444 6.444 31.0524 6.404C31.2604 6.356 31.4524 6.284 31.6284 6.188C31.8044 6.084 31.9484 5.952 32.0604 5.792C32.1724 5.632 32.2284 5.432 32.2284 5.192C32.2284 4.952 32.1724 4.752 32.0604 4.592C31.9484 4.432 31.8044 4.304 31.6284 4.208C31.4604 4.112 31.2724 4.044 31.0644 4.004C30.8564 3.964 30.6524 3.944 30.4524 3.944C30.2444 3.944 30.0364 3.964 29.8284 4.004C29.6284 4.044 29.4444 4.112 29.2764 4.208C29.1164 4.304 28.9844 4.436 28.8804 4.604C28.7764 4.764 28.7244 4.964 28.7244 5.204C28.7244 5.46 28.7764 5.668 28.8804 5.828C28.9844 5.988 29.1164 6.116 29.2764 6.212C29.4444 6.308 29.6284 6.376 29.8284 6.416C30.0364 6.448 30.2404 6.464 30.4404 6.464ZM29.3604 9.584C29.2724 9.584 29.1764 9.588 29.0724 9.596C28.9764 9.612 28.8844 9.636 28.7964 9.668C28.7164 9.708 28.6484 9.756 28.5924 9.812C28.5364 9.876 28.5084 9.956 28.5084 10.052C28.5084 10.316 28.6724 10.48 29.0004 10.544C29.3284 10.608 29.7884 10.64 30.3804 10.64C30.6684 10.64 30.9564 10.628 31.2444 10.604C31.5324 10.588 31.7884 10.556 32.0124 10.508C32.2444 10.46 32.4324 10.392 32.5764 10.304C32.7204 10.224 32.7924 10.12 32.7924 9.992C32.7924 9.88 32.7684 9.796 32.7204 9.74C32.6804 9.684 32.5924 9.644 32.4564 9.62C32.3204 9.596 32.1244 9.584 31.8684 9.584C31.6204 9.584 31.2924 9.584 30.8844 9.584H29.3604ZM34.4124 4.1C34.3484 4.084 34.2644 4.06 34.1604 4.028C34.0564 3.996 33.9604 3.988 33.8724 4.004C33.7844 4.004 33.6924 4.02 33.5964 4.052C33.5084 4.076 33.4404 4.1 33.3924 4.124C33.4404 4.188 33.5004 4.312 33.5724 4.496C33.6524 4.68 33.6924 4.912 33.6924 5.192C33.6924 5.632 33.6004 6.004 33.4164 6.308C33.2404 6.604 33.0004 6.848 32.6964 7.04C32.4004 7.224 32.0524 7.36 31.6524 7.448C31.2604 7.528 30.8524 7.568 30.4284 7.568C30.1244 7.568 29.8564 7.548 29.6244 7.508C29.4004 7.468 29.2164 7.42 29.0724 7.364C28.9844 7.42 28.8924 7.492 28.7964 7.58C28.7084 7.668 28.6644 7.768 28.6644 7.88C28.6644 7.936 28.6764 7.988 28.7004 8.036C28.7324 8.084 28.7964 8.124 28.8924 8.156C28.9964 8.188 29.1404 8.212 29.3244 8.228C29.5164 8.244 29.7764 8.252 30.1044 8.252H32.1324C32.8604 8.276 33.4244 8.404 33.8244 8.636C34.2244 8.86 34.4244 9.224 34.4244 9.728C34.4244 10.112 34.2964 10.432 34.0404 10.688C33.7844 10.944 33.4564 11.144 33.0564 11.288C32.6564 11.44 32.2084 11.548 31.7124 11.612C31.2164 11.676 30.7244 11.708 30.2364 11.708C29.7884 11.708 29.3604 11.684 28.9524 11.636C28.5444 11.588 28.1844 11.508 27.8724 11.396C27.5684 11.284 27.3244 11.136 27.1404 10.952C26.9644 10.768 26.8764 10.544 26.8764 10.28C26.8764 10.088 26.9124 9.932 26.9844 9.812C27.0644 9.7 27.1644 9.608 27.2844 9.536C27.4124 9.472 27.5524 9.424 27.7044 9.392C27.8644 9.352 28.0204 9.316 28.1724 9.284V9.26C27.8924 9.236 27.6604 9.148 27.4764 8.996C27.2924 8.836 27.2004 8.592 27.2004 8.264C27.2004 8.104 27.2324 7.956 27.2964 7.82C27.3684 7.676 27.4564 7.552 27.5604 7.448C27.6724 7.336 27.7964 7.248 27.9324 7.184C28.0684 7.112 28.2004 7.068 28.3284 7.052V7.028C27.9684 6.828 27.7004 6.572 27.5244 6.26C27.3484 5.948 27.2604 5.588 27.2604 5.18C27.2604 4.708 27.3564 4.32 27.5484 4.016C27.7484 3.712 28.0084 3.476 28.3284 3.308C28.6484 3.132 29.0044 3.012 29.3964 2.948C29.7884 2.876 30.1844 2.84 30.5844 2.84C31.1524 2.84 31.6084 2.9 31.9524 3.02C32.3044 3.14 32.5924 3.276 32.8164 3.428C32.8724 3.372 32.9444 3.304 33.0324 3.224C33.1204 3.144 33.2204 3.068 33.3324 2.996C33.4524 2.924 33.5804 2.864 33.7164 2.816C33.8604 2.76 34.0124 2.732 34.1724 2.732H34.4124V4.1ZM35.5763 0.775999H37.0643V9.5H35.5763V0.775999ZM45.4562 7.568C45.4322 7.704 45.3522 7.892 45.2162 8.132C45.0882 8.372 44.8922 8.608 44.6282 8.84C44.3642 9.072 44.0242 9.276 43.6082 9.452C43.2002 9.628 42.6962 9.716 42.0962 9.716C41.5202 9.716 41.0042 9.632 40.5482 9.464C40.0922 9.288 39.7042 9.048 39.3842 8.744C39.0722 8.44 38.8322 8.076 38.6642 7.652C38.4962 7.228 38.4122 6.764 38.4122 6.26C38.4122 5.804 38.4842 5.372 38.6282 4.964C38.7802 4.548 39.0042 4.184 39.3002 3.872C39.6042 3.552 39.9802 3.3 40.4282 3.116C40.8762 2.932 41.3962 2.84 41.9882 2.84C42.5962 2.848 43.1242 2.944 43.5722 3.128C44.0202 3.312 44.3922 3.572 44.6882 3.908C44.9842 4.236 45.2042 4.636 45.3482 5.108C45.5002 5.58 45.5762 6.108 45.5762 6.692H39.9242C39.9402 6.796 39.9722 6.948 40.0202 7.148C40.0762 7.34 40.1762 7.536 40.3202 7.736C40.4642 7.928 40.6722 8.104 40.9442 8.264C41.2242 8.416 41.5922 8.5 42.0482 8.516C42.5202 8.516 42.9042 8.424 43.2002 8.24C43.5042 8.048 43.7122 7.824 43.8242 7.568H45.4562ZM43.9922 5.54C43.8802 4.996 43.6442 4.612 43.2842 4.388C42.9322 4.156 42.4882 4.04 41.9522 4.04C41.7602 4.04 41.5602 4.06 41.3522 4.1C41.1522 4.14 40.9602 4.216 40.7762 4.328C40.6002 4.44 40.4402 4.592 40.2962 4.784C40.1522 4.976 40.0442 5.228 39.9722 5.54H43.9922Z" fill="#112211"/>
</svg>

</div>

<img className="mx-auto my-6 " src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Rectangle%2036.png?alt=media&token=ca4e28e5-67bd-469a-ae54-b41d20974e5d" alt="" />
     </div>

</div>
</div>





    </>
}