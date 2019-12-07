import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { onReset, counters, onIncrement, onDelete} = this.props;
        return ( <div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
            {counters.map(x => 
            <Counter key = {x.id} onDelete = {onDelete} onIncrement = {onIncrement} counter={x}>
            </Counter>
            )}
        </div> );
    }
}
 
export default Counters;