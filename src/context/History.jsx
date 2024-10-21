import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useId, useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

import { doc, getDocs,collection ,getFirestore} from "firebase/firestore";
import { useNavigate } from "react-router";
import { app } from "../utils/utils";

export  const HistoryContext = createContext();
const auth = getAuth(app)
const db = getFirestore(app);

export function HistoryContextProvider({ children }) {
       
   const [History, setHistory] = useState();

   


  useEffect(() => {
    
    const subscribe = onAuthStateChanged(auth, async (user) => {
     

      if (user) {
        const uuid = auth.currentUser.uid

           
           setTimeout(() => {
            document(uuid);
          }, 1000); 
          console.log(History)
      } 
      else {
        setHistory({})
      console.log(History)

      }
  
    });
return subscribe;
  }, []);



  let userFund = []            



async function document(uuid){
  const querySnapshot = await getDocs(collection(db, "history"));
    console.log()
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${uuid==doc.data().uid?userFund.push(doc.data()):"false"}`)});
        console.log(userFund)
}



console.log(userFund)





  return (
    <HistoryContext.Provider value={{ userFund }}>
       {children}
      
    </HistoryContext.Provider>
  );
}

export default HistoryContextProvider;