import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
console.log(errors)

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({control, name: 'senderRegion'});
  const receiverRegion = useWatch({control, name: 'receiverRegion'})


  const districtsByRegion = region => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district)
    return districts
  }




  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="mb-20">
      <h2 className="text-5xl mx-5 font-bold">Send A Parcel</h2>

      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 text-black p-4"
      >
        {/* document */}
        <div>
          <label className="label font-medium mr-5">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
              defaultChecked
            />
            Non-Document
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8 border-b-1 border-gray-300  pb-7">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (Kg)</label>
            <input
              type="text"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset">
            <h4 className="text-2xl py-5 font-semibold">Sender Details</h4>
            <label className="label mt-4">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            <label className="label mt-4">Sender Phone No</label>
            <input
              type="text"
              {...register("senderPhone")}
              className="input w-full"
              placeholder="Sender Phone No"
            />



<fieldset className="fieldset mt-5">
              <legend className="fieldset-legend my-1">Sender Regions</legend>
              <select {...register('senderRegion')} defaultValue="Select a region" className="select w-full">
                <option disabled={true}>Select a region</option>
                {
                    regions.map((r, i) => <option key={i}>{r}</option>)
                }
              </select>
            </fieldset>



<fieldset className="fieldset mt-5">
              <legend className="fieldset-legend my-1">Sender Districts</legend>
              <select {...register('senderDistrict')} placeholder="" defaultValue="Select Districts" className="select w-full">
                <option disabled={true}>Select Districts</option>
                {
                    districtsByRegion(senderRegion).map((r, i) => <option value={r} key={i}>{r}</option>)
                }
              </select>
            </fieldset>


 <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />







            
          </fieldset>

          <fieldset className="fieldset">
            <h4 className="text-2xl py-5 font-semibold">Receiver Details</h4>
            <label className="label mt-4">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />
            <label className="label mt-4">Receiver Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />


 <label className="label mt-4">Receiver Phone No</label>
            <input
              type="text"
              {...register("receiverPhone")}
              className="input w-full"
              placeholder="Receiver Phone No"
            />


<fieldset className="fieldset mt-5">
              <legend className="fieldset-legend my-1">Receiver Regions</legend>
              <select {...register('receiverRegion')} defaultValue="Select a region" className="select w-full">
                <option disabled={true}>Select a region</option>
                {
                    regions.map((r, i) => <option key={i}>{r}</option>)
                }
              </select>
            </fieldset>



<fieldset className="fieldset mt-5">
              <legend className="fieldset-legend my-1">Receiver District</legend>
              <select {...register('receiverDistrict')} defaultValue="Select a District" className="select w-full">
                <option disabled={true}>Select a District</option>
                {
                    districtsByRegion(receiverRegion).map((r, i) => <option value={r} key={i}>{r}</option>)
                }
              </select>
            </fieldset>







            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
           

            {/* <fieldset className="fieldset mt-5">
              <legend className="fieldset-legend my-1">Receiver Regions</legend>
              <select defaultValue="Select Receiver region" className="select w-full">
                <option disabled={true}>Select Receiver region</option>
                {
                    regions.map((r, i) => <option key={i}>{r}</option>)
                }
              </select>
              <span className="label">Optional</span>
            </fieldset> */}


            
              
          </fieldset>
        </div>
        <div className="my-5 mx-2">
          <input
            type="submit"
            value="Send Parcel"
            className="btn w-full btn-primary   text-black"
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
