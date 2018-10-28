// テスト内容
const testAuth = (z ,bundle) => {
  // 通常は、認証をテストするように特別に設計されたエンドポイントにリクエストするか、
  // /meのようなアカウントやプロファイルのエンドポイントなど、すべてのユーザーにアクセス権が与えられます。
  //この例では、URLパスで渡された引数に対してAuthorization Headerを検証するhttpbinを実行します

  // このメソッドは、真偽値を返して、資格情報が有効であることを示します。
  // 表示するにはエラーを発生させる
  return z.request({

      url: 'https://hmktest1.hot-profile.com:443/rest_api/v1/leads/get_entry_list.json'
      
    }).then((response) => {

      return response.json;
    });
};

// こいつを設定として使う→画面項目（fields）
// authentication.jsのexports fieldsはbundle.authData.***** に入るみたい
module.exports = {
  type: 'custom',
  // ここにあなたのアプリが必要とする認証フィールドを定義してください。ユーザーがこの情報を入力するように求められます。
  // 彼らは自分のアカウントを接続します。
  fields: [
    {
      key: 'api_key',
      type: 'string',
      required: true,
      helpText: 'Found on your settings page.'
    },
    {
      key: 'connection_name',
      type: 'string',
      required: true,
      helpText: 'Please enter a connection name.'
    }
  ],
  // このテスト方法により、Zapierはユーザーが提供する資格情報が有効であることを確認できます。これを実行します
  // ユーザーが最初に自分のアカウントに接続したときに呼び出されます。
  test: testAuth,
  // assuming "username" is a key in the json returned from testAuth
  connectionLabel: (z, bundle) => {
    return bundle.authData.connection_name;
  }
};