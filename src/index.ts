import { createHash, createHmac } from "node:crypto";
import type { CreateInvoiceProps } from "./interfaces/CreateInvoice";
import type { CryptoBotConfig } from "./interfaces/CryptoBotConfig";
import type { Invoice } from "./interfaces/Invoice";

export const CRYPTOBOT_MAIN_NETWORK = "https://pay.crypt.bot";
export const CRYPTOBOT_TEST_NETWORK = "https://testnet-pay.crypt.bot";

export class CryptoBot {
	private apiUrl: string;
	private apiToken: string;

	constructor(oprtions: CryptoBotConfig) {
		this.apiToken = oprtions.apiToken;
		this.apiUrl = oprtions.apiUrl || CRYPTOBOT_MAIN_NETWORK;
	}

	private async request<T>(method: string, body?: unknown): Promise<T> {
		return fetch(`${this.apiUrl}/api/${method}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Crypto-Pay-API-Token": this.apiToken,
			},
			body: JSON.stringify(body),
		}).then((res) => res.json()) as Promise<T>;
	}

	public async getMe() {
		return this.request("getMe");
	}

	public async createInvoice(props: CreateInvoiceProps): Promise<Invoice> {
		return this.request("createInvoice", props);
	}

	public checkSignature({
		body,
		headers,
	}: { body: string; headers: { "crypto-pay-api-signature": string } }) {
		const secret = createHash("sha256").update(this.apiToken).digest();
		const checkString = JSON.stringify(body);
		const hmac = createHmac("sha256", secret).update(checkString).digest("hex");
		return hmac === headers["crypto-pay-api-signature"];
	}
}
