import React from "react";
import {Link} from  "react-router-dom"
import "./Usercard.css"

function Usercard(props) {
  const { user } = props
  return (
    <div>
      <div className="card">
        <img src={user.avatar} alt="Person" className="card__image" />
        <h6 className="card__name"> firstname - <span id="orange">{user.first_name}</span> lastname - <span id="orange">{user.last_name}</span><br /><font size="3"><i><span id="orange">{user.email}</span></i></font><br /></h6>
        <div className="grid-container">
        </div>
        <ul className="social-icons">
          <li><Link to="/" onClick={() => window.location = "mailto:" + user.email} target="_blank"><i className="fa fa-envelope"></i></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Usercard;
