import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import UserFrom from './components/UserForm/UserForm';
import { IUser } from './types';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUser = (user: IUser) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <>
      <main className='container-fluid'>
        <div className='row'>
          <div className="col-6">
            <UserFrom onSubmit={addUser}/>
          </div>
          <div className="col-6">
            <Users/>
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
