import React from "react";

class MyButton1 extends React.Component{
    render(){
        return(
            <div>
                <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white" type="submit">
                    MyButton1
                </button>
            </div>
        );
    }
}

export default MyButton1;