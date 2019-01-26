import React, { Component } from 'react';

const Person = (props) => {
  return (
    <p>
      {props.name}: {props.count}
    </p>
  );
};

class App extends Component {
  state = {
    gyumin: 0,
    kim: 0,
    web: 0,
  }

  render() {
    return (
      <div className="App">
        <Person name="Gyumin" count={this.state.gyumin}/>
        <button type="button" onClick={this.onClickCounter.bind(this)} name="gyumin">
          Gyumin Up
        </button>

        <Person name="Kim" count={this.state.kim}/>
        <button type="button" onClick={this.onClickCounter.bind(this)} name="kim">
          Kim Up
        </button>

        <Person name="Web" count={this.state.web}/>
        <button type="button" onClick={this.onClickCounter.bind(this)} name="web">
          Web Up
        </button>
      </div>
    );
  }
  
  onClickCounter(event) {
    // name: <button>의 name property가 들어온다.
    const { name } = event.target;
    // const name = event.target.name;

    this.setState({
      // 동적으로 key를 처리. name으로 들어온 것에 따라 다른 state를 처리
      [name]: this.state[name] + 1,
    });
  }
}

export default App;