import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useId, useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

import { doc, getDocs,collection ,getFirestore} from "firebase/firestore";
import { useNavigate } from "react-router";
import { app } from "../utils/utils";

export  const CardContext = createContext();
const auth = getAuth(app)
const db = getFirestore(app);

export function CardContextProvider({ children }) {
       
   const [card, setcard] = useState();

   


  useEffect(() => {
    
    const subscribe = onAuthStateChanged(auth, async (user) => {
     

      if (user) {
        const uuid = auth.currentUser.uid

           
           setTimeout(() => {
            document(uuid);
          }, 1000); 
          console.log(card)
      } 
      else {
        setcard({})
      console.log(card)

      }
  
    });
return subscribe;
  }, []);



  let userFound = []            



async function document(uuid){
  const querySnapshot = await getDocs(collection(db, "cards"));
    console.log()
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${uuid==doc.data().uid?userFound.push(doc.data()):"false"}`)});
}








  return (
    <CardContext.Provider value={{ userFound }}>
       {children}
      
    </CardContext.Provider>
  );
}

export default CardContextProvider;