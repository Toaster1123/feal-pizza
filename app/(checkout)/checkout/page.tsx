'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import {
  CheckoutAddresForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSlidebar,
  Container,
  Title,
} from '@/shared/components';

import { useCart } from '@/shared/hooks';

export default function CheckoutPage() {
  const { onClickCountButton, totalAmount, items, removeCartItem } = useCart();

  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
    console.log(data);
  };

  return (
    <Container className="mt-5">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalForm />
              <CheckoutAddresForm />
            </div>
            <div className="w-[450px]">
              <CheckoutSlidebar totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
