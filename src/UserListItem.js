import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './App.css';

class UserListItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        
        const genderIcon = (gender) => {
            if(gender === 'female') {
                return <img className="female" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/female-128.png"></img>; 
            } else {
                return <img className="male" src="https://cdn.iconscout.com/icon/free/png-256/male-5-83466.png"></img>;
            }
        }
        
        const listOfUsers = this.props.users.map((person, index) => { console.log(person.nat);
            return (
                <ListGroup.Item className="profile" key={index}>
                    <p><span className="fname">{person.name.first}</span> <span className="lname">{person.name.last}</span></p>
                    <p>{person.location.city}, {person.location.state}</p>
                    <p>{person.email}</p>
                    <img src={person.picture.thumbnail}></img>
                    {genderIcon(person.gender)}
                    {person.nat === 'US' ? <img className="us" src="http://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png"></img> : ""}
                    <Button onClick={()=> this.props.handleDelete(index)}>Delete</Button>
                     <hr></hr>
                    <br></br>
                </ListGroup.Item>
                
            )
        });
        return (
            <div className="main">
                <ListGroup>
                    {listOfUsers}
                </ListGroup>
            </div>
        );
    }
}

export default UserListItem;
