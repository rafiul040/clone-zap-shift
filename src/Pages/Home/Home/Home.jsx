import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../../Brands/Brands';
import Review from '../Reviews/Review';
import ChooseUs from '../ChooseUs/ChooseUs';
import Satisfaction from '../Satisfaction/Satisfaction';
import AskedQuestions from '../AskedQuestions/AskedQuestions';


const reviewsPromise = fetch('/public/reviews.json').then(res => res.json())


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <ChooseUs></ChooseUs>
            <Satisfaction></Satisfaction>
            <Review reviewsPromise={reviewsPromise}></Review>
            <AskedQuestions></AskedQuestions>
        </div>
    );
};

export default Home;