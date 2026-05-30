import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Bruso Elite Studio on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 border border-white bg-black px-4 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-white hover:text-black sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
