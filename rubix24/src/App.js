import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

const App = () => {

    const checkFire = async () => {
        const docRef = await addDoc(collection(db, "cities"), {
            name: "Tokyo",
            country: "Japan"
        });
        console.log("Document added")
    }
    

    return (
        <div>
            <button onClick={checkFire} >Press me</button></div>
    )
}

export default App