import React from 'react';
import { createRoot } from 'react-dom/client';

class MyComponent2 extends React.Component {
    render() {
        return <p>Hello, {this.props.name}!</p>
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<MyComponent2 name="Dicoding"/>);

export default MyComponent2;