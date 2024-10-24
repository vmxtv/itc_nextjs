import Link from "next/link";

import { PreviewAlert } from "components/preview-alert";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div>
        <header>
          <div>Header content</div>
        </header>
        <main className="container py-10 mx-auto">{children}</main>
        <footer>
          <div>Footer content</div>
        </footer>
      </div>
    </>
  );
}
