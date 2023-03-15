import React, { Component } from "react";
import Input from "./Input/Input";
import {
  InputContainerDiv,
  InputContainerMain,
  SumbitButton,
  SumbitButtonContainer,
} from "./StyledInputContainer";

class InputContainer extends Component {
   constructor(props){
    super(props);
    this.nameRef = React.createRef();
    this.collegeRef = React.createRef();
    this.genderRef = React.createRef();
    this.ageRef = React.createRef();
    this.passoutYearRef = React.createRef();
    this.checkboxRef= React.createRef();
    this.state={
        Name:"",
        College:"",
        Gender:"",
        age:null,
        PassoutYear:null,
        checkboxChec:false
    }
   }
   handleSumbit=()=>{
    if(this.state.Name==="")
    this.nameRef.current.focusInput();
    else
    if(this.state.College==="")
    this.collegeRef.current.focusInput();
    else
    if(this.state.Gender==="")
    this.genderRef.current.focusInput();
    else
    if(this.state.age===null)
    this.ageRef.current.focusInput();
    else
    if(this.state.PassoutYear===null)
    this.passoutYearRef.current.focusInput();
    else
    if(this.state.checkboxChec===false){
    console.log(this.state.checkboxChec);
    this.checkboxRef.current.focusInput();
    }
   }
   handleChange=(value,id1)=>{
    this.setState(prevState=>{
            return {
                ...prevState,
                [id1]:value
            }
        }
    )
    
   }
  render() {
    return (
      <InputContainerMain>
        <InputContainerDiv>
          <Input type="text" name="Name" ref={this.nameRef} handleChangeInput={this.handleChange}/>
          <Input type="text" name="College" ref={this.collegeRef} handleChangeInput={this.handleChange}/>
          <Input type="text" name="Gender" ref={this.genderRef} handleChangeInput={this.handleChange}/>
          <Input type="number" name="age" ref={this.ageRef}  handleChangeInput={this.handleChange}/>
          <Input type="number" name="PassoutYear" ref={this.passoutYearRef}  handleChangeInput={this.handleChange}/>
          <Input type="Checkbox" name="fill All Detail" ref={this.checkboxRef}  handleChangeInput={this.handleChange}/>
          <SumbitButtonContainer>
            <SumbitButton onClick={this.handleSumbit}>Sumbit</SumbitButton>
          </SumbitButtonContainer>
        </InputContainerDiv>
      </InputContainerMain>
    );
  }
}
export default InputContainer;
