import DataStatus from './DataStatus'

// Prefix a pound sign only for plain numbers; text values such as "POA" or
// values that already include a symbol are left exactly as entered.
function formatPrice(value) {
  if (value === null || value === undefined) return ''
  const trimmed = String(value).trim()
  if (/^\d+(\.\d{1,2})?$/.test(trimmed)) {
    return `\u00a3${trimmed}`
  }
  return trimmed
}

export default function Pricing({ prices = [], status = {} }) {
  const hasPrices = Array.isArray(prices) && prices.length > 0

  return (
    <section id="pricing" className="section-padding border-t border-gray-800">
      <div className="mx-auto max-w-6xl" data-aos="fade-up">
        <div className="text-center">
          <h2 className="section-heading">Pricing</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-white" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Transparent pricing for our services. Get in touch for a bespoke
            quote on larger custom pieces.
          </p>
        </div>

        {hasPrices ? (
          <div className="mx-auto mt-12 max-w-2xl border border-white">
            <ul className="divide-y divide-gray-800">
              {prices.map((item, index) => (
                <li
                  key={`${item.service}-${index}`}
                  className="flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-white/5 sm:px-8"
                >
                  <span className="text-sm font-medium uppercase tracking-wide text-white/90 sm:text-base">
                    {item.service}
                  </span>
                  <span className="whitespace-nowrap text-lg font-bold text-white sm:text-xl">
                    {formatPrice(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-12">
            <DataStatus
              {...status}
              emptyMessage="Pricing details are being updated. Please contact us for a quote."
            />
          </div>
        )}
      </div>
    </section>
  )
}
