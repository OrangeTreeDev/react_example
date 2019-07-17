import React from 'react';

class Button extends React.Component {
  componentDidUpdate() {
    console.log('update');
  }
  
  render() {
    return (
      <button onClick={ this.props.onClick }>{ 'hello' }</button>
    );
  }
}

/**
 * arrow function as event handle,
 * every render will create a different callback
 */
// class Toogle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOn: true,
//     };
//   }

//   handleToogle() {
//     this.setState(state => ({
//       isOn: !state.isOn,
//     }));
//   }

//   render() {
//     return (
//       <Button
//         onClick={ (e) => this.handleToogle(e) }
//         // value={ this.state.isOn ? 'on' : 'off' }
//       >
//       </Button>
//     );
//   }
// }

class Toogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  handleToogle = () => {
    this.setState(state => ({
      isOn: !state.isOn,
    }));
  }

  render() {
    return (
      <Button
        onClick={ this.handleToogle }
        // value={ this.state.isOn ? 'on' : 'off' }
      >
      </Button>
    );
  }
}


export default Toogle;
