import React from 'react';
import Background from '../img/image.jpg';

const UserList = ({ userList, setForm, selectUser, getUsers, getWarning }) => {
  const orderList = userList.sort((a, b) => a.first_name.localeCompare(b.first_name));

  return (
    <div className="w-full">
      <div className="w-full h-52 flex flex-row flex-wrap items-center justify-around bg-white/30 shadow-lg shadow-black">
        <h1 className="w-full text-center text-4xl font-bold text-black">
          Listado de Usuarios
        </h1>
        <p className="font-bold text-black text-xl">
          <strong>Usuarios Registrados: </strong>
          {userList.length}
        </p>
        <button
          className="w-36 h-10 flex items-center justify-center bg-blue-600 text-white shadow-lg shadow-black hover:bg-slate-200 hover:transform hover:scale-110 hover:text-blue-800 cursor-pointer font-bold rounded-lg"
          onClick={() => setForm(true)}
        >
          <span className="text-2xl mr-1">+</span>Nuevo Usuario
        </button>
      </div>
      <div
        className="flex w-full flex-row flex-wrap gap-8 justify-evenly px-32 py-32"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {orderList.map((user) => (
          <div
            className=" flex flex-row items-center justify-between p-4 flex-wrap w-72 h-60 bg-white/20 shadow-lg shadow-black rounded-lg"
            key={user.id}
          >
            <h4 className="w-full text-center pb-2 border-b-2 border-black font-black">
              {user.first_name}, {user.last_name}
            </h4>
            <div className="">
              <p>
                <strong className="underline-offset-2 underline font-bold">
                  Email:{' '}
                </strong>{' '}
                <br />
                {user.email}
              </p>
              <p>
                <strong className="underline-offset-2  underline font-bold">
                  Fecha de Nacimiento:{' '}
                </strong>{' '}
                <br />
                {user.birthday}
              </p>
            </div>
            <div className="flex items-center justify-center flex-row gap-4 rounded-md sm:flex-col">
              <div
                className="bg-blue-700 flex items-center justify-center flex-col gap-6 w-10 h-10 border-2 border-black rounded-md shadow-md shadow-black"
                onClick={() => selectUser(user)}
              >
                <i className="bx bxs-edit-alt bx-sm cursor-pointer"></i>
              </div>
              <div
                className="bg-red-700 flex items-center justify-center w-10 h-10 border-2 border-black rounded-md shadow-md shadow-black"
                onClick={() => getWarning(user)}
              >
                <i className="bx bx-trash bx-sm cursor-pointer"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
