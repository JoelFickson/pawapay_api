use reqwest::{Error, StatusCode};

use crate::config::network_manager::NetworkManager;
use crate::structs::pawapay::{PaymentTransaction, ResendCallbackResponseStatus};

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
