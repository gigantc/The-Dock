import { forwardRef, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FilePlus2, ListTodo, PanelLeft, PanelLeftClose } from 'lucide-react'
import SearchBar from '../SearchBar/SearchBar'
import DocList from '../DocList/DocList'
import './Sidebar.scss'

const Sidebar = forwardRef(function Sidebar({
  query,
  onQueryChange,
  filteredCount,
  totalCount,
  grouped,
  filteredLists,
  openSections,
  onToggleSection,
  activeDoc,
  activeListId,
  onSelectDoc,
  onSelectList,
  sidebarOpen,
  onToggleSidebar,
  onNewNote,
  onNewList,
}, searchRef) {
  const contentRef = useRef(null)
  const actionsRef = useRef(null)

  useLayoutEffect(() => {
    const content = contentRef.current
    if (!content) return

    gsap.killTweensOf(content)

    if (sidebarOpen) {
      gsap.set(content, { display: 'block' })
      gsap.to(content, {
        autoAlpha: 1,
        x: 0,
        duration: 0.24,
        ease: 'power2.out',
      })
      return
    }

    gsap.to(content, {
      autoAlpha: 0,
      x: -14,
      duration: 0.18,
      ease: 'power2.out',
      onComplete: () => gsap.set(content, { display: 'none' }),
    })
  }, [sidebarOpen])

  useLayoutEffect(() => {
    const actions = actionsRef.current
    if (!actions) return
    const buttons = actions.querySelectorAll('.sidebar__action-btn')

    gsap.killTweensOf(buttons)
    gsap.fromTo(
      buttons,
      {
        x: sidebarOpen ? -10 : 0,
        y: sidebarOpen ? 0 : -8,
        opacity: 0.75,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.22,
        ease: 'power2.out',
        stagger: 0.03,
      },
    )
  }, [sidebarOpen])

  return (
    <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : 'sidebar--collapsed'}`}>
      <div className="sidebar__top">
        <div
          className={`sidebar__actions ${sidebarOpen ? 'sidebar__actions--row' : 'sidebar__actions--col'}`}
          ref={actionsRef}
        >
          <button
            className="sidebar__action-btn sidebar__action-btn--primary"
            type="button"
            onClick={onNewNote}
            aria-label="New note"
            title="New note"
          >
            <FilePlus2 aria-hidden="true" size={16} strokeWidth={2} />
          </button>
          <button
            className="sidebar__action-btn"
            type="button"
            onClick={onNewList}
            aria-label="New list"
            title="New list"
          >
            <ListTodo aria-hidden="true" size={16} strokeWidth={2} />
          </button>
        </div>

        <button
          className="sidebar__toggle"
          type="button"
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {sidebarOpen
            ? <PanelLeftClose aria-hidden="true" size={16} strokeWidth={2} />
            : <PanelLeft aria-hidden="true" size={16} strokeWidth={2} />}
        </button>
      </div>

      <div className="sidebar__content" ref={contentRef}>
        <SearchBar
          ref={searchRef}
          query={query}
          onQueryChange={onQueryChange}
          filteredCount={filteredCount}
          totalCount={totalCount}
        />
        <DocList
          grouped={grouped}
          filteredLists={filteredLists}
          filteredCount={filteredCount}
          openSections={openSections}
          onToggleSection={onToggleSection}
          activeDoc={activeDoc}
          activeListId={activeListId}
          query={query}
          onSelectDoc={onSelectDoc}
          onSelectList={onSelectList}
        />
      </div>
    </aside>
  )
})

export default Sidebar
