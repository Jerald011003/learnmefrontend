import React from 'react';
import './subscription.css';
import { Link, useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
const SubscriptionScreen = () => {
  const initialOptions = {
    "client-id": "AYNnCSQdXD2Kuu2aKDoXOeiHyGdmch03IfqadvsPvh8f3Ucz9azwC1_sLP0JfVS9kK1jHimmoVSjg9hf",
    currency: "USD",
    intent: "subscription",
    vault: true,
  };

  return (
    <>
    <div>
    <div className="subscription-screen">
      <div className="subscription-column">
        <div className="subscription-card">
          <h3>Basic Subscription</h3>
          <p>100% Free</p>
          <ul>
            <li>Access to basic features</li>
            <li>with ads</li>
            {/* <li>Cancel anytime</li> */}
          </ul>
          <Link to="/ProductScreen">
          <button type="button" className="btn cube cube-hover">
  <div className="bg-top">
  <div className="bg-inner"></div>
  </div>
  <div className="bg-right">
  <div className="bg-inner"></div>
  </div>
  <div className="bg">
  <div className="bg-inner"></div>
  </div>
  <div className="text">Learn Now</div>
</button>
</Link>
        </div>
      </div>


      <div className="subscription-column">
        <div className="subscription-card">
          <h3>Premium Subscription</h3>
          <p>$0.01/month</p>
          <ul>
            <li>Access to all features</li>
            <li>No ads</li>
            <li>HD quality</li>
            <li>Cancel anytime</li>
          </ul>
          <PayPalScriptProvider options={{"client-id": "AYNnCSQdXD2Kuu2aKDoXOeiHyGdmch03IfqadvsPvh8f3Ucz9azwC1_sLP0JfVS9kK1jHimmoVSjg9hf"}}>
          <PayPalButtons
/>

          </PayPalScriptProvider>
          
        </div>
      </div>
    </div>


    </div>
    </>
  );
};

export default SubscriptionScreen;