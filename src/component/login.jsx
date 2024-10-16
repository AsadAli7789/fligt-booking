import { useState,useContext } from "react";
import { useForm } from "react-hook-form"
import { getStorage,ref,getDownloadURL  ,uploadBytes  } from "firebase/storage";
import {app} from '../utils/utils'
import { getAuth,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { collection, addDoc,getFirestore,getDocs } from "firebase/firestore"; 
import { AuthContext } from "../context/UserContext";
import Example from "./nav-bar";
import Footer from "./footer";


export default function LoginPage(){
    const { register, handleSubmit } = useForm();
    const [data,setdata] = useState()

    const {user1,setUser1} = useContext(AuthContext)

    const db = getFirestore(app);

  const storage = getStorage(app);
  

  const auth = getAuth();

   

async function Add(password,email1,uid,url ,number,address,name,dob){
    try {
        const docRef = await addDoc(collection(db, "users"), {
          email: email1,
          password:password,
          uid : uid,
          url: url,
          name : name,
          number:number,
          dob: dob,
          address:address,
        });
        console.log("Document written with ID: ", docRef.id);
        window.location.href="/page2"


      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}



async function  createUser(auth, data){
   const email1 = data.email

   const password= data.password
   const imag = data.pic[0]
   const dob = data.dob
   const name = data.name
   const address = data.address
   const number = data.number

   console.log(email1,password)
   createUserWithEmailAndPassword(auth, email1, password)
 
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user.uid)
        const uid = user.uid



        urL(imag,password,email1,uid ,number,address,name,dob)



      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}
  



        
async function urL(imag,password,email1,uid ,number,address,name,dob){
  
  const storageRef = ref(storage, `${new Date().getTime()}_${imag}`);
    await uploadBytes(storageRef, imag).then(() => {
        console.log("Image uploaded");
        
    getDownloadURL(storageRef).then((url) => {
        console.log("url ==>", url);
        

        Add(password,email1,uid,url,number,address,name,dob)

    });
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
<div className="py-5 pl-5 flex items-center justifty-center">

    <form onSubmit={handleSubmit((e)=>{
        setdata(e)
        
       
        createUser(auth,data)
    })}>

      <input type="text" className=" my-2 rounded-md mx-auto border border-black  w-[50%] px-3 py-4" name="name" {...register("name")}  placeholder="name" />
        <input type="date" className=" my-2 rounded-md mx-auto border border-black  w-[50%] px-3 py-4 " name="dob" placeholder="dob" {...register("dob")}  />     
       
       <input type="number"   {...register("number")}   className="border border-black my-2 rounded-md mx-auto w-[50%]  py-4 px-3" name="number"  placeholder="number"/>
       <input type="text"   {...register("address")}   name="address"   className="border border-black my-2 rounded-md mx-auto w-[50%]  py-4 px-3" placeholder="adderess" />  
        <input type="email"  {...register("email")} className="border border-black w-full   my-2  py-4 mx-auto px-3 rounded-md" placeholder="email" name="email" />
       <input type="password"  {...register("password")} className="border border-black w-full flex mx-auto my-2 py-4  rounded-md" name="password" placeholder="pass" />
        <input type="file"  required {...register("pic")} accept="image/*" className="border border-black rounded-md my-2" name="pic"  placeholder="pi"/>
        <div className="w-full flex itmes-center my-3"><input type="checkbox" className="inline"/> <h1 className="inline mx-2">I agree to all the <span className="text-[#FF8682]  text-[14px] leading-[17px] font-[600] " >Terms</span> and <span className="text-[#FF8682] text-[14px] leading-[17px] font-[600]" >Privacy Policies</span> </h1></div>
       <div className="border border-black w-full">
        <input type="submit" className="border border-black block w-full flex  py-4 rounded-md  bg-[#8DD3BB]" value={"Create account"}/>
        </div>
        <div className="flex flex-col">

<div className="flex mx-auto my-2 w-full ">
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

        </div>


        {/* <button className="border border-black">Asad</button> */}
    </form>
  
</div>
</div>
  </div>
    {/* <button onClick={()=>{logOut()
    }} className="border border-black p-5">logOut</button> */}


</div>

    
    
    </>
}