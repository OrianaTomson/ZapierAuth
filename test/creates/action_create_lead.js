require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Creates - Create Lead', () => {
  zapier.tools.env.inject();

  it('should create an object', done => {
    const bundle = {
      authData: { api_key: process.env.API_KEY },

      inputData: {
        // TODO: Pulled from input fields' default values. Edit if necessary.
        client_id: null,
        family_name: null
      }
    };

    appTester(App.creates['ActionCreateLead'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
        done();
      })
      .catch(done);
  });
});
