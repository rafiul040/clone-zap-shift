import React from 'react';
import locationMercahant from "../../../assets/location-merchant.png"
import mercahant from "../../../assets/be-a-merchant-bg.png"

const Satisfaction = () => {
    return (
        <div class="max-w-7xl mx-auto px-6 mt-15">
            <div className='border-t-2 border-dashed pt-20 mb-8 border-gray-500'></div>
  <div class="relative bg-[#003a3a] text-white rounded-3xl p-10 overflow-hidden">

    
       <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-[#003a3a] via-[#003a3a] to-transparent opacity-60">
        <img src={mercahant} alt="" />
       </div>


    <div class="relative flex flex-col md:flex-row items-center justify-between gap-10 z-10">

    
      <div class="max-w-xl">
        <h2 class="text-3xl md:text-4xl font-semibold leading-tight">
          Merchant and Customer Satisfaction <br />
          is Our First Priority
        </h2>

        <p class="text-gray-200 mt-4">
          We offer the lowest delivery charge with the highest value along with 
          100% safety of your product. Fastbox courier delivers your parcels in every 
          corner of Bangladesh right on time.
        </p>

        
        <div class="mt-6 flex flex-wrap gap-4">
          <button class="bg-[#C4E86B] text-gray-900 font-semibold px-6 py-3 rounded-full hover:brightness-110 transition">
            Become a Merchant
          </button>

          <button class="bg-transparent border border-[#C4E86B] text-[#C4E86B] font-semibold px-6 py-3 rounded-full hover:bg-[#C4E86B] hover:text-gray-900 transition">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

    
      <div>
        <img src={locationMercahant} alt="Parcel Illustration" class="w-72 md:w-96 opacity-100"/>
      </div>
     

    </div>
  </div>
</div>

    );
};

export default Satisfaction;