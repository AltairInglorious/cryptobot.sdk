type CryptoAsset = "USDT"
| "TON"
| "BTC"
| "ETH"
| "LTC"
| "BNB"
| "TRX"
| "USDC"
| "JET";

export type Invoice = {
	invoice_id: number;
	currency_type: "crypto" | "fiat";
	asset?: CryptoAsset;
	fiat?:
		| "USD"
		| "EUR"
		| "RUB"
		| "BYN"
		| "UAH"
		| "GBP"
		| "CNY"
		| "KZT"
		| "UZS"
		| "GEL"
		| "TRY"
		| "AMD"
		| "THB"
		| "INR"
		| "BRL"
		| "IDR"
		| "AZN"
		| "AED"
		| "PLN"
		| "ILS";
	amount: string;
	paid_asset?: string;
	paid_amount?: string;
	paid_fiat_rate?: string;
	accepted_assets?: CryptoAsset[];
	fee_asset?: string;
	fee_amount?: number;
	fee?: string; // deprecated
	bot_invoice_url: string;
	pay_url: string; // deprecated
	description?: string;
	status: "active" | "paid" | "expired";
	created_at: string;
	paid_usd_rate?: string;
	usd_rate?: string; // deprecated
	allow_comments: boolean;
	allow_anonymous: boolean;
	expiration_date?: string;
	paid_at?: string;
	paid_anonymously: boolean;
	comment?: string;
	hidden_message?: string;
	payload?: string;
	paid_btn_name?: "viewItem" | "openChannel" | "openBot" | "callback";
	paid_btn_url?: string;
};
