import React from "react";
import Tabs from "./Tabs";
import TabPane from "./Tabpane";
export default function Roadmap() {
  return (
    <div className="roadmap-container">
      <Tabs>
        <TabPane name="Phase 1" key="1">
          Trading, staking and tokens (BioCoins) Majority of funds reinvested
          back into utility development and installing our first solar Farm
          (prototype).
        </TabPane>
        <TabPane name="Phase 2" key="2">
          Educational platform: An interactive academy to help fuel knowledge
          and wisdom from experts to educate students about the benefits of
          web3. Byop platform- After mint, BYOP (Build your own project)
          infrastructure will be built where individuals pay 1.5 ETH to receive
          web3 resources/services from us to build a NFT project from scratch.
        </TabPane>
        <TabPane name="Phase 3" key="3">
          Phase 3 (aspirational, DAO) (Mint solar pass) - Raising capital
          public/ private mint Installing solar farms and earning dividends on
          monthly basis Promote sustainable energy and continue installing more
          solar farms (DAO), Play to earn Game, trailor will be launched
        </TabPane>
      </Tabs>
    </div>
  );
}
