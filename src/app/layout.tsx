import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/providers/auth.provider';
import ReactQueryProvider from '@/providers/react-query.provider';
import { ThemeProvider } from '@/providers/theme.provider';
import { poppins } from '@/utils/font-utils';
import '@/utils/yup-extension-utils'; // Register custom yup methods globally
import { Metadata } from 'next';
import { ReactNode } from 'react';

import NextTopLoader from 'nextjs-toploader';
import '../styles/global.css';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: { default: 'Amjath Husain', template: '%s | Amjath Husain' },
  description: "Let's Turn the Ideas into Reality with Technology",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ReactQueryProvider>
            <AuthProvider>
              <NextTopLoader />
              <main>
                <div>{children}</div>
              </main>
              <Toaster />
            </AuthProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
