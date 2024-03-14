export type CreateInvoiceProps = {
    currency_type?: "crypto" | "fiat";
    asset?: "USDT" | "TON" | "BTC" | "ETH" | "LTC" | "BNB" | "TRX" | "USDC";
    fiat?: "USD" | "EUR" | "RUB" | "BYN" | "UAH" | "GBP" | "CNY" | "KZT" | "UZS" | "GEL" | "TRY" | "AMD" | "THB" | "INR" | "BRL" | "IDR" | "AZN" | "AED" | "PLN" | "ILS";
    accepted_assets?: string;
    amount: string; // for example: 125.50
    description?: string;
    hidden_message?: string;
    paid_btn_name?: "viewItem" | "openChannel" | "openBot" | "callback";
    paid_btn_url?: string;
    payload?: string;
    allow_comments?: boolean;
    allow_anonymous?: boolean;
    expires_in?: number; // payment time limit for the invoice in seconds
}
