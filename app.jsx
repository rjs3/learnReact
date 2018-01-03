import React from 'react';

export default class ClassComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {value: props.initalValue }

    }

    sum(delta) {
        this.setState({value: this.state.value + delta});
    }

    render() {
        return(
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button disabled={this.state.value <= 0} onClick={() => this.sum(-1)}>Diminuir</button>
                <button disabled={this.state.value >= 10} onClick={() => this.sum(+1)}>Aumentar</button>
            </div>
        )   
    }

}