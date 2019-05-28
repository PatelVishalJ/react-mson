import React, { useState } from 'react';
import { msonFormJson } from "../json/msonFormJson";
import FormBuilderPreview from './FormBuilderPreview';
import { JsonEditor as Editor } from 'jsoneditor-react';
import CustomComponent from './CustomComponent';

export default function FormBuilder() {
  
  const [formJson, setFormJson] = useState(msonFormJson);
  
  function handleChange(e) {
    setFormJson(e);
  }

  return(
      <table>
        <tbody>
          <tr>
            <td>
            <Editor
                value={formJson}
                onChange={handleChange}
              />
            </td>
            <td>
              <FormBuilderPreview formJson={formJson} />
            </td>
          </tr>
          {/* <tr>
            <td>
              <CustomComponent 
                label="Name"
                value="Vishal"
              />
            </td>
            <td></td>
          </tr> */}
        </tbody>
      </table>
  )
}