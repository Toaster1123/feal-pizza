'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { CartButton, Container, SearhInput } from './index';
import { User } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasCart = true, hasSearch = true, className }) => {
  const searchParams = useSearchParams();
  React.useEffect(() => {
    if (searchParams.has('paid')) {
      setTimeout(() => {
        toast.success('Заказ успешно оплачен! Информация отправленна на почту');
      }, 200);
    }
  }, []);

  return (
    <header className={cn(' border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href={'/'}>
          <div className="flex items-center gap-4">
            <Image src={'/logo.png'} height={35} width={35} alt="logo" />
            <div>
              <h1 className="text-2xl uppercase font-black">Feel Pizza</h1>
              <h1 className="text-sm text-gray-400 leading-3">вкуснее просто некуда</h1>
            </div>
          </div>
        </Link>
        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearhInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button variant="outline" className="items-center flex gap-1">
            <User size={16} />
            Войти
          </Button>
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
