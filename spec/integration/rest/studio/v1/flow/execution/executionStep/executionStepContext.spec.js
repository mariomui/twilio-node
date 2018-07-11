'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('ExecutionStepContext', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .stepContext().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        flowSid: 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        executionSid: 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        stepSid: 'FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://studio.twilio.com/v1/Flows/<%= flowSid %>/Executions/<%= executionSid %>/Steps/<%= stepSid %>/Context')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'context': {
              'foo': 'bar'
          },
          'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'execution_sid': 'FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'step_sid': 'FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://studio.twilio.com/v1/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps/FTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Context'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v1.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .steps('FTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .stepContext().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

