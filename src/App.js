import React, { Component } from 'react';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Filter from './components/Filter';
import Dashboard from './components/Dashboard';

/*TEsting*/
import {
	defaultEvents
} from './utils/utils';
import Card from './components/Card';

import './stylesheets/main.css';
let now = new Date;
class App extends Component {
	constructor() {
		super()
		this.state = {
			view: 'Calendar',
			onChangeView: null,
		}
	}
	changeView = () => {
		this.setState({
			view: this.state.view === 'Calendar' ? 'Dashboard' : 'Calendar',
		})		
	}

	componentDidMount = () => {
		this.setState({
			onChangeView: this.calendar.onChangeView,
		})
	}
  render() {
    return (
      <div className="rc-app-wrapper">
        <Header changeView={this.changeView} view={this.state.view}/>
        <section className="content rc-app-main">
          <div className="rc-container-wrapper">
						<Calendar
							ref={(el) => this.calendar = el}
							onChangeView={this.state.onChangeView}
							view={this.state.view}
							date={now}
							defaultCalView={[2017, 8]}
							elementProps={
								{
									filter: Filter,
									dashboard: Dashboard, // Calendar takes optional elements props to render
								}
							}
						/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
