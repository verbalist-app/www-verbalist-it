import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Verbalist's personal data processing policy under GDPR. How we protect your data and your rights.",
  alternates: {
    canonical: "/en/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Verbalist",
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
              This privacy notice (hereinafter, "Privacy Policy") relates to the processing of your personal data (hereinafter, "Personal Data") carried out by NUR S.r.l., with registered office in San Giorgio Bigarello (MN), Via del Commercio 1/N, VAT number 01902640208, email info@nur.it (hereinafter, "NUR" or the "Data Controller"), in compliance with EU Regulation 2016/679 (hereinafter "GDPR").
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
              The Data Controller has appointed a Data Protection Officer ("DPO"). The DPO can be contacted at the Data Controller's addresses or at gdpr@nur.it.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">3. Purpose and legal basis of processing</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Your Personal Data will be processed for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>
                <strong>a)</strong> to send you direct marketing communications, newsletters, advertising material, through traditional contact systems and automated computer systems, including commercial or promotional communications by email or SMS, or for market research and analysis. The legal basis for processing is consent;
              </li>
              <li>
                <strong>b)</strong> for profiling activities to determine your habits and preferences, to provide you with a personalized service. The legal basis is your consent;
              </li>
              <li>
                <strong>c)</strong> for purposes related to legal obligations. The legal basis is NUR's legal obligation to process Personal Data according to applicable regulations.
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
              <li>For Personal Data processed for marketing purposes (point a) number 3), processing will be carried out using commercial information delivery software;</li>
              <li>For Personal Data processed for profiling purposes (point b) number 3), processing will be carried out using CRM software that allows defining tastes and preferences to offer you personalized services and communications;</li>
              <li>For Personal Data processed for legal obligations (point c) number 3), processing will be carried out using paper tools, automated logic, and CRM management software.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">6. Automated decision-making and profiling</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              If you consent to the processing of Personal Data to receive personalized services through profiling, Personal Data may be subject to an automated decision-making process, with a specific algorithm that will decide which communications are most suitable for your profile or which may be of most interest to you.
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
              Only Personal Data provided in accordance with the Privacy Policy will be processed. NUR will not process Personal Data from publicly accessible sources.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">8. Recipients of Personal Data</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Recipients of Personal Data may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>communication companies that carry out commercial communication and profiling activities on behalf of the Data Controller;</li>
              <li>companies that offer information society services, including hosting services;</li>
              <li>companies that carry out statistical and market research;</li>
              <li>auditing companies;</li>
              <li>partner companies of the Data Controller.</li>
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
              NUR intends to transfer Personal Data to entities established in a third country outside the European Union or to an international organization. Such transfers are made in the presence of an adequacy decision by the European Commission, which has verified that the third country guarantees an adequate level of protection.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Personal Data may be transferred to the following countries: United States of America. To obtain a copy of such Personal Data or the place where they have been made available, simply send the relevant request to NUR at gdpr@nur.it.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">11. Data retention period</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li>Personal Data processed for marketing purposes are processed and stored by NUR until you request cancellation and/or revocation;</li>
              <li>Personal Data processed for profiling purposes are processed and stored for a period not exceeding 12 months from collection;</li>
              <li>Personal Data processed for legal obligations are processed and stored for a period not exceeding 10 years from the termination of the contract.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">12. Your rights</h3>
            <h4 className="text-sm font-medium text-foreground mb-2">a) Right to object</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              As a Data Subject, you have the right to object at any time to the processing of Personal Data concerning you. If Personal Data is processed for direct marketing purposes, you have the right to object at any time, including profiling to the extent it is connected to such direct marketing.
            </p>
            <h4 className="text-sm font-medium text-foreground mb-2">b) Other rights</h4>
            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/80">
              <li><strong>Right of access:</strong> you have the right to obtain confirmation of whether or not Personal Data concerning you is being processed;</li>
              <li><strong>Right to rectification:</strong> you have the right to obtain rectification of inaccurate Personal Data;</li>
              <li><strong>Right to erasure:</strong> you have the right to obtain erasure of your Personal Data or to withdraw consent;</li>
              <li><strong>Right to restriction of processing:</strong> you have the right to obtain restriction of processing;</li>
              <li><strong>Right to data portability:</strong> you have the right to receive Personal Data in a structured, commonly used, machine-readable format;</li>
              <li><strong>Right to lodge a complaint:</strong> you have the right to lodge a complaint with the Data Protection Authority.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">13. How to exercise your rights</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              You can exercise the rights indicated by sending requests directly to NUR at gdpr@nur.it, or by sending the relevant communication by registered letter to Via del Commercio 1/N, San Giorgio Bigarello (MN), Italy.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-medium text-foreground mb-3">14. Modifications</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NUR may modify the Privacy Policy, including to adapt to changes in national and/or European Union regulations, or to technological innovations. Any new versions of the Privacy Policy will be reported on the website. We invite you to periodically check the Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
