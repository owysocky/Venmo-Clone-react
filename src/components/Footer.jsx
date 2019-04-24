import React from 'react';

function Footer(){
  return(
    <div className="inline">
      <style jsx>{`
        .inline {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }
      `}</style>
      <h1>Works</h1>
    </div>
  );
}

export default Footer;
