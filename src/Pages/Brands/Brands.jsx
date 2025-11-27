
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../assets/brands/amazon.png'
import amazonVector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import star_people from '../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';


const brandLogos = [amazon, amazonVector, casio, moonstar, randstad, star, star_people]

const Brands = () => {
    return (


        <div className='my-20 w-7xl'>

<h2 className='text-secondary my-15 text-2xl font-bold mb-20 text-center'>We've helped thousands of sales teams</h2>
        <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
        modules={[Autoplay]}
        >
            
            {
                brandLogos.map((logo, index) => 
                    <SwiperSlide>
                        <img key={index} src={logo} alt="" />
                    </SwiperSlide>
                )
            }
        </Swiper>
        
            </div>
    );
};

export default Brands;