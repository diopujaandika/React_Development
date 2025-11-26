import React from 'react';
import PropTypes from 'prop-types';

function CounterDisplay({ count })  {
    return <p>Antrean ke-{count}</p>;
}

CounterDisplay.propTypes = {
    count: PropTypes.number
};

<CounterDisplay count={1} />; // Antrean ke-1
<CounterDisplay count={true} />; // Warning: Failed prop type: Invalid prop `count` of type `boolean` supplied to `CounterDisplay`, expected `number`.
<CounterDisplay count="1" />; // Warning: Failed prop type: Invalid prop `count` of type `string` supplied to `CounterDisplay`, expected `number`.

export default CounterDisplay;