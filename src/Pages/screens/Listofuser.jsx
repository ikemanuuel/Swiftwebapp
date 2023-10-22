import React, { useState } from 'react';
import "../css/Listofuser.css";

const UserList = () => {
  const [accountRequests, setAccountRequests] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', role: 'Role A' },
    { id: 2, username: 'user2', email: 'user2@example.com', role: 'Role B' },
    // Add more account requests here
  ]);

  const [registeredAccounts, setRegisteredAccounts] = useState([
    { id: 1, username: 'user3', email: 'user3@example.com', role: 'Role A', status: 'Active' },
    { id: 2, username: 'user4', email: 'user4@example.com', role: 'Role B', status: 'Inactive' },
    // Add more registered accounts here
  ]);

  // Handle accept and decline actions for account requests
  const handleAccept = (id) => {
    // Implement your logic here to accept the account request with the given ID
  };

  const handleDecline = (id) => {
    // Implement your logic here to decline the account request with the given ID
  };

  // Handle remove action for registered accounts
  const handleRemove = (id) => {
    // Implement your logic here to remove the registered account with the given ID
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
                {accountRequests.map((user) => (
                    <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
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
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>
                        <button className='btremove' onClick={() => handleRemove(user.id)}>Remove</button>
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
