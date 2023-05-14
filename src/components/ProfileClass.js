import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('TIME INTERVAL');
    }, 1000);
    // function called after render.
  }

  componentDidUpdate() {
    // called after api call
  }

  componentWillUnmount() {
    // we need to call clear interval
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          count
        </button>
      </div>
    );
  }
}

export default Profile;
