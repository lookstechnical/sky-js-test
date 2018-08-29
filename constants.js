var sinon = require('sinon');


const CUSTOMER_ELIGIBLE = 'customer_is_eligible';
const CUSTOMER_INELIGIBLE = 'customer_is_ineligable';
const TECH_EXCEPTION = 'technical_exception';
const INVALID_ACCOUNT = 'invalid_account';


const INVALID_ACCOUNT_ERROR = 'the account number is invalid';


const EligibilityServiceStub = sinon.stub();
EligibilityServiceStub.withArgs("10").returns(CUSTOMER_ELIGIBLE);
EligibilityServiceStub.withArgs("20").returns(CUSTOMER_INELIGIBLE);
EligibilityServiceStub.withArgs("30").throws(TECH_EXCEPTION);
EligibilityServiceStub.withArgs("40").throws(INVALID_ACCOUNT);

const rewards = [
    {
        "channel" : "SPORTS",
        "reward" : "CHAMPIONS_LEAGUE_FINAL_TICKET"
    },
    {
        "channel" : "KIDS",
        "reward" : "N/A"
    },
    {
        "channel" : "MUSIC",
        "reward" : "KARAOKE_PRO_MICROPHONE"
    },
    {
        "channel" : "NEWS",
        "reward" : "N/A"
    },
    {
        "channel" : "MOVIES",
        "reward" : "PIRATES_OF_THE_CARIBBEAN_COLLECTION"
    }
]

const portfolio = ["SPORTS", "MOVIES"];

const relevantRewardsStub = [
    {
        "channel" : "SPORTS",
        "reward" : "CHAMPIONS_LEAGUE_FINAL_TICKET"
    },
    {
        "channel" : "MOVIES",
        "reward" : "PIRATES_OF_THE_CARIBBEAN_COLLECTION"
    }
]




module.exports.CUSTOMER_ELIGIBLE = CUSTOMER_ELIGIBLE;
module.exports.CUSTOMER_INELIGIBLE = CUSTOMER_INELIGIBLE;
module.exports.TECH_EXCEPTION = TECH_EXCEPTION;
module.exports.INVALID_ACCOUNT = INVALID_ACCOUNT;
module.exports.INVALID_ACCOUNT_ERROR = INVALID_ACCOUNT_ERROR;
module.exports.rewards = rewards;
module.exports.portfolio = portfolio;
module.exports.relevantRewardsStub = relevantRewardsStub;
module.exports.EligibilityServiceStub = EligibilityServiceStub;
