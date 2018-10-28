// Created by 'zapier convert'. This is just a stub - you will need to edit!

const authentication = require('./authentication');
const TriggercreateleadTrigger = require('./triggers/trigger_create_lead');
const TriggerupdateleadTrigger = require('./triggers/trigger_update_lead');

// authentication実行前にしか呼ばれてないみたい
// 本当は全リクエスト前に実行したいけど…
const includeApiKey = (request, z, bundle) => {

  console.log('------------beforeRequest---------------');

  if (bundle.authData.api_Key) {
    request.params = request.params || {};
    request.params.api_key = bundle.authData.api_Key;
    request.method = 'POST';

    // console.log('------------request---------------');
    // console.log(request);
    // console.log('------------request.params---------------');
    // console.log(request.params);
  }
  return request;
};

// HTTP after middleware that checks for errors in the response.
const checkForErrors = (response, z) => {

  console.log('------------afterRequest---------------');
  
  if (response.status === 401) {
    throw new z.errors.HaltedError('The API Key you supplied is invalidこっち？');
  }

  // If no errors just return original response
  return response;
};

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [includeApiKey],

  afterResponse: [checkForErrors],

  resources: {},

  triggers: {
    [TriggercreateleadTrigger.key]: TriggercreateleadTrigger,
    [TriggerupdateleadTrigger.key]: TriggerupdateleadTrigger
  },

  searches: {},

  creates: {
  }
};

module.exports = App;
