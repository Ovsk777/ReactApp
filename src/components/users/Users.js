import React, { Component } from 'react'

 class Users extends Component {
     state={
         users: [
             {
                 id:'1',
                 name:'Abhi'
             },
             {
                 id:'2',
                 name:'Shek' 
             }
         ]
     }
    render() {
        return (
            <div>
              {this.state.users.map(user => 
                <div key={user.id}>{user.id}-{user.name}</div>)}  
            </div>
        )
    }
}

export default Users
