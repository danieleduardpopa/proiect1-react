import React from "react";
import PostItem from "./PostItem";
import './PostList.css';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {

        

        return(
            <div className="post-list">
                <h2>Lista Postari:</h2>
                {
                    this.props.items.map((item) => {
                        return <PostItem 
                            body={item.body}
                            title={item.title}
                            id={item.id}
                            key={item.id}
                        />
                    })
                }
                

            </div>
            
        )
    }
}

export default PostList;