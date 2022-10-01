import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../shared/Loading";
import DeleteModal from "./DeleteModal";
import LoadDoctor from "./LoadDoctor";

const ManageDoctor = () => {
  const [deleteDoctor,setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Manage Doctor {doctors.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <LoadDoctor
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
              ></LoadDoctor>
            ))}
          </tbody>
        </table>
      </div>
      {
        deleteDoctor && <DeleteModal
          setDeleteDoctor={setDeleteDoctor}
          deleteDoctor={deleteDoctor}
          refetch={refetch}
        ></DeleteModal>
      }
    </div>
  );
};

export default ManageDoctor;
