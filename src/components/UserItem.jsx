import React from "react";
import './UserItem.css'

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
         
    render() {
                
        return(
            
            <div className="user-item">
                
                    <h3>{ this.props.name }</h3>
                        <button 
                            type="button" 
                            onClick={this.props.deleteUser}
                            className='delete-btn'
                        >
                            Delete User
                        </button>
                
                 { this.props.email } 
                <div> Salariu: { this.props.salariu } 
                {
                    this.props.isGoldClient
                        ? <h5>CLIENT GOLD</h5>
                        : <h5>  </h5>
                }
                </div>        
                <img src={this.props.imageUrl} alt="" />
            </div>
        );

    };
}

export default UserItem;