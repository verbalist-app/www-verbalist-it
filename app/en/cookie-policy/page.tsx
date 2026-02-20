import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Verbalist Cookie Policy: technical, statistical and profiling cookies. How to manage them and your rights.",
  alternates: {
    canonical: "/en/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy \\ Verbalist",
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
          <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground mb-6">
            Cookie Policy
          </h1>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              This notice (hereinafter, &quot;Cookie Policy&quot;) governs the processing of your personal data through the use of cookies, carried out by NUR S.r.l., with registered office in San Giorgio Bigarello (MN), Via del Commercio 1/N, VAT number 01902640208, email gdpr@nur.it (&quot;Data Controller&quot;), in compliance with personal data protection regulations, in particular, EU Regulation 2016/679 (&quot;GDPR&quot;), through the website you are browsing (hereinafter, the &quot;Site&quot;).
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">1. Identity and contact details of the data controller</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              The Data Controller is NUR. NUR is a company established in Italian territory, therefore no representative has been appointed.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The Data Controller has appointed a Data Protection Officer (&quot;DPO&quot;) pursuant to art. 37 GDPR. The DPO can be contacted at: gdpr@nur.it.
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
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              The Site also uses statistical cookies created directly by NUR, or provided by third parties.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              With statistical cookies created directly by NUR, NUR will carry out statistical analysis relating to various domains, websites or apps attributable to NUR itself, proceeding with its own statistical processing, without such analysis being aimed at making commercial decisions.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              With third-party statistical cookies, tools have been adopted to reduce their identification power, for example by masking significant portions of processed IP addresses. In the case of third-party statistical cookies, the third party has contractually committed to NUR to use them exclusively for the provision of the service, to store them separately and not to &quot;enrich&quot; or &quot;cross-reference&quot; them with other information they hold.
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
                    <td className="p-3 border-b border-border">Stores user&apos;s cookie preferences</td>
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
                  <tr>
                    <td className="p-3 border-b border-border">__hstc</td>
                    <td className="p-3 border-b border-border">Profiling</td>
                    <td className="p-3 border-b border-border">HubSpot</td>
                    <td className="p-3 border-b border-border">13 months</td>
                    <td className="p-3 border-b border-border">Main tracking cookie: identifies the visitor, traffic source, session and interactions with the site</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">__hssc</td>
                    <td className="p-3 border-b border-border">Profiling</td>
                    <td className="p-3 border-b border-border">HubSpot</td>
                    <td className="p-3 border-b border-border">30 minutes</td>
                    <td className="p-3 border-b border-border">Tracks the current visitor session and determines whether the __hstc cookie needs to be updated</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">__hssrc</td>
                    <td className="p-3 border-b border-border">Technical</td>
                    <td className="p-3 border-b border-border">HubSpot</td>
                    <td className="p-3 border-b border-border">Session</td>
                    <td className="p-3 border-b border-border">Checks whether the visitor has restarted their browser to determine the start of a new session</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">hubspotutk</td>
                    <td className="p-3 border-b border-border">Profiling</td>
                    <td className="p-3 border-b border-border">HubSpot</td>
                    <td className="p-3 border-b border-border">13 months</td>
                    <td className="p-3 border-b border-border">Uniquely identifies the visitor and links them to the corresponding contact in HubSpot CRM upon form submission</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border">__hs_opt_out</td>
                    <td className="p-3 border-b border-border">Technical</td>
                    <td className="p-3 border-b border-border">HubSpot</td>
                    <td className="p-3 border-b border-border">13 months</td>
                    <td className="p-3 border-b border-border">Stores the opt-out preference expressed by the visitor through the cookie banner</td>
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
              You have the faculty and freedom to provide data by sending email to the addresses indicated on the Site, which NUR may acquire for the purposes indicated from time to time. In addition to the email address necessary to respond to you, any other personal data contained in the relevant communication will be processed. The data thus collected will be stored and processed exclusively to maintain correspondence, without using it for other purposes.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">5. Purpose, legal basis of processing, optional nature of consent and consequences of non-consent</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li><strong>Personal data processed with technical cookies:</strong> The communication of personal data is a contractual obligation, without which the website could not be made available and fully functional in accordance with the terms and conditions of use.</li>
              <li><strong>Personal data processed with profiling cookies:</strong> The communication of personal data is purely optional. If you do not communicate the data, it will be impossible for NUR to provide you with personalized services through profiling. The legal basis of processing is your consent, expressed in compliance with applicable regulations.</li>
              <li><strong>Personal data voluntarily provided via email:</strong> The communication of personal data is purely optional. If you do not communicate the data, NUR will not be able to respond to your requests. The legal basis of processing is the legitimate interest of NUR, as Data Controller, to respond to requests.</li>
            </ul>
            <p className="text-sm text-foreground/80 leading-relaxed mt-3">
              You may express your consent to the processing of personal data with non-technical cookies by clicking on a specific checkbox presented within a banner.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">6. Automated decision-making and profiling</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              If you consent to the processing with profiling cookies to receive personalized services, your personal data may be subject to an automated decision-making process, with a specific algorithm that will decide which communications are most suitable for your profile or which may be of interest to you. The expected consequences of this processing are the sending of highly profiled commercial communications, discounts, and invitations to events deemed of interest.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              In accordance with Article 22 GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>obtain human intervention in the decision-making process by NUR;</li>
              <li>express your opinion;</li>
              <li>obtain an explanation of the decision reached by NUR;</li>
              <li>challenge the decision itself.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">7. Source of personal data and data categories</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NUR will only process personal data provided by you in accordance with the Cookie Policy, collected through the Site or by you sending an email. NUR will not process data from publicly accessible sources. NUR will not process the special categories of personal data referred to in Article 9 of the GDPR.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">8. Recipients and possible categories of recipients of personal data</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Your personal data may be received by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>companies offering hosting services;</li>
              <li>communication companies that carry out commercial communication and profiling activities on behalf of the Data Controller, which hold the status of data processors.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">9. Data transfer</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              NUR intends to transfer your personal data to entities established in a third country outside the European Union or to an international organization. Such entities may include, by way of example:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80 mb-3">
              <li>communication companies that carry out communication activities on behalf of NUR;</li>
              <li>companies offering information society services;</li>
              <li>companies offering hosting services;</li>
              <li>communication service providers.</li>
            </ul>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              The transfer of personal data to such entities, where established in a third country, or to an international organization, is carried out in the presence of an adequacy decision by the European Commission, which has verified that the third country, the territory or one or more specific sectors within that third country, or the international organization in question ensure an adequate level of protection of your rights. In the absence of such decisions, if deemed appropriate, NUR reserves the right to conclude specific and separate agreements obliging such entities to adopt adequate security measures, including organizational measures, to offer appropriate guarantees regarding your rights.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Google Inc., in particular, has contractually committed to ensuring adequate protection of the data subject&apos;s rights. Data may therefore be transferred to the following countries: United States of America.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mt-3">
              To obtain a copy of such data or the place where it has been made available, simply send the relevant request to: gdpr@nur.it.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">10. Data retention period</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>NUR will retain your personal data processed with technical cookies to allow you correct use of the Site for a period not exceeding 12 (twelve) months from the date of individual collection, in accordance with section 2.1 of the Cookie Policy;</li>
              <li>NUR will retain your personal data processed to provide personalized services through non-technical cookies and profiling cookies for a period not exceeding 12 (twelve) months from the date of individual collection, in accordance with section 2.2 of the Cookie Policy;</li>
              <li>NUR will retain your personal data voluntarily provided and processed to respond to your requests for the time strictly necessary to achieve this purpose and, in any case, not exceeding 12 (twelve) months from the date of individual collection.</li>
            </ul>
            <p className="text-sm text-foreground/80 leading-relaxed mt-3">
              NUR reserves the right, in any case, to request you to renew your consent to processing and/or to verify the consents you have already expressed.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">11. Your rights</h3>
            <h4 className="text-sm font-medium text-foreground mb-2">11.1 Right to object</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              As a &quot;data subject&quot;, you have the right to object, at any time, for reasons connected to your particular situation, to the processing of personal data concerning you, pursuant to Article 6, paragraph 1, letters e) or f) of the GDPR, including profiling based on those provisions.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              NUR shall refrain from further processing your personal data, unless NUR demonstrates the existence of compelling legitimate grounds for processing that override your interests, rights and freedoms or for the establishment, exercise or defence of legal claims.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Where personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such purposes, including profiling to the extent that it is connected to such direct marketing.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              In case of objection to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              You may object to the processing of your personal data for direct marketing purposes even partially, for example by objecting only to the sending of promotional communications through automated and/or digital means, or to the sending of paper communications and/or to receiving telephone communications.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              Where your personal data is processed for scientific or historical research purposes or for statistical purposes pursuant to Article 89, paragraph 1 of the GDPR, you have the right, for reasons connected to your particular situation, to object to the processing of personal data concerning you, unless the processing is necessary for the performance of a task carried out in the public interest.
            </p>

            <h4 className="text-sm font-medium text-foreground mb-2">11.2 Other rights</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              NUR also wishes to inform you of the existence of the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li><strong>Right of access:</strong> you have the right to obtain from NUR confirmation as to whether or not personal data concerning you is being processed. If so, you have the right to access your personal data and specific information, in accordance with Article 15 of the GDPR;</li>
              <li><strong>Right to rectification:</strong> you have the right to obtain from NUR the rectification of inaccurate personal data concerning you without undue delay. Taking into account the purposes of processing, you have the right to have incomplete personal data completed, including by providing a supplementary statement, in accordance with Article 16 of the GDPR;</li>
              <li><strong>Right to erasure:</strong> you have the right to obtain from NUR the erasure of personal data concerning you without undue delay. NUR is obliged to erase personal data without undue delay if the grounds listed in Article 17 of the GDPR apply;</li>
              <li><strong>Right to restriction of processing:</strong> you have the right to obtain from NUR restriction of processing if the grounds listed in Article 18 of the GDPR apply;</li>
              <li><strong>Right to data portability:</strong> you have the right to receive the personal data concerning you provided to NUR in a structured, commonly used and machine-readable format, as well as the right to transmit such data to another controller without hindrance from NUR, in the cases and under the conditions specified in Article 20 of the GDPR;</li>
              <li><strong>Right to object to commercial communications:</strong> you have the right to object at any time, free of charge, to receiving commercial communications from NUR;</li>
              <li><strong>Right to lodge a complaint with the Supervisory Authority:</strong> you have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali), to report a violation of data protection regulations, in accordance with Article 77 of the GDPR.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">12. How to exercise your rights</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              You can exercise the rights indicated in this Cookie Policy by sending requests directly to NUR at gdpr@nur.it, or by sending the relevant communication by registered letter to Via del Commercio 1/N, San Giorgio Bigarello (MN), Italy.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You may lodge a complaint with the Italian Data Protection Authority according to the procedures provided on the official website, addressing it to the contacts available at <a href="https://www.garanteprivacy.it/home/footer/contatti" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">https://www.garanteprivacy.it/home/footer/contatti</a>.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">13. Accessibility</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              This Cookie Policy is accessible at https://www.nur.it/cookie-policy and at NUR&apos;s offices. If you expressly request it, NUR may provide you with the information orally, provided that your identity is verified, through a telephone request addressed to the Data Controller.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">14. Modifications</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NUR may modify the Cookie Policy, including to adapt to national and/or European Union regulations or to technological innovations. Any new versions of the Cookie Policy will be reported on the Site. We invite you to periodically check the Cookie Policy. Any modification will be communicated through a pop-up on the Site or other methods and/or digital tools. If NUR substantially modifies the Cookie Policy, providing for new processing purposes and/or categories of personal data processed or changing third parties, NUR will inform you, requesting the necessary consents, through a specific banner. If it is impossible for NUR to verify the storage of cookies on your device, for example in the event of deletion of installed cookies, NUR will inform you, requesting the necessary consents, through a specific banner. If at least 6 (six) months have passed since the previous presentation of the banner on the Site, NUR will inform you, requesting the necessary consents, through a specific banner.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
