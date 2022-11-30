import './App.css';
import React from 'react';
import { Component } from 'react';
import Information from './components/customerInformation'
import PC from './components/pcInformation'
import Billing from './components/billingPurpose'
import Problem from './components/issueBox'
import Mentions from './components/thingsToMentionList'



class App extends Component{
  render() {
  return (
    <div>
      <div className="form-container">
        <h1>Computer Repair Request Form</h1>
        {/* This is the header that display company information and prior insturctions*/}
        <div className="header-container">
          <div className="company-information">
            <p> Slaughter Game Tech LLC</p>
            <p> 28 unknown drive LW</p>
            <p> Atlanta Georgia 303018</p>
            <p> Phone: ???-???-????</p>
            <p> Monday-Friday (7am-12pm)</p>
          </div>
          <div className="prior-instruction">
            <p>PLEASE READ BEFORE TURNING IN SYSTEM.</p>
            <p>Make sure you give us any CDs or cables that came </p>
            <p> with the system at the time of turn in. These items</p>
            <p>may result in the delay of your repair . Imagine</p>
            <p>taking your care for service and not leaving the keys.</p>
            <p>Same thing!</p>
          </div>
        {/* End of header */}

        </div>
        {/* Using componwnt Customer information */}
        <h1>Customer Information:</h1>
        <Information/>

        {/* Start of PC information component */}
        <h1 className="pc-information">INFORMATION ABOUT YOUR PC:</h1>
        <div className='pc-billing-container'>
         <div><PC/></div>
         <div className='billing'> <Billing/></div>
        </div>
        {/* Start of telling us what wrong with your system */}
        <h1 className='problem'>TELL US WHAT'S WRONG WITH YOUR COMPUTER:</h1>
        <div className=' problem-mention-container'>
        <div><Problem/></div>
        <div className=' mention'>
        <Mentions/>
          </div>
        </div>


      </div>
    
    </div>
  );
  }
}
export default App;
