import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const handleSendParcel = data => {

    }

    return (
        <div>
            <h2 className="text-5xl font-bold">Send A Parcel</h2>

            <form onSubmit={handleSubmit(handleSendParcel)}>
                {/* document */}
                <div>
                <label className='label'>
                    <input type="radio" {...register('parcelType')} value="document" className='radio' defaultChecked />
                    Document</label>
                </div>



                <div></div>



                <div>
                    <div></div>
                </div>
            </form>
        </div>
    );
};

export default SendParcel;