const stripe = require('stripe')('sk_test_51JqMOUKsLLDrN7jINKvTmcNAHcH5ija99jCYOy4m9EYmjKRdwr1dJdPQdCOtWH47CPoaJU4VwlrmyBjeEQ43VkbV006I09H9I4');

const account = async() => { await stripe.accounts.create({type: 'express'}); }

console.log(account)
