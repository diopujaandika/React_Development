import React from "react";

class ClassComponent extends React.Component{
    render(){
        const { name } = this.props;

        return (
            <div>
                <p>Hello, {name}!</p>
            </div>
        );
    }
}

export default ClassComponent;