'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';
import { AuthModal, CartButton, Container, SearhInput } from './index';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { ProfileButton } from './profile-button';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasCart = true, hasSearch = true, className }) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = '';
    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправленна на почту';
    }
    if (searchParams.has('verified')) {
      toastMessage = 'Почта успещно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 300);
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
          <AuthModal onClose={() => setOpenAuthModal(false)} open={openAuthModal} />
          <ProfileButton onClickSingIn={() => setOpenAuthModal(true)} />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
