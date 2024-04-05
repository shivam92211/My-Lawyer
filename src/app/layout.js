import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Lawyer",
  description: "Your on the go lawyer",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
      <head>
        <meta name="google-site-verification" 
            content="PJolwsJuc29of6Jm3jcxf7vNHyXBAZuh1wE-zqL2eQA" 
          />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        
      </body>
      
    </html>
    </>
    
   
    
  );
}
