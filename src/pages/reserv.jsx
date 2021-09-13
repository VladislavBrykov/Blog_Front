import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MyPostsReadactPage.css';
// import newPost from '../components/new_post';
import React, { Component }  from 'react';
import userImg from '../grapefruit-slice-332-332.png'
const item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : '+' : figures.line);

const styles = {
    marginLeft: '180px'
}

function AllPosts(params) {// Страница постов
    const [dataFromServer, setDataFromServer] = useState({
        avatar: '',
        email: '',
        login: ''
    });
    const newFile = useRef()

    const loadData = async () => {

        const res = await axios.get("http://localhost:3000/api/posts?page=1&sort=standard")

        console.log(res.data.allPosts.posts);
        setDataFromServer(res.data.allPosts.posts[0])
    }

    const uploadAvatar = async (image) => {

        let formData = new FormData();
        formData.append("image", image);

        let res = await axios.post('http://3.16.57.86:30000/api/uploud-image/1', formData, {
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
            {
                setDataFromServer.length
                    ? <div className="rightcolumn">
                        <div className="card">
                            <h2>{dataFromServer.title}</h2>
                            <h5>created: {dataFromServer.createdAt}</h5>
                            <div className="fakeimg"><img className="fakeimg" src={userImg}></img></div>
                            <div className="card">
                                <input ref={newFile} accept={'image/x-png,image/jpeg'}
                                       onChange={(e) => uploadAvatar(e.target.files[0])} id={'newFile'} type="file"
                                       className={'invisible-input'}/>
                                <p>username: {dataFromServer.phoneEmail}</p>
                            </div>
                            <p>{dataFromServer.body}</p>
                            <h5>updated: {dataFromServer.createdAt}</h5>

                        </div>
                    </div>
                    : <h2>Постов пока нет</h2>

            }
        </div>
    );

};

export default AllPosts;

