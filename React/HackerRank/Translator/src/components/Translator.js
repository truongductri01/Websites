import React from 'react';

class Translator extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: "",
      output: ""
    };
  }

  handleChange(event){
    const value = event.target.value;
    this.setState({input: value});
    const {translations} = this.props;

    if(translations.has(value)){
      console.log("True");
      console.log(translations.get(value));
      this.setState({output: translations.get(value)});
    }
    else{
      console.log("False");
      this.setState({output: ""});
    }
    console.log(translations);
  }
  render() {
    console.log("State:", this.state)
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" data-testid="text-input" value={this.state.input} onChange={this.handleChange}/>
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" className="text-output" data-testid="text-output" value={this.state.output} readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
