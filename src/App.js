import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
function App() {
  const [walletAddress, setWalledAddress] = useState("");

async function requestAccount(){
  console.log('requesting account.. ');
 
  if(window.ethereum){
    console.log('metaMask detected')

try {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts", 
  });
  setWalledAddress(accounts[0]);
} catch (error) {
  console.log("Error connecting...");
  
}

  }else{
    console.log('MetaMask Not detected')
  }

}

// this is the provider to interact with smart contract

// async function connectWallet(){
//   if(typeof window.ethereum !== 'undefined'){
//     await requestAccount();

//     const provider = new ethers.providers.web3provider(window.ethereum);
//   }
// }


  return (
    <div className="App">
      <header className="App-header">
        <button
        onClick={requestAccount}
        >Connect metaWallet</button>
        <h3>wallet Address: {walletAddress}</h3>
        
      </header>
    </div>
  );
}

export default App;
