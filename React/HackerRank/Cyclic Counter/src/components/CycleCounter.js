import React from 'react';

class CycleCounter extends React.Component {
    constructor(props){
        super(props);
        this.state={counter: 0};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        const counter = this.state.counter;
        // console.log(this.props.cycle);
        if (counter+1 === this.props.cycle){
            this.setState({counter: 0});
        }
        else{
            this.setState({counter: counter + 1});
        }
    }
    render() {
        const counter = this.state.counter;
        return (
        <button
            onClick={this.handleClick}
            data-testid="cycle-counter"
            style={{ fontSize: '1rem', width: 120, height: 30, }}
        >{counter}</button>
        );
    }
}

export default CycleCounter;