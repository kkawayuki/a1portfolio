import { useState } from 'react'
import ProjectNode from './Projectnode.jsx'
import projects from '../data/projects.js'

function Projects() {
  const [selected, setSelected] = useState(0)
  const project = projects[selected]

  return (
    <section id="projects" className="projects">
      <h2>projects</h2>

      <div className="project-player">
        {project.video ? (
          <video key={project.video} src={project.video} autoPlay muted loop playsInline />
        ) : (
          <span className="project-placeholder">{project.title}</span>
        )}

        <div className="project-selector">
          {projects.map((p, i) => (
            <ProjectNode
              key={p.title}
              project={p}
              isSelected={i === selected}
              onSelect={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      <div className="project-info">
        <p>
          {project.title}
          {' - '}
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
