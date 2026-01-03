import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "ScamSmart",
  description: "Think before you click.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
