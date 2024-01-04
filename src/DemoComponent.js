import React from 'react'
import r2wc from '@r2wc/react-to-web-component'

const DemoComponent = () => {
  return (
    <div>
      <demo-component title="Title" label="Label"></demo-component>
    </div>
  )
}

const FirstWebComponent=({title,label})=>{
    return (
        <div>
          <p style={{fontFamily:"inherit", fontSize:"25px"}}><b>{title}</b></p>
          <input type='text'/>
          <h5>{label}</h5>
        </div>
      )
}

const demoComponent = r2wc(FirstWebComponent,{
  props: {
    title: "string",
    label: "string",
  },
});

customElements.define("demo-component", demoComponent);

export default DemoComponent;
