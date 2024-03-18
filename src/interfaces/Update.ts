import type { Invoice } from "./Invoice";

export type WebhookUpdate = {
    update_id: number;
    update_type: "invoice_paid";
    request_date: string;
    payload: Invoice;
}