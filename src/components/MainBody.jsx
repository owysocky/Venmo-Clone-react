import React from 'react';
import { Link } from 'react-router-dom';

function MainBody(){
  return(
    <div className="center">
      <style jsx>{`
        div{
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        }
        img{
          margin-top: 30px;
          width: 324px;
          float: left;
        }
        .white{
          position: absolute;
          margin-left: -100px;
        }
        .center{
          border: 1px solid black;
          width: 1000px;
          margin: 0 auto;
          height: 900px;
        }
        h1{
            font-weight: 200;
            font-size: 50px;
        }
        .body-right{
          text-align: center;
          padding-top: 100px;
          margin-left: 570px;
        }
        button{
          font-size: 20px;
          background-color: #3D95CE;
          color: white;
          border: 2px solid #3D95CE;
          border-radius: 5px;
          padding: 15px 80px;
        }
        p{
          color: gray;
          font-size: 14px;
        }
        .emailFont{
          font-size: 18px;
        }
        a{
          text-decoration: none;
          color: #3D95CE;
        }

        button:hover{
          border-color: #9bd7ff;
          background-color: #9bd7ff;
        }

        a:hover{
          color: #9bd7ff;
        }
      `}</style>
     <div className="body-left">
       <div >
         <img src="https://cdn1.venmo.com/production/images/devices/nexus-marketing-site@1x.png"></img>
       </div>
       <div>
           <img className="white" src="https://cdn1.venmo.com/production/images/devices/iphone6-marketing-site@1x.png"></img>
       </div>
     </div>

      <div className="body-right">
          <h1>Send money and<br/>make purchases at<br/>approved merchants</h1>
          <button>Sign Up With Facebook</button>
          <p>We'll never post without your permission.</p>
          <p className="emailFont">or whith your <a href="">email address</a></p>
      </div>
    </div>
  );
}

export default MainBody;
