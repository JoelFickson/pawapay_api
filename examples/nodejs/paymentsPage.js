const { pawaPaymentsPage, pawapayBaseService } = require("pawapay_api");

const payment = {
  reason: `Buy song`,
  deposit_id: "82d2c0fb-690a-0483-7ea1-6a0181a2e362",
  price: 3000,
  title: "Buy song",
  basePaymentCountryIso: "MWI",
  currency: "MWK",
  returnUrl: "https://test.test.com/payments/success",
};

const instantiatePayment = async () => {
  try {
    const response = await pawaPaymentsPage.initiatePayment(payment);

    if (pawapayBaseService.isPawaPayErrorResponse(response)) {
      // Check if response is an error
      console.error(response);
      return;
    }

    return response;
  } catch (error) {
    console.error(error);
  }
};

const response = await instantiatePayment();

// response will contain the redirect url to the payment page
