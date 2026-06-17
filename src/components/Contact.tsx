export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <div className="contact-inner">
          <p className="contact-headline">
            Open to <strong>senior backend</strong> roles and interesting{' '}
            <strong>fintech / crypto</strong> problems.
          </p>
          <div className="contact-list">
            <a
              href="https://github.com/jarmasp"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-type">GitHub</span>
              <span className="contact-val">github.com/jarmasp</span>
            </a>
            <a href="mailto:armasjose606@gmail.com" className="contact-item">
              <span className="contact-type">Email</span>
              <span className="contact-val">armasjose606@gmail.com</span>
            </a>
            <a href="mailto:thyfushinigami@gmail.com" className="contact-item">
              <span className="contact-type">Alt</span>
              <span className="contact-val">thyfushinigami@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
