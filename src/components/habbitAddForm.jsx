import React, { Component } from 'react';

class HabbitAddForm extends Component {
  inputRef = React.createRef()
  formRef = React.createRef()

  onSubmit = event => {
    event.preventDefault()  // reload 안됨
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    // this.inputRef.current.value = ''
    this.formRef.current.reset()
  }

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="habit 입력하세요" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabbitAddForm;