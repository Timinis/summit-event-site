import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Slideshow.scss';

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0
    };
  }

  shuffler = (images, slideNumber) => {
    return <img src={images[slideNumber].src} alt={images[slideNumber].alt} />;
  };
  imageDesc = (text, slideNumber) => {
    return (
      <div className="slide-desc">
        <h1>{text[slideNumber].title}</h1>
        <p>{text[slideNumber].description}</p>
      </div>
    );
  };

  leftMover = () => {
    if (this.state.imageIndex === 0) {
      this.setState({ imageIndex: this.props.images.length - 1 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
  };

  rightMover = () => {
    if (this.state.imageIndex === this.props.images.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  };

  render() {
    return (
      <div className="slideshow">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/71/SWIF-Logo.png"
          alt="swfi logo"
          id="logo"
        />
        <div className="slideshow__prev" onClick={this.leftMover}>
          ◀︎
        </div>
        <div className="slideshow__next" onClick={this.rightMover}>
          ▶︎
        </div>
        <div className="color-filter">
          {this.imageDesc(this.props.images, this.state.imageIndex)}
        </div>
        <TransitionGroup className="carousel" exit={false}>
          <CSSTransition
            key={this.state.imageIndex}
            timeout={500}
            classNames="fade"
          >
            {this.shuffler(this.props.images, this.state.imageIndex)}
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});

export default connect(mapStateToProps)(Slideshow);
