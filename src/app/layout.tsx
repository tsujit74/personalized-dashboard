import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from '@/store/provider'; 
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personalized Content Dashboard',
  description: 'Track and interact with content in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
            <Sidebar />
            <div className="flex flex-col flex-1 ml-64">
              <Header/>
              <main className="p-6 mt-4">{children}</main>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
