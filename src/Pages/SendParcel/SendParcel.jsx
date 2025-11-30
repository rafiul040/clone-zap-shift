import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosInstance from "../../Hooks/useAxiosInstance";
import useAuth from "./../../Hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const axiosSecure = useAxiosInstance();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    console.log("cost", cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree !",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
        });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });

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
              defaultValue={user?.displayName}
              placeholder="Sender Name"
            />
            <label className="label mt-4">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Sender Email"
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
              <select
                {...register("senderRegion")}
                defaultValue="Select a region"
                className="select w-full"
              >
                <option disabled={true}>Select a region</option>
                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset mt-5">
              <legend className="fieldset-legend my-1">Sender Districts</legend>
              <select
                {...register("senderDistrict")}
                placeholder=""
                defaultValue="Select Districts"
                className="select w-full"
              >
                <option disabled={true}>Select Districts</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            <label className="label mt-4">Sender Address</label>
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
              <select
                {...register("receiverRegion")}
                defaultValue="Select a region"
                className="select w-full"
              >
                <option disabled={true}>Select a region</option>
                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
            </fieldset>

            <fieldset className="fieldset mt-5">
              <legend className="fieldset-legend my-1">
                Receiver District
              </legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Select a District"
                className="select w-full"
              >
                <option disabled={true}>Select a District</option>
                {districtsByRegion(receiverRegion).map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
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