use reqwest::{Error, StatusCode};

use crate::config::network_manager::NetworkManager;
use crate::structs::pawapay::{PaymentTransaction, ResendCallbackResponseStatus};


/// Sends a payment transaction to a remote service.
///
/// This asynchronous function takes a `PaymentTransaction` and a `NetworkManager` configuration,
/// sends the transaction to the specified endpoint, and awaits the response. If the response status
/// is OK, it attempts to deserialize the response body into a `PaymentTransaction` object and return it.
/// Otherwise, it returns an error indicating the failure.
///
/// # Parameters
/// - `payment_transaction`: The `PaymentTransaction` object containing the transaction details to be sent.
/// - `config`: A reference to a `NetworkManager` containing the configuration settings such as the base URL and API key.
///
/// # Returns
/// Returns a `Result` that is either:
/// - Ok(`PaymentTransaction`): A `PaymentTransaction` object parsed from the response body if the request was successful.
/// - Err(`Error`): An error occurred during the request or while parsing the response.
///
/// # Errors
/// This function can return an `Error` in several cases, including:
/// - Network issues or server not responding.
/// - The response status from the server is not OK.
/// - Failure to parse the response body into a `PaymentTransaction` object.
/// with appropriate parameters as per your implementation.
pub async fn send_payment_transaction(
    payment_transaction: PaymentTransaction,
    config: &NetworkManager,
) -> Result<PaymentTransaction, Error> {
    // Function implementation remains

pub async fn send_payment_transaction(
    payment_transaction: PaymentTransaction,
    config: &NetworkManager,
) -> Result<PaymentTransaction, Error> {
    let url = format!("{}/deposits", config.base_url);
    let client = reqwest::Client::new();
    let response = client
        .post(&url)
        .header("Authorization", &config.api_key)
        .json(&payment_transaction)
        .send()
        .await?;

    let status = response.status();
    let body = response.text().await?;

    match status {
        StatusCode::OK => {
            let payment_transaction: PaymentTransaction = serde_json::from_str(&body)?;
            Ok(payment_transaction)
        }
        _ => Err(Error::ApiError {
            status,
            message: body,
        }),
    }
}

pub async fn get_payment_transaction(
    deposit_id: &str,
    config: &NetworkManager,
) -> Result<PaymentTransaction, Error> {
    let response = config.client().get("/deposits").send().await?;

    let status = response.status();
    let body = response.text().await?;

    match status {
        StatusCode::OK => {
            let payment_transaction: PaymentTransaction = serde_json::from_str(&body)?;
            Ok(payment_transaction)
        }
        _ => Err(Error::ApiError {
            status,
            message: body,
        }),
    }
}

pub async fn resend_callback(
    deposit_id: &str,
    config: &NetworkManager,
) -> Result<ResendCallbackResponseStatus, Error> {
    let response = config.client().get("/deposits/resend-callback").send().await?;


    let status = response.status();
    let body = response.text().await?;

    match status {
        StatusCode::OK => {
            let resend_callback_response_status: ResendCallbackResponseStatus = serde_json::from_str(&body)?;
            Ok(resend_callback_response_status)
        }
        _ => Err(Error::ApiError {
            status,
            message: body,
        }),
    }
}
