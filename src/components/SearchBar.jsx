import React, { Component } from 'react';
import { fetchSearchPlace } from '../api';

const ResultList = (props) => {
  const { resultList } = props;

  const maybeResultList = resultList.map(
    (item, index) => (
      <li 
        key={`result-item-${index}`}
        style={{ padding: '10px 16px' }}
        >
        {item.name} {item.road_address}}
      </li>
  ));

  return (
    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
      {maybeResultList}
    </ul>
  )
};

class SearchBar extends Component {
  state = {
    inputText: '',
    isFetched: true,
    resultList: [],
  }

  render() {
    const { inputText, isFetched, resultList } = this.state;
    const buttonText = isFetched ? '검색' : '로딩 중';

    return (
      <form 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '320px',
          zIndex: '5',
        }}
        onSubmit={this.onSubmitForm.bind(this)}>
        <input type="text" value={inputText} style={{width: '80%', boxSizing: 'border-box'}}
        onChange={this.onChangeInput.bind(this)} />
        <button style={{width: '20%', boxSizing: 'border-box'}}>{buttonText}</button>
        <ResultList resultList={resultList} />
      </form>
    );
  }

  onSubmitForm(event) {
    event.preventDefault();

    const { inputText } = this.state;
    const { currentCoords } = this.props;

    this.setState({
      isFetched: false,
    });

    fetchSearchPlace(inputText, currentCoords)
    .then(response => {
      const { data: places } = response;
      this.setState({
        resultList: places,
        isFetched: true,
      });
    })
    .catch(error => {
      this.setState({
        isFetched: true,
      });
      console.error(error);
    });
  }

  onChangeInput(event) {
    const { value: inputText } = event.target;

    this.setState({
      inputText,
    })
  }
}

export default SearchBar;