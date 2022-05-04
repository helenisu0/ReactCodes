import React from 'react'
import './Link.css'
import PhoneImage from './photos/phone.png'
const Middle = () => {
  return (
    <>
    <div className="middle-section">
      <img src={PhoneImage} alt="" Height="100%" width="100%" />
    </div>
    <div className="middle-section-text">
      <p>
      Celo is a fully EVM compatible proof-of-stake layer-1 protocol,<br/>
       featuring a fast ultralight client and built-in seigniorage stablecoins,<br/>
       collateralized by crypto and natural assets.
      </p>
      <p>
      Millions of people around the world are already benefit from assets<br/>
       and applications built on Celo.
      </p>
    </div>
    </>
  )
}

export default Middle