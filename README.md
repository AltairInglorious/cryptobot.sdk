# CryptoBot SDK

This package provide SDK for working with telegram @CryptoBot in TypeScript

# Usage

## Creating invoice

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

## Checking webhook

```typescript
import { CryptoBot, type WebhookUpdate } from "at.cryptobot.sdk";
import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

app.post(`/webhook/cryptobot/${process.env.CRYPTOBOT_TOKEN}`, async (req: Request, res: Response) => {
    const dataToCheck = {
        body: req.body,
        headers: req.headers as Record<string, string> // checkSignature function expect Record<string, string> for headers
    };

    // Check signature validity
    if(!cryptoBot.checkSignature(dataToCheck)){
        res.sendStatus(401);
    }

    // Get invoice data from body using WebhookUpdate type
    // More detail in cryptobot API
    // https://help.crypt.bot/crypto-pay-api#webhooks
    const invoiceData = (body as WebhookUpdate).payload;

    if(invoiceData.status === 'expired'){
        throw new WebhookExpireError();
    }

    if(invoiceData.status !== 'paid'){
        throw new UnknownWebhookStateError(invoiceData.status);
    }

    console.log('Successful payment');
    res.sendStatus(200);
})

app.listen(3000);
```

# Contributing

All contributions are welcome!

# Communication

You can mail me on altairinglorious@proton.me