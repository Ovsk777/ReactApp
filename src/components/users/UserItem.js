import React, { Component } from 'react'

 class UserItem extends Component {
    state = {
        id: 'id',
        login: 'mojombo',
       }
    render() {
        const {login, id} = this.state;
        return <div className="card-text-center" style ={{paddingLeft: '40px'}}>
            <span><h3>{id}</h3></span>
            <span><h3>{login}</h3></span>
        </div>
    }
}

export default UserItem
