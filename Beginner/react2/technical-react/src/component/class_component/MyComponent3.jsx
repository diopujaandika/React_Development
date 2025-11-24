// Karena class component sejatinaya adalah class, jadi kita dapat memanfaatkan constructor untuka menginisalisasi data-- contohnya state-- atau menuliskan kode yang akan dipanggil setiap kali pembuatan component.

import React from "react";
import { createRoot } from 'react-dom/client';

class MyComponent3 extends React.Component {
    constructor(props) {
        super(props);
        console.log('Component create!');
    }

    render() {
        return <p>Hello, {this.props.name}!</p>
    }
}

const root = createRoot(document.getElementById('root'));
root.render();
 
export default MyComponent3;