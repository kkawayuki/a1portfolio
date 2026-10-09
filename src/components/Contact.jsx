import socials from '../data/socials.jsx'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>contact</h2>
        <ul className="social-list">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
