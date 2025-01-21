import { PaymentCallbackData } from '@/@types/yookassa';
import { prisma } from '@/prisma/prisma-client';
import { OrderSuccesTemplate } from '@/shared/components';
import { sendEmail } from '@/shared/lib';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });
    if (!order) {
      return NextResponse.json({ error: 'Order not found' });
    }

    const isSucceeded = body.object.status === 'succeeded';
    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELED,
      },
    });

    const items = JSON.parse(order?.items as string) as CartItemDTO[];

    if (isSucceeded) {
      await sendEmail(
        'arteeer.4er@gmail.com',
        'Feal Pizza / ваш заказ успешно оформлен! 🎉',
        OrderSuccesTemplate({
          orderId: order.id,
          items,
          totalAmount: order.totalAmount + Math.floor(order.totalAmount * 0.15),
        }),
      );
    }
  } catch (error) {
    console.error('[Checkout Callback] Error: ', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
