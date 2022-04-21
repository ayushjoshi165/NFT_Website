import React from 'react'
import NFT from './NFT.jpg';
import DataForm from './DataForm'
export default function Home() {
  return (
      <>
       <div className="home-container">
     <div className="nft-image" ><img className="bgImage" src={NFT} alt=""/></div>
     <div className="nft-text">"Bionic Minds is a collection of 11111 Al generated NFT art piece which is a golden ticket to enter into metaverse and gain access to insane Utilities"</div>
    </div>
    {/* <div className="heading-whitespot">Enter to win a whitelist spot</div> */}
    
    <div id="scroll-container">
  <div className="heading-whitespot" id="scroll-text">Enter to win a whitelist spot</div>
</div>

<div className="form-container">
<DataForm/>
</div>

   
      </>
   
  )
}
