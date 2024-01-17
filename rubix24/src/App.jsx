import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';




const App = () => {



  const checkFire = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Documnet added")
  }

  return (
    <div>
      <button onClick={checkFire}>Press me</button>
    </div>
  )
}

export default App