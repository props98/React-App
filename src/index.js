import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
    // //* Первый способ - через bind(this)
    // this.nextYear = this.nextYear.bind(this);

    // //* Второй способ - в конструкторе
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }));
    // }
  }

  //* Третий способ - стрелочная функция
  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }));
  }

  // //* Первый способ - через bind(this) в конструкторе
  // nextYear() {
  //   //! Всегда использовать setState()
  //   this.setState(state => ({
  //     years: ++state.years
  //   }));
  // }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years - {years}</h1>
        <a href={link}>My Profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="Neo" surname="Anderson" link="facebook.com"/>
      <WhoAmI name="Trin" surname="Sane" link="vj.com"/>
      <WhoAmI name="Morphius" surname="Jhonson" link="vvvv.com"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <All />
  </React.StrictMode>
);