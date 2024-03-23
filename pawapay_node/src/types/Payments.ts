export interface PaymentData {
  deposit_id: string;
  price: number;
  title: string;
  artist_name: string;
  currency: string;
  basePaymentCountryIso: string;
  reason: string;
  returnUrl: string;
}

export interface InitiatePaymentResponse {
  redirectUrl: string;
  error: boolean;
  message?: string;
}


