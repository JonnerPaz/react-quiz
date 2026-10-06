import { learnSections } from '../data/learnSections.jsx'

export default function Learn() {
  return (
    <div className="learn">
      <aside className="learn-sidebar">
        <nav>
          {learnSections.map((sect) => (
            <a
              key={sect.id}
              href={`#${sect.id}`}
              className="sidebar-link"
              data-section={sect.id}
            >
              {sect.title}
            </a>
          ))}
        </nav>
      </aside>
      <article className="learn-content">
        {learnSections.map((sect) => (
          <section key={sect.id} id={sect.id} className="learn-section">
            <h2>{sect.title}</h2>
            <div className="markdown-content">{sect.content}</div>
          </section>
        ))}
      </article>
    </div>
  )
}
