require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Triggers - Create Lead', () => {
  zapier.tools.env.inject();

  it('should get an array', done => {
    const bundle = {
      authData: { api_key: process.env.API_KEY },

      inputData: {}
    };

    appTester(App.triggers.trigger_create_lead.operation.perform, bundle)
      .then(results => {
        results.should.be.an.Array();
        done();
      })
      .catch(done);
  });
});
