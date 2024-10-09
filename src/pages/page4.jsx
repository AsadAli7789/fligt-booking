import Card_2 from "../component/card_2";
import Card_2_part_2 from "../component/card_2_part2";
import Card_2_part_1 from "../component/card_2part_1";
import Footer from "../component/footer";
import Example2 from "../component/nav-bar-2";

export default function Page4(){
    return(<>
<div className="mb-[5vw]">
    <Example2/>
</div>
<div className="my-[5vw]">
<Card_2/>
</div>
<div className="mt-[5vw]">
    <Footer/>
</div>

    </>)
}