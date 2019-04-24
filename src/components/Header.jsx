import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        img{
          height: 18px;
        }
        .bar{
          width: 1000px;
          margin: 0 auto;
          height: 50px;
        }

        li{
          list-style: none;
          display: inline;
          padding: 20px;
        }

        .header-image{
          padding: 15px;
          display: inline;
          float: left;
        }

        .header-nav{
          margin-left: 100px;
          display: inline;
          float: left;

        }

        .header-sign-in{
          margin-left: 5px;
          display: inline;
          float:left;
        }

        a{
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
          color: #3d95ce;
          text-decoration: none;
        }

        a:hover{
          color: #9bd7ff;
        }

        `}</style>
      <div className="bar">
      <div className="header-image">
        <img src="https://s3.amazonaws.com/venmo/venmo_logo_blue.png"></img>
      </div>
      <div className="header-nav">
        <ul>
          <li><a href="">How Venmo Works</a></li>
          <li><a href="">Business</a></li>
          <li><a href="">Card</a></li>
          <li><a href="">Security</a></li>
        </ul>
      </div>
      <div className="header-sign-in">
        <ul>
          <li><a href="">Contuct Us</a></li>
          <li><strong><a href="">Sing In</a></strong></li>
        </ul>
      </div>
    </div>

    </div>

  );
}

export default Header;
