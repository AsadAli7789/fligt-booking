import Footer from "../component/footer";
import Sec1 from "../component/sec1";
import Sec2 from "../component/sec2";
import Sec3 from "../component/sec3";
import Sec4 from "../component/sec4";


export default function Page1(){
    return(
    <>
    <div>
        <div className="mb-[5vh]">
        <Sec1/>
        </div>
        <div  className="my-[5vw]">
            <Sec2/>
        </div>

<div className="my-[5vw]">
    <Sec3/>
</div>
<div className=" flex w-[70vw] mt-[10vh] mx-auto justify-between">
    <div>
        <h1 className="lg:text-[32px]   lg:leading-[40px] text-black lg:font-[600]">Let's go places together</h1>
        <h1 className="lg:text-[16px]   lg:leading-[19px] text-black lg:font-[500]">Discover the latest offers and news and start planning your next trip with us.</h1>
    </div>
    <div><button className="border border-black px-4 py-4">See All</button></div>
</div>
<div className="my-[5vw]">
    <Sec4/>
</div>

<div>
    <Footer/>
</div>
    </div>
    </>
)}