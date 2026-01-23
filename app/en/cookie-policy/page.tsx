import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Verbalist Cookie Policy: technical, statistical and profiling cookies. How to manage them and your rights.",
  alternates: {
    canonical: "/en/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy — Verbalist",
    description: "Verbalist Cookie Policy: technical, statistical and profiling cookies. How to manage them and your rights.",
  },
}

export default function CookiePolicyPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <Link
            href="/en"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6">
            Cookie Policy
          </h1>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              This notice (hereinafter, "Cookie Policy") governs the processing of your personal data through the use of cookies, carried out by NUR S.r.l., with registered office in San Giorgio Bigarello (MN), Via del Commercio 1/N, VAT number 01902640208, email gdpr@nur.it ("Data Controller"), in compliance with personal data protection regulations, in particular, EU Regulation 2016/679 ("GDPR"), through the website you are browsing (hereinafter, the "Site").
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">1. Identity and contact details of the data controller</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              The Data Controller is NUR. NUR is a company established in Italian territory, therefore no representative has been appointed.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The Data Controller has appointed a Data Protection Officer ("DPO") pursuant to art. 37 GDPR. The DPO can be contacted at: gdpr@nur.it.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">2. Processing methods</h3>
            <h4 className="text-sm font-medium text-foreground mb-2">Cookies</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Cookies are small text strings that the Site you visit sends to your browser, which stores them to retransmit them to the Site when you visit again.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Cookies allow the collection of information about browsing activity.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Cookies can be stored permanently on your computer and have a variable duration (persistent cookies), or they may not be stored persistently on your device and be automatically deleted when the browser is closed (session cookies).
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              Cookies can be installed by the site you are visiting or they can be installed by other websites that provide various services to that site (third-party cookies).
            </p>

            <h4 className="text-sm font-medium text-foreground mb-2">2.1 Technical cookies</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              <strong>Technical cookies</strong>
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Cookies in this category allow the Site to function correctly.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              <strong>Statistical cookies</strong>
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              The Site also uses statistical cookies created directly by NUR, or provided by third parties. For third-party statistical cookies, tools have been adopted to reduce their identification power, for example by masking significant portions of processed IP addresses.
            </p>

            <h4 className="text-sm font-medium text-foreground mb-2">Navigation data and environmental variables</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              The Site automatically acquires some personal data related to your browsing. This category of data includes, for example:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80 mb-4">
              <li>IP addresses of the computer you use;</li>
              <li>number of accesses;</li>
              <li>pages used;</li>
              <li>date and time of access;</li>
              <li>the URL where the browser was before viewing the Site;</li>
              <li>type of browser;</li>
              <li>operating system used.</li>
            </ul>

            <h4 className="text-sm font-medium text-foreground mb-2">2.2 Profiling cookies</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              Profiling cookies are non-technical cookies that allow NUR to provide you with personalized services based on your needs.
            </p>

            <h4 className="text-sm font-medium text-foreground mb-2">2.3 List of cookies used</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Below is the list of cookies used on the Site:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 border-b border-border font-medium">Cookie</th>
                    <th className="text-left p-3 border-b border-border font-medium">Type</th>
                    <th className="text-left p-3 border-b border-border font-medium">Provider</th>
                    <th className="text-left p-3 border-b border-border font-medium">Duration</th>
                    <th className="text-left p-3 border-b border-border font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-foreground/80">
                  <tr>
                    <td className="p-3 border-b border-border">cookieConsent</td>
                    <td className="p-3 border-b border-border">Technical</td>
                    <td className="p-3 border-b border-border">Verbalist</td>
                    <td className="p-3 border-b border-border">12 months</td>
                    <td className="p-3 border-b border-border">Stores user's cookie preferences</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">_ga</td>
                    <td className="p-3 border-b border-border">Analytics</td>
                    <td className="p-3 border-b border-border">Google Analytics</td>
                    <td className="p-3 border-b border-border">2 years</td>
                    <td className="p-3 border-b border-border">Used to distinguish users</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">_ga_*</td>
                    <td className="p-3 border-b border-border">Analytics</td>
                    <td className="p-3 border-b border-border">Google Analytics</td>
                    <td className="p-3 border-b border-border">2 years</td>
                    <td className="p-3 border-b border-border">Used to maintain session state</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">_cs_*</td>
                    <td className="p-3 border-b border-border">Analytics</td>
                    <td className="p-3 border-b border-border">Contentsquare</td>
                    <td className="p-3 border-b border-border">13 months</td>
                    <td className="p-3 border-b border-border">User behavior analysis and UX optimization</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">
              <strong>Note:</strong> Vercel Analytics and Speed Insights are privacy-friendly services that do not use cookies and do not require consent as they do not track personally identifiable data.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">3. Deleting and disabling cookies</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              You can configure your browser to prevent cookie processing, or delete them immediately after browsing. Below we list the methods for disabling and deleting cookies with the main browsers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>
                <strong>Delete/disable cookies with Firefox:</strong> <a href="http://support.mozilla.com/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Mozilla Support</a>
              </li>
              <li>
                <strong>Delete/disable cookies with Edge:</strong> <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Microsoft Support</a>
              </li>
              <li>
                <strong>Delete/disable cookies with Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Google Support</a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">4. Data you voluntarily provide</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You have the faculty and freedom to provide data by sending email to the addresses indicated on the Site, which NUR may acquire for the purposes indicated from time to time. In addition to the email address necessary to respond to you, any other personal data contained in the relevant communication will be processed.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">5. Purpose, legal basis, and consequences of non-consent</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li><strong>Personal data processed with technical cookies:</strong> Communication of personal data is a contractual obligation, without which the website could not be made available properly functioning.</li>
              <li><strong>Personal data processed with profiling cookies:</strong> Communication of personal data is purely optional. If you do not communicate the data, it will be impossible for NUR to provide you with personalized services through profiling.</li>
              <li><strong>Personal data voluntarily provided via email:</strong> Communication of personal data is purely optional. If you do not communicate the data, NUR will not be able to respond to your requests.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">6. Your rights</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              As a "data subject", you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li><strong>Right of access:</strong> you have the right to obtain confirmation of whether or not personal data concerning you is being processed;</li>
              <li><strong>Right to rectification:</strong> you have the right to obtain rectification of inaccurate personal data;</li>
              <li><strong>Right to erasure:</strong> you have the right to obtain erasure of personal data;</li>
              <li><strong>Right to restriction of processing:</strong> you have the right to obtain restriction of processing;</li>
              <li><strong>Right to data portability:</strong> you have the right to receive personal data in a structured, commonly used, machine-readable format;</li>
              <li><strong>Right to object:</strong> you have the right to object at any time to the processing of personal data;</li>
              <li><strong>Right to lodge a complaint:</strong> you have the right to lodge a complaint with the Data Protection Authority.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">7. How to exercise your rights</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You can exercise the rights indicated by sending requests directly to NUR at gdpr@nur.it, or by sending the relevant communication by registered letter to Via del Commercio 1/N, San Giorgio Bigarello (MN), Italy.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">8. Modifications</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NUR may modify the Cookie Policy, including to adapt to national and/or European Union regulations or to technological innovations. Any new versions of the Cookie Policy will be reported on the Site. We invite you to periodically check the Cookie Policy.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
