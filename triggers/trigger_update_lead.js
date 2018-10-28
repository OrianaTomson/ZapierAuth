// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!
const { replaceVars } = require('../utils');

const getList = (z, bundle) => {

  let url = 'https://hmktest1.hot-profile.com:443/rest_api/v1/leads/get_entry_list.json';
  url = replaceVars(url, bundle);
  method = 'POST';
  params = {api_key: bundle.authData.api_key}
  
  const responsePromise = z.request({ url,method,params });
  return responsePromise.then(response => {
    response.throwForStatus();

    // idを更新キーと結合して返却
    return Zap.TRIGGER_KEY_post_poll(z,response);
  });
};

var Zap = {
  TRIGGER_KEY_post_poll: function(z,response) {
    var items = z.JSON.parse(response.content)['leads'];
    items.forEach(function(item) {
      item.originalId = item.id;
      item.id = item.id + '-' + item.updated_at;
    });

    console.log(items);
    return items;
  }
}

module.exports = {
  key: 'trigger_create_lead',
  noun: 'Lead',

  display: {
    label: 'New Lead',
    description: 'Triggers when a new lead is created.',
    hidden: false,
    important: true
  },

  operation: {
    inputFields: [],
    outputFields: [{key: 'id', label: 'IDだよん'}],
    perform: getList,
    sample: {id: 1234567}
  }
};
