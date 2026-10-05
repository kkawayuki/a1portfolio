// replace the hrefs with your real profiles; swap the letters for icons later
const socials = [
  { label: 'GitHub', short: 'gh', href: 'https://github.com/kkawayuki' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/in/kent-kawashima-42b823242/' },
  { label: 'Email', short: '@', href: 'mailto:kyukiokawa@gmail.com' },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>contact</h2>
      <ul className="social-list">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
              {s.short}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
