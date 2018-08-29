const expect = require('chai').expect;
const {rewardsService} = require('./rewardsService');
const {
    CUSTOMER_INELIGIBLE,
    INVALID_ACCOUNT_ERROR,
    EligibilityServiceStub,
    portfolio,
    relevantRewardsStub,
} = require('./constants');

describe("Redeem service", () => {

    it("Should return a list of relevant rewards", () => {
        var response = rewardsService('10', portfolio, EligibilityServiceStub);

        expect(response).to.have.property('data').to.be.an('array');
        expect(response).to.have.property('errors').that.equals(null);
    });

    it("Should only return relevant rewards", () => {
        var response = rewardsService('10', portfolio, EligibilityServiceStub);

        expect(response).to.have.property('data').that.deep.equals(relevantRewardsStub);
        expect(response).to.have.property('errors').that.equals(null);
    })

    it("should return no rewards as customer is ineligable", () => {

        var response = rewardsService('20', portfolio, EligibilityServiceStub);

        expect(EligibilityServiceStub.getCall(2).returnValue).to.equal(CUSTOMER_INELIGIBLE)
        expect(response).to.have.property('data').that.deep.equals([]);
        expect(response).to.have.property('errors').that.equals(null);
    })

    it("should return no rewards as customer there us a technical fault", () => {

        var response = rewardsService('30', portfolio, EligibilityServiceStub);

        expect(response).to.have.property('data').that.deep.equals([]);
        expect(response).to.have.property('errors').that.equals(null);

    })


    it("should return no rewards and an error that the account number is invalid", () => {

        var response = rewardsService('40', portfolio, EligibilityServiceStub);

        expect(response).to.have.property('errors').that.equals(INVALID_ACCOUNT_ERROR)
        expect(response).to.have.property('data').that.deep.equals([])

    })

})
