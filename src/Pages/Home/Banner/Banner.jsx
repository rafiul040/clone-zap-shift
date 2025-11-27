import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import btnlogo from '../../../assets/Frame 5.png'


const Banner = () => {
    return (
        <div>
            <Carousel className='relative'
            autoPlay={true}
            infiniteLoop={true}
            >
                <div className=''>
                    <img src={banner1} className='' alt="" />
                    <div className='flex bg-red absolute left-11 gap-5 bottom-13 justify-around'>
                    <button className='btn bg-primary rounded-full'>Track Your Parcel 
                    </button>
                        <img className='w-9 h-8 mt-1 -ml-5' src={btnlogo} alt=""/> 
                    <button className='btn'>Be A Rider</button>
                    </div>
                </div>

                <div>
                    <img src={banner2} alt="" />
                    <div className='flex bg-red absolute left-11 gap-5 bottom-13 justify-around'>
                    <button className='btn bg-primary rounded-full'>Track Your Parcel 
                    </button>
                    <img className='w-9 h-8 mt-1 -ml-5' src={btnlogo} alt=""/> 
                    <button className='btn'>Be A Rider</button>
                    </div>
                </div>


                <div>
                    <img src={banner3} alt="" />
                    <div className='flex bg-red absolute left-11 gap-5 bottom-18 justify-around'>
                    <button className='btn bg-primary rounded-full'>Track Your Parcel 
                    </button>
                    <img className='w-9 h-8 mt-1 -ml-5' src={btnlogo} alt=""/> 
                    <button className='btn'>Be A Rider</button>
                    </div>
                </div>
            </Carousel>


        </div>
    );
};

export default Banner;