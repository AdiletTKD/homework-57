import React from 'react';
import { IUser } from '../../types';

interface Props {
    user: IUser;
}


const Users: React.FC<Props> = ({user}) => {

  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm">
          <div className="card-body">
            <h5 className="card-title"> {user.name} </h5>
            <p className="card-text small">{user.email}</p>
            <p className="card-text">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;