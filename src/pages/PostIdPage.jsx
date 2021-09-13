import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './posts.css';
// import newPost from '../components/new_post';
import React, { Component }  from 'react';
import userImg from '../grapefruit-slice-332-332.png'

const styles = {
    marginLeft: '180px'
}

function PostsIdPage(params) {
    const newFile = useRef()


    const [dataFromServer, setDataFromServer] = useState({
        avatar: '',
        email: '',
        login: ''
    });

    const loadData = async () => {
        let params = await window.location.href;
        params = await params.match(/post-admin\/([^ ]*)/)[1];
        await (params)
        localStorage.idPost = params.toString()
        const res = await axios.get("http://localhost:3000/api/posts/" + params.toString())
        console.log(res.data.postIdInformation.post[0]);
        setDataFromServer(res.data.postIdInformation.post[0])
    }

    const deletePost = async () => {
        // let params = await window.location.href;
        // params = await params.match(/post-admin\/([^ ]*)/)[1];
        await axios.delete(
            `/delete-post/` + localStorage.idPost.toString(),
            {
                headers: {
                    Authorization: localStorage.jwtToken
                }
            }
        );
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

    async function createDisLikePost() {
        let params = await window.location.href;
        params = await params.match(/post-admin\/([^ ]*)/)[1];
       // await (params)
      const body = {
          "typeActionPostComment": "post",
          "idPostComment": params.toString(),
          "phoneEmail": localStorage.id.toString(),
          "likeDislike": "dislike"
    }
        if(localStorage.jwtToken) {
            const res = await axios.post(
                `http://3.16.57.86:3000/api/new-like`,
                body,
                {
                    headers: {
                        Authorization: localStorage.jwtToken
                    }
                }
            );
            localStorage.jwtToken = res.data.resultCreateNewLike.newToken;
            loadData();
        }
        return null;
    }

    async function createLikePost() {
        let params = await window.location.href;
        params = await params.match(/post-admin\/([^ ]*)/)[1];
        // await (params)
        const body = {
            "typeActionPostComment": "post",
            "idPostComment": params.toString(),
            "phoneEmail": localStorage.id.toString(),
            "likeDislike": "like"
        }
        if(localStorage.jwtToken) {
            const res = await axios.post(
                `http://localhost:3000/api/new-like`,
                body,
                {
                    headers: {
                        Authorization: localStorage.jwtToken
                    }
                }
            );
            localStorage.jwtToken = res.data.resultCreateNewLike.newToken;
            loadData();
        }
        return null;
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

                    <button className="social-like" onClick={createDisLikePost}>
                        <span className="like"><i className="glyphicon glyphicon-thumbs-up"></i></span>
                        <span className="count">{dataFromServer.countDisLikes}</span>
                    </button>
                    &nbsp;

                    <button className="social-dislike" onClick={createLikePost}>
                        <span className="dislike">{dataFromServer.countLikes}</span>
                        <span className="like"><i className="glyphicon glyphicon-thumbs-down"></i></span>
                    </button>

<div>
    <br/>

    <button className="form_auth_button" type="submit" name="form_auth_submit" onClick={() => deletePost()}><Link
        to="/post-admin">Удалить запись</Link></button>
    {/*<button className="form_auth_button" type="submit" name="form_auth_submit" onClick={() => deletePost()}>Удалить запись</button>*/}

</div>

                </div>

            </div>

            {/*<div class="box1">*/}
            {/*    <div className="info-item">*/}
            {/*<div>*/}
            {/*    <img src={userImg}></img>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input ref={newFile} accept={'image/x-png,image/jpeg'} onChange={(e) => uploadAvatar(e.target.files[0])} id={'newFile'} type="file" className={'invisible-input'} />*/}
            {/*</div>*/}
            {/*<label>id post</label>*/}
            {/*<h1>{dataFromServer.id}</h1>*/}
            {/*<label>username</label>*/}
            {/*<h1>{dataFromServer.phoneEmail}</h1>*/}
            {/*<label>title</label>*/}
            {/*<h1>{dataFromServer.title}</h1>*/}
            {/*<label>body</label>*/}
            {/*<h1>{dataFromServer.title}</h1>*/}
            {/*<label>image</label>*/}
            {/*<h1>{dataFromServer.image}</h1>*/}
            {/*<label>createdAt</label>*/}
            {/*<h1>{dataFromServer.createdAt}</h1>*/}
            {/*<label>updatedAt</label>*/}
            {/*<h1>{dataFromServer.updatedAt}</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );

};

export default PostsIdPage;
