import React from 'react';

const Warning = ({ userToDelete, cancelDelete, deleteUser }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/80 flex items-center justify-center">
      <div className=" w-2/5 h-3/5 bg-slate-300 rounded-lg p-8 shadow-lg shadow-black text-center flex flex-row flex-wrap justify-center">
        <h4 className="text-2xl font-bold">
          Deseas eliminar al usuario <br />{' '}
          <span className="text-blue-500 mt-4 underline-offset-4 underline">
            {userToDelete?.first_name} {userToDelete?.last_name}
          </span>
        </h4>
        <p className="w-4/5 h-11 flex items-center justify-center text-white font-bold text-xl bg-red-500 rounded-lg shadow-lg shadow-black">
          Atencion esta accion es permanente
        </p>
        <button
          className="w-28 h-8 bg-red-500 mr-4 font-bold text-white hover:bg-red-700 hover:transform hover:scale-110 rounded-lg shadow-lg shadow-black hover:text-black"
          onClick={() => deleteUser(userToDelete)}
        >
          Eliminar
        </button>
        <button
          className="w-28 h-8 bg-blue-500 ml-4 font-bold text-white hover:bg-blue-700 hover:transform hover:scale-110 rounded-lg shadow-lg shadow-black hover:text-black"
          onClick={() => cancelDelete()}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Warning;
