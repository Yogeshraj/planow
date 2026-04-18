import Link from "next/link";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surfacedim text-backgroundbg py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>© {currentYear} Planow.app • All rights reserved</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="transition-colors hover:underline">
              About Us
            </Link>
            <Link
              href="/why-planow"
              className="transition-colors hover:underline"
            >
              Why Planow
            </Link>
            <Link href="/privacy" className="transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
