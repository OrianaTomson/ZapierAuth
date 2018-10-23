// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!
const { replaceVars } = require('../utils');

const getList = (z, bundle) => {
  let url = 'http://example.com/api/${key}.json';
  url = replaceVars(url, bundle);

  const responsePromise = z.request({ url });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content);
  });
};

module.exports = {
  key: 'trigger_update_lead',
  noun: 'リードを更新',

  display: {
    label: 'Update Lead',
    description: 'Triggers when a new lead is created.',
    hidden: false,
    important: true
  },

  operation: {
    inputFields: [],
    outputFields: [],
    perform: getList,
    sample: null
  }
};
