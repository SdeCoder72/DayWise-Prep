import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    increment = () => {
        this.setState({count: this.state.count+1});
    };
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Add Value</button>
            </div>
        )
    }

}
export default ClassCounter;