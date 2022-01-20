import React from 'react'
import './Home.css'
import circlelogo from '../../circle-logo.png';

const Home = () => {
 
    return (
        <div className='container' >
          <h2 className='heading'>Claim your Walt</h2>  
          <p className='sub-heading'>The IDO will be held on Jan 21, 2022 0:00 UTC to Jan 23, 2022 23:59 UTC. Join WaltsWorld DAO NOW!</p>
          <div className="box">
            <img src={circlelogo} alt=""/>
            <div className="total-raised-box">
              <h4>Total raised </h4> <span>(BUSD)</span>
              
              <h2>$&nbsp; 1001,140</h2>
            </div>
            
          </div>

          <div className="total-wallet-box" >
              <h4 style={{marginBottom: "20px"}}>Claim your WALT to join WaltsWorld DAO NOW!)</h4>
              <button className='btn'>Connect Your Wallet</button>
              <div className='underline'>Learn More</div>
          </div>
        </div>
    )
}

export default Home
