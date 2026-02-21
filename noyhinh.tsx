"use client";

import React, { useEffect, useRef } from "react";

/* ───────────────────────────────────────────────
   Empire 325 Marketing — Privacy Policy Page
   Route: /privacy
   Stack: Next.js App Router · TypeScript · CSS-in-JS
   ─────────────────────────────────────────────── */

// ━━━ Types ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

// ━━━ Metadata (export from a separate layout or use generateMetadata in production) ━━━
// export const metadata = {
//   title: "Privacy Policy | Empire 325 Marketing",
//   description:
//     "Learn how Empire 325 Marketing collects, uses, and protects your personal information. Read our full privacy policy.",
//   openGraph: {
//     title: "Privacy Policy | Empire 325 Marketing",
//     description: "How we collect, use, and protect your data.",
//     url: "https://empire325marketing.com/privacy",
//     type: "website",
//   },
// };

// ━━━ Policy Data ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const LAST_UPDATED = "February 21, 2026";
const COMPANY = "Empire 325 Marketing";
const WEBSITE = "empire325marketing.com";
const CONTACT_EMAIL = "privacy@empire325marketing.com";
const CONTACT_PHONE = "+1 (631) 640-6769";
const ADDRESS = "Long Island, New York, United States";

const policySections: PolicySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to {COMPANY} (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are committed to
          protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website{" "}
          <a href={`https://${WEBSITE}`} className="policy-link">
            {WEBSITE}
          </a>
          , use our services, or interact with us in any way.
        </p>
        <p>
          This policy applies to all information collected through our website,
          our AI-powered blog creation platform, our Entity Marketplace, and any
          related services, sales, marketing, or events (collectively, the
          &ldquo;Services&rdquo;).
        </p>
        <p>
          By accessing or using our Services, you acknowledge that you have
          read, understood, and agree to be bound by this Privacy Policy. If you
          do not agree with the terms of this policy, please do not access or
          use our Services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: (
      <>
        <h3>2.1 Personal Information You Provide</h3>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register for our Services, express interest in obtaining
          information about us or our products, participate in activities on our
          website, or otherwise contact us. The personal information we collect
          may include:
        </p>
        <ul>
          <li>
            <strong>Account Information:</strong> Name, email address, phone
            number, mailing address, business name, and professional title.
          </li>
          <li>
            <strong>Billing Information:</strong> Payment card details, billing
            address, and transaction history. Payment processing is handled by
            secure third-party processors; we do not store full credit card
            numbers on our servers.
          </li>
          <li>
            <strong>Profile Information:</strong> Username, password,
            preferences, and any content you provide for your account profile.
          </li>
          <li>
            <strong>Business Information:</strong> Law firm name, practice
            areas, jurisdictions served, bar numbers (for Entity Marketplace
            authors), and professional credentials.
          </li>
          <li>
            <strong>Communications:</strong> Records of correspondence when you
            contact us, including emails, chat messages, and phone call logs.
          </li>
          <li>
            <strong>Content Data:</strong> Blog content, author bios,
            professional headshots, and any other materials you upload or submit
            through our platform.
          </li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>
        <p>
          When you access our website or use our Services, we automatically
          collect certain information, including:
        </p>
        <ul>
          <li>
            <strong>Device &amp; Browser Data:</strong> IP address, browser type
            and version, operating system, device identifiers, and screen
            resolution.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, time spent on pages,
            click patterns, referring URLs, and navigation paths through our
            website.
          </li>
          <li>
            <strong>Location Data:</strong> Approximate geographic location
            based on your IP address.
          </li>
          <li>
            <strong>Performance Data:</strong> Page load times, errors
            encountered, and other diagnostic data.
          </li>
        </ul>

        <h3>2.3 Cookies &amp; Tracking Technologies</h3>
        <p>
          We use cookies, web beacons, pixels, and similar tracking technologies
          to collect information about your browsing activities. This includes:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for the website to
            function properly, including session management and security
            features.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how visitors
            interact with our website by collecting anonymous usage statistics.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Used to deliver relevant
            advertisements and track the effectiveness of our marketing
            campaigns across platforms including Google Ads and Meta (Facebook
            &amp; Instagram).
          </li>
          <li>
            <strong>Preference Cookies:</strong> Remember your settings and
            preferences to enhance your experience on return visits.
          </li>
        </ul>
        <p>
          You can manage your cookie preferences through your browser settings.
          Please note that disabling certain cookies may affect the
          functionality of our Services.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>
          We use the information we collect for the following purposes:
        </p>
        <ul>
          <li>
            <strong>Service Delivery:</strong> To provide, maintain, and improve
            our AI-powered blog creation platform, Entity Marketplace, SEO
            services, and other digital marketing services.
          </li>
          <li>
            <strong>Account Management:</strong> To create and manage your
            account, process transactions, and send related communications
            including confirmations, invoices, and technical notices.
          </li>
          <li>
            <strong>Content Generation:</strong> To power our AI blog engine,
            including tailoring content to your practice areas, jurisdictions,
            and target audience preferences.
          </li>
          <li>
            <strong>Entity Marketplace Operations:</strong> To verify author
            credentials, maintain author profiles, facilitate the licensing of
            author entities, and ensure compliance with applicable professional
            conduct rules.
          </li>
          <li>
            <strong>SEO &amp; Performance Optimization:</strong> To analyze
            content performance, track search engine rankings, generate
            analytics reports, and optimize content strategies.
          </li>
          <li>
            <strong>Communications:</strong> To respond to your inquiries,
            provide customer support, send service updates, and deliver
            marketing communications (with your consent where required).
          </li>
          <li>
            <strong>Personalization:</strong> To tailor our Services and content
            recommendations to your interests and preferences.
          </li>
          <li>
            <strong>Security &amp; Fraud Prevention:</strong> To detect,
            prevent, and respond to security incidents, fraud, and abuse.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with applicable laws,
            regulations, and legal processes.
          </li>
          <li>
            <strong>Analytics &amp; Improvement:</strong> To analyze usage
            trends, measure the effectiveness of our Services, and develop new
            features and products.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. How We Share Your Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share your
          information in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We engage trusted third-party
            vendors who perform services on our behalf, including payment
            processing, data hosting, email delivery, analytics, customer
            support, and advertising. These providers are contractually
            obligated to protect your information and may only use it as
            directed by us.
          </li>
          <li>
            <strong>Entity Marketplace Participants:</strong> If you are an
            author in our Entity Marketplace, certain profile information
            (name, bio, credentials, headshot) will be made available to
            customers who license your author entity for their content. This
            information is necessary for the marketplace to function and is
            governed by the terms of your Author Agreement.
          </li>
          <li>
            <strong>Advertising Partners:</strong> We work with advertising
            platforms including Google and Meta to deliver targeted
            advertisements. These partners may receive anonymized or aggregated
            data; we do not share personally identifiable information for
            third-party advertising purposes without your consent.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, reorganization, or sale of assets, your information
            may be transferred as part of the transaction. We will notify you
            of any such change and your options regarding your information.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required to do so by law, regulation, legal process,
            or governmental request, or if we believe disclosure is necessary
            to protect our rights, your safety, or the safety of others.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information
            for any other purpose with your explicit consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-data",
    title: "5. AI-Generated Content & Data Practices",
    content: (
      <>
        <p>
          Our platform uses artificial intelligence to generate blog content
          for businesses in the civil law niche. The following data practices
          apply specifically to our AI services:
        </p>
        <ul>
          <li>
            <strong>Input Data:</strong> Information you provide about your
            practice areas, target audience, jurisdiction, and content
            preferences is used to generate customized content. This data is
            processed by our AI systems and may be retained to improve content
            quality over time.
          </li>
          <li>
            <strong>Generated Content Ownership:</strong> Blog content generated
            through our platform is owned by you upon publication, subject to
            the terms of your subscription agreement and any applicable author
            licensing terms from the Entity Marketplace.
          </li>
          <li>
            <strong>AI Model Training:</strong> We may use aggregated,
            anonymized data derived from platform usage to improve our AI
            models. We do not use your specific content, client information, or
            confidential business data to train our models without your
            explicit consent.
          </li>
          <li>
            <strong>Third-Party AI Services:</strong> Our platform may utilize
            third-party AI providers to assist in content generation. Data
            shared with these providers is governed by our data processing
            agreements with them and is subject to the same protections
            described in this policy.
          </li>
          <li>
            <strong>Human Review:</strong> Content generated by our AI may be
            reviewed by human editors for quality assurance. These editors are
            bound by confidentiality obligations.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "entity-marketplace",
    title: "6. Entity Marketplace Privacy",
    content: (
      <>
        <p>
          The Entity Marketplace involves the collection and display of author
          information. This section addresses privacy practices specific to
          marketplace participants.
        </p>

        <h3>6.1 For Authors</h3>
        <ul>
          <li>
            When you register as an author entity, you consent to the public
            display of your professional name, biography, credentials,
            headshot, and relevant professional information.
          </li>
          <li>
            Credential verification may require submission of bar numbers,
            educational records, or professional certifications. Verification
            data is stored securely and is not publicly displayed beyond
            confirmed credential status.
          </li>
          <li>
            Your author profile may appear on client websites as a byline and
            author page. You will have the ability to review and approve your
            profile information before it is made available.
          </li>
          <li>
            You may request removal of your author entity from the marketplace
            at any time, subject to the terms of any active licensing
            agreements.
          </li>
        </ul>

        <h3>6.2 For Customers</h3>
        <ul>
          <li>
            When you license an author entity, you receive access to the
            author&rsquo;s approved public profile information for use on your
            published content.
          </li>
          <li>
            You may not use author information for any purpose other than
            content attribution as described in your licensing agreement.
          </li>
          <li>
            Author contact information is never shared with customers;
            communications with authors are facilitated through our platform.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "7. Data Security",
    content: (
      <>
        <p>
          We implement industry-standard technical, administrative, and physical
          security measures to protect your personal information, including:
        </p>
        <ul>
          <li>
            Encryption of data in transit (TLS/SSL) and at rest (AES-256).
          </li>
          <li>
            Access controls and authentication measures to limit data access to
            authorized personnel.
          </li>
          <li>Regular security audits and vulnerability assessments.</li>
          <li>
            Secure data hosting with reputable cloud infrastructure providers.
          </li>
          <li>
            Employee training on data protection and privacy best practices.
          </li>
          <li>
            Incident response procedures to promptly address any security
            breaches.
          </li>
        </ul>
        <p>
          While we strive to protect your information, no method of
          transmission over the Internet or electronic storage is 100% secure.
          We cannot guarantee absolute security but are committed to promptly
          addressing any breaches in accordance with applicable laws.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "8. Data Retention",
    content: (
      <>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes for which it was collected, including to satisfy
          legal, accounting, or reporting requirements. Specific retention
          periods include:
        </p>
        <ul>
          <li>
            <strong>Account Data:</strong> Retained for the duration of your
            account and for up to 30 days after account closure, unless longer
            retention is required by law.
          </li>
          <li>
            <strong>Billing Records:</strong> Retained for a minimum of 7 years
            as required for tax and financial reporting purposes.
          </li>
          <li>
            <strong>Generated Content:</strong> Retained on our platform for
            the duration of your subscription. Upon cancellation, content data
            is retained for 90 days to allow for data export, after which it
            is permanently deleted.
          </li>
          <li>
            <strong>Analytics Data:</strong> Aggregated analytics data may be
            retained indefinitely in anonymized form.
          </li>
          <li>
            <strong>Marketing Communications:</strong> Consent records and
            opt-out preferences are retained for as long as necessary to honor
            your preferences.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "9. Your Rights & Choices",
    content: (
      <>
        <p>
          Depending on your location, you may have certain rights regarding
          your personal information:
        </p>

        <h3>9.1 General Rights</h3>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal information
            we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Request correction of inaccurate or
            incomplete personal information.
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal
            information, subject to certain legal exceptions.
          </li>
          <li>
            <strong>Portability:</strong> Request a copy of your data in a
            structured, machine-readable format.
          </li>
          <li>
            <strong>Opt-Out of Marketing:</strong> Unsubscribe from marketing
            communications at any time by clicking the &ldquo;unsubscribe&rdquo;
            link in our emails or contacting us directly.
          </li>
          <li>
            <strong>Cookie Management:</strong> Manage cookie preferences
            through your browser settings or our cookie consent tool.
          </li>
        </ul>

        <h3>9.2 California Residents (CCPA/CPRA)</h3>
        <p>
          If you are a California resident, you have additional rights under the
          California Consumer Privacy Act (CCPA) and the California Privacy
          Rights Act (CPRA), including:
        </p>
        <ul>
          <li>
            The right to know what personal information we collect, use,
            disclose, and sell.
          </li>
          <li>The right to delete your personal information.</li>
          <li>
            The right to opt out of the sale or sharing of your personal
            information. We do not sell personal information.
          </li>
          <li>
            The right to non-discrimination for exercising your privacy rights.
          </li>
          <li>The right to correct inaccurate personal information.</li>
          <li>
            The right to limit the use and disclosure of sensitive personal
            information.
          </li>
        </ul>

        <h3>9.3 European &amp; UK Residents (GDPR)</h3>
        <p>
          If you are located in the European Economic Area (EEA) or the United
          Kingdom, you have rights under the General Data Protection Regulation
          (GDPR), including the rights listed above, as well as:
        </p>
        <ul>
          <li>
            The right to restrict processing of your personal information.
          </li>
          <li>
            The right to object to processing based on legitimate interests.
          </li>
          <li>
            The right to lodge a complaint with a supervisory authority.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the
          information in the &ldquo;Contact Us&rdquo; section below. We will
          respond to your request within the timeframe required by applicable
          law (typically 30–45 days).
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "10. Third-Party Services & Links",
    content: (
      <>
        <p>
          Our Services may contain links to third-party websites, services, or
          integrations that are not operated by us. These include but are not
          limited to:
        </p>
        <ul>
          <li>Payment processors (e.g., Stripe, PayPal)</li>
          <li>Analytics providers (e.g., Google Analytics)</li>
          <li>
            Advertising platforms (e.g., Google Ads, Meta Ads Manager)
          </li>
          <li>Social media platforms</li>
          <li>Content delivery networks</li>
          <li>Third-party AI service providers</li>
        </ul>
        <p>
          We are not responsible for the privacy practices of these third
          parties. We encourage you to review their privacy policies before
          providing any personal information to them.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "11. Children\u2019s Privacy",
    content: (
      <p>
        Our Services are not directed to individuals under the age of 18. We
        do not knowingly collect personal information from children under 18.
        If we become aware that we have collected personal information from a
        child under 18, we will take steps to delete such information
        promptly. If you believe we have inadvertently collected information
        from a minor, please contact us immediately.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, technologies, legal requirements, or other
          factors. When we make material changes, we will:
        </p>
        <ul>
          <li>
            Post the updated policy on this page with a revised &ldquo;Last
            Updated&rdquo; date.
          </li>
          <li>
            Notify registered users via email at least 30 days before
            significant changes take effect.
          </li>
          <li>
            Display a prominent notice on our website for a reasonable period
            following the change.
          </li>
        </ul>
        <p>
          We encourage you to review this Privacy Policy periodically to stay
          informed about how we are protecting your information.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us:
        </p>
        <div className="contact-block">
          <p>
            <strong>{COMPANY}</strong>
          </p>
          <p>Attn: Privacy Officer</p>
          <p>{ADDRESS}</p>
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="policy-link">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${CONTACT_PHONE}`} className="policy-link">
              {CONTACT_PHONE}
            </a>
          </p>
        </div>
        <p>
          We aim to respond to all inquiries within 5 business days. For data
          rights requests, we will acknowledge receipt within 10 business days
          and fulfill your request within the timeframe required by applicable
          law.
        </p>
      </>
    ),
  },
];

// ━━━ Component ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function PrivacyPolicyPage(): React.JSX.Element {
  const tocRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* Staggered fade-in on mount */
  useEffect(() => {
    const sections = contentRef.current?.querySelectorAll(".policy-section");
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Embedded Styles ── */}
      <style>{`
        /* ═══ CSS Reset & Variables ═══ */
        :root {
          --bg-primary: #FAFBFC;
          --bg-surface: #FFFFFF;
          --bg-sidebar: #F4F6F8;
          --text-primary: #1A1D23;
          --text-secondary: #4A5568;
          --text-tertiary: #718096;
          --accent: #0dc2cc;
          --accent-light: #44edd2;
          --accent-bg: #E8FAFB;
          --accent-border: #A3F0E8;
          --border-color: #E2E8F0;
          --border-light: #EDF2F7;
          --radius-sm: 6px;
          --radius-md: 10px;
          --radius-lg: 16px;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
          --shadow-md: 0 4px 14px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04);
          --shadow-lg: 0 10px 30px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.04);
          --font-heading: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
          --font-body: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
          --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* ═══ Page Wrapper ═══ */
        .privacy-page {
          min-height: 100vh;
          background: var(--bg-primary);
          font-family: var(--font-body);
          color: var(--text-primary);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        /* ═══ Hero / Header ═══ */
        .privacy-hero {
          background: linear-gradient(145deg, #0a9ea6 0%, #0dc2cc 45%, #44edd2 100%);
          padding: 80px 24px 64px;
          position: relative;
          overflow: hidden;
        }

        .hero-inner {
          max-width: 820px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.03em;
          margin-bottom: 24px;
          backdrop-filter: blur(8px);
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #44edd2;
          box-shadow: 0 0 8px rgba(68,237,210,0.6);
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 400;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 17px;
          color: rgba(255,255,255,0.85);
          font-weight: 400;
          line-height: 1.6;
          max-width: 560px;
        }

        .hero-meta {
          display: flex;
          gap: 24px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(255,255,255,0.75);
        }

        .hero-meta-item svg {
          opacity: 0.7;
        }

        /* ═══ Layout ═══ */
        .privacy-layout {
          max-width: 1140px;
          margin: 0 auto;
          padding: 48px 24px 96px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .privacy-layout {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 32px 20px 72px;
          }
        }

        /* ═══ Table of Contents Sidebar ═══ */
        .toc-sidebar {
          position: sticky;
          top: 32px;
        }

        @media (max-width: 860px) {
          .toc-sidebar {
            position: static;
          }
        }

        .toc-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 2px 6px rgba(0,0,0,0.03);
          transition:
            transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-color 0.3s ease;
        }

        .toc-card:hover {
          transform: translateY(-4px);
          border-color: rgba(13,194,204,0.25);
          box-shadow:
            0 4px 8px rgba(0,0,0,0.04),
            0 10px 24px rgba(0,0,0,0.07),
            0 20px 40px rgba(0,0,0,0.04);
        }

        .toc-heading {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .toc-item a {
          display: block;
          padding: 7px 12px;
          font-size: 13px;
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: all var(--transition);
          line-height: 1.4;
        }

        .toc-item a:hover {
          background: var(--accent-bg);
          color: var(--accent);
          font-weight: 500;
        }

        /* ═══ Content Area ═══ */
        .policy-content {
          min-width: 0;
        }

        .policy-section {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 36px 40px;
          margin-bottom: 20px;
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 2px 6px rgba(0,0,0,0.03);
          opacity: 0;
          transform: translateY(16px) translateZ(0);
          transition:
            opacity 0.5s ease,
            transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-color 0.3s ease;
          will-change: transform, box-shadow;
        }

        .policy-section:hover {
          transform: translateY(-6px) translateZ(0);
          border-color: rgba(13,194,204,0.25);
          box-shadow:
            0 4px 8px rgba(0,0,0,0.04),
            0 12px 28px rgba(0,0,0,0.08),
            0 24px 48px rgba(0,0,0,0.05);
        }

        @media (max-width: 600px) {
          .policy-section {
            padding: 24px 20px;
          }
        }

        .policy-section h2 {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 400;
          color: var(--accent);
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 2px solid var(--accent-bg);
        }

        .policy-section h3 {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 28px;
          margin-bottom: 12px;
          padding-left: 14px;
          border-left: 3px solid var(--accent-light);
        }

        .policy-section p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .policy-section ul {
          list-style: none;
          margin: 12px 0 20px;
          padding: 0;
        }

        .policy-section ul li {
          position: relative;
          padding: 8px 0 8px 24px;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .policy-section ul li::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 17px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-border);
        }

        .policy-section ul li strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .policy-link {
          color: #0a9a9f;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: border-color var(--transition);
        }

        .policy-link:hover {
          border-bottom-color: #0a9a9f;
          color: #078084;
        }

        .contact-block {
          background: var(--accent-bg);
          border: 1px solid var(--accent-border);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          margin: 16px 0 20px;
          box-shadow: 0 2px 8px rgba(13,194,204,0.08);
        }

        .contact-block p {
          margin-bottom: 4px;
          font-size: 15px;
        }

        /* ═══ Back to top ═══ */
        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 24px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          color: var(--accent);
          background: var(--accent-bg);
          border: 1px solid var(--accent-border);
          border-radius: 100px;
          cursor: pointer;
          transition: all var(--transition);
          text-decoration: none;
          font-family: var(--font-body);
          box-shadow: 0 2px 6px rgba(13,194,204,0.1);
        }

        .back-to-top:hover {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
          box-shadow: 0 6px 18px rgba(13,194,204,0.3);
          transform: translateY(-2px);
        }

        /* ═══ Print Styles ═══ */
        @media print {
          .privacy-hero { background: #0dc2cc; padding: 20px 0; }
          .hero-title { color: #000; font-size: 28px; }
          .toc-sidebar { display: none; }
          .privacy-layout { grid-template-columns: 1fr; padding: 0; }
          .policy-section {
            opacity: 1 !important;
            transform: none !important;
            box-shadow: none;
            border: 1px solid #ddd;
            break-inside: avoid;
          }
        }
      `}</style>

      <div className="privacy-page">
        {/* ── Hero Header ── */}
        <header className="privacy-hero">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Legal Document
            </div>
            <h1 className="hero-title">Privacy Policy</h1>
            <p className="hero-subtitle">
              Your privacy is important to us. This policy explains how{" "}
              {COMPANY} collects, uses, and protects your personal information
              across our website, AI blog platform, and Entity Marketplace.
            </p>
            <div className="hero-meta">
              <span className="hero-meta-item">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Last updated: {LAST_UPDATED}
              </span>
              <span className="hero-meta-item">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {ADDRESS}
              </span>
            </div>
          </div>
        </header>

        {/* ── Main Layout ── */}
        <main className="privacy-layout">
          {/* Sidebar TOC */}
          <aside className="toc-sidebar" ref={tocRef}>
            <nav className="toc-card">
              <p className="toc-heading">On This Page</p>
              <ul className="toc-list">
                {policySections.map((section) => (
                  <li key={section.id} className="toc-item">
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content Sections */}
          <div className="policy-content" ref={contentRef}>
            {policySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="policy-section"
              >
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}

            <div style={{ textAlign: "center" }}>
              <a
                href="#"
                className="back-to-top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                Back to top
              </a>
            </div>
          </div>
        </main>


      </div>
    </>
  );
}
