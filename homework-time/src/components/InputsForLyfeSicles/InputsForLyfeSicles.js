import React, {Component} from "react";


class InputsForLyfeSicles extends Component{
    state = {
        login: "",
        pass: "",
    }

    

    handleChangeLogin = e => {
        this.setState({
            login:e.target.value
            
        })
    }
    handleChangePass = e => {
        this.setState({
            pass:e.target.value
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log(prevState.login, "prevState", this.state.login, "this.login")
      if(prevState !== this.state){

        console.log("Aystegh ashxatec DidUpdate y")
      }
      
    }
    render () {
        return (
            <div>
                <input type="text" onChange={this.handleChangeLogin} value={this.state.login} placeholder='login'/>
                <p>{this.state.login}</p>
                <input type="text" onChange={this.handleChangePass} value={this.state.pass} placeholder='password'/>
                <p>{this.state.pass}</p>
                
            </div>
        );
    }
}

export default InputsForLyfeSicles;