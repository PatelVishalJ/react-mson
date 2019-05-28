import Field from 'mson/lib/fields/field';

export default class CustomComponent extends Field {
  _className = 'CustomComponent';

  _create(props) {
    super._create(props);

    this.set({
      schema: {
        component: 'Form',
        fields: [
           {
            name: 'label'
          } ,
          {
            name: 'value'
          }
        ],
      }
    });

    this._setDefaults(props, {
      label: 'Default Label',
      value: 'Default Value'
    });
  }
}
