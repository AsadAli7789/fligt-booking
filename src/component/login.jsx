import { useState,useContext } from "react";
import { useForm } from "react-hook-form"
import { getStorage,ref,getDownloadURL  ,uploadBytes  } from "firebase/storage";
import {app} from '../utils/utils'
import { getAuth,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { collection, addDoc,getFirestore,getDocs } from "firebase/firestore"; 
import { AuthContext } from "../context/UserContext";


export default function LoginPage(){
    const { register, handleSubmit } = useForm();
    const [data,setdata] = useState()

    const {user1,setUser1} = useContext(AuthContext)

    const db = getFirestore(app);

  const storage = getStorage(app);
  

    const imageRef = ref(storage, `${new Date().getTime().toString()}/jpeg`);
    const auth = getAuth();

   

async function Add(password,email1,uid,url){
    try {
        const docRef = await addDoc(collection(db, "users"), {
          name: email1,
          password:password,
          uid : uid,
          url: url,
        });
        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}



async function  createUser(auth, data){
   const email1 = data.email
   const password= data.password
   const imag = data.pic[0].File

   console.log(email1,password)
   createUserWithEmailAndPassword(auth, email1, password)
 
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user.uid)
        const uid = user.uid



        urL(imag,password,email1,uid)



      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}
  
function logOut(){
    signOut(auth).then(() => {
console.log("userlog out")

      })
      .catch((error) => {
      });
      
}


        
async function urL(imag,password,email1,uid){
    await uploadBytes(imageRef, imag).then(() => {
        console.log("Image uploaded");
        
    getDownloadURL(imageRef).then((url) => {
        console.log("url ==>", url);
        

        Add(password,email1,uid,url)

    });
});
} 








console.log(user1)





return<>
    <form onSubmit={handleSubmit((e)=>{
        setdata(e)
       
        createUser(auth,data)
    })}>


        <input type="email" {...register("email")} className="border border-black" name="email" />
        <input type="password" {...register("password")} className="border border-black" name="password" />
        <input type="file"  {...register("pic")} accept="image/*" className="border border-black" name="pic" />


        <button className="border border-black">Asad</button>
    </form>
    <button onClick={()=>{logOut()
    }} className="border border-black p-5">logOut</button>



    
    
    </>
}