import React from 'react';
import './App.css';
import PostList from './components/PostList';
import UserAddForm from './components/UserAddForm';
import UserList from './components/UserList';


class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      background: 'white',
      textColor: 'black',
      users: [],
      items: [],
      photos: [],
      buttonUsers: true,
      buttonPosts: false
    };
  }

  handleTextColor(event) {
    this.setState({textColor: event.target.value});
  }

  handleBackgroundChange(event) {
    this.setState({background: event.target.value});
  }

  afisareUseri() {
    
    this.setState({
      buttonUsers: true,
      buttonPosts: false
    })
  }

  afisarePosts() {
    
    this.setState({
      buttonPosts: true,
      buttonUsers: false
    })
  }
  
  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) =>{
        return response.json()
      })

      .then((json) => {
        const filteredPhotos = json.filter((el) => el.id < 10);
        
        this.setState({photos: filteredPhotos});

        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            const filteredJson = json.filter((el) => el.id < 4);

            filteredJson.forEach((user) => {
              filteredPhotos.forEach((photo) => {
                if (user.id === photo.id) {
                  user.imageUrl = photo.url;
                };
                  
                user.isGoldClient = true;
                user.salariu = 1000;
              })
        });
        
        this.setState({users: filteredJson});        
      });

      });

    

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        const filteredJson = json.filter((el) => el.id < 4);
        this.setState({items: filteredJson});
      });

    
  }

  getMaxUserId() {
    let maxUserId = 0;
    this.state.users.forEach((el) => {
      if (el.id > maxUserId) {
        maxUserId = el.id;
      }
    });
    
    return maxUserId;
  }

  updateUsersList(user) {
    
    this.setState((previousState) => {
      return {
        users: [
        ...previousState.users,  
        user
        ]
      };
      
    });    
  }

  deleteUser(id) {

    this.setState((previousState) => {
      const userDeletion = previousState.users.filter(el => el.id !== id);
      return {
        users: [...userDeletion]
      }; 
    });
  }

  render() {
    return (
      <div className="app" 
        style={{background: this.state.background, color: this.state.textColor}}>
        
        <h1>PROIECT 1</h1>

        <UserAddForm 
          updateUsersList={(user) => this.updateUsersList(user )}
          photos={this.state.photos}
          getMaxUserId={() => this.getMaxUserId()}
        />

        <div className='afisare'>   
          <button className='afisareBtn' type='button' onClick={(event) => this.afisareUseri(event)}>Afiseaza useri</button>
        
          <button className='afisareBtn' type='button' onClick={(event) => this.afisarePosts(event)}>Afiseaza postari</button>
        </div>
        
        <label className='colorAfBtn'>
          Backgroud color:  
          <input className='colorAfBtn' type="color" onChange={(event) => this.handleBackgroundChange(event)} />
        </label>
        
        <label className='colorAfBtn'>
          Text Color:   
          <input className='colorAfBtn' type="color" onChange={(event) => this.handleTextColor(event)} /> 
        </label>


        <div>
        {(this.state.buttonUsers) 
          && <UserList
                users={this.state.users}
                deleteUser={(id) => this.deleteUser(id)} 
              />
        }
        </div>

        {(this.state.buttonPosts)
          && <PostList items={this.state.items}
              />
        }

      </div>
    );
  }

  
}

export default App;
