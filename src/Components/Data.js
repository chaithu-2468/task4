import React, { Component } from 'react';
import './Style.css';

export default class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        };
    }

    componentDidMount(){
        fetch('https://dummyjson.com/users').then((response) => response.json())
            .then((data) => {
                this.setState({ userData:data.users });
            })
            .catch((error) => {
                console.error('Error occurred!!:', error);
            });  
    }
  render() {
    const { userData } = this.state;
    return (
      <div className ='first'>
        <center><h1 style={{color:"white"}}>Dummy Table</h1></center>
            <table >
                <thead>
                    <tr>
                    <th>Sno</th>
                    <th>Profile pic</th>
                    <th class="fn">First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E - mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(userData) && userData.length > 0 ? (
                    userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><img src={user.image} alt="profile" height="50px" width="50px"></img></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.domain}</td>
                            <td>{user.ip}</td>
                            <td>{user.university}</td>
                        </tr>
                    ))
                    ): (
                        <tr>
                          <td colSpan="3">No user data available</td>
                        </tr>
                      )}
                
                </tbody>
            </table>
      </div>
    )
  }
}