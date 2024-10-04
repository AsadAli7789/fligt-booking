import './image_gallery.css'
import Input from './input'

export default function Image_galery(){
    return<>
    
    <div className="flex flex-col mx-auto justify-center items-center">
        <div className="border border-black w-[75.122vw] h-[40vh] "></div>
        <div className="border border-black w-[75.122vw] py-4 flex">
        <div className="flex-1 my-auto"><span>Basic Economy Features</span></div>
        <div className="flex-2 flex my-auto ">
        <div className='flex text-[14px] leading-[17px] mx-3 font-[500]'><Input/>Economy</div>
        <div className='flex text-[14px] leading-[17px] mx-3 font-[500]'><Input/>First Class</div>
        <div className='flex text-[14px] leading-[17px] mx-3 font-[500]'><Input/>Busines Class</div>
 </div>
      
</div>
<div className='flex w-[75.122vw]'>
            <div className=' w-[10%] h-[100px] mx-auto my-3  '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
            <div className=' w-[10%] h-[100px]  mx-auto my-3 '> <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/Frame%20186.png?alt=media&token=7bf36a43-e870-4a73-8467-e6ed84e30bb2" alt="" /></div>
        </div>
        <div className='w-[75.122vw] border border-black my-2  h-[10vh] flex flex-col bg-[#8DD3BB99]'>
            
        <div className='text-[24px] leading-[30px] font-[700] py-4'>Emirates Airlines Policies</div>    
        <div className='border border-black flex py-2'>
            <div className='border border-black text-[16px] leading-[20px] font-[500] pr-8'><svg width="18" height="20" className='inline' viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.125 1.82031V1.375C10.125 1.07663 10.0065 0.790483 9.7955 0.579505C9.58452 0.368526 9.29837 0.25 9 0.25C8.70164 0.25 8.41549 0.368526 8.20451 0.579505C7.99353 0.790483 7.875 1.07663 7.875 1.375V1.82031C6.45433 1.99866 5.09716 2.51513 3.91735 3.32641L3.42188 2.82812C3.21053 2.61678 2.92389 2.49805 2.625 2.49805C2.32612 2.49805 2.03947 2.61678 1.82813 2.82812C1.61678 3.03947 1.49805 3.32611 1.49805 3.625C1.49805 3.92389 1.61678 4.21053 1.82813 4.42188L2.23125 4.825C0.791348 6.46272 -0.00195218 8.5693 3.6077e-06 10.75C3.6077e-06 15.7127 4.03735 19.75 9 19.75C13.9627 19.75 18 15.7127 18 10.75C18 6.16844 14.5584 2.37531 10.125 1.82031ZM9 13C8.46935 12.9998 7.95583 12.8121 7.55016 12.4701C7.14449 12.128 6.87279 11.6535 6.78305 11.1305C6.69331 10.6075 6.79131 10.0696 7.05974 9.61184C7.32817 9.15409 7.74975 8.80594 8.25 8.62891V5.125C8.25 4.92609 8.32902 4.73532 8.46967 4.59467C8.61033 4.45402 8.80109 4.375 9 4.375C9.19892 4.375 9.38968 4.45402 9.53033 4.59467C9.67099 4.73532 9.75 4.92609 9.75 5.125V8.62891C10.2503 8.80594 10.6718 9.15409 10.9403 9.61184C11.2087 10.0696 11.3067 10.6075 11.217 11.1305C11.1272 11.6535 10.8555 12.128 10.4498 12.4701C10.0442 12.8121 9.53066 12.9998 9 13Z" fill="#112211"/>
</svg>
Pre-flight cleaning, installation of cabin HEPA filters.
        
            </div>
            <div className='border border-black text-[16px] leading-[19px] font-[500] '><svg width="18" height="20" className='inline' viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.125 1.82031V1.375C10.125 1.07663 10.0065 0.790483 9.7955 0.579505C9.58452 0.368526 9.29837 0.25 9 0.25C8.70164 0.25 8.41549 0.368526 8.20451 0.579505C7.99353 0.790483 7.875 1.07663 7.875 1.375V1.82031C6.45433 1.99866 5.09716 2.51513 3.91735 3.32641L3.42188 2.82812C3.21053 2.61678 2.92389 2.49805 2.625 2.49805C2.32612 2.49805 2.03947 2.61678 1.82813 2.82812C1.61678 3.03947 1.49805 3.32611 1.49805 3.625C1.49805 3.92389 1.61678 4.21053 1.82813 4.42188L2.23125 4.825C0.791348 6.46272 -0.00195218 8.5693 3.6077e-06 10.75C3.6077e-06 15.7127 4.03735 19.75 9 19.75C13.9627 19.75 18 15.7127 18 10.75C18 6.16844 14.5584 2.37531 10.125 1.82031ZM9 13C8.46935 12.9998 7.95583 12.8121 7.55016 12.4701C7.14449 12.128 6.87279 11.6535 6.78305 11.1305C6.69331 10.6075 6.79131 10.0696 7.05974 9.61184C7.32817 9.15409 7.74975 8.80594 8.25 8.62891V5.125C8.25 4.92609 8.32902 4.73532 8.46967 4.59467C8.61033 4.45402 8.80109 4.375 9 4.375C9.19892 4.375 9.38968 4.45402 9.53033 4.59467C9.67099 4.73532 9.75 4.92609 9.75 5.125V8.62891C10.2503 8.80594 10.6718 9.15409 10.9403 9.61184C11.2087 10.0696 11.3067 10.6075 11.217 11.1305C11.1272 11.6535 10.8555 12.128 10.4498 12.4701C10.0442 12.8121 9.53066 12.9998 9 13Z" fill="#112211"/>
</svg>
Pre-flight health screening questions.
        
            </div>
            
        </div>
        
        
        
        
        
        </div>
    </div>
    </>
}