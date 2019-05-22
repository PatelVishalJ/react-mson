import React, { useState, useEffect } from 'react';
import { msonFormJson } from "./json/msonFormJson";
import compiler from "mson/lib/compiler";
import { Component } from 'mson-react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

export default function MyReactComponent() {
  
  const [formJson, setFormJson] = useState(msonFormJson);
  const [msonForm, setMsonForm] = useState(null);

  function handleChange(e) {
    setFormJson(e);
  }

  useEffect(() => {
    compiler.registerComponent("MyFrom", formJson);

    const MsonForm = compiler.compile({
      component: "MyFrom"
    });

    setMsonForm(new MsonForm());
  }, [formJson]);

  return(
    <div>
      <p>This is React Application contains MSON component in it.</p>
      <p>It is NOT an MSON application.</p>
      <table>
        <tbody>
          <tr>
            <td>
              <Component component={msonForm} />
            </td>
            <td>
              <Editor
                value={formJson}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}