import React, { Component } from 'react';
import CurrentMonthBudget from './components/CurrentMonthBudget.js';
import HistoricalData from './components/HistoricalData.js';
import CurrentWeeklyData from './components/CurrentWeeklyData.js';
import TransactionsList from './components/TransactionsList.js';
import styles from './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      transactionsList: []
    }
  }

  loadData() {
    axios.get('http://localhost:3000/api/accounts/1').then(response => {
      this.setState({
        account: response.data[0],
        transactionsList: response.data[1]
      })
    }).catch(errors => console.log(errors));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">4seer</h1>
        </header>
        <CurrentMonthBudget accounts={this.state.accounts}/>
        <HistoricalData />
        <CurrentWeeklyData />
        <TransactionsList transactionsList={this.state.transactionsList}/>
      </div>
    );
  }
}

export default App;
