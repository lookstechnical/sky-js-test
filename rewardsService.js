const {INVALID_ACCOUNT_ERROR, INVALID_ACCOUNT, CUSTOMER_ELIGIBLE, rewards} = require('./constants');


function rewardsService(customerAccountNumber, portfolio, eligibilityService) {
    let data = [];
    let error = null;

    try {
        var response = eligibilityService(customerAccountNumber);

        if (response === CUSTOMER_ELIGIBLE) {
            data = rewards.filter((r) => {
                return portfolio.indexOf(r.channel)  != -1;
            });
        }

    } catch (e) {
        if (e.name === INVALID_ACCOUNT) {
            error = INVALID_ACCOUNT_ERROR;
        }
    }


    return {
        data: data,
        errors: error
    }
}


module.exports.rewardsService = rewardsService;