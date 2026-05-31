import { useEffect, useRef, useState } from 'react'

export default function ServiceChooser({
  trigger,
  ariaLabel,
  options = [],
  align = 'right',
  direction = 'down',
  triggerClassName = '',
  menuLabel,
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handlePointer(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    function handleKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const positionClasses = [
    align === 'right' ? 'right-0' : 'left-0',
    direction === 'up' ? 'bottom-full mb-3' : 'top-full mt-3',
  ].join(' ')

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
        className={triggerClassName}
      >
        {trigger}
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 ${positionClasses} min-w-[170px] border border-white bg-black shadow-lg`}
        >
          {menuLabel && (
            <p className="border-b border-gray-800 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/50">
              {menuLabel}
            </p>
          )}
          {options.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex flex-col gap-0.5 px-4 py-3 text-left transition-colors hover:bg-white hover:text-black"
            >
              <span className="text-sm font-semibold uppercase tracking-widest">
                {option.label}
              </span>
              {option.subLabel && (
                <span className="text-xs tracking-wide opacity-70">
                  {option.subLabel}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
