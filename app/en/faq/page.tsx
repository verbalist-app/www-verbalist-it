import Link from "next/link"
import type { Metadata } from "next"
import { FaqAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Verbalist. How it works, pricing, AI models, integrations.",
  alternates: {
    canonical: "/en/faq",
  },
  openGraph: {
    title: "FAQ — Verbalist",
    description: "Frequently asked questions about Verbalist. How it works, pricing, AI models, integrations.",
  },
}

const faqs = [
  {
    question: "What is Verbalist?",
    answer: "A tool that analyzes the top 10 Google results for your keyword, finds what makes them rank, and generates content based on those patterns.",
  },
  {
    question: "Which AI models do you use?",
    answer: "Claude by Anthropic, GPT-4 by OpenAI, and Gemini by Google. You can choose which one to use for each project.",
  },
  {
    question: "Is the content unique?",
    answer: "Yes. Each piece of content is generated from scratch based on the SERP analysis of your keyword. No templates or spinning.",
  },
  {
    question: "Can I use my own tone of voice?",
    answer: "Yes. You configure a profile with examples of your style and guidelines. The system generates following those directions.",
  },
  {
    question: "How does SERP analysis work?",
    answer: "It fetches the top 10 organic results, downloads the content from each page, analyzes headings, length, topics and E-E-A-T signals.",
  },
  {
    question: "How much does it cost?",
    answer: "From €49/month for freelancers to custom enterprise plans. 14-day free trial on all plans.",
  },
  {
    question: "Are there integrations?",
    answer: "We're developing APIs and integrations with major CMS platforms. Contact us to learn more.",
  },
  {
    question: "Does it work for GEO too?",
    answer: "Yes. Content is structured to be cited by ChatGPT, Perplexity and Google SGE as well.",
  },
]

export default function FaqPage() {
  return (
    <section className="pt-20 md:pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Support
          </p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Answers to the most common questions.
          </p>
        </div>

        <FaqAccordion faqs={faqs} />

        <div className="mt-12 bg-muted rounded-xl p-8 border border-border text-center">
          <h3 className="text-lg font-medium mb-3">
            Can't find what you're looking for?
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Contact us and we'll get back to you.
          </p>
          <Link
            href="/en/book-demo"
            className="inline-flex items-center gap-2 text-sm bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
