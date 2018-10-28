require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Triggers - Update Lead', () => {
  zapier.tools.env.inject();

  it('should get an array', done => {
    const bundle = {
      authData: { api_key: process.env.API_KEY },

      inputData: {id: 4692965, client_id: 1754730}
    };

    appTester(App.triggers.trigger_create_lead.operation.perform, bundle)
      .then(results => {
        results.should.be.an.Array();
        done();
      })
      .catch(done);
  });
});
