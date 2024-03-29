### PawaPay NodeJs SDK

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






