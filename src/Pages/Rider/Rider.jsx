import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosInstance from "../../Hooks/useAxiosInstance";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosInstance();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post('/riders', data)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
              title: "Your Application has been submitted. We will reach to you in 10 working Days !",
              position: 'top-end',
              icon: 'success',
              showConfirmButton: false,
              timer: 3000
              
            })
      }
    })
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="text-4xl -mb-8 text-center font-bold  text-secondary">Be a Rider</h2>

      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="my-12 p-4 text-black max-w-xl mx-auto "
      >
        <div className="">
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold text-secondary mb-5">
              Tell us about yourself
            </h4>

            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Your Name"
            />

            {/* Driving License */}
            <label className="label mt-5">Driving License Number</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License Number"
            />

            {/* Email */}
            <label className="label mt-5">Your Email</label>
            <input
              type="text"
              {...register("email")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Your Email"
            />

            {/* Region */}
            <fieldset className="fieldset -ml-2 my-4">
              <legend className="fieldset-legend">Your Region</legend>
              <select
                {...register("region")}
                defaultValue=""
                className="select w-full"
              >
                <option value="" disabled>
                  Pick a region
                </option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* District */}
            <fieldset className="fieldset -ml-2">
              <legend className="fieldset-legend">Your District</legend>
              <select
                {...register("district")}
                defaultValue=""
                className="select w-full"
              >
                <option value="" disabled>
                  Pick a district
                </option>
                {riderRegion &&
                  districtsByRegion(riderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
              </select>
            </fieldset>

            {/* NID */}
            <label className="label mt-4">NID No</label>
            <input
              type="text"
              {...register("nid")}
              className="input w-full"
              placeholder="NID Number"
            />
            <label className="label mt-4">Phone Number</label>
            <input
              type="number"
              {...register("number")}
              className="input w-full"
              placeholder="Phone Number"
            />
            <label className="label mt-4">Bike Brand Model and Year</label>
            <input
              type="text"
              {...register("bike")}
              className="input w-full"
              placeholder="Bike Brand Model and Year"
            />
            <label className="label mt-4">Bike Registration Number</label>
            <input
              type="text"
              {...register("registration")}
              className="input w-full"
              placeholder="Bike Registration Number"
            />
            <label className="label mt-4">Tell Us About Yourself</label>
            <input
              type="text"
              {...register("nid")}
              className="input w-full"
              placeholder="Tell Us About Yourself"
            />
          </fieldset>
        </div>

        <div className="max-w-xl mt-5 mx-auto ml-2">
          <input
            type="submit"
            className="btn btn-primary w-[150px] mt-8 text-black"
            value="Apply as a Rider"
          />
        </div>
      </form>
    </div>
  );
};

export default Rider;
