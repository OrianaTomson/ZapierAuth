// Created by 'zapier convert'. This is just a stub - you will need to edit!

const authentication = require('./authentication');
const TriggercreateleadTrigger = require('./triggers/trigger_create_lead');
const TriggerupdateleadTrigger = require('./triggers/trigger_update_lead');
const ActioncreateleadCreate = require('./creates/action_create_lead');
const ActionupdateleadCreate = require('./creates/action_update_lead');

const maybeIncludeAuth = (request, z, bundle) => {
  request.headers['api_key'] = `{${bundle.authData['api_key']}`;

  return request;
};

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [maybeIncludeAuth],

  afterResponse: [],

  resources: {},

  triggers: {
    [TriggercreateleadTrigger.key]: TriggercreateleadTrigger,
    [TriggerupdateleadTrigger.key]: TriggerupdateleadTrigger
  },

  searches: {},

  creates: {
    [ActioncreateleadCreate.key]: ActioncreateleadCreate,
    [ActionupdateleadCreate.key]: ActionupdateleadCreate
  }
};

module.exports = App;
