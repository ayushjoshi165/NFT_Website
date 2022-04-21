import React from 'react'
import Accordian from './Accordian';
import {data} from './utils/roadmapData'
export default function Roadmap() {

 
  return (
    <div className="roadmap-container">
      {/* <div>
      
      <div className="accordion">
        {data.map(({ title, content }) => (
          <Accordian title={title} content={content} key={title}/>
        ))}
      </div>
    </div> */}

<div className="timeline">
  <div className="container left">
    <div className="content">
      <h2>Phase 1</h2>
      <p> Trading, staking and tokens (BioCoins)
      
      Majority of funds reinvested back into utility development and installing our first solar Farm (prototype).</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>Phase 2</h2>
      <p>
      Educational platform: An interactive academy to help fuel knowledge and wisdom from experts to educate students about the benefits of web3.
      
      Byop platform-  After mint, BYOP (Build your own project) infrastructure will be built where individuals pay 1.5 ETH to receive web3 resources/services from us to build a NFT project from scratch. 
      
      Launchpad- An exclusive pitching platform where new web3 projects come to seek investments and investors will get equity in exchange for providing funds. Bionic Minds Community will also get early access to whitelists of new projects. 
      
      Breeding function (possibly between the robot and female character)
      
      Access to live events ( crypto events/ concerts)
        </p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h2>Phase 3</h2>
      <p>
      Phase 3 (aspirational, DAO)
      (Mint solar pass) - Raising capital public/ private mint  
      Installing solar farms and earning dividends on monthly basis
      Promote sustainable energy and continue installing more solar farms (DAO),
      Play to earn Game, trailor will be launched  
        </p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>Phase 4</h2>
      <p>
       Ready to play, Play to reach game, which enable entertainment along with passive income
        </p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h2>Phase 5</h2>
      <p>

        Coming soon...
      </p>
    </div>
  </div>
  
</div>

     </div>
  )
}
