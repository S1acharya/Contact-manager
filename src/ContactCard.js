import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" >
        <img className="ui avatar image" src="https://image.flaticon.com/icons/png/512/3006/3006899.png" alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={{ color: "red" }} onClick={() => props.clickHander(id)}></i>
      
    </div>
  );
};

export default ContactCard;