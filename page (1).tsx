import type { Metadata } from "next";
import AnimatedSection from "./_components/animated-section";
import ScrollToTop from "./_components/scroll-to-top";

/* ───────────────────────────────────────────────
   Empire 325 Marketing — Privacy Policy Page
   Route: /privacy
   Stack: Next.js App Router · TypeScript · Tailwind v4
   ─────────────────────────────────────────────── */

// ━━━ SEO Metadata ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const metadata: Metadata = {
  title: "Privacy Policy | Empire 325 Marketing",
  description:
    "Learn how Empire 325 Marketing collects, uses, and protects your personal information. Read our full privacy policy.",
  openGraph: {
    title: "Privacy Policy | Empire 325 Marketing",
    description: "How we collect, use, and protect your data.",
    url: "https://empire325marketing.com/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://empire325marketing.com/privacy",
  },
};

// ━━━ Constants ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const LAST_UPDATED = "February 21, 2026";
const COMPANY = "Empire 325 Marketing";
const WEBSITE = "empire325marketing.com";
const CONTACT_EMAIL = "privacy@empire325marketing.com";
const CONTACT_PHONE = "+1 (631) 640-6769";
const ADDRESS = "Long Island, New York, United States";

// ━━━ Reusable class strings ━━━━━━━━━━━━━━━━━━━
const sectionH2 =
  "text-2xl font-normal text-[#0dc2cc] mb-5 pb-3.5 border-b-2 border-[#E8FAFB]";

const sectionH3 =
  "text-base font-semibold text-[#1A1D23] mt-7 mb-3 pl-3.5 border-l-[3px] border-[#0dc2cc]";

const sectionP =
  "text-[15px] text-[#4A5568] leading-[1.75] mb-4";

const sectionUl =
  "list-none my-3 mb-5 space-y-0";

const sectionLi =
  "relative pl-6 py-2 text-[15px] text-[#4A5568] leading-[1.7] before:content-[''] before:absolute before:left-1 before:top-[18px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#A3F0E8]";

const liStrong = "text-[#1A1D23] font-semibold";

const policyLink =
  "text-[#0a9a9f] no-underline font-medium border-b border-transparent transition-all duration-300 hover:border-[#0a9a9f] hover:text-[#078084]";

// ━━━ TOC Data ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const tocItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "sharing", label: "4. How We Share Your Information" },
  { id: "ai-data", label: "5. AI-Generated Content & Data Practices" },
  { id: "entity-marketplace", label: "6. Entity Marketplace Privacy" },
  { id: "data-security", label: "7. Data Security" },
  { id: "data-retention", label: "8. Data Retention" },
  { id: "your-rights", label: "9. Your Rights & Choices" },
  { id: "third-party", label: "10. Third-Party Services & Links" },
  { id: "children", label: "11. Children\u2019s Privacy" },
  { id: "changes", label: "12. Changes to This Privacy Policy" },
  { id: "contact", label: "13. Contact Us" },
];

