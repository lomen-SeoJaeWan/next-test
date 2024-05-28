import Setting from "@/setting";

export default function RootLayout({ children }) {
  console.log("layout");

  return (
    <html lang="en">
      <body>
        <Setting>{children}</Setting>
      </body>
    </html>
  );
}
