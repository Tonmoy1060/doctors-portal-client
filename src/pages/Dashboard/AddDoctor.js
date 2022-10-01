import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const imageStorageKey = "34f752286aded2af59f38a1fb88e9020";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          
          fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(inserted => {
            console.log(inserted);
            if(inserted.insertedId){
              toast.success('Successfully added a doctor');
              reset();
            }
            else{
              toast.error('Failed to add doctor')
            }
          })
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl">Add A new Doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="name"
            placeholder="Doctors Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Please give a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>

          <select
            {...register("specialty")}
            class=" w-full
          select-sm border mb-3 rounded	 max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} service={service}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
            name="image"
            type="file"
            placeholder="Doctors Name"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input className="btn w-full max-w-xs" value={"add"} type="submit" />
      </form>
    </div>
  );
};

export default AddDoctor;
