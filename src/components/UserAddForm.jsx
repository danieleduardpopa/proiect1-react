import React from "react";
import './UserAddForm.css';


class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salariu: '',
            id: null,
            imageUrl:''
        };
    }

    

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleIsGoldClientChange(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    handleFormSubmit(event) {

        event.preventDefault();

        let error = false;

        if (!this.state.email.includes("@") ||
            !this.state.email.includes(".")) {
                error = true; 
        };

        if (this.state.name.trim().length === 0) {
            error = true;
        };

        if (this.state.salariu.trim().length === 0) {
            error = true;
        };
        
        if (!error) {
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                isGoldClient: this.state.isGoldClient,
                salariu: this.state.salariu,
                id: this.props.getMaxUserId() + 1,
                imageUrl: this.props.photos.find(photo => photo.id === this.props.getMaxUserId() + 1).url
            };


            
            this.props.updateUsersList(newUser);
        }
    }

    handleSalariuChange(event) {
        this.setState({salariu: event.target.value});
    }
    
    render() {
        
        return (
            
            <div>
                
                <form
                    className="user-add-form"
                    onSubmit={(event) => this.handleFormSubmit(event)}
                >
                    <h2>Adauga utilizatori</h2>
                    <label htmlFor="name">Nume</label>
                    <input
                        type="text"
                        name="name" 
                        value={this.state.name}
                        onChange={(event) => this.handleNameChange(event)}
                        placeholder="Name"
                    >
                    </input>
                    
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={(event) => this.handleEmailChange(event)}
                        placeholder="Email"
                    >
                    </input>

                    <label htmlFor="salariu">Salariu:</label>
                    <input
                        type='text'
                        name="salariu"
                        value={this.state.salariu}
                        onChange={(event) => this.handleSalariuChange(event)}
                        placeholder='Salariu'
                    >                    
                    </input>

                    <div id="checkbx">
                    <label htmlFor="goldClient">E client gold?</label>
                    
                    <input
                        type="checkbox"
                        name="goldClient"
                        checked={this.state.isGoldClient}
                        onChange={(event) => this.handleIsGoldClientChange(event)}
                    >
                    </input>
                    </div>
                    <input type="submit" value="Submit"></input>
                
                </form>
            </div>
        );
        }
}

export default UserAddForm;