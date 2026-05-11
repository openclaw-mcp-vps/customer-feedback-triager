import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Customer Feedback Triager — Route feedback to the right team automatically",
  description: "AI-powered feedback classification that routes customer feedback to engineering, sales, or support with priority scoring. Built for B2B SaaS customer success teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1382d4aa-34b5-406d-af15-2484198f9662"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
