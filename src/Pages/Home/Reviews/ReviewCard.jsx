import React from 'react';

const ReviewCard = ({review}) => {

    const {userName, review: testimonial, user_photoURL} = review

    return (
        
            <div className="card w-96 bg-base-100 rounded-2xl shadow-xl p-6">
  <div className="card-body">
    <div className="mb-4">
      <span className="text-2xl text-primary">“</span>
      <p className="text-gray-600 mt-2">
        {testimonial}
      </p>
    </div>
    <div className="flex items-center gap-3 mt-6 border-t pt-4">
      <div className="w-6 h-6 rounded-full">
        <img src={user_photoURL} className='rounded-full' alt="" />
      </div>
      <div>
        <div className="font-bold text-primary">{userName}</div>
        <div className="text-sm text-gray-500">Senior Product Designer</div>
      </div>
    </div>
  </div>
</div>

        
    );
};

export default ReviewCard;