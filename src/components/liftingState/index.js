import React from 'react';

class BoilingVerdict extends React.Component {
  render() {
    if(this.props.celsius >= 100) {
      return <p>the water would boild</p>
    }
    return <p>the water not boil.</p>
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const {temperature, scale} = this.props;
    return (
      <fieldset>
        <legend>Enter temperaturn in { scaleNames[scale]}:</legend>
        <input type="text" value={temperature} onChange={this.handleChange}></input>
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Caculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temperature: '',
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature: temperature,
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature: temperature,
    });
  }

  render() {
    const temperature = this.state.temperature;
    const celsius = this.state.scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit = this.state.scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}></TemperatureInput>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}></TemperatureInput>
        <BoilingVerdict></BoilingVerdict>
      </div>
    );
  }
}

export default Caculator;
