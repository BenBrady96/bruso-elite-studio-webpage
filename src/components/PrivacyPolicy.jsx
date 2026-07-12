import LegalLayout from './LegalLayout'
import { COMPANY, CONTACTS, STUDIO_NAME } from '../constants'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This privacy policy explains how {COMPANY.legalName} (trading as{' '}
        {STUDIO_NAME}) collects, uses and protects your personal information when
        you visit our website at brusoelitestudio.com or contact us about our
        services.
      </p>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Who we are
        </h2>
        <p className="mt-3">
          The data controller is {COMPANY.legalName}, a private limited company
          registered in {COMPANY.jurisdiction} (company number {COMPANY.number}).
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Registered office: {COMPANY.registeredOffice}</li>
          <li>Studio address: 73 Lynn Road, King&apos;s Lynn, PE30 4PR</li>
          <li>
            Email:{' '}
            <a
              href={`mailto:${COMPANY.privacyEmail}`}
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              {COMPANY.privacyEmail}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          What personal data we collect
        </h2>
        <p className="mt-3">We may collect and process the following information:</p>
        <ul className="mt-3 list-inside list-disc space-y-2">
          <li>
            <strong className="text-white">Website usage data</strong>: this
            includes your IP address, browser type, device information and pages
            visited. Some of this is collected automatically when you use our site,
            including through third-party services described below.
          </li>
          <li>
            <strong className="text-white">Cookie preferences</strong>: your choice
            to accept or reject non-essential cookies, stored in your browser.
          </li>
          <li>
            <strong className="text-white">Enquiry and booking information</strong>:
            if you contact us by WhatsApp, email, phone or social media, we receive
            the information you choose to send (for example your name, phone number,
            email address and details about the tattoo or treatment you are
            interested in).
          </li>
        </ul>
        <p className="mt-3">
          We do not operate an online checkout or account system on this website.
          Any appointment or payment arrangements are made directly with us outside
          the website.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          How we use your information
        </h2>
        <p className="mt-3">We use personal data to:</p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Respond to enquiries and manage bookings</li>
          <li>Display gallery images, pricing and studio information on our website</li>
          <li>Operate and maintain our website securely</li>
          <li>Understand how visitors use our website (if you accept analytics)</li>
          <li>Meet legal and regulatory obligations</li>
          <li>Remember your cookie preferences</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Lawful bases for processing
        </h2>
        <p className="mt-3">We rely on the following lawful bases under UK GDPR:</p>
        <ul className="mt-3 list-inside list-disc space-y-2">
          <li>
            <strong className="text-white">Legitimate interests</strong>: to run our
            business, respond to enquiries and maintain our website. We balance this
            against your rights and only use data in ways you would reasonably expect.
          </li>
          <li>
            <strong className="text-white">Consent</strong>: for non-essential
            cookies (such as the embedded Google Map). You can withdraw consent at
            any time via our cookie settings.
          </li>
          <li>
            <strong className="text-white">Contract</strong>: when processing is
            necessary to provide tattoo or aesthetic services you have asked us about
            or booked.
          </li>
          <li>
            <strong className="text-white">Legal obligation</strong>: where we must
            keep records or comply with applicable law.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Third parties we share data with
        </h2>
        <p className="mt-3">
          We use trusted third-party services to operate our website and communicate
          with clients. These providers may process personal data on our behalf or as
          independent controllers:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-2">
          <li>
            <strong className="text-white">Google</strong>: we load gallery and
            pricing content from a Google Apps Script endpoint, and may display an
            embedded Google Map if you accept cookies. Google&apos;s privacy policy is
            available at{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Cloudflare</strong>: if you accept
            cookies, we use Cloudflare Web Analytics to measure website performance
            and page views. Cloudflare&apos;s privacy policy is available at{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              cloudflare.com/privacypolicy
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Meta (WhatsApp)</strong>: if you click our
            WhatsApp booking links, your conversation is handled by WhatsApp/Meta
            under their own terms and privacy policy.
          </li>
          <li>
            <strong className="text-white">Social media platforms</strong>: links to
            Facebook, Instagram and TikTok are provided for your convenience. We do
            not control how those platforms process your data.
          </li>
          <li>
            <strong className="text-white">GitHub Pages</strong>: our website is
            hosted on GitHub Pages.
          </li>
        </ul>
        <p className="mt-3">
          We do not sell your personal data. We only share information where necessary
          to provide our services, operate our website or comply with the law.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          International transfers
        </h2>
        <p className="mt-3">
          Some of our third-party providers (including Google and Meta) may process
          data outside the UK. Where this happens, we rely on appropriate safeguards
          such as the UK International Data Transfer Agreement or provider
          contractual commitments, as applicable.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          How long we keep your data
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-2">
          <li>
            <strong className="text-white">Enquiry and booking records</strong>: kept
            for as long as needed to manage your appointment and for up to 6 years
            afterwards for business and legal record-keeping purposes.
          </li>
          <li>
            <strong className="text-white">Cookie preferences</strong>: stored in
            your browser until you clear site data or change your choice.
          </li>
          <li>
            <strong className="text-white">Website server logs</strong>: retained by
            our hosting and content providers according to their own retention
            schedules.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Your rights
        </h2>
        <p className="mt-3">Under UK data protection law, you have the right to:</p>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Request access to the personal data we hold about you</li>
          <li>Ask us to correct inaccurate data</li>
          <li>Ask us to delete your data in certain circumstances</li>
          <li>Object to or restrict certain processing</li>
          <li>Request data portability where applicable</li>
          <li>Withdraw consent at any time (where processing is based on consent)</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, email{' '}
          <a
            href={`mailto:${COMPANY.privacyEmail}`}
            className="text-white underline underline-offset-4 hover:opacity-70"
          >
            {COMPANY.privacyEmail}
          </a>
          . We will respond within one month.
        </p>
        <p className="mt-3">
          You also have the right to lodge a complaint with the Information
          Commissioner&apos;s Office (ICO) at{' '}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:opacity-70"
          >
            ico.org.uk/make-a-complaint
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Contact details for enquiries
        </h2>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>
            Tattoo enquiries:{' '}
            <a
              href={`mailto:${CONTACTS.tattoo.email}`}
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              {CONTACTS.tattoo.email}
            </a>
          </li>
          <li>
            Aesthetics enquiries:{' '}
            <a
              href={`mailto:${CONTACTS.aesthetics.email}`}
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              {CONTACTS.aesthetics.email}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase tracking-widest text-white">
          Changes to this policy
        </h2>
        <p className="mt-3">
          We may update this privacy policy from time to time. The latest version
          will always be published on this page. For significant changes, we will
          take reasonable steps to bring them to your attention.
        </p>
      </section>
    </LegalLayout>
  )
}
