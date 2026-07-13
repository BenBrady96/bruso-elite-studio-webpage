import DataStatus from './DataStatus'

function formatPrice(value) {
  if (value === null || value === undefined) return ''
  const trimmed = String(value).trim()
  if (!trimmed) return ''

  const isNumber = (part) => /^\d+(\.\d{1,2})?$/.test(part)
  const parts = trimmed.split('/').map((part) => part.trim())

  if (parts.length > 1 && parts.every(isNumber)) {
    return parts.map((part) => `\u00a3${part}`).join(' / ')
  }

  if (isNumber(trimmed)) {
    return `\u00a3${trimmed}`
  }

  return trimmed
}

function groupPrices(prices) {
  const headings = []
  const headingMap = new Map()

  for (const entry of prices) {
    const heading = (entry.heading || '').trim()
    const subheading = (entry.subheading || '').trim()

    if (!headingMap.has(heading)) {
      const group = { heading, subgroups: [], subMap: new Map() }
      headingMap.set(heading, group)
      headings.push(group)
    }

    const group = headingMap.get(heading)
    if (!group.subMap.has(subheading)) {
      const subgroup = { subheading, items: [] }
      group.subMap.set(subheading, subgroup)
      group.subgroups.push(subgroup)
    }

    group.subMap.get(subheading).items.push(entry)
  }

  return headings
}

export default function Pricing({
  prices = [],
  status = {},
  title = 'Pricing',
  note,
  emptyMessage = 'Pricing details are being updated. Please contact us for a quote.',
}) {
  const hasPrices = Array.isArray(prices) && prices.length > 0
  const groups = hasPrices ? groupPrices(prices) : []

  return (
    <div className="mt-16" data-aos="fade-up">
      <div className="text-center">
        <h3 className="sub-heading">{title}</h3>
        {note && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">{note}</p>
        )}
      </div>

      {hasPrices ? (
        <div className="mx-auto mt-10 max-w-2xl space-y-8">
          {groups.map((group, groupIndex) => (
            <div
              key={`${group.heading || 'group'}-${groupIndex}`}
              className="border border-white"
            >
              {group.heading && (
                <h4 className="bg-white px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-black sm:px-8">
                  {group.heading}
                </h4>
              )}

              {group.subgroups.map((subgroup, subIndex) => (
                <div
                  key={`${subgroup.subheading || 'items'}-${subIndex}`}
                  className="border-t border-gray-800 first:border-t-0"
                >
                  {subgroup.subheading && (
                    <p className="bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60 sm:px-8">
                      {subgroup.subheading}
                    </p>
                  )}

                  <ul className="divide-y divide-gray-800">
                    {subgroup.items.map((entry, itemIndex) => (
                      <li
                        key={`${entry.item}-${itemIndex}`}
                        className="flex items-center justify-between gap-6 px-6 py-4 transition-colors hover:bg-white/5 sm:px-8"
                      >
                        <span className="text-sm font-medium uppercase tracking-wide text-white/90 sm:text-base">
                          {entry.item}
                        </span>
                        <span className="whitespace-nowrap text-lg font-bold text-white sm:text-xl">
                          {formatPrice(entry.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <DataStatus {...status} emptyMessage={emptyMessage} />
        </div>
      )}
    </div>
  )
}
