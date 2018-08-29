

Assumptions when tackling this project

  file named in suggested app structure  as redeemService.js should be the rewardsService referenced in the description.


 The portfolio passed to the rewardsService as the second argument is a list of subscriptions for the user passed in the format of an array of strings

	        i.e. ["SPORTS", "MOVIES"]


This may require some level of checking in a prod environment to ensure the user is only getting access to rewards for the subscriptions relevant to the user


EligibilityService will be tested and return string values to determine customer eligibility rather than a boolean

