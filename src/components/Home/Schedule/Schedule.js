import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Schedule.scss';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h1>Current and Future Events</h1>
        {this.props.schedules.map(element => {
          return (
            <div>
              <h3>{element.date}</h3>
              <h3>{element.title}</h3>
              <h3>{element.location}</h3>
            </div>
          );
        })}
        <h5>For more questions or information contact our events group.</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schedules: state.schedules
});

export default connect(mapStateToProps)(Schedule);
