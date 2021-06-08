// press rfc and enter and see magic
import React from 'react';
import { ListItem, ListItemText} from '@material-ui/core';
import { db } from "./firebase_Config";

export default function ContactsListItem({name , email , id}) {

    // it will take the id to delete
      function deleteContact() {
        db
        .collection("contacts")
        .doc(id)
        .delete();
      }

    return (
        <div style={{ display: "flex" }}>
        <img className="ui avatar image" src="https://image.flaticon.com/icons/png/512/3006/3006899.png" alt="user" />
        <ListItem>
            <ListItemText
            primary={name}
            secondary={email}
            />
        </ListItem>
        <i className="trash alternate outline icon" style={{ color: "red" }} onClick={deleteContact}></i>
        </div>
    )
}
