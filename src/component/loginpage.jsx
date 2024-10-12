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
    <div>
        

        <form action="" onSubmit={handleSubmit((e)=>{login(e)

        })}>
            <input type="email"{...register("email")} className="border border-black" name="email" />
            <input type="pasword"{...register("password")}className="border border-black"  name="password" />
            <button type="submit" className="border border-black">asad</button>
        </form>
    </div>
    <button onClick={()=>{logOut()
        setlogout(true)
       
    }} className="border border-black p-5">logOut</button>
    </>
}