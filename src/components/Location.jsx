import { MapPin, Clock } from 'lucide-react'
import { ADDRESS_FULL, MAPS_EMBED_URL, OPENING_HOURS } from '../constants'

export default function Location() {
  return (
    <section id="location" className="section-padding border-t border-gray-800">
      <div className="mx-auto max-w-6xl" data-aos="fade-up">
        <div className="text-center">
          <h2 className="section-heading">Find Us</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-white" aria-hidden="true" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="border border-white">
            <iframe
              title="Map showing the location of Bruso Elite Studio"
              src={MAPS_EMBED_URL}
              className="block h-full min-h-[320px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="border border-white p-6">
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <h3 className="text-lg font-bold uppercase tracking-widest">
                  Address
                </h3>
              </div>
              <p className="mt-4 text-white/85">{ADDRESS_FULL}</p>
            </div>

            <div className="border border-white p-6">
              <div className="flex items-center gap-3">
                <Clock size={20} />
                <h3 className="text-lg font-bold uppercase tracking-widest">
                  Opening Hours
                </h3>
              </div>
              <ul className="mt-4 divide-y divide-gray-800">
                {OPENING_HOURS.map((entry) => (
                  <li
                    key={entry.day}
                    className="flex items-center justify-between py-3 text-sm sm:text-base"
                  >
                    <span className="font-medium">{entry.day}</span>
                    <span className="text-white/80">{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
