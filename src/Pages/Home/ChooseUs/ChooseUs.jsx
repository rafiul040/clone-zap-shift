import React from 'react';
import liveTracking from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'
import tinydelivery from '../../../assets/tiny-deliveryman.png'



const ChooseUs = () => {
    return (
        <div class="max-w-7xl mx-auto px-6 py-12 space-y-8">
<div className='border-b-2 mb-25 border-dashed border-gray-400'></div>
            
  
  <div class="flex flex-col md:flex-row items-center bg-white shadow-sm rounded-xl p-8 gap-6">
    <img src={liveTracking} alt="Live Tracking Illustration" class="w-36 h-auto"/>

    <div className='border-l-2 border-dashed border-gray-400 p-5'>
      <h3 class="text-xl font-semibold text-secondary">Live Parcel Tracking</h3>
      <p class="text-gray-600 mt-2">
        Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery,
        monitor your shipment’s journey and get instant status updates for complete peace of mind.
      </p>
    </div>
  </div>


  <div class="flex flex-col md:flex-row items-center bg-white shadow-sm rounded-xl p-8 gap-6">
    <img src={safeDelivery} alt="Safe Delivery Illustration" class="w-36 h-auto"/>

    <div className='border-l-2 border-dashed border-gray-400 p-5'>
      <h3 class="text-xl font-semibold text-secondary">100% Safe Delivery</h3>
      <p class="text-gray-600 mt-2">
        We ensure your parcels are handled with utmost care and delivered securely to their
        destination. Our reliable process guarantees safe and damage-free delivery every time.
      </p>
    </div>
  </div>


  <div class="flex flex-col md:flex-row items-center bg-white shadow-sm rounded-xl p-8 gap-6">
    <img src={tinydelivery} alt="Call Center Illustration" class="w-36 h-auto"/>

    <div className='border-l-2 border-dashed border-gray-400 p-5'>
      <h3 class="text-xl font-semibold text-secondary">24/7 Call Center Support</h3>
      <p class="text-gray-600 mt-2">
        Our dedicated support team is available around the clock to assist you with any questions,
        updates, or delivery concerns—anytime you need us.
      </p>
    </div>
  </div>

</div>

    );
};

export default ChooseUs;