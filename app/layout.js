import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JustMusic",
  description: "app para rodar musicas do youtube sem todo o consumo de cpu e distrações",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        
        </body>
    </html>
  );
}
