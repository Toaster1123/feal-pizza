import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { Container, SearhInput } from './index';
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
            <Image src={'/logo.png '} height={35} width={35} alt="logo" />
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
          <div>
            <Button className="group relative">
              <b>1000 ₽</b>
              <span className="h-full w-px bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0 ">
                <ShoppingCart className="h-4 w-4 relative " strokeWidth={2} />
                <b>2</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
