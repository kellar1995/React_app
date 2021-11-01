import React, { Component } from 'react'

export default class Signin extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control ms-5 me-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control mx-5" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}
