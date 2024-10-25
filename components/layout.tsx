import Link from "next/link";

import { PreviewAlert } from "components/preview-alert";
import Header from "components/header";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div>
        <Header />
        <main className="container py-10 mx-auto">{children}</main>
        <footer>
          <div>Footer content</div>
        </footer>
      </div>
    </>
  );
}
