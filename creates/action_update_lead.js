// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!
const { replaceVars } = require('../utils');

const makeRequest = (z, bundle) => {
  let url = 'http://example.com/api/${key}.json';
  url = replaceVars(url, bundle);

  // Exclude create fields that uncheck "Send to Action Endpoint URL in JSON body"
  // https://zapier.com/developer/documentation/v2/action-fields/#send-to-action-endpoint-url-in-json-body

  const responsePromise = z.request({
    url: url,
    method: 'POST',
    body: bundle.inputData
  });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content);
  });
};

module.exports = {
  key: 'action_update_lead',
  noun: 'Update Lead',

  display: {
    label: 'Update Lead',
    description: 'Update an existing lead.',
    hidden: false,
    important: true
  },

  operation: {
    inputFields: [],
    outputFields: [],
    perform: makeRequest,
    sample: null
  }
};