// ━━━ Page Component ━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen bg-[#FAFBFC] text-[#1A1D23] leading-[1.7] antialiased"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* ══════════════ Hero ══════════════ */}
      <header className="bg-gradient-to-br from-[#0a9ea6] via-[#0dc2cc] to-[#44edd2] px-6 pt-20 pb-16 relative overflow-hidden">
        <div className="max-w-[820px] mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.14] border border-white/20 rounded-full text-[13px] font-medium text-white/90 tracking-wide mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44edd2] shadow-[0_0_8px_rgba(68,237,210,0.6)]" />
            Legal Document
          </div>

          {/* Title */}
          <h1 className="text-[clamp(36px,5vw,52px)] font-normal text-white leading-[1.15] mb-4">
            Privacy Policy
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] text-white/85 font-normal leading-relaxed max-w-[560px]">
            Your privacy is important to us. This policy explains how{" "}
            {COMPANY} collects, uses, and protects your personal information
            across our website, AI blog platform, and Entity Marketplace.
          </p>

          {/* Meta */}
          <div className="flex gap-6 mt-7 flex-wrap">
            <span className="flex items-center gap-2 text-sm text-white/75">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Last updated: {LAST_UPDATED}
            </span>
            <span className="flex items-center gap-2 text-sm text-white/75">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {ADDRESS}
            </span>
          </div>
        </div>
      </header>

      {/* ══════════════ Layout ══════════════ */}
      <main className="max-w-[1140px] mx-auto px-5 py-8 pb-18 lg:px-6 lg:py-12 lg:pb-24 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">

        {/* ── Sidebar TOC ── */}
        <aside className="lg:sticky lg:top-8">
          <nav
            className={`
              bg-white border border-gray-200 rounded-2xl p-6
              shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.03)]
              transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              hover:-translate-y-1 hover:border-[rgba(13,194,204,0.25)]
              hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_10px_24px_rgba(0,0,0,0.07),0_20px_40px_rgba(0,0,0,0.04)]
            `}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#718096] mb-4 pb-3 border-b border-[#EDF2F7]">
              On This Page
            </p>
            <ul className="list-none flex flex-col gap-0.5">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-[7px] text-[13px] text-[#4A5568] rounded-md leading-snug transition-all duration-300 hover:bg-[#E8FAFB] hover:text-[#0dc2cc] hover:font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Content ── */}
        <div className="min-w-0">

          {/* ─── 1. Introduction ─── */}
          <AnimatedSection id="introduction">
            <h2 className={sectionH2}>1. Introduction</h2>
            <p className={sectionP}>
              Welcome to {COMPANY} (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website{" "}
              <a href={`https://${WEBSITE}`} className={policyLink}>
                {WEBSITE}
              </a>
              , use our services, or interact with us in any way.
            </p>
            <p className={sectionP}>
              This policy applies to all information collected through our website,
              our AI-powered blog creation platform, our Entity Marketplace, and any
              related services, sales, marketing, or events (collectively, the
              &ldquo;Services&rdquo;).
            </p>
            <p className={sectionP}>
              By accessing or using our Services, you acknowledge that you have
              read, understood, and agree to be bound by this Privacy Policy. If you
              do not agree with the terms of this policy, please do not access or
              use our Services.
            </p>
          </AnimatedSection>

          {/* ─── 2. Information We Collect ─── */}
          <AnimatedSection id="information-we-collect">
            <h2 className={sectionH2}>2. Information We Collect</h2>

            <h3 className={sectionH3}>2.1 Personal Information You Provide</h3>
            <p className={sectionP}>
              We collect personal information that you voluntarily provide to us
              when you register for our Services, express interest in obtaining
              information about us or our products, participate in activities on our
              website, or otherwise contact us. The personal information we collect
              may include:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Account Information:</strong> Name, email address, phone number, mailing address, business name, and professional title.</li>
              <li className={sectionLi}><strong className={liStrong}>Billing Information:</strong> Payment card details, billing address, and transaction history. Payment processing is handled by secure third-party processors; we do not store full credit card numbers on our servers.</li>
              <li className={sectionLi}><strong className={liStrong}>Profile Information:</strong> Username, password, preferences, and any content you provide for your account profile.</li>
              <li className={sectionLi}><strong className={liStrong}>Business Information:</strong> Law firm name, practice areas, jurisdictions served, bar numbers (for Entity Marketplace authors), and professional credentials.</li>
              <li className={sectionLi}><strong className={liStrong}>Communications:</strong> Records of correspondence when you contact us, including emails, chat messages, and phone call logs.</li>
              <li className={sectionLi}><strong className={liStrong}>Content Data:</strong> Blog content, author bios, professional headshots, and any other materials you upload or submit through our platform.</li>
            </ul>

            <h3 className={sectionH3}>2.2 Information Collected Automatically</h3>
            <p className={sectionP}>
              When you access our website or use our Services, we automatically
              collect certain information, including:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Device &amp; Browser Data:</strong> IP address, browser type and version, operating system, device identifiers, and screen resolution.</li>
              <li className={sectionLi}><strong className={liStrong}>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referring URLs, and navigation paths through our website.</li>
              <li className={sectionLi}><strong className={liStrong}>Location Data:</strong> Approximate geographic location based on your IP address.</li>
              <li className={sectionLi}><strong className={liStrong}>Performance Data:</strong> Page load times, errors encountered, and other diagnostic data.</li>
            </ul>

            <h3 className={sectionH3}>2.3 Cookies &amp; Tracking Technologies</h3>
            <p className={sectionP}>
              We use cookies, web beacons, pixels, and similar tracking technologies
              to collect information about your browsing activities. This includes:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Essential Cookies:</strong> Required for the website to function properly, including session management and security features.</li>
              <li className={sectionLi}><strong className={liStrong}>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage statistics.</li>
              <li className={sectionLi}><strong className={liStrong}>Advertising Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns across platforms including Google Ads and Meta (Facebook &amp; Instagram).</li>
              <li className={sectionLi}><strong className={liStrong}>Preference Cookies:</strong> Remember your settings and preferences to enhance your experience on return visits.</li>
            </ul>
            <p className={sectionP}>
              You can manage your cookie preferences through your browser settings.
              Please note that disabling certain cookies may affect the
              functionality of our Services.
            </p>
          </AnimatedSection>

          {/* ─── 3. How We Use Your Information ─── */}
          <AnimatedSection id="how-we-use">
            <h2 className={sectionH2}>3. How We Use Your Information</h2>
            <p className={sectionP}>
              We use the information we collect for the following purposes:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Service Delivery:</strong> To provide, maintain, and improve our AI-powered blog creation platform, Entity Marketplace, SEO services, and other digital marketing services.</li>
              <li className={sectionLi}><strong className={liStrong}>Account Management:</strong> To create and manage your account, process transactions, and send related communications including confirmations, invoices, and technical notices.</li>
              <li className={sectionLi}><strong className={liStrong}>Content Generation:</strong> To power our AI blog engine, including tailoring content to your practice areas, jurisdictions, and target audience preferences.</li>
              <li className={sectionLi}><strong className={liStrong}>Entity Marketplace Operations:</strong> To verify author credentials, maintain author profiles, facilitate the licensing of author entities, and ensure compliance with applicable professional conduct rules.</li>
              <li className={sectionLi}><strong className={liStrong}>SEO &amp; Performance Optimization:</strong> To analyze content performance, track search engine rankings, generate analytics reports, and optimize content strategies.</li>
              <li className={sectionLi}><strong className={liStrong}>Communications:</strong> To respond to your inquiries, provide customer support, send service updates, and deliver marketing communications (with your consent where required).</li>
              <li className={sectionLi}><strong className={liStrong}>Personalization:</strong> To tailor our Services and content recommendations to your interests and preferences.</li>
              <li className={sectionLi}><strong className={liStrong}>Security &amp; Fraud Prevention:</strong> To detect, prevent, and respond to security incidents, fraud, and abuse.</li>
              <li className={sectionLi}><strong className={liStrong}>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
              <li className={sectionLi}><strong className={liStrong}>Analytics &amp; Improvement:</strong> To analyze usage trends, measure the effectiveness of our Services, and develop new features and products.</li>
            </ul>
          </AnimatedSection>

          {/* ─── 4. How We Share Your Information ─── */}
          <AnimatedSection id="sharing">
            <h2 className={sectionH2}>4. How We Share Your Information</h2>
            <p className={sectionP}>
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Service Providers:</strong> We engage trusted third-party vendors who perform services on our behalf, including payment processing, data hosting, email delivery, analytics, customer support, and advertising. These providers are contractually obligated to protect your information and may only use it as directed by us.</li>
              <li className={sectionLi}><strong className={liStrong}>Entity Marketplace Participants:</strong> If you are an author in our Entity Marketplace, certain profile information (name, bio, credentials, headshot) will be made available to customers who license your author entity for their content. This information is necessary for the marketplace to function and is governed by the terms of your Author Agreement.</li>
              <li className={sectionLi}><strong className={liStrong}>Advertising Partners:</strong> We work with advertising platforms including Google and Meta to deliver targeted advertisements. These partners may receive anonymized or aggregated data; we do not share personally identifiable information for third-party advertising purposes without your consent.</li>
              <li className={sectionLi}><strong className={liStrong}>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change and your options regarding your information.</li>
              <li className={sectionLi}><strong className={liStrong}>Legal Requirements:</strong> We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
              <li className={sectionLi}><strong className={liStrong}>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.</li>
            </ul>
          </AnimatedSection>

          {/* ─── 5. AI-Generated Content & Data Practices ─── */}
          <AnimatedSection id="ai-data">
            <h2 className={sectionH2}>5. AI-Generated Content &amp; Data Practices</h2>
            <p className={sectionP}>
              Our platform uses artificial intelligence to generate blog content
              for businesses in the civil law niche. The following data practices
              apply specifically to our AI services:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Input Data:</strong> Information you provide about your practice areas, target audience, jurisdiction, and content preferences is used to generate customized content. This data is processed by our AI systems and may be retained to improve content quality over time.</li>
              <li className={sectionLi}><strong className={liStrong}>Generated Content Ownership:</strong> Blog content generated through our platform is owned by you upon publication, subject to the terms of your subscription agreement and any applicable author licensing terms from the Entity Marketplace.</li>
              <li className={sectionLi}><strong className={liStrong}>AI Model Training:</strong> We may use aggregated, anonymized data derived from platform usage to improve our AI models. We do not use your specific content, client information, or confidential business data to train our models without your explicit consent.</li>
              <li className={sectionLi}><strong className={liStrong}>Third-Party AI Services:</strong> Our platform may utilize third-party AI providers to assist in content generation. Data shared with these providers is governed by our data processing agreements with them and is subject to the same protections described in this policy.</li>
              <li className={sectionLi}><strong className={liStrong}>Human Review:</strong> Content generated by our AI may be reviewed by human editors for quality assurance. These editors are bound by confidentiality obligations.</li>
            </ul>
          </AnimatedSection>

          {/* ─── 6. Entity Marketplace Privacy ─── */}
          <AnimatedSection id="entity-marketplace">
            <h2 className={sectionH2}>6. Entity Marketplace Privacy</h2>
            <p className={sectionP}>
              The Entity Marketplace involves the collection and display of author
              information. This section addresses privacy practices specific to
              marketplace participants.
            </p>

            <h3 className={sectionH3}>6.1 For Authors</h3>
            <ul className={sectionUl}>
              <li className={sectionLi}>When you register as an author entity, you consent to the public display of your professional name, biography, credentials, headshot, and relevant professional information.</li>
              <li className={sectionLi}>Credential verification may require submission of bar numbers, educational records, or professional certifications. Verification data is stored securely and is not publicly displayed beyond confirmed credential status.</li>
              <li className={sectionLi}>Your author profile may appear on client websites as a byline and author page. You will have the ability to review and approve your profile information before it is made available.</li>
              <li className={sectionLi}>You may request removal of your author entity from the marketplace at any time, subject to the terms of any active licensing agreements.</li>
            </ul>

            <h3 className={sectionH3}>6.2 For Customers</h3>
            <ul className={sectionUl}>
              <li className={sectionLi}>When you license an author entity, you receive access to the author&rsquo;s approved public profile information for use on your published content.</li>
              <li className={sectionLi}>You may not use author information for any purpose other than content attribution as described in your licensing agreement.</li>
              <li className={sectionLi}>Author contact information is never shared with customers; communications with authors are facilitated through our platform.</li>
            </ul>
          </AnimatedSection>

          {/* ─── 7. Data Security ─── */}
          <AnimatedSection id="data-security">
            <h2 className={sectionH2}>7. Data Security</h2>
            <p className={sectionP}>
              We implement industry-standard technical, administrative, and physical
              security measures to protect your personal information, including:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}>Encryption of data in transit (TLS/SSL) and at rest (AES-256).</li>
              <li className={sectionLi}>Access controls and authentication measures to limit data access to authorized personnel.</li>
              <li className={sectionLi}>Regular security audits and vulnerability assessments.</li>
              <li className={sectionLi}>Secure data hosting with reputable cloud infrastructure providers.</li>
              <li className={sectionLi}>Employee training on data protection and privacy best practices.</li>
              <li className={sectionLi}>Incident response procedures to promptly address any security breaches.</li>
            </ul>
            <p className={sectionP}>
              While we strive to protect your information, no method of
              transmission over the Internet or electronic storage is 100% secure.
              We cannot guarantee absolute security but are committed to promptly
              addressing any breaches in accordance with applicable laws.
            </p>
          </AnimatedSection>

          {/* ─── 8. Data Retention ─── */}
          <AnimatedSection id="data-retention">
            <h2 className={sectionH2}>8. Data Retention</h2>
            <p className={sectionP}>
              We retain your personal information for as long as necessary to
              fulfill the purposes for which it was collected, including to satisfy
              legal, accounting, or reporting requirements. Specific retention
              periods include:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Account Data:</strong> Retained for the duration of your account and for up to 30 days after account closure, unless longer retention is required by law.</li>
              <li className={sectionLi}><strong className={liStrong}>Billing Records:</strong> Retained for a minimum of 7 years as required for tax and financial reporting purposes.</li>
              <li className={sectionLi}><strong className={liStrong}>Generated Content:</strong> Retained on our platform for the duration of your subscription. Upon cancellation, content data is retained for 90 days to allow for data export, after which it is permanently deleted.</li>
              <li className={sectionLi}><strong className={liStrong}>Analytics Data:</strong> Aggregated analytics data may be retained indefinitely in anonymized form.</li>
              <li className={sectionLi}><strong className={liStrong}>Marketing Communications:</strong> Consent records and opt-out preferences are retained for as long as necessary to honor your preferences.</li>
            </ul>
          </AnimatedSection>

          {/* ─── 9. Your Rights & Choices ─── */}
          <AnimatedSection id="your-rights">
            <h2 className={sectionH2}>9. Your Rights &amp; Choices</h2>
            <p className={sectionP}>
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>

            <h3 className={sectionH3}>9.1 General Rights</h3>
            <ul className={sectionUl}>
              <li className={sectionLi}><strong className={liStrong}>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li className={sectionLi}><strong className={liStrong}>Correction:</strong> Request correction of inaccurate or incomplete personal information.</li>
              <li className={sectionLi}><strong className={liStrong}>Deletion:</strong> Request deletion of your personal information, subject to certain legal exceptions.</li>
              <li className={sectionLi}><strong className={liStrong}>Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
              <li className={sectionLi}><strong className={liStrong}>Opt-Out of Marketing:</strong> Unsubscribe from marketing communications at any time by clicking the &ldquo;unsubscribe&rdquo; link in our emails or contacting us directly.</li>
              <li className={sectionLi}><strong className={liStrong}>Cookie Management:</strong> Manage cookie preferences through your browser settings or our cookie consent tool.</li>
            </ul>

            <h3 className={sectionH3}>9.2 California Residents (CCPA/CPRA)</h3>
            <p className={sectionP}>
              If you are a California resident, you have additional rights under the
              California Consumer Privacy Act (CCPA) and the California Privacy
              Rights Act (CPRA), including:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}>The right to know what personal information we collect, use, disclose, and sell.</li>
              <li className={sectionLi}>The right to delete your personal information.</li>
              <li className={sectionLi}>The right to opt out of the sale or sharing of your personal information. We do not sell personal information.</li>
              <li className={sectionLi}>The right to non-discrimination for exercising your privacy rights.</li>
              <li className={sectionLi}>The right to correct inaccurate personal information.</li>
              <li className={sectionLi}>The right to limit the use and disclosure of sensitive personal information.</li>
            </ul>

            <h3 className={sectionH3}>9.3 European &amp; UK Residents (GDPR)</h3>
            <p className={sectionP}>
              If you are located in the European Economic Area (EEA) or the United
              Kingdom, you have rights under the General Data Protection Regulation
              (GDPR), including the rights listed above, as well as:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}>The right to restrict processing of your personal information.</li>
              <li className={sectionLi}>The right to object to processing based on legitimate interests.</li>
              <li className={sectionLi}>The right to lodge a complaint with a supervisory authority.</li>
            </ul>
            <p className={sectionP}>
              To exercise any of these rights, please contact us using the
              information in the &ldquo;Contact Us&rdquo; section below. We will
              respond to your request within the timeframe required by applicable
              law (typically 30&ndash;45 days).
            </p>
          </AnimatedSection>

          {/* ─── 10. Third-Party Services & Links ─── */}
          <AnimatedSection id="third-party">
            <h2 className={sectionH2}>10. Third-Party Services &amp; Links</h2>
            <p className={sectionP}>
              Our Services may contain links to third-party websites, services, or
              integrations that are not operated by us. These include but are not
              limited to:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}>Payment processors (e.g., Stripe, PayPal)</li>
              <li className={sectionLi}>Analytics providers (e.g., Google Analytics)</li>
              <li className={sectionLi}>Advertising platforms (e.g., Google Ads, Meta Ads Manager)</li>
              <li className={sectionLi}>Social media platforms</li>
              <li className={sectionLi}>Content delivery networks</li>
              <li className={sectionLi}>Third-party AI service providers</li>
            </ul>
            <p className={sectionP}>
              We are not responsible for the privacy practices of these third
              parties. We encourage you to review their privacy policies before
              providing any personal information to them.
            </p>
          </AnimatedSection>

          {/* ─── 11. Children's Privacy ─── */}
          <AnimatedSection id="children">
            <h2 className={sectionH2}>11. Children&rsquo;s Privacy</h2>
            <p className={sectionP}>
              Our Services are not directed to individuals under the age of 18. We
              do not knowingly collect personal information from children under 18.
              If we become aware that we have collected personal information from a
              child under 18, we will take steps to delete such information
              promptly. If you believe we have inadvertently collected information
              from a minor, please contact us immediately.
            </p>
          </AnimatedSection>

          {/* ─── 12. Changes to This Privacy Policy ─── */}
          <AnimatedSection id="changes">
            <h2 className={sectionH2}>12. Changes to This Privacy Policy</h2>
            <p className={sectionP}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technologies, legal requirements, or other
              factors. When we make material changes, we will:
            </p>
            <ul className={sectionUl}>
              <li className={sectionLi}>Post the updated policy on this page with a revised &ldquo;Last Updated&rdquo; date.</li>
              <li className={sectionLi}>Notify registered users via email at least 30 days before significant changes take effect.</li>
              <li className={sectionLi}>Display a prominent notice on our website for a reasonable period following the change.</li>
            </ul>
            <p className={sectionP}>
              We encourage you to review this Privacy Policy periodically to stay
              informed about how we are protecting your information.
            </p>
          </AnimatedSection>

          {/* ─── 13. Contact Us ─── */}
          <AnimatedSection id="contact">
            <h2 className={sectionH2}>13. Contact Us</h2>
            <p className={sectionP}>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#E8FAFB] border border-[#A3F0E8] rounded-[10px] px-6 py-5 my-4 mb-5 shadow-[0_2px_8px_rgba(13,194,204,0.08)]">
              <p className="text-[15px] text-[#4A5568] mb-1"><strong className={liStrong}>{COMPANY}</strong></p>
              <p className="text-[15px] text-[#4A5568] mb-1">Attn: Privacy Officer</p>
              <p className="text-[15px] text-[#4A5568] mb-1">{ADDRESS}</p>
              <p className="text-[15px] text-[#4A5568] mb-1">
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className={policyLink}>{CONTACT_EMAIL}</a>
              </p>
              <p className="text-[15px] text-[#4A5568] mb-1">
                Phone:{" "}
                <a href={`tel:${CONTACT_PHONE}`} className={policyLink}>{CONTACT_PHONE}</a>
              </p>
            </div>
            <p className={sectionP}>
              We aim to respond to all inquiries within 5 business days. For data
              rights requests, we will acknowledge receipt within 10 business days
              and fulfill your request within the timeframe required by applicable
              law.
            </p>
          </AnimatedSection>

          {/* ── Back to Top ── */}
          <ScrollToTop />
        </div>
      </main>
    </div>
  );
}
