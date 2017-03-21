import React, {Component} from 'react';

class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(event) {
        this.setState({value: event.target.value}, function() {
            this.props.onChange(this.state.value);
        });
    }
    
    render() {
        return(
            <div>
                <input type="number" min="0" step="1" value={this.state.value} onChange={this.onChange.bind(this)} />
            </div>
            );
    }
}

export default Text;