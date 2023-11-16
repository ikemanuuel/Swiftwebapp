import React, { useState, useEffect } from 'react';
import "../css/Listofuser.css";
import { acceptAccountRequest, activateAccount, deactivateAccount, declineAccountRequest, fetchAccountRequest, fetchRegisteredAccount } from '../../Components/api/api';

const UserList = () => {
  const [accountRequests, setAccountRequests] = useState([]);

  const [registeredAccounts, setRegisteredAccounts] = useState([]);

  useEffect(() => {
    fetchAccountRequest(setAccountRequests)
  }, []);

  useEffect(() => {
    fetchRegisteredAccount(setRegisteredAccounts)
  }, []);

  
  const handleAccept = (id) => {
    acceptAccountRequest(id)
  };

  const handleDecline = (id) => {
   declineAccountRequest(id)
  };
  const handleActivate = (id) => {
    activateAccount(id)
  };
  const handleDeactivate = (id) => {
    deactivateAccount(id)
  };

  return (
    <div className="containersaaccountrequest"> 
        <div className='listusertable'>
            <h2>Account Requests</h2>
            <table className="list-table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {accountRequests.map((user, index) => (
                    <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.user_type}</td>
                    <td>
                        <button className='salistuserbutton' onClick={() => handleAccept(user.id)}>Accept</button>
                        <button className='salistuserdeclinebutton' onClick={() => handleDecline(user.id)}>Decline</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
            <div>       
            <h2>Registered Accounts</h2>
            <table className="list-table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {registeredAccounts.map((user) => (
                    <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.user_type}</td>
                    <td>{user.is_active ? 'Active' : 'Inactive'}</td>
                    <td>
                        <button className='salistuserbutton' onClick={() => handleActivate(user.id)}>Activate</button>
                        <button className='btremove' onClick={() => handleDeactivate(user.id)}>Deactivate</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    
  );
};

export default UserList;
