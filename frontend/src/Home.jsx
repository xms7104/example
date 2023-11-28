import React, { useState } from "react";
import User from "./component/User";
import AddUser from './component/AddUser';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [reLoad, setReload] = useState(false);
  const [addUser, setAddUser] = useState(false);

  return (
    <div className="px-4 py-4">
      {addUser ? (
        <div>
          <AddUser reLoad={reLoad} setReload={setReload} setAddUser={setAddUser} />
        </div>
      ) : (
        <div>
          <Button variant="primary" className="mb-4" onClick={() => {setAddUser(true);}}>Add User</Button>
        </div>
      )}
      
      <div className=" flex justify-start items-center flex-wrap">
        <User reLoad={reLoad} setReload={setReload} />
      </div>
    </div>
    
  );
}

export default Home;