import {useState} from 'react';
import { useContract, useContractRead, useContractWrite, ConnectWallet } from "@thirdweb-dev/react";
import './App.css';

function App() {
  const { contract } = useContract("0x7A0f5b710A0933BAeFD42454eAB1F6cC16F6b87e");
  const { data:favNumber, isLoading } = useContractRead(contract, "favNumber")
  const { mutateAsync: updateFavNumber} = useContractWrite(contract, "updateFavNumber")

 const [number, setNumber] =useState(0);
 const handleClick= async() =>{
  try {
    const data = await updateFavNumber([number]);
    console.info("contract call successs", data);
  } catch (err) {
    console.error("contract call failure", err);
  }
 }

  return (
    <>
    <ConnectWallet />
     <h2>My Fav Number:{isLoading ? <span>Loading...</span> : favNumber.toString()}</h2>
     <input type="number" onChange={(e)=>(
      setNumber(e.target.value)
     )}/>
     <button onClick={handleClick}>Update</button>
    </>
  )
}

export default App
