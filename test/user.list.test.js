const expect = require('chai').expect;
const opsgenie = require('../');

describe('opsgenie.userV2 tests', function() {

    context('opsgenie.userV2.list() Test', function() {
        it('callback', function (done) {

            const result = opsgenie.userV2.list({}, function (err, data) {
                console.log(err);
                console.log(data);
                //expect(result).to.equal(2);

                //expect(hash)
                //                     .to.be.a('string')
                //                     .that.matches(/^[a-f0-9]{32}$/)
                //                     .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
                done();
            });
        })
    });
});
