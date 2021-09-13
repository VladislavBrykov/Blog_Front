import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../components/new_post/new_post.css';
import React, { Component }  from 'react';

function NewPostsPage(params) {// Страница постов
    const styles = {//Стили для страницы
        position: 'absolute',
        top: '-10px',
        left: '50%',
        transform: 'translateX(-50%)'
    }



    const [dataFromServer, SetDataFromServer] = useState(null);

    const loadData = async () => {

        let title = document.getElementById('titleBody').value;
        let content = document.getElementById('contentBody').value;

        console.log(localStorage.id);

        const body = { "title": title, "body": content, "phoneEmail": localStorage.id }
        console.log(body);
        const res = await axios.post(`http://localhost:3000/api/new-post`, body, {
                headers: {
                    Authorization: localStorage.jwtToken
                }
        })
    if(res) {
        // console.log(res.data.createNewPost.bodyCreateNewPost[0].id)
        localStorage.idPost = res.data.createNewPost.bodyCreateNewPost[0].id;
    }
    }

    return (
        <div>
            <div>
                <div style={styles} class="form_auth_block">
                    <div class="form_auth_block_content">
                        <p class="form_auth_block_head_text">Новая запись</p>
                        <form class="form_auth_style" action="#" method="post">
                            <label>Название</label>
                            <textarea rows="1" cols="52" name="textArea" id="titleBody" required></textarea>
                            <label>Опишите проблему</label>
                            <textarea rows="15" cols="52" name="textArea" id="contentBody" required></textarea>
                            {/*<label>Введите категорию</label>*/}
                            {/*<textarea rows="1" cols="52" name="textArea" id="categoriesBody" required></textarea>*/}
                            <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => loadData()}><Link to="/posts-authorized">Добавить запись</Link></button>
                            {/*<button className="form_auth_button" type="submit" name="form_auth_submit"*/}
                            {/*        onClick={() => loadData()}>Добавить запись</button>*/}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPostsPage;
