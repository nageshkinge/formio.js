import EditFormUtils from './utils';
import { getContextComponents } from '../../../../utils/utils';
/* eslint-disable quotes, max-len */
export default [
  {
    type: 'panel',
    title: 'Simple',
    key: 'simple-conditional',
    theme: 'default',
    components: [
      {
        type: 'select',
        input: true,
        label: 'This component should Display:',
        key: 'conditional.show',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'True', value: 'true' },
            { label: 'False', value: 'false' }
          ]
        }
      },
      {
        type: 'select',
        input: true,
        label: 'When the form component:',
        key: 'conditional.when',
        dataSrc: 'custom',
        valueProperty: 'value',
        data: {
          custom(context) {
            return getContextComponents(context);
          }
        }
      },
      {
        type: 'textfield',
        input: true,
        label: 'Has the value:',
        key: 'conditional.eq'
      }
    ]
  },{
    type: 'panel',
    title: 'Basic Conditions',
    key: 'basic-conditional',
    theme: 'default',
    collapsible: true,
    collapsed: true,
    components: [{
        weight: 0,
        input: true,
        label: 'if matches',
        labelPosition: 'right-left',
        labelWidth: 40,
        labelMargin: 5,
        key: 'bcDisplayStatus',
        customClass:'col-sm-6 pull-left',
        tableView: false,
        defaultValue : 'show',
        data: {
          values: [{
            value: 'show',
            label: 'Show'
          }, {
            value: 'hide',
            label: 'Hide'
          }]
        },
        dataSrc: 'values',
        template: '<span>{{ item.label }}</span>',
        type: 'select'
    },{
      weight: 0,
      input: true,
      label: 'following',
      labelPosition: 'right-left',
      labelWidth: 30,
      labelMargin: 5,
      key: 'bcDisplayCondition',
      tableView: false,
      customClass:'col-sm-6 pull-left',
      defaultValue: 'all',
      data: {
        values: [{
          value: 'all',
          label: 'All'
        }, {
          value: 'any',
          label: 'Any'
        }]
      },
      dataSrc: 'values',
      template: '<span>{{ item.label }}</span>',
      type: 'select'
  },{
      weight: 0,
      input: true,
      label: '&nbsp;',
      key: 'basicConditional',
      templates: {
        header: '<div class="row"> \n  <div class="col-sm-10">\n' +
                '<div class="col-sm-4 font-weight-bold pull-left">Element</div>' +
                '<div class="col-sm-4 font-weight-bold pull-left"> Condition</div>' +
                '<div class="col-sm-4 font-weight-bold pull-left"> Value </div>\n  </div>\n' +
                '<div class="col-sm-2 font-weight-bold"> \n    Action  </div> \n</div>',
        row: '<div class="row"> \n  <div class="col-sm-10">\n' +
            '<div class="col-sm-4 pull-left">{{ row.bcWhen }}</div>' +
            '<div class="col-sm-4 pull-left"> {{ row.bcCondition.replace(/_/g, " ") }}</div>' +
            '<div class="col-sm-4 pull-left"> {{ row.bcConditionValue  }} </div>\n  </div>\n' +
            '<div class="col-sm-2"> \n    <div class="btn-group pull-right"> \n' +
            '<a class="editRow  ml-sm-1"><i class="fa fa-pencil" title="edit"></i></a> \n' +
            '<a class="text-danger removeRow ml-sm-1"><i class="fa fa-trash" title="Delete"></i></a> \n' +
            '</div> \n  </div> \n</div>',
        footer: ''
      },
      type: 'editgrid',
      addAnother: 'Add Condition',
      saveRow: 'Save Condition',
      components: [{
                type: 'select',
                input: true,
                label: 'Element',
                key: 'bcWhen',
                dataSrc: 'custom',
                valueProperty: 'value',
                customClass: 'col-sm-12',
                tableView: false,
                data: {
                  custom: function custom(context) {
                    return getContextComponents(context);
                  }
                }
              },{
                weight: 0,
                input: true,
                label: 'Condition',
                key: 'bcCondition',
                customClass: 'col-sm-6 pull-left',
                tableView: false,
                data: {
                  values: [{
                    value: 'is',
                    label: 'Is'
                  }, {
                    value: 'is_greater_than',
                    label: 'Is Greater Than'
                  }, {
                    value: 'is_less_than',
                    label: 'Is Less Than'
                  }, {
                    value: 'contains',
                    label: 'Containts'
                  }, {
                    value: 'starts_with',
                    label: 'Starts With'
                  }, {
                    value: 'ends_With',
                    label: 'Ends With'
                  }]
                },
                dataSrc: 'values',
                template: '<span>{{ item.label }}</span>',
                type: 'select'
              },{
                type: 'textfield',
                input: true,
                customClass: 'col-sm-6 pull-left',
                label: 'Value',
                key: 'bcConditionValue',
                tableView: false
              }]
    }]
  },
  EditFormUtils.javaScriptValue('Advanced Conditions', 'customConditional', 'conditional.json', 110,
    '<p>You must assign the <strong>show</strong> variable a boolean result.</p>' +
    '<p><strong>Note: Advanced Conditional logic will override the results of the Simple Conditional logic.</strong></p>' +
    '<h5>Example</h5><pre>show = !!data.showMe;</pre>',
    '<p><a href="http://formio.github.io/formio.js/app/examples/conditions.html" target="_blank">Click here for an example</a></p>'
  )
];
/* eslint-enable quotes, max-len */
