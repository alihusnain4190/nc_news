import { Link } from '@reach/router';
import React, { Component } from 'react';

class AdimLogin extends Component {
    state = {
        admin: 'jessjelly',
        loginAdmin: '',
        wrongPerson:false
    }
    hadnleAdmin = (e) => {
        const { value } = e.target;
        
        if (value === this.state.admin) {
        this.setState({loginAdmin:value})       
        }
    }
    render() {
        if (this.state.wrongPerson) return  <p>Error</p>

                   return (
                <section >
                    <form onSubmit={(e) => {
                        e.preventDefault();
                               if (this.state.loginAdmin === '') {
                                 this.setState({wrongPerson:true})
                               }
                             else{  this.props.hadnleAdminSubmit(this.state.loginAdmin);}     
                    }}>
                        <label htmlFor="admin">Admin Name:
                    <input onChange={this.hadnleAdmin} type="text" id="admin" name="admin"></input>
                        </label>
                        <button>Click</button>
                    </form>
                </section>
            );
        
    }
}

export default AdimLogin;