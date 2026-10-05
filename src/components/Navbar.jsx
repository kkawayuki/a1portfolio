// placeholder icons (simple inline svgs) - swap for your own later
const icons = {
  home: (
    <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
  ),
  projects: (
    <path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
  ),
  about: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
}

const links = [
  { href: '#hero', label: 'home' },
  { href: '#projects', label: 'projects' },
  { href: '#about', label: 'about' },
  { href: '#contact', label: 'contact' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">kykawa</h2>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>
              <svg
                className="nav-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[link.label]}
              </svg>
              <span className="nav-label">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
