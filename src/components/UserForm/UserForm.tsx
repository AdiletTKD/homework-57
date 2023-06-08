import React, { useState } from 'react';
import { IUser, IUserMutation } from '../../types';

interface Props {
    onSubmit: (user: IUser) => void;
}

const UserFrom: React.FC<Props> = ({ onSubmit }) => {
    
    const [user, setUser] = useState<IUserMutation>({
        name: '',
        email: '',
        role: '',
    });
    
    const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: nanoid(),
            ...user,
        })
    }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
        />
        </div>
          
    <div className='form-group mt-3 mb-3'>
        
        <label>Yes</label>
        <input
          type="checkbox"
          id="checkbox"
          value=""
          className="form-check-input"
        />
                  
        <label >No</label>
        <input
          type="checkbox"
          id="checkbox"
          value=""
          className="form-check-input"
        />
         
    </div>

      <div className="form-group">
        <select 
          className="form-select"
          aria-label="Default select example"
          value={user.role} 
          onChange={changeUser}
          >
            <option selected>Open this select menu</option>
            <option value="1">user</option>
            <option value="2">editor</option>
            <option value="3">admin</option>
        </select>
      </div>
      

      <button type="submit" className="btn btn-primary mt-3">Create</button>
    </form>
  );
};

export default UserFrom;

function nanoid(): string {
    throw new Error('Function not implemented.');
}
