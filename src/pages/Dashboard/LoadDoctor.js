import React from "react";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";

const LoadDoctor = ({ doctor, index, setDeleteDoctor  }) => {
  const { name, email, specialty, img} = doctor;
  
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-12 rounded">
            <img
              src={img}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={() => setDeleteDoctor(doctor)} for="delete-modal" class="btn btn-xs btn-error">
      delete
      </label>
      </td>
    </tr>
  );
};

export default LoadDoctor;
