import React from 'react';
import PropsTypes from 'prop-types';

function SayHello({ name }) {
    return <p>Hello, {name}</p>
}

SayHello.prototypes = {
    name: PropsTypes.string.isRequired
};

export default SayHello;