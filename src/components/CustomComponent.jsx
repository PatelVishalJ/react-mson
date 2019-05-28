import React, { useState } from 'react';
import attach from 'mson-react/lib/attach';

function CustomComponent(props) {

  const [value, setValue] = useState(props.value);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return(
    <div>
      <label for="customInput">{props.label} : </label>
      <input type="text" id="customInput" value={value} onChange={handleChange} />
    </div>
  )
}

/* class CustomComponent extends React.PureComponent {
  render() {
    const { label, value } = this.props;
    return(
      <div>
        <label for="customInput">{label} : </label>
        <input type="text" id="customInput" value={value}/>
      </div>
    );
  }
}
 */
export default  attach(['label','value'])(CustomComponent);