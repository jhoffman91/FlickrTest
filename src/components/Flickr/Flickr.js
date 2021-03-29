import React from 'react';
import styles from './Flickr.css';
import SearchResults from '../../components/SearchResults/SearchResults.js';

class Flickr extends React.Component {

  constructor(props) {
    super(props);
    // this.results=this.searchFlickr();
    this.state = {
      inputValue: '',
      resultSet:[],
    };
    this.updateInput = this.updateInput.bind(this);
  }

  searchFlickr(inputVal) {
    var apiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?format=json";
	console.log('input val = ' + this.inputVal);
	if (inputVal !== null && inputVal !== '') {apiUrl = apiUrl + '&tags=' + inputVal.replace(/\s/g,",");}
 	 fetch(apiUrl, {mode: 'no-cors', credentials:'omit', method: 'GET'})
	.then(result => {
        console.log(result);
      }).catch(e => {
        console.log(e);
        return e;
      });
    return [
      {id:inputVal, author:"author:"+inputVal, thumbnail:"image"+inputVal, link:"xyz.com",dateAdded:"date"+1},
      {id:inputVal+1, author:"author:"+inputVal+2, thumbnail:"image"+inputVal+2, link:"xyz.com.au",dateAdded:"date"+2}
    ];
  }

  updateInput(event) {
    this.setState({inputValue: event.target.value});
    // event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
      <div className="content">
        <h3>Flickr search</h3>
      {/* <input type="text" name="searchValue" value={this.state.inputValue} onChange={() => this.searchFlickr(this.state.inputValue)}/> */}
      <input type="text" name="searchValue" value={this.state.inputValue} onChange={this.updateInput}/>
        <SearchResults results={this.searchFlickr(this.state.inputValue)}/>
      </div>
      <br/>
      {/* <div className="content">
        <input type="text" name="searchValue"/>
        <SearchResults results={this.searchFlickr2()}/>
      </div> */}
      </React.Fragment>
    );
  }
};

export default Flickr;
