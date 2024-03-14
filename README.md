# CryptoBot SDK

This package provide SDK for working with telegram @CryptoBot in TypeScript

# Usage

```typescript
import { CryptoBot, CRYPTOBOT_TEST_NETWORK } from "at.cryptobot.sdk";

if(!process.env.CRYPTOBOT_TOKEN){
    throw new Error("CRYPTOBOT_TOKEN is not set");
}

const cryptoBot = new CryptoBot({
    apiToken: process.env.CRYPTOBOT_TOKEN,
    // apiUrl: CRYPTOBOT_TEST_NETWORK
});

const invoice = cryptoBot.createInvoice({
    currency_type: "fiat",
    fiat: "UAH",
    amount: "500.25",
    description: "My new product x1",
});
```