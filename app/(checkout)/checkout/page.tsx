'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSlidebar,
  Container,
  Title,
} from '@/shared/components';

import { useCart } from '@/shared/hooks';
import { cn } from '@/shared/lib/utils';
import toast from 'react-hot-toast';
import React from 'react';
import { createOrder } from '@/app/actions';
import { useSession } from 'next-auth/react';
import { Api } from '@/shared/services/api-client';

export default function CheckoutPage() {
  const { onClickCountButton, totalAmount, items, loading, removeCartItem } = useCart();
  const [submiting, setSubmiting] = React.useState(false);
  const { data: session } = useSession();

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

  React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {
    try {
      setSubmiting(true);
      const url = await createOrder(data);
      toast.success('Заказ успешно создан. Переход на оплату...');

      if (url) {
        location.href = url;
      }
    } catch (error) {
      setSubmiting(false);
      console.error(error);
      toast.error('Не удалось создать заказ');
    }
  };

  return (
    <Container className="mt-5">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                loading={loading}
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalForm className={cn({ 'opacity-40 pointer-events-none': loading })} />
              <CheckoutAddressForm className={loading && 'opacity-40 pointer-events-none'} />
            </div>
            <div className="w-[450px]">
              <CheckoutSlidebar totalAmount={totalAmount} loading={loading || submiting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
