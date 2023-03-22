import React from 'react';

const Warning = ({ userToDelete, cancelDelete, deleteUser }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/80 flex items-center justify-center">
      <div className="w-full h-3/5 mx-4 bg-slate-300/60 rounded-lg p-8 shadow-lg shadow-black text-center flex flex-row flex-wrap justify-center md:w-4/5 lg:w-3/5 lg:h-96 xl:h-4/5 xl:w-1/3">
        <h4 className="w-full text-xl font-bold lg:text-2xl xl:text-2xl 2xl:text-3xl">
          Deseas eliminar al usuario <br />{' '}
          <span className=" text-blue-900 mt-4 underline-offset-4 underline">
            {userToDelete?.first_name} {userToDelete?.last_name}
          </span>
        </h4>
        <p className="w-full h-11 flex items-center justify-center text-white font-bold text-lg bg-red-500 rounded-lg shadow-lg shadow-black md:w-4/5 lg:text-xl xl:w-full 2xl:h-14 2xl:text-2xl">
          Atencion esta accion es permanente
        </p>
        <button
          className="w-28 h-8 bg-red-500 mr-4 font-bold text-black border-2 border-black hover:bg-red-700 hover:text-white hover:border-white hover:transform hover:scale-110 rounded-lg shadow-lg shadow-black hover:shadow-sm hover:shadow-white 2xl:w-44 2xl:h-14 2xl:text-xl"
          onClick={() => deleteUser(userToDelete)}
        >
          Eliminar
        </button>
        <button
          className="w-28 h-8 bg-blue-500 ml-4 font-bold text-black border-2 border-black hover:bg-blue-700 hover:transform hover:scale-110 rounded-lg shadow-lg shadow-black hover:text-white hover:border-white hover:shadow-sm hover:shadow-white 2xl:w-44 2xl:h-14 2xl:text-xl"
          onClick={() => cancelDelete()}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Warning;
