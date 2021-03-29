import React from 'react';
import Result from '../../components/Result/Result.js';

function SearchResults(props) {

      var list = props.results.map((record)=>
      <Result result={record}/>
      );
    return (
      <table key="table"><tbody>{list}</tbody></table>
    );
};

export default SearchResults;
