import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormTextarea } from '../form';
import { AddresInput } from '../addres-input';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '../error-text';

interface Props {
  className?: string;
}

export const CheckoutAddresForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddresInput onChange={field.onChange} />
              {fieldState?.error && (
                <ErrorText
                  text={fieldState.error.message}
                  className="text-red-500 text-sm "></ErrorText>
              )}
            </>
          )}
        />
        <FormTextarea
          name="comment"
          rows={5}
          className="text-base"
          placeholder="Комментарий к заказу"
        />
      </div>
    </WhiteBlock>
  );
};
