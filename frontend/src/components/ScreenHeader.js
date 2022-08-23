import React from 'react';

function ScreenHeader(props) {

  return (
    <header>
        <h1>{props.header}</h1>
        <p>{props.subheader}</p>
    </header>
  );
}

export default ScreenHeader;