// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!
const { replaceVars } = require('../utils');

const makeRequest = (z, bundle) => {
  let url = 'https://hammock.hot-profile.com/rest_api/v1/leads/create';
  url = replaceVars(url, bundle);

  // Exclude create fields that uncheck "Send to Action Endpoint URL in JSON body"
  // https://zapier.com/developer/documentation/v2/action-fields/#send-to-action-endpoint-url-in-json-body

  delete bundle.inputData['client_id'];

  delete bundle.inputData['family_name'];

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
  key: 'action_create_lead',
  noun: 'Create Lead on APP',

  display: {
    label: 'Create Lead',
    description: 'Create a new lead.',
    hidden: false,
    important: true
  },

  operation: {
    inputFields: [
      {
        key: 'client_id',
        label: 'Client_id',
        helpText: '会社ID.',
        type: 'text',
        required: true
      },
      {
        key: 'family_name',
        label: 'Family_name',
        helpText: '姓.',
        type: 'text',
        required: true
      }
    ],
    outputFields: [],
    perform: makeRequest,
    sample: null
  }
};
