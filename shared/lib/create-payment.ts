import { PaymentData } from '@/@types/yookassa';
import axios from 'axios';
import { it } from 'node:test';

interface Props {
  description: string;
  orderId: number;
  amount: number;
}

export async function createPayment(details: Props) {
  const { data } = await axios.post<PaymentData>(
    'https://api.yookassa.ru/v3/payments',
    {
      amount: {
        value: details.amount,
        currency: 'RUB',
      },
      capture: true,
      description: details.description,
      metadata: {
        order_id: details.orderId,
      },
      confirmation: {
        type: 'redirect',
        return_url: process.env.YOOMONEY_CALLBACK_URL,
      },
      receipt: {
        items: [
          {
            description: 'Товар 1',
            quantity: 1,
            amount: {
              value: 299,
              currency: 'RUB',
            },
            vat: 'none',
          },
        ],
      },
    },
    {
      auth: {
        username: process.env.YOOMONEY_STORE_ID as string,
        password: process.env.YOOMONEY_API_KEY as string,
      },
      headers: {
        'Content-Type': 'application/json',
        'idempotence-key': Math.random().toString(23).substring(7),
      },
    },
  );
  return data;
}
