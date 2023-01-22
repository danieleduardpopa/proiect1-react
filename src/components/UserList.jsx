import React from "react";
import UserItem from "./UserItem";
import './UserList.css';

class UserList extends React.Component  {
   
    constructor(props) {
        super(props);
        this.state = {};
    }
        
    render() {
        
        
        return(
            <div className="user-list">
                <h2>Lista utilizatori:</h2>
                <div className="utilizatori">
                {
                    this.props.users.map((user) => {
                        return <UserItem                         
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            salariu={user.salariu}
                            isGoldClient={user.isGoldClient}
                            imageUrl={user.imageUrl}
                            key={user.id}
                            deleteUser={() => this.props.deleteUser(user.id)}
                        />
    
                    })
                }
                </div>
            </div>
        );
    }
}



export default UserList;