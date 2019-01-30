import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sponsors extends Component {
  render() {
    return (
      <div>
        {this.props.sponsors.map(element => {
          return <img src={element.src} alt={element.alt} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sponsors: state.sponsors
});

export default connect(mapStateToProps)(Sponsors);
