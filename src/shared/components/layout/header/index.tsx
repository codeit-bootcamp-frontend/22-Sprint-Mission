import type { HeaderProps } from '@/shared/components/layout/header/header.types';
import { Logo, LogoText } from '@/shared/assets/logos';
import { cn } from '@/shared/utils/cn';
import { Link, NavLink } from 'react-router';
import { IcProfile } from '@/shared/assets/icons';
import { Button } from '@/shared/components/button';

const navigations = [
  { to: '/', label: '자유게시판' },
  { to: '/items', label: '중고마켓' },
];

export default function Header({ variant }: HeaderProps) {
  return (
    <header className="h-17.5 border-b border-b-[#DFDFDF] bg-white px-6">
      <div className="mx-auto flex h-full max-w-380 items-center justify-between">
        <div className="flex h-full items-center gap-1 md:gap-5 lg:gap-8.5">
          <h1>
            <Link to="/" className="hover-fade">
              <Logo className="hidden md:block" />
              <LogoText className="md:hidden" />
            </Link>
          </h1>
          {variant === 'main' && (
            <nav className="flex h-full">
              {navigations.map((nav) => (
                <NavLink
                  key={nav.to}
                  to={nav.to}
                  className={({ isActive }) =>
                    cn(
                      'typo-lg-bold text-secondary-600 flex items-center px-1',
                      'md:typo-2lg-bold md:px-3.75',
                      'hover:bg-secondary-100',
                      isActive && 'text-primary-100'
                    )
                  }
                >
                  {nav.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
        {variant === 'home' && (
          <Button
            as={Link}
            to="/login"
            size="small48"
            className="min-w-22 md:min-w-32"
          >
            로그인
          </Button>
        )}
        {variant === 'main' && (
          <button type="button" className="hover-fade">
            <IcProfile />
          </button>
        )}
      </div>
    </header>
  );
}
