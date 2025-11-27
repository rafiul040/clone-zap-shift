import React from 'react';
import servicePng from '../../../assets/service.png'


const OurServices = () => {
    return (
        <div>
            <section class="bg-[#003D3B] py-16 px-4 rounded-3xl max-w-7xl mx-auto">
  
  <div class="text-center max-w-2xl mx-auto mb-12">
    <h2 class="text-3xl font-bold text-white">Our Services</h2>
    <p class="text-gray-200 mt-2 text-sm">
      Enjoy fast, reliable parcel delivery with real-time tracking and hassle-free service.
      From personal packages to business shipments — we deliver on time, every time.
    </p>
  </div>


  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    
    <div class="bg-white p-6 rounded-2xl hover:bg-primary shadow-sm hover:shadow-md transition">
      <img src={servicePng} alt=""  class="w-12 h-12 mx-auto mb-4"/>
      <h3 class="text-center font-semibold text-lg text-secondary mb-2">
        Express & Standard Delivery
      </h3>
      <p class="text-center text-gray-500 text-sm">
        We deliver your parcels within 24–72 hours in Dhaka & Chittagong.
        Faster-than-ever deliveries.
      </p>
    </div>

    
    <div class="bg-white p-6 rounded-2xl hover:bg-primary shadow-sm hover:shadow-md transition">
      <img src={servicePng} alt="" class="w-12 h-12 mx-auto mb-4"/>
      <h3 class="text-center font-semibold text-lg text-secondary mb-2">
        Nationwide Delivery
      </h3>
      <p class="text-center text-gray-600 text-sm">
        We deliver parcels nationwide with fast delivery in every district.
        Ensuring your product reaches customers within 48–72 hours.
      </p>
    </div>

    
    <div class="bg-white p-6 rounded-2xl hover:bg-primary shadow-sm hover:shadow-md transition">
      <img src={servicePng} alt="" class="w-12 h-12 mx-auto mb-4"/>
      <h3 class="text-center font-semibold text-lg text-secondary mb-2">
        Fulfillment Solution
      </h3>
      <p class="text-center text-gray-500 text-sm">
        We offer dedicated warehouse service with inventory management support, order processing packages, and after-sales support.
      </p>
    </div>

    
    <div class="bg-white p-6 rounded-2xl hover:bg-primary shadow-sm hover:shadow-md transition">
      <img src={servicePng} alt="" class="w-12 h-12 mx-auto mb-4"/>
      <h3 class="text-center font-semibold text-lg text-secondary mb-2">
        Cash on Home Delivery
      </h3>
      <p class="text-center text-gray-500 text-sm">
        100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
      </p>
    </div>

    
    <div class="bg-white p-6 rounded-2xl hover:bg-primary shadow-sm hover:shadow-md transition">
      <img src={servicePng} alt="" class="w-12 h-12 mx-auto mb-4"/>
      <h3 class="text-center font-semibold text-lg text-secondary mb-2">
        Corporate Service / Contract in Logistics
      </h3>
      <p class="text-center text-gray-500 text-sm">
        Customized corporate services that include workload and inventory management support.
      </p>
    </div>

    
    <div class="bg-white p-6 rounded-2xl hover:bg-primary shadow-sm hover:shadow-md transition">
      <img src={servicePng} alt="" class="w-12 h-12 mx-auto mb-4"/>
      <h3 class="text-center font-semibold text-lg text-secondary mb-2">
        Parcel Return
      </h3>
      <p class="text-center text-gray-500 text-sm">
        Through our seamless logistics network we collect and deliver customers’ return products with online business merchants.
      </p>
    </div>

  </div>
</section>

        </div>
    );
};

export default OurServices;