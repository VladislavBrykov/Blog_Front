import { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './UsersPaje.css';
// import '../../components/posts/posts.css'
// import newPost from '../components/new_post';
import React, { Component }  from 'react';
import userImg from "../grapefruit-slice-332-332.png";
import './posts.css'

// import 'rc-pagination/assets/index.css';



function PostsPage(params) {// Страница постов
    const styles = {//Стили для страницы
        position: 'absolute',
        top: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
    }

    const [CurrentPage, changeCurrentPage] = useState(1)
    const [dataFromServer, setDataFromServer] = useState([]); //Используем хук состояния для данных с сервера

    const loadData = async () => { //Функция с запросом на сервер
        const res = await axios.get("http://localhost:3000/api/posts?page=1&sort=standard")

        console.log(res.data.allPosts.posts);
        setDataFromServer(res.data.allPosts.posts.reverse())
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div style={styles}>

            {
                dataFromServer.map((item, index) => index < CurrentPage * 5 && index >= (CurrentPage - 1) * 5
                    ?

                    // <div id="pressed">
                    //     <h2 id="h2" key={index}>{item.title}</h2>
                    //     <h3 id="h4" key={index}>{item.content}</h3>
                    //     <button className="button"><Link to={'/post-id' + '/' + item.id}>Посмотреть</Link></button>
                    // </div>

                    <div className="rightcolumn">
                        <div className="card">
                            <h2>{item.title}</h2>
                            <h5>created: {item.createdAt}</h5>
                            <div className="fakeimg"><img className="fakeimg" src={item.img}></img></div>
                            <div className="card">
                                {/*<input ref={newFile} accept={'image/x-png,image/jpeg'}*/}
                                {/*       onChange={(e) => uploadAvatar(e.target.files[0])} id={'newFile'} type="file"*/}
                                {/*       className={'invisible-input'}/>*/}
                                <p>username: {item.phoneEmail}</p>
                            </div>
                            <p class="lengBody">{item.body}</p>
                            <h5>updated: {item.createdAt}</h5>
                            <button className="button"><Link to={'/post-admin' + '/' + item.id}>Посмотреть</Link></button>

                        </div>
                    </div>
                    : null)
            }

            {
                dataFromServer.length
                    ? <div className="p-2">
                        <Pagination className="" onChange={(current) => changeCurrentPage(current)} defaultCurrent={1} total={Math.ceil(dataFromServer.length / 5) * 10} />
                    </div>
                    : <h2>Постов пока нет</h2>
            }

        </div>
    );
}

export default PostsPage;
