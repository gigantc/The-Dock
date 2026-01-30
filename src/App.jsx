import { useMemo, useState } from 'react'
import matter from 'gray-matter'
import { marked } from 'marked'
import './App.scss'

const docModules = import.meta.glob('../docs/**/*.md', { as: 'raw', eager: true })

function buildDocs(modules) {
  return Object.entries(modules).map(([path, raw]) => {
    const { data, content } = matter(raw)
    const slug = path
      .replace('../docs/', '')
      .replace(/\.md$/, '')
      .replace(/\//g, ' / ')
    const title = data?.title || slug
    const created = data?.created || null

    return {
      path,
      slug,
      title,
      created,
      content,
      html: marked.parse(content),
      tags: Array.isArray(data?.tags) ? data.tags : [],
    }
  })
}

function sortDocs(docs) {
  return [...docs].sort((a, b) => {
    if (a.created && b.created) return String(b.created).localeCompare(String(a.created))
    if (a.created) return -1
    if (b.created) return 1
    return a.title.localeCompare(b.title)
  })
}

export default function App() {
  const docs = useMemo(() => sortDocs(buildDocs(docModules)), [])
  const [query, setQuery] = useState('')
  const [activePath, setActivePath] = useState(docs[0]?.path)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return docs
    return docs.filter((doc) => {
      const haystack = `${doc.title} ${doc.slug} ${doc.content}`.toLowerCase()
      return haystack.includes(q)
    })
  }, [docs, query])

  const activeDoc = docs.find((doc) => doc.path === activePath) || filtered[0]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__title">Second Brain</div>
          <div className="brand__subtitle">dFree × Rocky</div>
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Search docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="doc-list">
          {filtered.map((doc) => (
            <button
              key={doc.path}
              className={`doc-list__item ${doc.path === activeDoc?.path ? 'is-active' : ''}`}
              onClick={() => setActivePath(doc.path)}
            >
              <div className="doc-list__title">{doc.title}</div>
              <div className="doc-list__meta">
                {doc.created ? doc.created : doc.slug}
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="doc-list__empty">No docs match that search.</div>
          )}
        </div>
      </aside>

      <main className="viewer">
        {activeDoc ? (
          <article className="doc">
            <header className="doc__header">
              <h1>{activeDoc.title}</h1>
              {activeDoc.created && <div className="doc__date">{activeDoc.created}</div>}
              {activeDoc.tags.length > 0 && (
                <div className="doc__tags">
                  {activeDoc.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </header>
            <div
              className="doc__content"
              dangerouslySetInnerHTML={{ __html: activeDoc.html }}
            />
          </article>
        ) : (
          <div className="empty">No document selected.</div>
        )}
      </main>
    </div>
  )
}
