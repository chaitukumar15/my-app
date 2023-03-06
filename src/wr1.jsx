import React from 'react';
// import withRouter from './hello';


class First1 extends React.Component{

    constructor(){
        super();
        this.state={
a:10
        }
    }


    render(props){
        this.props.h(this.state.a)
        // console.log(this.props.h);
        return(<>
        {/* <h1>{this.props.params.next}</h1> */}
        <h1>hello2</h1>
        </>)
    }
}

export default First1