import { useForm } from "react-hook-form"
import { useState,useContext } from "react";
import { getAuth, signInWithEmailAndPassword,signOut  } from "firebase/auth";
import { AuthContext } from "../context/UserContext";
export default function LoginPage2(){
    
    const { register, handleSubmit } = useForm();
    const [data,setdata] = useState()
    const [logout,setlogout] = useState(false)

    const {user1,setUser1} = useContext(AuthContext)

    
    
  

const auth = getAuth();
async function login(e){
    const pass= e.password 
    const email = e.email
    signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    console.log("sign in")
    window.location.href="/page2"
    const user = userCredential.user;
    // ...

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });}
    
    
    function logOut(){
        signOut(auth).then(() => {

    console.log("logout")
          }).catch((error) => {
          });
          
    }
    
    
    
    return<>
   















<div className=" w-[70vw] h-[100vh] flex mx-auto border px-10 shadow-custom px-4">
  <div className=" w-[40%]  my-auto ">
  <img className=" rounded-lg" src="https://s3-alpha-sig.figma.com/img/0629/da0f/736762a1b63e564588a75ef07ab10d25?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAu~68Ri1U-b17~f2NTRPeeMMQN1cU2IWoog1jHkyf94Beow46DIs~4cCf3hk7YabiZTGLuPtTsSIqtOBa5oHXTzocqVs5N1VJWmkqtBwDrnNofmF2drCRi6X1oqtC5Wd6VZnm0ddQ2vbmqftS88nUphMG~HERlAeIxL2iTzHGEk315m1zWKnAzHN78QfJtflNEGdC~LNU~hfLiFWL-lGjHG1H3R1FkooWOXU3yJ5JHdz2wz40Pd1HOkY3cbuY2IMxa-CojQJP9Q1k-u9oCVGdQtpoASxWO4FTvZRSBTN9HpYGDk4Y5ECQRsLF6t7tsIcDQ3dhww0Ucf0e6CvS5JOw__" alt="" /></div>
  <div className=" w-4/6  p-10">
    <div className="">
      <svg width="111" height="36" viewBox="0 0 111 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_68_5068)">
