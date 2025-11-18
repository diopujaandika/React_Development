// Untuk memanfaatkan state kita harus membuat class component dan dapat diakses melalui properti this.state yang datanya diinisialisasi di dalam constructor.
import React from 'react';

class Counter extends React.Component{
    constructor(props) {
        super(props);

        // Inisialisasi data dalam state
        this.state = {
            count: 0
        };
        this.setState((previousState) => {
        return {
            count: previousState.count + 1,
        }
    });
    }
    
    render() {
        return (
            <div>
                {/* Menampilkan data count */}
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Counter;