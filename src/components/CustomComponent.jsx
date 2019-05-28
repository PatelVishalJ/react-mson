import React from 'react';
import attach from 'mson-react/lib/attach';

/*export default function CustomComponent(props) {
  return(
    <div>
      <label for="customInput">{props.label} : </label>
      <input type="text" id="customInput" value={props.value}/>
    </div>
  )
}
*/
class CustomComponent extends React.PureComponent {
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

export default  attach(['label','value'])(CustomComponent);