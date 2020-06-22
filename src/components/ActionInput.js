import React from 'react'

const ActionInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    children,
    label,
    onClick
  }) => {
    
    return (
      <div className="input-group">
          <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} onClick = {onClick}
                className={className}  aria-label="name" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
              </button>
          </div>    
      </div>
    )
  }
  ActionInput.defaultProps = {
    type: "text",
    className: ""
  }
export default ActionInput
