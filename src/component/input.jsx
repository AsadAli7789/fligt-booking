import './input.css'
export default function Input(){
    return<>
    <div id='div1' className=' relative  w-[24px] h-[24px]  justify-center items-center '>
        <input type="checkbox" name="" id="inp" className='absolute w-[18px] h-[18px] ' />
        
        
        <svg id='gand'  className="inline absolute z-10 w-[12px] h-[12px] text-center my-1 mx-1   "  viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="white"/>
</svg>
    </div>
    </>
}