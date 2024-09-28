import React, { useState, useEffect } from 'react';
import './App.css';
import jsonData from './data.json';  

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (jsonData.length > 0 && jsonData[0].data) {
      setUsers(jsonData[0].data);  
    } else {
      console.error('Data is not loaded or the data structure is incorrect:', jsonData);
    }
  }, []);

  return (
    <><div className='title'>UserCard</div><div className="user-grid">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-avatar" />
          <div className="user-info">
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default App;
