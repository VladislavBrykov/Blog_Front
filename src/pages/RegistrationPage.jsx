import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';
import React, { Component }  from 'react';

function RegistrationPage() {
    const styles = {//Стили для страницы
        position: 'absolute',
        top: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
    }

    const loadData = async () => { //Функция с запросом на сервер
        let login = document.getElementById('login').value;
        let password = document.getElementById('pass').value;

        const body = { "phoneEmail": login, "password": password } // То что передаем на сервер
        console.log(body);
        axios.defaults.baseURL = 'http://localhost:3000/api';

        await axios.post(
            `http://3.16.57.86:3000/api/registration`,
            body
        );
        alert('Успешно');
    }

    return (
        <div>
            <div>
                <div style={styles} class="form_auth_block">
                    <div class="form_auth_block_content">
                        <p class="form_auth_block_head_text">Регистрация</p>
                        <form class="form_auth_style" action="#" method="post">
                            <label>Введите Ваш логин</label>
                            <input type="login" name="auth_login" placeholder="Введите Ваш логин" id="login" required ></input>
                            <label>Введите Ваш пароль</label>
                            <input type="password" name="auth_pass" placeholder="Введите пароль" id="pass" required ></input>
                            <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => loadData()}><Link to="/login">Зарегистрироваться</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;


