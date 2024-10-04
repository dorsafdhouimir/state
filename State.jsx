
import React, { Component } from 'react';

class StateCheckpoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'bechir chermiti',
        bio: 'A passionate developer.',
        imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.l3ms8tAHlZ-qAdZ0YLaRBgHaJQ&pid=Api&P=0&h=180',
        profession: 'Software Engineer'
      },
      shows: false,
      
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { Person, shows, timeMounted } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <img src={Person.imgSrc} alt="Person" />
            <h3>{Person.profession}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default StateCheckpoint;


