import React from "react";
import axios from "axios";

export default class Users extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api`).then(res => {
      this.setState({ message: res.data });
    });
    // axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
    //   this.setState({
    //     users: res.data
    //   });
    // });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.messages.map(message => (
            // <ol key={user.id}>
            //   <li> {user.name}</li>
            //   <li> {user.phone}</li>
            //   <li> {user.username}</li>
            //   <li> {user.email}</li>
            //   <li> {user.address.city}</li>
            //   <li> {user.address.zip}</li>
            // </ol>
            <li>{message}</li>
          ))}
        </ul>
      </>
    );
  }
}
