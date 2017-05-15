import React, { Component } from 'react';
import wbooks_logo from './wbooks_logo.svg';
import notifications from './notifications.svg';
import add_book from './add_book.svg';
import profile_image from './profile_image.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="Login">
//         <img src={wbooks_logo} alt="logo" />
//         <button className="Button">INGRESAR CON GOOGLE</button>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Books />
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return (
      <header className="Header">
        <img src={wbooks_logo} className="Logo" alt="logo" />
        <div className="RightHeader">
          <img src={notifications} className="Notifications" alt="notif" />
          <img src={add_book} className="AddBook" alt="add_book" />
          <img src={profile_image} className="ProfileImage" alt="profile_img" />
        </div>
      </header>
    );
  }
}

class Books extends Component {
  render(){
    return (
      <div className="Books">
        <SearchBar />
        <Book />
      </div>
    );
  }
}

class SearchBar extends Component {
  render(){
    return (
      <div className="SearchItems">
        <form className="Filters">
          <input list="filters" className="FilterText" placeholder="Seleccionar filtro" />
          <datalist id="filters">
            <option value="Nombre" />
            <option value="Autor" />
          </datalist>
          <div className="SearchGroup">
            <input type="search" className="Search" placeholder="Buscar..." />
            <input type="submit" className="SearchButton" value=""/>
          </div>
        </form>
      </div>
    );
  }
}

class Book extends Component {
  render(){
    return (
      <div className="Book">
        <label className="BookImage" />
        <h4 className="HomeBookTitle">Titulo</h4>
        <p className="HomeBookAuthor">Autor</p>
      </div>
    );
  }
}

export default App;
