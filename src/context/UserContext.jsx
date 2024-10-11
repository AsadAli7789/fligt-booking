import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useId, useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

import { doc, getDocs,collection ,getFirestore} from "firebase/firestore";
import { useNavigate } from "react-router";
import { app } from "../utils/utils";

export  const AuthContext = createContext();
const auth = getAuth(app)
const db = getFirestore(app);

export function AuthContextProvider({ children }) {
       
   const [user1, setUser1] = useState({});
   const [user2, setUser2] = useState(false);

   


  useEffect(() => {
    
    const subscribe = onAuthStateChanged(auth, async (user) => {
     

      if (user) {
        const uuid = auth.currentUser.uid

           
           setTimeout(() => {
            document(uuid);
          }, 2000); 
      } 
      else {
      setUser1({})
      console.log(user1)

      }
  
    });
return subscribe;
  }, []);



  let userFound = {}            



async function document(uuid){
  const querySnapshot = await getDocs(collection(db, "users"));
    console.log()
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${uuid==doc.data().uid?userFound=doc.data():"false"}`)});
        setUser1(userFound)
}








  return (
    <AuthContext.Provider value={{ user1,setUser1 }}>
       {children}
      
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;