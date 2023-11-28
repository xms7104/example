import React, { useEffect, useState } from "react";
import API from '../untils/api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function User({reLoad, setReload}){
    const [userList, setUserList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState(null);
    const [editAccount, setEditAccount] = useState(null);
    const [editPwd, setEditPwd] = useState(null);

    useEffect(() => {
      async function getUser() {
        await API.getUser()
        .then((res) => {
          setUserList(res);
        })
        .catch((e) => {
          console.log(e);
        });
      }
    getUser();
    },[reLoad]);

    async function editUser(){
        await API.editUser({
            'id': editId,
            'name': editName,
            'account': editAccount,
            'password': editPwd,
        }).then((res) =>{
            setEditId(null);
            setEditName(null);
            setEditAccount(null);
            setEditPwd(null);
            setEdit(false);
            setReload(!reLoad);
        })        
        .catch((e) => {
            console.log(e);
        });
    }

    async function deleteUser(id){
        console.log(id)
        await API.deleteUser({
            'id': id,
        }).then((res) =>{
            setReload(!reLoad);
        })        
        .catch((e) => {
            console.log(e);
        });
    }

    if(userList.length !== 0){
        return userList.map((item, index) =>{
            return(
                <Card style={{ width: '15rem' }} className="mr-4 mb-4">
                <Card.Body>
                    <Card.Title>{item.id}</Card.Title>
                    <div className="mb-4">
                        <div className="my-2 flex justify-start items-center">
                            name: {!edit || editId !== item.id ? 
                            (<p>{item.name}</p>) : 
                            (<input type="text" className="w-[80%] border-2 border-solid border-black rounded-md px-1 mx-1" defaultValue={item.name} onChange={(e) => {setEditName(e.target.value)}} />)}
                        </div>
                        <div className="my-2 flex justify-start items-center">
                            account: {!edit || editId !== item.id ? 
                            (<p>{item.account}</p>) : 
                            (<input type="text" className="w-[80%] border-2 border-solid border-black rounded-md px-1 mx-1" defaultValue={item.account} onChange={(e) => {setEditAccount(e.target.value)}} />)}
                        </div>
                        <div className="my-2 flex justify-start items-center">
                            password: {!edit || editId !== item.id ? 
                            (<p>{item.password}</p>) : 
                            (<input type="password" className="w-[80%] border-2 border-solid border-black rounded-md px-1 mx-1" defaultValue={item.password} onChange={(e) => {setEditPwd(e.target.value)}} />)}
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <Button variant="primary" className="mr-2" 
                        onClick={() => {
                            if(edit){
                                editUser();
                            }else{
                                setEdit(true);
                                setEditId(item.id);
                                setEditName(item.name);
                                setEditAccount(item.account);
                                setEditPwd(item.password);
                            }
                        }}>{!edit || editId !== item.id ? (<p>Edit</p>) : (<p>Submit</p>)}</Button>
                        <Button variant="danger" onClick={() => {
                            if(edit){
                                setEdit(false);
                                setEditId(null);
                                setEditName(null);
                                setEditAccount(null);
                                setEditPwd(null);
                            }else{
                                deleteUser(item.id);
                            }
                        }}>{!edit || editId !== item.id ? (<p>Delete</p>) : (<p>Cancel</p>)}</Button>
                    </div>
                </Card.Body>
                </Card>
            )
        })
    }
}

export default User;