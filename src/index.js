import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const elem = (

//   <div>
//     <h2>Hello World!</h2>
//     <input type="text" placeholder="Type Here" />
//     <button/>
//   </div>

// )

const Header = () => {
  // const scr = '<script>alert("Error!")</script>';
  //! Скрипты передаються в виде строки

  return <h2>Hello World!</h2>
}

const Field = () => {
  const holder = 'Enter Here from const';
  const styledField = {
    width: '350px'
  }

  return <input
    style={styledField}
    type="text" 
    placeholder={holder} 
    autoComplete="" 
    className="first"
    htmlFor="" />
}

const Button = () => {
  const text = 'Log in';
  // const res = () => {
  //   return 'Push, please!'
  // }
  // const p = <p>Log in p</p>
  //! Нельзя передовать Objects
  const logged = true;
  
  return <button>{logged ? 'Enter' : text}</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Button/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
