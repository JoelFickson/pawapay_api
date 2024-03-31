## PawaPay-API contribution guide
Thank you for expressing interest in contributing to the project. Please make sure you read the guide thoroughly before contributing  as it will lessen the chances of any issues arising during the process.

### Getting Started
Before everything, please post an issue and check that it is a new issue by searching it up. This will prevent two peope working on the same issue and efforts being wasted.

#### Prerequisites
1. [Git](https://git-scm.com/)
2. [NodeJS](https://nodejs.org/en/)
3. [Typescript](typescriptlang.org)/ Javascript


### First Time Contributer

If you have never contributed to open-source and would love to start with this project, then we got you. [Follow this guide by freecodecamp](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/)




## PawaPay NodeJs SDK

### Getting Started

This assumes that you have already set up your account information found in
the [PawaPay API documentation](https://docs.pawapay.co.uk/).

### Installation

```bash
npm install pawapay-node
```

### Payments Page

```javascript
const { pawaPaymentsPage, pawapayBaseService } = require('pawapay_api');

const payment: PaymentData = {
  reason: `Buy Test Song`,
  deposit_id: "<UUID>",
  price: song.price,
  title: so.title,
  artist_name: pricedMusic.artist_name,
  basePaymentCountryIso: pricedMusic.basePaymentCountryIso,
  currency: pricedMusic.currency,
  returnUrl: 'https://test.test.com/payments/success'
};

try {

  const response = await pawaPaymentsPage.initiatePayment(paymentData);

  if (pawapayBaseService.isPawaPayErrorResponse(response)) {
    return {
      redirectUrl: '',
      error: true,
      message: response.errorMessage,
    };
  }

  return {
    redirectUrl: response.redirectUrl,
    error: false,
  };
} catch (error: unknown) {

  // handle error
}

```
## Getting Help

If you get any hiccups please feel free to contact the maintainers Or open up an issue. Good Luck!!! 🫂 


