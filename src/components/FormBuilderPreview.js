import React, { useState, useEffect } from 'react';
import compiler from "mson/lib/compiler";
import { Component } from 'mson-react';
import 'jsoneditor-react/es/editor.min.css';

export default function FormBuilderPreview(props) {
  const [msonForm, setMsonForm] = useState(null);

  useEffect(() => {
    compiler.deregisterComponent("MyForm");
    compiler.registerComponent("MyFrom", props.formJson);

    const MsonForm = compiler.compile({
      component: "MyFrom"
    });

    setMsonForm(new MsonForm());
  }, [props.formJson]);

  return <Component component={msonForm} />;
}