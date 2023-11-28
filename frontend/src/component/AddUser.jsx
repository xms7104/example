import React, { useState } from "react";
import API from '../untils/api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddUser({reload, setReload, setAddUser}){
    const [userName, setUserName] = useState(null);
    const [userAccount, setUserAccount] = useState(null);
    const [userPwd, setUserPwd] = useState(null);

    async function addUser(){
        await API.registerUser({
            'name': userName,
            'account': userAccount,
            'password': userPwd
        }).then((res) =>{
            setUserName(null);
            setUserAccount(null);
            setUserPwd(null);
            setAddUser(false);
            setReload(!reload);
        })        
        .catch((e) => {
            console.log(e);
        });
    }

    return(
        <div>
            <Card style={{ width: '15rem' }} className="mr-4 mb-4">
                <Card.Body>
                    <Card.Title>Add User</Card.Title>
                    <div className="mb-4">
                        <div className="my-2">
                            name: <input type="text" onChange={(e) =>{ setUserName(e.target.value); }} />
                        </div>
                        <div className="my-2">
                            account: <input type="text" onChange={(e) => { setUserAccount(e.target.value); }} />
                        </div>
                        <div className="my-2">
                            password: <input type="password" onChange={(e) => { setUserPwd(e.target.value); }} />
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <Button variant="primary" className="mr-2" onClick={() => { addUser();}}>Submit</Button>
                        <Button variant="danger" 
                        onClick={ () => {
                            setUserName(null);
                            setUserAccount(null);
                            setUserPwd(null);
                            setAddUser(false);
                        }}>Cancel</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddUser;