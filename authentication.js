const testTrigger = require('./triggers/trigger_create_lead');

const authentication = {
  // TODO: just an example stub - you'll need to complete
  type: 'custom',

  test: testTrigger.operation.perform,

  fields: [
    {
      key: 'api_key',
      label: 'API Key',
      helpText: 'Please enter API key.',
      type: 'string',
      required: true
    }
  ],

  connectionLabel: ''
};

module.exports = authentication;
