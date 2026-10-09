import { useEffect, useLayoutEffect, useRef } from 'react'
import projects from '../data/projects.js'

function Projects({ selected, onSelect }) {
  const project = projects[selected]
  // neighbors wrap around: the first project's previous is the last, and vice versa
  const prev = (selected - 1 + projects.length) % projects.length
  const next = (selected + 1) % projects.length

  // which spot in the title bar each project sits in
  const slotOf = (i) => {
    if (i === selected) return 'center'
    if (i === next) return 'right'
    if (i === prev) return 'left'
    return 'hidden'
  }

  // every demo stays loaded and the selected one crossfades in (CSS); only it plays, and only while on screen
  const videoRefs = useRef([])
  useEffect(() => {
    const video = videoRefs.current[selected]
    // let the old demo keep playing while it fades out, then pause it
    const pauseOthers = setTimeout(() => {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== selected) v.pause()
      })
    }, 600)
    let observer
    if (video) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      })
      observer.observe(video)
    }
    return () => {
      clearTimeout(pauseOthers)
      observer?.disconnect()
    }
  }, [selected])

  // title bar: each title is one persistent element that glides to its new spot
  // (FLIP: measure the new layout, then animate from where it was before)
  const titleRefs = useRef([])
  const last = useRef(null) // rects + slots from the previous selection
  const running = useRef([])
  useLayoutEffect(() => {
    running.current.forEach((a) => a.cancel()) // measure untransformed positions
    running.current = []

    const els = titleRefs.current
    const slots = projects.map((_, i) => slotOf(i))
    const rects = projects.map((_, i) => (els[i] && slots[i] !== 'hidden' ? els[i].getBoundingClientRect() : null))
    const old = last.current
    last.current = { rects, slots }
    if (!old || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timing = { duration: 450, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }
    projects.forEach((_, i) => {
      const el = els[i]
      const now = rects[i]
      if (!el || !now) return
      const before = old.rects[i]
      const wrapped =
        (old.slots[i] === 'left' && slots[i] === 'right') || (old.slots[i] === 'right' && slots[i] === 'left')

      if (!before || wrapped) {
        // came around from the other end (or newly visible): fade in from just outside its spot instead of crossing the bar
        const dx = slots[i] === 'left' ? -40 : 40
        running.current.push(
          el.animate([{ transform: `translateX(${dx}px)`, opacity: 0 }, { transform: 'none' }], timing),
        )
        return
      }
      // slide from the old spot, scaling from the old text size to the new one
      const dx = before.left + before.width / 2 - (now.left + now.width / 2)
      const scale = before.height / now.height
      if (Math.abs(dx) < 1 && Math.abs(scale - 1) < 0.01) return
      running.current.push(
        el.animate([{ transform: `translateX(${dx}px) scale(${scale})` }, { transform: 'none' }], timing),
      )
    })
  }, [selected])

  return (
    <section id="projects" className="projects">
      {/* section header + project titles in one bar: current project centered, dimmed neighbors on either side */}
      <div className="project-bar">
        <h2 className="project-bar-label">projects</h2>
        {projects.map((p, i) => {
          const slot = slotOf(i)
          return (
            <button
              key={p.title}
              ref={(el) => (titleRefs.current[i] = el)}
              className={`project-title slot-${slot}`}
              onClick={slot === 'center' ? undefined : () => onSelect(i)}
              aria-current={slot === 'center' ? 'true' : undefined}
              tabIndex={slot === 'center' || slot === 'hidden' ? -1 : undefined}
            >
              {p.title}
            </button>
          )
        })}
        {/* invisible copy of the label balances it, so the current title stays centered over the video */}
        <span className="project-bar-label project-bar-ghost" aria-hidden="true">
          projects
        </span>
      </div>

      <div className="project-player">
        {projects.map(
          (p, i) =>
            p.video && (
              <video
                key={p.video}
                ref={(el) => (videoRefs.current[i] = el)}
                className={i === selected ? 'active' : undefined}
                src={p.video}
                preload="auto"
                muted
                loop
                playsInline
              />
            ),
        )}
        <div className={project.video ? 'project-shade active' : 'project-shade'} />

      </div>

      <div className="project-info">
        <p>
          {project.description}
        </p>
        <div className="project-meta">
          <a
            className="github-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <ul className="tech-list">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a
            className={project.live ? 'live-link' : 'live-link disabled'}
            href={project.live || undefined}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live site`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </svg>
            live
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
