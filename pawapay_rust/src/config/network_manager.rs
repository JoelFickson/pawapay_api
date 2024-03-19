pub struct NetworkManager {
    pub base_url: String,
    pub api_key: String,
}

impl NetworkManager {
    pub fn new(base_url: String, api_key: String) -> NetworkManager {
        NetworkManager { base_url, api_key }
    }

    pub fn client(&self) -> reqwest::Client {
        let base_client = reqwest::Client::new();
        let client = base_client
            .builder()
            .header("Authorization", &self.api_key)
            .timeout(std::time::Duration::from_secs(10))
            .build()
            .unwrap();

        client
    }
}