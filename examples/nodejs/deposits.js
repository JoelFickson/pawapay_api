const { pawaPayBaseService, pawaDeposits } = require("pawapay_api");

const getDeposit = async () => {
  try {
    const response = await pawaDeposits.getDeposit(
      "82d2c0fb-690a-0483-7ea1-6a0181a2e362",
    );

    if (pawaPayBaseService.isPawaPayErrorResponse(response)) {
      // Check if response is an error
      console.error(response);
      return;
    }

    return response;
  } catch (error) {
    console.error(error);
  }
};

const response = await getDeposit();
