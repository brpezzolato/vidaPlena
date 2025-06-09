import { Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ChatBot from '@/components/ChatBot/ChatBot';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body>
        <Header />
        {children}
        <ChatBot />
        <Footer />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
