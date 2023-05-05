import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Warning from './components/Warning';
import Footer from './components/Footer';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [userList, setUserList] = useState([]);
  const [form, setForm] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [warning, setWarning] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get(`https://users-crud-tsqd.onrender.com/users`);
      setUserList(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const selectUser = (user) => {
    setForm(true);
    setUserSelected(user);
  };

  const getWarning = (user) => {
    setWarning(true);
    setUserToDelete(user);
  };

  const cancelDelete = () => {
    setWarning(false);
    setUserToDelete(null);
  };

  const deleteUser = (userToDelete) => {
    axios
      .delete(`https://users-crud-tsqd.onrender.com/users/${userToDelete?.id}`)
      .then(() => {
        toast.success('Usuario eliminado exitosamente!');
        getUsers();
        setWarning(false);
        setUserToDelete(null);
      })
      .catch((error) => {
        toast.error('Error al eliminar el usuario. Por favor inténtalo de nuevo.');
      });
  };

  return (
    <div className="w-full flex flex-col justify-around">
      {form && (
        <UserForm
          setForm={setForm}
          getUsers={getUsers}
          userSelected={userSelected}
          setUserSelected={setUserSelected}
        />
      )}
      <UserList
        userList={userList}
        setForm={setForm}
        selectUser={selectUser}
        getUsers={getUsers}
        getWarning={getWarning}
      />
      {warning && (
        <Warning
          userToDelete={userToDelete}
          cancelDelete={cancelDelete}
          deleteUser={deleteUser}
        />
      )}
      <Footer />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
