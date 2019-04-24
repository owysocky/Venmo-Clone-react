import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        img{
          height: 20px;
        }
        .bar{
          width: 800px;
          margin: 0 auto;
          border-bottom: 1px solid lightgray;
          height: 50px;
        }

        li{
          list-style: none;
          display: inline;
          padding: 10px;
        }

        .header-image{
          padding: 15px;
          display: inline;
          float: left;
        }

        .header-nav{
          margin-left: 20px;
          display: inline;
          float: left;

        }

        .header-sign-in{
          display: inline;
          float:left;
        }

        `}</style>
      <div className="bar">
      <div className="header-image">
        <img src="https://s3.amazonaws.com/venmo/venmo_logo_blue.png"></img>
      </div>
      <div className="header-nav">
        <ul>
          <li>How Venmo Works</li>
          <li>Business</li>
          <li>Card</li>
          <li>Security</li>
        </ul>
      </div>
      <div className="header-sign-in">
        <ul>
          <li>Contuct Us</li>
          <li><strong>Sing In</strong></li>
        </ul>
      </div>
    </div>

    </div>

  );
}

export default Header;
