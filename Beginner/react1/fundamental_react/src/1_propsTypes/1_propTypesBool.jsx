import React from 'react';
import PropTypes from 'prop-types';

function Lamp({ isDark }) {
    if (isDark) {
        return <p>Lamp is on</p>
    }

    return <p>Lamp is off</p>
}

Lamp.propTypes = {
    isDark: PropTypes.bool
};

<Lamp isDark={true} />; // Lamp is on
<Lamp isDark={false} />; // Lamp is off
<Lamp isDark={1 === 1} />; // Lamp is on
<Lamp isDark="true" />; // Warning: Failed prop type: Invalid prop `isDark` of type `string` supplied to `Lamp`, expected `boolean`

export default Lamp;