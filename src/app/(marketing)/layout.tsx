import { ThemeToggle } from '@/components/marketing/shared/theme-toggle';
import { cn } from '@/lib/utils';

export default function MarketingLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className={cn('relative')}>
      {/* Theme Toggle - Fixed Top Right */}
      <div className={cn('fixed top-4 right-4 z-50')}>
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
}
