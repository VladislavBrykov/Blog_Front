import React from 'react'
import { Link } from 'react-router-dom';
import './menu.css';

class AppMenu extends React.Component {

  render() {
    return (

      <div className="sidebar">
        {
          this.props.loggedIn === "admin" || this.props.loggedIn === "user"
            ? this.props.loggedIn === "user"
              ? <div className="btn-group">
                <button className="button"><Link to="/">Главная user</Link></button>
                    <button className="button"><Link to="/">Главная</Link></button>
                    <button className="button"><Link to="/posts-authorized-user">Посты</Link></button>
                    <button className="button"><Link to="/new-post">Добавить пост</Link></button>
              </div>

              : <div className="btn-group">
                <button className="button"><Link to="/accaunt">Кабинет admin</Link></button>
                <button className="button"><Link to="/">Главная</Link></button>
                <button className="button"><Link to="/posts-authorized">Посты</Link></button>
                <button className="button"><Link to="/new-post">Добавить пост</Link></button>
              </div>

            : <div className="btn-group">
              <button className="button">Гость</button>
              <button className="button"><Link to="/">Главная</Link></button>
              <button className="button"><Link to="/posts-for-guest">Посты</Link></button>
            </div>
        }
      </div>


    )
  }
}

export default AppMenu;