<path d="M14.7282 5.57671L17.9466 8.00815L15.9805 10.5097C17.3379 12.0457 17.8382 13.7984 17.8382 15.7295C17.8382 17.9092 17.0161 20.9843 14.1195 22.3068C17.0512 23.7727 17.7649 25.8823 17.7649 28.1353C17.7649 32.9981 14.0463 36 8.93505 36C3.82384 36 0 32.8898 0 28.1353H4.32413C4.32413 30.4233 6.43362 31.9242 8.93505 31.9242C11.4365 31.9242 13.4026 30.5667 13.4026 28.1353C13.4026 25.7038 11.1146 24.5949 8.93505 24.5949C3.4319 24.5949 0 21.2361 0 15.7295C0 10.2229 4.00229 6.79083 8.93823 6.79083C10.3339 6.79083 11.7615 6.96929 12.9788 7.79145L14.7282 5.57671ZM4.32413 15.7295C4.32413 18.8046 6.39857 20.6274 8.93505 20.6274C11.4365 20.6274 13.5109 18.7696 13.5109 15.7295C13.5109 12.6894 11.4397 10.7614 8.93823 10.7614C6.39856 10.7614 4.32413 12.6543 4.32413 15.7295Z" fill="#112211"/>
<path d="M50.5663 0V24.99H46.2422V0H50.5663Z" fill="#112211"/>
<path d="M69.9987 16.1947C69.9987 21.2711 66.5317 25.382 60.8119 25.382C55.0921 25.382 51.6602 21.2711 51.6602 16.1947C51.6602 11.1534 55.1622 7.00752 60.7768 7.00752C66.3915 7.00752 69.9987 11.1534 69.9987 16.1947ZM56.0193 16.1947C56.0193 18.8747 57.6285 21.3795 60.8087 21.3795C63.9889 21.3795 65.5981 18.8779 65.5981 16.1947C65.5981 13.5498 63.7403 10.9749 60.8087 10.9749C57.6636 10.9749 56.0193 13.5498 56.0193 16.1947Z" fill="#112211"/>
<path d="M75.4503 0V9.76082C76.4859 7.93804 79.3824 6.93742 81.2402 6.93742C86.3865 6.93742 90.2135 10.0827 90.2135 16.1597C90.2135 21.9499 86.3163 25.382 81.135 25.382C78.9905 25.382 76.8109 24.6681 75.4503 22.5586L75.1635 24.99H71.0879V0H75.4503ZM75.7339 16.1597C75.7339 19.34 78.0919 21.3444 80.8451 21.3444C83.6333 21.3444 85.8511 19.2348 85.8511 16.1597C85.8511 12.9794 83.6333 11.0132 80.8451 11.0132C78.0951 11.01 75.7339 13.0845 75.7339 16.1597Z" fill="#112211"/>
<path d="M96.6992 19.2317C97.7125 21.1819 100.032 22.0136 102.922 20.962C104.433 20.4107 106.208 19.1201 106.794 17.804L110.357 19.4356C109.27 21.8862 106.734 23.7982 104.213 24.7159C98.5028 26.7937 93.8249 24.5024 91.8939 19.1934C90.0584 14.1553 92.1647 9.27963 97.5404 7.32301C103.082 5.30584 107.792 7.47278 109.633 14.5249L96.6992 19.2317ZM104.468 12.5619C103.416 10.5097 101.345 10.0476 98.9935 10.9017C96.7757 11.7079 95.3545 13.4446 95.5329 15.8123L104.468 12.5619Z" fill="#112211"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.7626 11.9898C38.3489 9.04025 35.4017 7.00752 31.4702 7.00752C25.8555 7.00752 22.3535 11.1534 22.3535 16.1947C22.3535 19.4132 23.733 22.2436 26.2006 23.8843C26.3412 23.779 26.4258 23.7107 26.4258 23.7107C27.6566 22.9077 28.8573 22.0623 30.0258 21.1765C27.8244 20.5287 26.7127 18.4222 26.7127 16.1947C26.7127 13.5498 28.3601 10.9749 31.5021 10.9749C34.269 10.9749 36.0793 13.2686 36.274 15.7501C37.4868 14.5464 38.6508 13.292 39.7626 11.9898ZM31.0601 25.3735C34.5418 22.9057 37.7611 20.0866 40.6652 16.963C40.3328 21.6795 36.9335 25.382 31.5052 25.382C31.3553 25.382 31.2069 25.3791 31.0601 25.3735Z" fill="#8DD3BB"/>
<path d="M43.3169 4.53785C38.8622 2.89989 35.6597 6.42437 35.6597 6.42437L38.6965 8.18979C39.8341 7.53652 40.3407 8.17067 40.4714 8.51802C40.5638 8.76339 40.4395 9.03108 40.3407 9.17766L39.6014 10.1114C35.6119 14.9233 30.9213 19.1042 25.6858 22.5203C25.6858 22.5203 24.1053 23.795 23.2641 23.8141C22.5567 23.8301 22.2412 23.2341 22.8371 22.3801L21.3713 19.0723C21.3713 19.0723 17.557 21.5707 18.2963 25.9619C18.6085 27.8166 20.3516 29.1359 22.203 28.8013C23.1494 28.6324 24.3188 28.1703 25.7496 27.2239L28.3816 25.5031C33.6171 22.0806 38.3109 17.8869 42.2973 13.0686L43.2022 11.9756C44.5661 10.4237 45.1779 9.1458 45.385 8.13562C45.7037 6.59007 44.7891 5.07959 43.3169 4.53785Z" fill="#8DD3BB"/>
</g>
<defs>
<clipPath id="clip0_68_5068">
<rect width="110.353" height="36" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
<div className="">
<div className="py-5">
  <h1 className="text-[40px] leading-[52px] font-[700]">Sign up</h1>
  <h1 className="text-[16px] leading-[19px] font-[500]">Let’s get you all st up so you can access your personal account.</h1>
</div>
<div className="py-5  flex items-center justifty-center">

  
<form className="w-[50%] mx-auto" action="" onSubmit={handleSubmit((e)=>{login(e)

})}>
    <input type="email"{...register("email")}  className="border border-black px-3 w-full flex mx-auto my-2 py-4  rounded-md" name="email" placeholder="email" />
    <input type="password"{...register("password")} className="border px-2 border-black w-full flex mx-auto my-2 py-4  rounded-md" name="password" placeholder="password" />
    <input type="submit" value={"login"} className=" w-full flex  my-2 py-4  rounded-md bg-[#8DD3BB]" />
</form>
  
</div>
</div>
  </div>
   


</div>










    </>
}