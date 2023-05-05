import React from 'react';

const UserCard = ({ user, deleteUser, editUser }) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleEdit = () => {
    editUser(user);
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 flex-wrap w-full h-60 bg-white/20 shadow-lg shadow-black rounded-lg my-10 gap-0 sm:h-72 sm:gap-2 md:w-80 lg:w-4/5">
      <div className="flex flex-row items-center justify-between w-full mb-4">
        <h4 className="text-lg font-bold">{user.first_name} {user.last_name}</h4>
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <p className="text-sm font-medium mb-2">
          <strong className="font-bold">Email:</strong> {user.email}
        </p>
        <p className="text-sm font-medium mb-2">
          <strong className="font-bold">Fecha de nacimiento:</strong> {user.birthday}
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleEdit}
          className="bg-white/40 hover:bg-white/60 text-black/80 font-bold py-1 px-2 rounded-md shadow-lg shadow-black"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="bg-white/40 hover:bg-white/60 text-red-500 font-bold py-1 px-2 rounded-md shadow-lg shadow-black"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default UserCard;