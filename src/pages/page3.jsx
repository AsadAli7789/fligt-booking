import Footer from "../component/footer";
import Image_galery from "../component/image_gallery";
import Example2 from "../component/nav-bar-2";

export default function Page3(){
    
    return(<>
    
    <div className="mb-[5vw]">
        <Example2/>
    </div>
    <div className="my-[5vw]">
        <Image_galery/>
    </div>
    <div className="mt-[5vw]">
        <Footer/>
    </div>
    </>)
}