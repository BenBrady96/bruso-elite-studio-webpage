import { MessageCircle } from 'lucide-react'
import ServiceChooser from './ServiceChooser'
import { CONTACTS } from '../constants'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8">
      <ServiceChooser
        ariaLabel="Message Bruso Elite Studio on WhatsApp"
        menuLabel="WhatsApp"
        align="right"
        direction="up"
        triggerClassName="inline-flex items-center gap-2 border border-white bg-black px-4 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-white hover:text-black"
        trigger={
          <>
            <MessageCircle size={22} />
            <span className="hidden sm:inline">WhatsApp</span>
          </>
        }
        options={[
          {
            label: 'Tattoo',
            subLabel: CONTACTS.tattoo.phoneDisplay,
            href: CONTACTS.tattoo.whatsappUrl,
          },
          {
            label: 'Aesthetics',
            subLabel: CONTACTS.aesthetics.phoneDisplay,
            href: CONTACTS.aesthetics.whatsappUrl,
          },
        ]}
      />
    </div>
  )
}
