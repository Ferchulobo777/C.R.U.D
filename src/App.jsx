import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Warning from './components/Warning';
import Footer from './components/Footer';

const App = () => {
  const [userList, setUserList] = useState([]);
  const [form, setForm] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [warning, setWarning] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const getUsers = () => {
    axios
      .get(`https://users-crud.academlo.tech/users/`)
      .then((res) => setUserList(res.data));
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
      .delete(`https://users-crud.academlo.tech/users/${userToDelete?.id}`)
      .then(() => {
        getUsers();
        setWarning(false);
        setUserToDelete(null);
      });
  };

  return (
    <div className="w-full h-screen">
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
    </div>
  );
};

export default App;
