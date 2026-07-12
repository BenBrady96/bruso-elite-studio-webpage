import LegalLayout from './LegalLayout'
import { COMPANY } from '../constants'

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>
        This cookie policy explains how {COMPANY.legalName} (trading as Bruso Elite
        Studio) uses cookies and similar technologies on brusoelitestudio.com, in
        line with UK privacy law (UK GDPR and the Privacy and Electronic
        Communications Regulations, PECR).
      </p>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          What are cookies?
        </h2>
        <p className="mt-3">
          Cookies are small text files stored on your device when you visit a
          website. Similar technologies (such as local storage) can also remember
          preferences between visits.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          How we use cookies
        </h2>
        <p className="mt-3">We use the following categories of cookies:</p>

        <div className="mt-6 space-y-6">
          <div className="border border-gray-800 p-5">
            <h3 className="font-bold uppercase tracking-widest text-white">
              Strictly necessary
            </h3>
            <p className="mt-2">
              These are required for the website to function and do not require
              your consent.
            </p>
            <table className="mt-4 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-white/60">
                  <th className="pb-2 pr-4 font-medium">Name</th>
                  <th className="pb-2 pr-4 font-medium">Purpose</th>
                  <th className="pb-2 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/60">
                  <td className="py-3 pr-4 align-top">bes-cookie-consent</td>
                  <td className="py-3 pr-4 align-top">
                    Remembers whether you accepted or rejected non-essential cookies
                  </td>
                  <td className="py-3 align-top">Until you clear site data</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-gray-800 p-5">
            <h3 className="font-bold uppercase tracking-widest text-white">
              Functional (requires consent)
            </h3>
            <p className="mt-2">
              These improve your experience but are not essential. They are only
              activated if you click &ldquo;Accept&rdquo; on our cookie banner.
            </p>
            <table className="mt-4 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-white/60">
                  <th className="pb-2 pr-4 font-medium">Provider</th>
                  <th className="pb-2 pr-4 font-medium">Purpose</th>
                  <th className="pb-2 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 pr-4 align-top">Google Maps</td>
                  <td className="py-3 pr-4 align-top">
                    Displays an interactive map on our location page. Google may set
                    cookies and collect usage data. See{' '}
                    <a
                      href="https://policies.google.com/technologies/cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline underline-offset-4 hover:opacity-70"
                    >
                      Google&apos;s cookie information
                    </a>
                    .
                  </td>
                  <td className="py-3 align-top">Varies (set by Google)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Cookies we do not use
        </h2>
        <p className="mt-3">
          We do not currently use analytics, advertising, or social media tracking
          cookies on this website.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Managing your preferences
        </h2>
        <p className="mt-3">
          When you first visit our site, you can choose to accept or reject
          non-essential cookies. You can change your choice at any time by clicking
          the button below:
        </p>
        <button
          type="button"
          onClick={() => {
            try {
              localStorage.removeItem('bes-cookie-consent')
            } catch {
              // ignore
            }
            window.dispatchEvent(
              new CustomEvent('cookie-consent-change', { detail: null })
            )
            window.location.hash = 'top'
          }}
          className="mt-4 border border-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
        >
          Change cookie settings
        </button>
        <p className="mt-4">
          You can also block or delete cookies through your browser settings.
          Blocking all cookies may affect how some parts of the website work.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          More information
        </h2>
        <p className="mt-3">
          For details on how we handle personal data, see our{' '}
          <a
            href="#privacy"
            className="text-white underline underline-offset-4 hover:opacity-70"
          >
            Privacy Policy
          </a>
          . If you have questions, contact us at{' '}
          <a
            href={`mailto:${COMPANY.privacyEmail}`}
            className="text-white underline underline-offset-4 hover:opacity-70"
          >
            {COMPANY.privacyEmail}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  )
}
