import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Verbalist's personal data processing policy under GDPR. How we protect your data and your rights.",
  alternates: {
    canonical: "/en/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy \\ Verbalist",
    description: "Verbalist's personal data processing policy under GDPR. How we protect your data and your rights.",
  },
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              This privacy notice (hereinafter, &quot;Privacy Policy&quot;) relates to the processing of your personal data (hereinafter, &quot;Personal Data&quot;) carried out by NUR S.r.l., with registered office in San Giorgio Bigarello (MN), Via del Commercio 1/N, VAT number 01902640208, email info@nur.it (hereinafter, &quot;NUR&quot; or the &quot;Data Controller&quot;), in compliance with EU Regulation 2016/679 (hereinafter &quot;GDPR&quot;).
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">1. Identity and contact details of the data controller</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The Data Controller is NUR. As the Data Controller is established in Italian territory, no representative has been appointed.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">2. Contact details of the data protection officer</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The Data Controller has appointed a Data Protection Officer (&quot;DPO&quot;). The DPO can be contacted at the Data Controller&apos;s addresses or at gdpr@nur.it.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">3. Purpose and legal basis of processing</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Your Personal Data will be processed for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>
                <strong>a)</strong> to send you direct marketing communications, newsletters, advertising material, through traditional contact systems and automated computer systems, including commercial or promotional communications by email or SMS, or for market research and analysis. The legal basis for processing is consent, expressed in accordance with this Privacy Policy;
              </li>
              <li>
                <strong>b)</strong> for profiling activities to determine your habits and preferences, to provide you with a personalized service. The legal basis is your consent, expressed in accordance with this Privacy Policy. The communication of Personal Data is not a contractual obligation. You are free to provide Personal Data. If you do not provide such data, NUR will not be able to provide you with a personalized service;
              </li>
              <li>
                <strong>c)</strong> for purposes related to legal obligations. The legal basis is NUR&apos;s legal obligation to process Personal Data according to applicable regulations.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">4. How to express consent</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You can express your consent by signing a digital document through specific checkboxes.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">5. Processing methods and logic</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>In relation to Personal Data processed for marketing purposes (point a) section 3 of this Privacy Policy), processing will be carried out using commercial information delivery software;</li>
              <li>In relation to Personal Data processed for profiling purposes (point b) section 3), processing will be carried out using CRM software that allows defining tastes and preferences to offer you personalized services and communications. For further details, see the next section of this Privacy Policy.</li>
              <li>In relation to Personal Data processed and stored for legal obligation purposes (point c) section 3), processing will be carried out using paper tools, automated logic, and CRM management software to best manage compliance with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">6. Automated decision-making and profiling</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              If you consent to the processing of Personal Data to receive personalized services through profiling, Personal Data may be subject to an automated decision-making process, with a specific algorithm that will decide which communications are most suitable for your profile or which may be of most interest to you. The expected consequences of this processing include, by way of example, the sending of highly profiled commercial communications, invitations to events deemed of interest, etc.
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
            <h3 className="text-sm font-medium text-foreground mb-3">7. Source of Personal Data</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Only Personal Data provided in accordance with this Privacy Policy will be processed. NUR will not process Personal Data from publicly accessible sources.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">8. Recipients and categories of recipients of Personal Data</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Recipients of Personal Data may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>communication companies that carry out commercial communication and profiling activities on behalf of the Data Controller, where the relevant consent has been given, which hold the status of data processors;</li>
              <li>companies that offer information society services, including, in particular, hosting services;</li>
              <li>companies that carry out statistical and market research, where the relevant consent has been given;</li>
              <li>auditing companies;</li>
              <li>partner companies of the Data Controller;</li>
              <li>HubSpot Inc., as a data processor, for the management of contact forms and the collection of data submitted, if applicable, through the HubSpot CRM platform.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">9. Data categories</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Personal Data will be processed. Under no circumstances may special categories of Personal Data defined in Article 9 of the GDPR be processed.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">10. Data transfer</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              NUR intends to transfer Personal Data to entities established in a third country outside the European Union or to an international organization.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Such entities may include, for example:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80 mb-3">
              <li>communication companies that carry out communication activities on behalf of the Data Controller;</li>
              <li>communication service providers;</li>
              <li>controlled and/or controlling organizations.</li>
            </ul>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              The transfer of Personal Data to such entities, where established in a third country or an international organization, is carried out in the presence of an adequacy decision by the European Commission, which has verified that the third country, the territory or one or more specific sectors within that third country, or the international organization in question ensure an adequate level of protection of rights. In any case, NUR, if it deems it appropriate, reserves the right to conclude specific separate agreements obliging such entities to adopt adequate security measures, including organizational measures, to offer appropriate guarantees for your rights. Personal Data may therefore be transferred to the following countries: United States of America. In particular, HubSpot Inc. processes Personal Data collected through the contact forms on the Site in accordance with the Data Processing Agreement signed with NUR and the Standard Contractual Clauses adopted by the European Commission. To obtain a copy of such Personal Data or the place where they have been made available, simply send the relevant request to NUR at gdpr@nur.it.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">11. Data retention period</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>Personal Data processed for marketing purposes (point a) section 3 of this notice) are processed and stored by NUR until you request cancellation and/or revocation, as a Data Subject;</li>
              <li>Individual Personal Data processed for profiling purposes (point b) section 3), as acquired from time to time, are processed and stored by NUR for a period not exceeding 12 (twelve) months from collection;</li>
              <li>Personal Data processed and stored for legal obligation purposes (point c) section 3) are processed and stored by NUR in accordance with applicable regulations, in any case for a period not exceeding 10 (ten) years from the termination of the contract&apos;s effects, unless otherwise required by law.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">12. Optional nature of consent and consequences of non-consent</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>In relation to Personal Data processed for marketing purposes (point a) section 3 of this notice), the communication of Personal Data is not a contractual obligation. You are free to provide Personal Data. If you do not provide such data, NUR will not be able to carry out any marketing activities.</li>
              <li>In relation to Personal Data processed for profiling purposes (point b) section 3 of this notice), the communication of Personal Data is not a contractual obligation. You are free to provide Personal Data. If you do not provide such data, NUR will not be able to carry out any profiling activities.</li>
              <li>In relation to Personal Data processed for legal obligation purposes (point c) section 3 of this notice), the communication of Personal Data is a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">13. Your rights</h3>
            <h4 className="text-sm font-medium text-foreground mb-2">a) Right to object</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              As a Data Subject, you have the right to object under the following terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80 mb-4">
              <li>the right to object at any time, for reasons connected to your particular situation, to the processing of Personal Data concerning you pursuant to Article 6, paragraph 1, letters e) or f) of the GDPR. NUR shall refrain from further processing your Personal Data, unless NUR demonstrates the existence of compelling legitimate grounds for processing that override your interests, rights and freedoms or for the establishment, exercise or defence of legal claims;</li>
              <li>where Personal Data is processed for direct marketing purposes, you have the right to object at any time to the processing of Personal Data concerning you for such purposes, including profiling to the extent that it is connected to direct marketing;</li>
              <li>in the event of objection to processing for direct marketing purposes, Personal Data shall no longer be processed for such purposes. You may object to the processing of your Personal Data for direct marketing purposes even partially, for example by objecting only to the sending of promotional communications through automated and/or digital means, or to the sending of paper communications and/or to receiving telephone communications;</li>
              <li>where your Personal Data is processed for scientific or historical research purposes or for statistical purposes pursuant to Article 89, paragraph 1 of the GDPR, for reasons connected to your particular situation, you have the right to object to the processing of Personal Data, unless the processing is necessary for the performance of a task carried out in the public interest.</li>
            </ul>
            <h4 className="text-sm font-medium text-foreground mb-2">b) Other rights</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              NUR also wishes to inform you of the existence of the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li><strong>Right of access:</strong> you have the right to obtain from NUR confirmation as to whether or not Personal Data concerning you is being processed and to access your Personal Data and specific information, in accordance with Article 15 of the GDPR;</li>
              <li><strong>Right to rectification:</strong> you have the right to obtain from NUR the rectification of inaccurate personal data concerning you without undue delay. Taking into account the purposes of processing, you have the right to have incomplete personal data completed, including by providing a supplementary statement, in accordance with Article 16 of the GDPR;</li>
              <li><strong>Right to erasure, including the right to withdraw consent:</strong> you have the right to obtain from NUR the erasure of your Personal Data without undue delay or to withdraw consent to processing, if the grounds defined in Article 17 of the GDPR apply. You have the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent given prior to withdrawal;</li>
              <li><strong>Right to restriction of processing:</strong> you have the right to obtain from NUR restriction of processing, when the conditions defined in Article 18 of the GDPR apply;</li>
              <li><strong>Right to data portability:</strong> you have the right to receive your Personal Data provided to the Data Controller in a structured, commonly used and machine-readable format, and you have the right to transmit such data to another controller without hindrance from NUR, as provided for in Article 20 of the GDPR;</li>
              <li><strong>Right of the contracting party to object to commercial communications:</strong> as a contracting party, you have the right to object at any time, free of charge, to receiving commercial communications from NUR;</li>
              <li><strong>Right to lodge a complaint with the Supervisory Authority:</strong> you have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali), to report a violation of data protection regulations, in accordance with Article 77 of the GDPR.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">14. How to exercise your rights</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              You can exercise the rights indicated in this Cookie Policy by sending requests directly to NUR at gdpr@nur.it, or by sending the relevant communication by registered letter to Via del Commercio 1/N, San Giorgio Bigarello (MN), Italy.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You may lodge a complaint with the Italian Data Protection Authority according to the procedures provided on the official website, addressing it to the contacts available at <a href="https://www.garanteprivacy.it/home/footer/contatti" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">https://www.garanteprivacy.it/home/footer/contatti</a>.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">15. Accessibility of the Privacy Policy</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The Privacy Policy is available at www.nur.it/privacy-policy or at NUR&apos;s offices. If expressly requested, NUR may provide the information orally, provided that your identity is verified, through a telephone request to 0376 369728.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">16. Modifications</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NUR may modify this Privacy Policy, including to adapt to changes in national and/or European Union regulations, or to technological innovations. Any new versions of the Privacy Policy will be reported on the website www.nur.it (hereinafter, the &quot;Site&quot;). We invite you to periodically check the Privacy Policy. Any modification will be communicated through a pop-up on the Site or other methods and/or digital tools.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mt-3">
              If NUR substantially modifies the Privacy Policy, providing for new processing purposes and/or categories of Personal Data processed, NUR will inform you, requesting the necessary consents, through a pop-up on the Site or other methods and/or digital tools.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
