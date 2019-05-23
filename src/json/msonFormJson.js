export const msonFormJson = {
  component: "Form",
  fields: [
    {
      name: "task",
      component: "TextField",
      label: "Task",
      multiline: true,
      required: true
    },
    {
      name: "due",
      component: "DateField",
      label: "Due Date"
    }
  ]
};
