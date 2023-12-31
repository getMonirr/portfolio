import GetContainer from "@/components/Shared/GetContainer/GetContainer";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import MainLayout from "@/components/MainLayout/MainLayout";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Md. Monir Hoshen",
  description: "Welcome to My World",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-get-bg text-get-body-text`}>
        <GetContainer>
          <MainLayout>{children}</MainLayout>
        </GetContainer>
      </body>
    </html>
  );
};

export default RootLayout;
