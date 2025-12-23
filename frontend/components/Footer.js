export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {year} <span>Mukesh Maharaja</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
