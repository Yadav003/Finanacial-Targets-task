import "./globals.css";

export const metadata = {
  title: "Next.js Assignment",
  description: "WeframeTech Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  );
}
