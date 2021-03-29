import React from 'react';

function Result(props) {
      return (
        <React.Fragment>
          
          <tr key={props.result.id}>
          <td key={props.result.thumbnail}><a href={props.result.link}><div className="image"></div>{props.result.thumbnail}</a></td>
            <td key={props.result.author}>{props.result.author}</td>
            <td key={props.result.dateAdded}>{props.result.dateAdded}</td>
            {/* <td key={props.result.link}>{props.result.link}</td> */}
          </tr>
          
        </React.Fragment>
      );
};

export default Result;
