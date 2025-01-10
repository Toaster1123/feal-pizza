import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { CartButton, Container, SearhInput } from './index';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
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

        <div className="mx-10 flex-1">
          <SearhInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="items-center flex gap-1">
            <User size={16} />
            Войти
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
