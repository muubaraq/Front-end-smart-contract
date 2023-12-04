// import {useState} from 'react';
// import { useContract, useContractRead, useContractWrite, ConnectWallet } from "@thirdweb-dev/react";
// import './App.css';

// function App() {
//   const { contract } = useContract("0x4C33899e8DB3A9fFA613212F5758Da26dB47231e");
//   const { data:favNumber, isLoading } = useContractRead(contract, "favNumber", "getFavNumber")
//   const { mutateAsync: updateFavNumber} = useContractWrite(contract, "updateFavNumber")

//  const [number, setNumber] =useState(0);
//  const handleClick= async() =>{
//   try {
//     const data = await updateFavNumber({ args: [number] });
//     console.info("contract call successs", data);
//   } catch (err) {
//     console.error("contract call failure", err);
//   }
//  }

//   return (
//     <>
//     <ConnectWallet />
//      <h2>My Fav Number:{isLoading ? <span>Loading...</span> : favNumber.toString()}</h2>
//      <input placeholder="enter fav number" type="number" onChange={(e)=>(
//       setNumber(e.target.value)
//      )}/>
//      <button onClick={handleClick}>Update</button>
//     </>
//   )
// }

// export default App
import {useState} from 'react';
import { useContract, useContractRead, useContractWrite, ConnectWallet } from "@thirdweb-dev/react";
import './App.css';

function App() {
  const { contract } = useContract("0x4C33899e8DB3A9fFA613212F5758Da26dB47231e");
  const { data: favNumber, isLoading: isFavNumberLoading, refetch: refetchFavNumber } = useContractRead(contract, "favNumber");
  const { mutateAsync: updateFavNumber } = useContractWrite(contract, "updateFavNumber");

  const [number, setNumber] = useState(0);
  const [updatedFavNumber, setUpdatedFavNumber] = useState(null);

  const handleClickUpdate = async () => {
    try {
      const data = await updateFavNumber({ args: [number] });
      console.info("Update Fav Number success", data);
      // After updating, refetch the current favorite number
      refetchFavNumber();
    } catch (err) {
      console.error("Update Fav Number failure", err);
    }
  };

  const handleClickGetFavNumber = async () => {
    try {
      // Fetch the current favorite number
      await refetchFavNumber();
      console.info("Get Fav Number success");
      setUpdatedFavNumber(favNumber);
    } catch (err) {
      console.error("Get Fav Number failure", err);
    }
  };

  return (
    <>
      <ConnectWallet />
      <h2>My Fav Number: {isFavNumberLoading ? <span>Loading...</span> : favNumber.toString()}</h2>
      <input className="input" placeholder="Enter fav number" type="number" onChange={(e) => setNumber(e.target.value)} />
      <button className="btn btn-1" onClick={handleClickUpdate}>Update</button>
      <br/>
      <button className="btn btn-2" onClick={handleClickGetFavNumber}>Get UpdatedFav Number</button>
      {updatedFavNumber !== null && <p>Updated Fav Number: {updatedFavNumber.toString()}</p>}
    </>
  );
}

export default App;
