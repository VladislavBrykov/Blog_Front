import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MyPostsReadactPage.css';
// import newPost from '../components/new_post';
import React, { Component }  from 'react';
import userImg from '../grapefruit-slice-332-332.png'

const styles = {
    marginLeft: '180px'
}

export default ({ }) => {
    const [dataFromServer, setDataFromServer] = useState({
        avatar: '',
        email: '',
        login: ''
    });
    const newFile = useRef()

    const loadData = async () => {
        const res = await axios.get("http://localhost:3000/api/posts/" + localStorage.idPost.toString())
        if (res) {
            console.log(res.data.postIdInformation.post);
            setDataFromServer(res.data.postIdInformation.post[0])
        }
    }

    const uploadAvatar = async (image) => {

        let formData = new FormData();
        formData.append("image", image);

        let res = await axios.post('http://localhost:3000/api/uploud-image/1', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.jwtToken
            }
        }).catch(err =>{
            alert(`Что-то пошло нет так. ${err.message}`)
        })

        if (res.status == 200)
            loadData()
        else
            alert(`Что-то пошло нет так.`)
    }

    useEffect(() => {

        loadData()

    }, [])

    return (
                    <div >
                        <div className="rightcolumn">
                            <div className="card">
                                <h2>{dataFromServer.title}</h2>
                                <h5>created: {dataFromServer.createdAt}</h5>
                                <div className="fakeimg" ><img className="fakeimg" src={userImg}></img></div>
                                <div className="card">
                                    <input ref={newFile} accept={'image/x-png,image/jpeg'} onChange={(e) => uploadAvatar(e.target.files[0])} id={'newFile'} type="file" className={'invisible-input'} />
                                    <p>username: {dataFromServer.phoneEmail}</p>
                                </div>
                                <p>{dataFromServer.body}</p>
                                <h5>updated: {dataFromServer.createdAt}</h5>

                            </div>
                        </div>
        </div>
    );

};
