import React from 'react';
import { IUser } from '../../types';

interface Props {
    onSubmit: (user: IUser) => void;
}

const UserFrom: React.FC<Props> = ({onSubmit}) => {

  return (
    <form>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
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
        <select className="form-select" aria-label="Default select example">
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