import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import reviweimg from '../../../assets/customer-top.png'


const Review = ({reviewsPromise}) => {
    const review = use(reviewsPromise)
    console.log(review)
    return (
        <div className='mb-24'>
            <div className='text-center my-24'>
                <img className='mx-auto' src={reviweimg} alt="" />
                <h3 className='text-3xl text-center my-8 text-secondary font-semibold'>What our customers are sayings</h3>
            <p className='mx-50 text-gray-500'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <Swiper effect={'coverflow'}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            // modules={[Autoplay]}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 30,
                stretch: "30%",
                depth: 200,
                scale: 0.90,
                modifier: 1,
                slideShadows: true
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className='mySwiper rounded-2xl'
            >

            {
                review.map(review => 
            <SwiperSlide className='rounded-2xl' key={review.id}>
                <ReviewCard review={review}></ReviewCard>

            </SwiperSlide>
                )
            }

            </Swiper>
        </div>
    );
};

export default Review;