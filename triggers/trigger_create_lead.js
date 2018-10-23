// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!
const { replaceVars } = require('../utils');

const getList = (z, bundle) => {
  let url = 'https://hmktest1.hot-profile.com/rest_api/v1/leads/get_entry_list.json';
  url = replaceVars(url, bundle);

  const responsePromise = z.request({ url });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content);
  });
};

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
    outputFields: [
      {
        key: 'leads',
        type: 'string',
        label: 'lead'
      },
      {
        key: 'leads[]address',
        type: 'string',
        label: 'address'
      },
      {
        key: 'leads[]client_id',
        type: 'string'
      },
      {
        key: 'leads[]client_name',
        type: 'string'
      },
      {
        key: 'leads[]competitor_flg',
        type: 'string'
      },
      {
        key: 'leads[]created_at',
        type: 'string'
      },
      {
        key: 'leads[]customer_id',
        type: 'string'
      },
      {
        key: 'leads[]email',
        type: 'string'
      },
      {
        key: 'leads[]end_user_flg',
        type: 'string'
      },
      {
        key: 'leads[]error_address_flg',
        type: 'string'
      },
      {
        key: 'leads[]error_fax_flg',
        type: 'string'
      },
      {
        key: 'leads[]error_mail_flg',
        type: 'string'
      },
      {
        key: 'leads[]error_tel_flg',
        type: 'string'
      },
      {
        key: 'leads[]extension',
        type: 'string'
      },
      {
        key: 'leads[]family_name',
        type: 'string'
      },
      {
        key: 'leads[]family_name_kana',
        type: 'string'
      },
      {
        key: 'leads[]fax',
        type: 'string'
      },
      {
        key: 'leads[]first_name',
        type: 'string'
      },
      {
        key: 'leads[]first_name_kana',
        type: 'string'
      },
      {
        key: 'leads[]id',
        type: 'string'
      },
      {
        key: 'leads[]important_customer_flg',
        type: 'string'
      },
      {
        key: 'leads[]interest_product_type_ids',
        type: 'string'
      },
      {
        key: 'leads[]interest_product_type_names',
        type: 'string'
      },
      {
        key: 'leads[]items',
        type: 'string'
      },
      {
        key: 'leads[]latitude',
        type: 'string'
      },
      {
        key: 'leads[]lead_source',
        type: 'string'
      },
      {
        key: 'leads[]lead_source_kbn_id',
        type: 'string'
      },
      {
        key: 'leads[]lead_source_kbn_name',
        type: 'string'
      },
      {
        key: 'leads[]lead_status',
        type: 'string'
      },
      {
        key: 'leads[]lead_status_name',
        type: 'string'
      },
      {
        key: 'leads[]longitude',
        type: 'string'
      },
      {
        key: 'leads[]mobile_email',
        type: 'string'
      },
      {
        key: 'leads[]mobile_tel',
        type: 'string'
      },
      {
        key: 'leads[]name',
        type: 'string'
      },
      {
        key: 'leads[]name_kana',
        type: 'string'
      },
      {
        key: 'leads[]not_dm_flg',
        type: 'string'
      },
      {
        key: 'leads[]not_fax_flg',
        type: 'string'
      },
      {
        key: 'leads[]not_mail_flg',
        type: 'string'
      },
      {
        key: 'leads[]not_tel_flg',
        type: 'string'
      },
      {
        key: 'leads[]note',
        type: 'string'
      },
      {
        key: 'leads[]organization_id',
        type: 'string'
      },
      {
        key: 'leads[]organization_name',
        type: 'string'
      },
      {
        key: 'leads[]owner_user_code',
        type: 'string'
      },
      {
        key: 'leads[]owner_user_id',
        type: 'string'
      },
      {
        key: 'leads[]owner_user_name',
        type: 'string'
      },
      {
        key: 'leads[]post',
        type: 'string'
      },
      {
        key: 'leads[]pref',
        type: 'string'
      },
      {
        key: 'leads[]pref_id',
        type: 'string'
      },
      {
        key: 'leads[]store_flg',
        type: 'string'
      },
      {
        key: 'leads[]tags',
        type: 'string'
      },
      {
        key: 'leads[]tel',
        type: 'string'
      },
      {
        key: 'leads[]trade_on',
        type: 'string'
      },
      {
        key: 'leads[]updated_at',
        type: 'string'
      },
      {
        key: 'leads[]url',
        type: 'string'
      },
      {
        key: 'leads[]user_names',
        type: 'string'
      },
      {
        key: 'leads[]zip',
        type: 'string'
      }
    ],
    perform: getList,
    sample: {
      leads: [
        {
          address: '',
          client_id: 123456,
          client_name: '株式会社XXXX',
          competitor_flg: 'ー',
          created_at: '2018/10/19 17:54:06',
          customer_id: null,
          email: '',
          end_user_flg: 'ー',
          error_address_flg: 'ー',
          error_fax_flg: 'ー',
          error_mail_flg: 'ー',
          error_tel_flg: 'ー',
          extension: '',
          family_name: 'masuyama',
          family_name_kana: '',
          fax: '',
          first_name: 'ryo',
          first_name_kana: '',
          id: 1234567,
          important_customer_flg: 'ー',
          interest_product_type_ids: [],
          interest_product_type_names: [],
          items: [],
          latitude: null,
          lead_source: '',
          lead_source_kbn_id: null,
          lead_source_kbn_name: null,
          lead_status: null,
          lead_status_name: null,
          longitude: null,
          mobile_email: '',
          mobile_tel: '',
          name: 'masuyama',
          name_kana: ' ',
          not_dm_flg: 'ー',
          not_fax_flg: 'ー',
          not_mail_flg: 'ー',
          not_tel_flg: 'ー',
          note: '',
          organization_id: null,
          organization_name: null,
          owner_user_code: 'masu',
          owner_user_id: 58599,
          owner_user_name: 'masuyama',
          post: '',
          pref: null,
          pref_id: null,
          store_flg: 'ー',
          tags: ['暗号ああ'],
          tel: '',
          trade_on: '2018/10/22',
          updated_at: '2018/10/22 15:08:08',
          url: '',
          user_names: ['masuyama ryo'],
          zip: ''
        }
      ]
    }
  }
};
