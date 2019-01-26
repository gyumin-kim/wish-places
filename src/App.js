import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fileInput = React.createRef();

  render() {
    return (
      <div className="App">
        <input multiple={false} ref={this.fileInput} type="file" />
        <button type="button" onClick={this.onClickButton.bind(this)}>버튼</button>
      </div>
    );
  }

  onClickButton() {
    // Ref: DOM에 직접 접근할 경우
    // .current가 <input> 태그를 의미한다.
    const [file = {name: '', size: ''}] = this.fileInput.current.files;
    const { name, size } = file;

    alert(`파일 이름: ${name}, 파일 크기: ${size} byte`);
  }
}

export default App;