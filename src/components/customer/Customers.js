


import React , {Component} from 'react';

import './Customers.css';





class Customers extends Component {
    constructor() {
        super();
        this.state={
            customers:[]
        }

    }
    componentDidMount(){
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, ()=>console.log('fetch api')))
    }
  render() {
    return (
      <div >
      <h2>CUSTOMERS</h2>
      <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>
                {customer.name}
            </li>)}
      </ul>
    </div>
    )
  }
};

export default Customers;

