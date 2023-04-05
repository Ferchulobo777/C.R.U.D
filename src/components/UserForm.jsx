import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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

  const submit = async (data) => {
    try {
      if (userSelected) {
        await axios.put(
          `https://users-crud.academlo.tech/users/${userSelected.id}/`,
          data,
        );
        toast.success('Usuario actualizado exitosamente!');
        getUsers();
        closeForm();
      } else {
        await axios.post(`https://users-crud.academlo.tech/users/`, data);
        toast.success('Usuario creado exitosamente!');
        getUsers();
        closeForm();
      }
    } catch (error) {
      toast.error('Hubo un error al realizar la operacion intente de nuevo!');
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
    <div className="w-full h-screen fixed z-10 top-0 left-0 bottom-0 bg-black/80 flex items-center justify-center">
      <div className=" w-11/12 h-1/2 mx-6 fixed bg-slate-300/80 rounded-lg p-8 shadow-lg shadow-black text-center flex flex-col sm:w-4/5 sm:h-4/5 md:w-3/5 md:h-4/5 lg:w-2/4 lg:h-4/5 xl:h-4/5 xl:w-2/4 2xl:w-2/4 2xl:h-4/6">
        <button
          className="flex items-center justify-center absolute top-2 right-0 rounded-full w-8 H-8 bg-red-700 mr-2 mt-2 text-xl font-bold shadow-lg shadow-black cursor-pointer text-black border-2 border-black hover:cursor-pointer hover:transform hover:scale-125 hover:text-white hover:border-white hover:shadow-sm hover:shadow-white sm:top-2 sm:right-0 md:top-0 md:right-0 lg:top-0 lg:right-0 xl:top-0 xl:right-0 2xl:right-0 2xl:top-0"
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
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg px-2"
              type="text"
              id="firs_name"
              placeholder="Nombre"
              {...register('first_name')}
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i className="bx bxs-user text-xl"></i>
            <input
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg px-2"
              type="text"
              id="last_name"
              placeholder="Apellido"
              {...register('last_name')}
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i className="bx bxs-envelope text-xl"></i>
            <input
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg px-2"
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
              className="block w-4/5 placeholder:text-center shadow-md shadow-black rounded-lg px-2"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              {...register('password')}
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <i className="bx bxs-gift text-xl"></i>
            <input
              className="block px-2 w-4/5 text-center shadow-md shadow-black rounded-lg"
              type="date"
              id="birthday"
              placeholder="Fecha de Nacimiento"
              {...register('birthday')}
            />
          </div>
          <button
            className="bg-blue-500 text-black border-2 border-black w-40 h-10 rounded-md font-bold hover:bg-blue-700 hover:text-white hover:border-white hover:transform hover:scale-105 shadow-lg shadow-black 2xl:mt-6 hover:shadow-sm hover:shadow-white"
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
