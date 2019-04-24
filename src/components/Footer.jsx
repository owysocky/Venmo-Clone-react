import React from 'react';

function Footer(){
  return(
    <div>
      <style jsx>{`
        .inline {

          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .center{
          border: 1px solid black;
          width: 1000px;
          margin: 0 auto;
          height: 100px;
        }
      `}</style>
      <div className="center">
        <h1>Works</h1>
      </div>
    </div>
  );
}

export default Footer;
