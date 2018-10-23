require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Creates - Update Lead', () => {
  zapier.tools.env.inject();

  it('should create an object', done => {
    const bundle = {
      authData: { api_key: process.env.API_KEY },

      inputData: {}
    };

    appTester(App.creates['ActionUpdateLead'].operation.perform, bundle)
      .then(result => {
        result.should.not.be.an.Array();
        done();
      })
      .catch(done);
  });
});
