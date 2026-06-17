const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <>
      <nav className="nav">
        <span className="nav-logo">jarmasp</span>
        <ul className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>
      <nav className="nav-mobile" aria-label="Mobile navigation">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className="nav-mobile-link">{label}</a>
        ))}
      </nav>
    </>
  )
}
