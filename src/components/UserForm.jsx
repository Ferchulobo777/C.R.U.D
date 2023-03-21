import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ setForm, getUsers, userSelected, setUserSelected }) => {
  const { handleSubmit, register, reset } = useForm();
  const inputNull = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
  };

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    } else {
      reset(inputNull);
    }
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      axios
        .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
        .then(() => {
          getUsers();
          closeForm();
        });
    } else {
      axios.post(`https://users-crud.academlo.tech/users/`, data).then(() => {
        getUsers();
        closeForm();
      });
    }
  };
  const closeForm = () => {
    setForm(false);
    setUserSelected(null);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/80 flex items-center justify-center">
      <div className=" w-full h-4/5 mx-6 bg-slate-300/60 rounded-lg p-8 shadow-lg shadow-black text-center flex flex-col relative md:w-4/5 lg:w-3/5 lg:h-96 xl:h-4/5 xl:w-1/3 2xl:justify-evenly 2xl:gap-4">
        <button
          className="flex items-center justify-center absolute top-0 right-0 rounded-full w-8 H-8 bg-red-700 mr-2 mt-2 text-xl font-bold shadow-lg shadow-black cursor-pointer text-white border-2 border-white hover:cursor-pointer hover:transform hover:scale-125 hover:text-black"
          onClick={() => closeForm()}
        >
          X
        </button>
        <h3 className="text-2xl font-bold 2xl:text-3xl">Formulario</h3>
        <form
          className="flex flex-col gap-4 justify-center items-center mt-4"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i className="bx bxs-user text-xl"></i>
            <input
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg"
              type="text"
              id="firs_name"
              placeholder="Nombre"
              {...register('first_name')}
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i className="bx bxs-user text-xl"></i>
            <input
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg"
              type="text"
              id="last_name"
              placeholder="Apellido"
              {...register('last_name')}
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i className="bx bxs-envelope text-xl"></i>
            <input
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg"
              type="email"
              id="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i
              className={`bx ${
                showPassword ? 'bxs-show' : 'bxs-hide'
              } text-xl cursor-pointer`}
              onClick={togglePasswordVisibility}
            ></i>
            <input
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              {...register('password')}
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i className="bx bxs-gift text-xl"></i>
            <input
              className="block w-4/5 text-center shadow-md shadow-black rounded-lg"
              type="date"
              id="birthday"
              placeholder="Fecha de Nacimiento"
              {...register('birthday')}
            />
          </div>
          <button
            className=" bg-blue-500 text-white w-40 h-10 rounded-md font-bold hover:bg-blue-700 hover:text-black hover:transform hover:scale-105 shadow-lg shadow-black 2xl:mt-6"
            type="submit"
          >
            {userSelected ? 'Actualizar' : 'Crear Usuario'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
