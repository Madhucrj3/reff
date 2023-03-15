import React, { Component } from 'react';
import { InputField, InputLabel, InputMain } from './StyledInput';

class Input extends Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }
  focusInput(){
    // console.log(this.inpurRef.current);
    this.inputRef.current.focus();
    this.inputRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  handleChange=(e)=>{
    if(e.target.id==="checkboxChec"){
    this.props.handleChangeInput(e.target.checked,e.target.id);
    }
    else
    this.props.handleChangeInput(e.target.value,e.target.id);

  }
  render() {
    const {type,name}=this.props;
    return (
      <>
      {
        type=== "Checkbox"?(<InputMain isCheckbox="true"><InputField id="checkboxChec" ref={this.inputRef} type={type} onClick={this.handleChange} /> <InputLabel htmlFor={name}>All Details are Correct</InputLabel></InputMain>)
      :(
        <InputMain>
         <InputLabel htmlFor={name}>{name}:</InputLabel>
         <InputField id={name} type={type} ref={this.inputRef}  onChange={this.handleChange}/>
         </InputMain>)}
      </>
    )
  }
}
export default Input;