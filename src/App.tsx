import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Users from './components/Users/Users';

function App() {
  return (
    <>
      <main className='container-fluid'>
        <div className='row'>
          <div className="col-6">
            <Form/>
          </div>
          <div className="col-6">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
