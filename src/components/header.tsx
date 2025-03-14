import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list flex text-2xl justify-between font-bold border-b-2 h-20 items-center">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home(SSG)
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/news" className="nav-link">
              News(ISR)
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blogs" className="nav-link">
              Blogs(SSR)
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/todolist" className="nav-link">
              TodoList(CSR)
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
