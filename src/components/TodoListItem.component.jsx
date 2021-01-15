import { ListItem, ListItemText, Button } from '@material-ui/core';
import React from 'react';
import { db } from '../firebase/firebase-config';

import './TodoListItem.styles.css';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function TodoListItem({ todo, inProgress, id }) {

    const toggleInProgress = () => {
        db.collection("todos").doc(id).update({
            inProgress: !inProgress
        })
    }

    const deleteTodo = () => {
        alert("Are you sure?")
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{display: "flex"}} className="todo__row">
            <ListItem>
                <ListItemText
                    primary={todo}
                    secondary={ inProgress ? "In Progress" : "Completed" }
                />
            </ListItem>

            <Button onClick={toggleInProgress} style={{color: "#fff"}} >
                { inProgress ? "Done" : "UnDone" }
            </Button>
            <Button onClick={deleteTodo} style={{color: "#fff"}} >X</Button>
        </div>
    )
}
