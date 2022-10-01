import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({setDeleteDoctor, deleteDoctor, refetch}) => {
   const handleDelete = () => {
      fetch(`http://localhost:5000/doctor/${deleteDoctor.email}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
       }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success(`${deleteDoctor.name} doctor has been deleted`);
        refetch()
        setDeleteDoctor(null);
      })
    }
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
          Are You Sure Want To delete {deleteDoctor.name}
          </h3>
          <p class="py-4">
            once delete {deleteDoctor.name} , You will never find him again .
          </p>
          <div class="modal-action">
          <button onClick={() => handleDelete()} class="btn btn-xs btn-error">delete</button>
            <label for="delete-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
