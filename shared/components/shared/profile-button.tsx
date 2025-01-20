import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui';
import { CircleUser, User } from 'lucide-react';
import Link from 'next/link';
import { CheckoutItemSkeleton } from './checkout-item-skeleton';

interface Props {
  onClickSingIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className, onClickSingIn }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="h-10 w-[120px]  bg-gray-200 rounded-3xl animate-pulse" />;
  }
  return (
    <div className={className}>
      {session ? (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      ) : (
        <Button onClick={onClickSingIn} variant="outline" className="items-center flex gap-1">
          <User size={16} />
          Войти
        </Button>
      )}
    </div>
  );
};
