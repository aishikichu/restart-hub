import "./globals.css";

export const metadata = {
  title: "Re:START — Redo Life Anew",
  description:
    "Re:START is a VRChat community where every connection sparks a new beginning. Meet the crew, explore the lore, and find your place among the stars.",
  keywords: ["VRChat", "Re:START", "community", "virtual reality", "avatar"],
  openGraph: {
    title: "Re:START — Redo Life Anew",
    description:
      "A VRChat community where every connection sparks a new beginning.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
