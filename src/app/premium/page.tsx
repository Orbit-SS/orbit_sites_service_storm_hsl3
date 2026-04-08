'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DM_Sans } from 'next/font/google'
import styles from './page.module.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm',
})

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])
  return count
}

export default function PremiumPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            if (entry.target === statsRef.current) setStatsActive(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    revealRefs.current.forEach((el) => { if (el) observer.observe(el) })
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const ref = (i: number) => (el: HTMLElement | null) => { revealRefs.current[i] = el }

  const years = useCounter(7, 1800, statsActive)
  const projects = useCounter(200, 2000, statsActive)

  return (
    <div className={`${styles.page} ${dmSans.variable}`}>
      <Link href="/" className={styles.backLink}>← Back to all designs</Link>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.navLogo}>
            <Image src="/images/HLSlogo-nobackground.png" alt="HLS" width={36} height={36}
              style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(50%) saturate(500%) hue-rotate(90deg)' }} />
            <span>Hoag Land Services</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#work">Portfolio</a>
            <a href="tel:3865610003" className={styles.navCta}>Get a Quote</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>DeLand, Florida · Est. 2017</p>
          <h1 className={styles.heroTitle}>
            Property Services<br />Built to Last.
          </h1>
          <p className={styles.heroDesc}>
            Professional land management for residential and commercial
            properties across Central Florida. Site work, tree services,
            and fencing — done right, backed by expertise.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:3865610003" className={styles.ctaPrimary}>Get a Free Quote</a>
            <a href="#work" className={styles.ctaSecondary}>View Our Work</a>
          </div>
          <div className={styles.heroTrust}>
            <span>✓ ISA Certified Arborist</span>
            <span>✓ Licensed &amp; Insured</span>
            <span>✓ Residential &amp; Commercial</span>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgStack}>
            <div className={styles.heroImgMain}>
              <Image src="/images/site1.JPEG" alt="HLS at work" fill priority quality={85} style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.heroImgSub}>
              <Image src="/images/tree5.JPEG" alt="Tree services" fill quality={80} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`${styles.services} ${styles.reveal}`} ref={ref(0)}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEye}>Our Services</span>
            <h2 className={styles.sectionTitle}>Complete Property Management</h2>
            <p className={styles.sectionDesc}>
              Three specialized services, one trusted team. We handle everything
              from initial land clearing to final fence installation.
            </p>
          </div>
          <div className={styles.servicesGrid}>

            <article className={styles.sCard}>
              <div className={styles.sCardAccent} />
              <div className={styles.sCardImg}>
                <Image src="/images/site4.PNG" alt="Site work" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <div className={styles.sCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 7l9-4 9 4v13l-9 4-9-4V7z" />
                    <path d="M12 3v18M3 7l9 4 9-4" />
                  </svg>
                </div>
                <h3>Site Work</h3>
                <p>
                  Land clearing, grading, excavation, and drainage for residential
                  and commercial projects. Heavy equipment operated by experienced crews.
                </p>
                <a href="tel:3865610003" className={styles.sCardLink}>Request a Quote →</a>
              </div>
            </article>

            <article className={styles.sCard}>
              <div className={styles.sCardAccent} />
              <div className={styles.sCardImg}>
                <Image src="/images/tree5.JPEG" alt="Tree services" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <div className={styles.sCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22V12" />
                    <path d="M5 12l7-10 7 10H5z" />
                    <path d="M4 17l8-5 8 5" />
                  </svg>
                </div>
                <h3>Tree Services</h3>
                <p>
                  Expert tree removal, precision trimming, and stump grinding. Our
                  ISA Certified Arborist ensures every job is safe, efficient, and thorough.
                </p>
                <a href="tel:3865610003" className={styles.sCardLink}>Request a Quote →</a>
              </div>
            </article>

            <article className={styles.sCard}>
              <div className={styles.sCardAccent} />
              <div className={styles.sCardImg}>
                <Image src="/images/fence5.jpeg" alt="Fencing" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <div className={styles.sCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21V7M7 21V7M11 21V7M15 21V7M19 21V7M21 21V7" />
                    <path d="M3 9h18M3 15h18" />
                    <path d="M3 7l4-4 4 4 4-4 4 4 2-2" />
                  </svg>
                </div>
                <h3>Fencing</h3>
                <p>
                  Professional fence installation for residential and commercial
                  properties. Wood, vinyl, chain-link — designed to last, installed right.
                </p>
                <a href="tel:3865610003" className={styles.sCardLink}>Request a Quote →</a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── WHY HLS / STATS ── */}
      <section id="about" className={`${styles.about} ${styles.reveal}`}
        ref={(el) => { ref(1)(el); statsRef.current = el }}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <span className={styles.sectionEye}>About HLS</span>
              <h2 className={styles.aboutTitle}>
                Central Florida&apos;s Most Trusted Property Services
              </h2>
              <p>
                Hoag Land Services has been the go-to property services contractor
                for DeLand and the surrounding region since 2017. We serve homeowners,
                property managers, developers, and commercial clients — all with the
                same commitment to quality work and professional service.
              </p>
              <p>
                Our ISA Certified Arborist brings a level of expertise that most
                local contractors simply don&apos;t have. Licensed, insured, and
                accountable — we stand behind every job we take on.
              </p>
              <div className={styles.certBadge}>
                <Image src="/images/HLSlogo-nobackground.png" alt="HLS Certified" width={48} height={48}
                  style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(50%) saturate(500%) hue-rotate(90deg)' }} />
                <div>
                  <div className={styles.certTitle}>ISA Certified Arborist</div>
                  <div className={styles.certSub}>International Society of Arboriculture</div>
                </div>
              </div>
            </div>
            <div className={styles.aboutRight}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>
                    {statsActive ? years : 0}+
                  </div>
                  <div className={styles.statLabel}>Years Serving<br />Central Florida</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>
                    {statsActive ? projects : 0}+
                  </div>
                  <div className={styles.statLabel}>Projects<br />Completed</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>3</div>
                  <div className={styles.statLabel}>Specialized<br />Services</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNum}>ISA</div>
                  <div className={styles.statLabel}>Certified<br />Arborist</div>
                </div>
              </div>
              <div className={styles.aboutImg}>
                <Image src="/images/site18.JPEG" alt="HLS team" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="work" className={`${styles.portfolio} ${styles.reveal}`} ref={ref(2)}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEye}>Our Work</span>
            <h2 className={styles.sectionTitle}>Recent Projects</h2>
          </div>
          <div className={styles.portfolioGrid}>
            <div className={styles.pfCard}>
              <div className={styles.pfImg}>
                <Image src="/images/site1.JPEG" alt="Land clearing" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.pfBody}>
                <span className={styles.pfTag}>Site Work</span>
                <h3>Land Clearing · DeLand</h3>
                <p>Full lot clearing and grading for new residential development.</p>
              </div>
            </div>
            <div className={styles.pfCard}>
              <div className={styles.pfImg}>
                <Image src="/images/tree7.jpeg" alt="Tree removal" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.pfBody}>
                <span className={styles.pfTag}>Tree Services</span>
                <h3>Tree Removal · Residential</h3>
                <p>Safe removal of large oak trees from residential property.</p>
              </div>
            </div>
            <div className={styles.pfCard}>
              <div className={styles.pfImg}>
                <Image src="/images/fence7.jpeg" alt="Commercial fence" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.pfBody}>
                <span className={styles.pfTag}>Fencing</span>
                <h3>Commercial Fence Install</h3>
                <p>Full perimeter fencing for commercial property in Orange City.</p>
              </div>
            </div>
            <div className={styles.pfCard}>
              <div className={styles.pfImg}>
                <Image src="/images/tree3.jpeg" alt="Tree trimming" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.pfBody}>
                <span className={styles.pfTag}>Tree Services</span>
                <h3>Tree Trimming · DeLeon Springs</h3>
                <p>Crown raising and structural pruning for mature landscape trees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={`${styles.areaSection} ${styles.reveal}`} ref={ref(3)}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEye}>Where We Work</span>
            <h2 className={styles.sectionTitle}>Service Area</h2>
            <p className={styles.sectionDesc}>
              Based in DeLand, Florida. Serving Volusia County and the surrounding
              Central Florida region for residential and commercial projects.
            </p>
          </div>
          <div className={styles.areaGrid}>
            {[
              'DeLand', 'DeLeon Springs', 'Orange City', 'Deltona',
              'Pierson', 'Lake Helen', 'Cassadaga', 'Enterprise', 'Osteen'
            ].map((a) => (
              <div key={a} className={styles.areaChip}>
                <span className={styles.areaChipDot} />
                {a}
              </div>
            ))}
          </div>
          <p className={styles.areaNote}>
            Not listed? Call us — we regularly work outside these areas.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <span className={styles.sectionEye} style={{ color: 'rgba(255,255,255,0.5)' }}>
                Get in Touch
              </span>
              <h2 className={styles.ctaTitle}>
                Ready to discuss your project?
              </h2>
              <p className={styles.ctaSub}>
                Free estimates for all services. Fast response. Professional service
                from a team that&apos;s been trusted across Central Florida since 2017.
              </p>
            </div>
            <div className={styles.ctaContact}>
              <a href="tel:3865610003" className={styles.ctaPhone}>(386) 561-0003</a>
              <a href="tel:3865610003" className={styles.ctaBtn}>Request a Quote</a>
              <span className={styles.ctaOr}>or</span>
              <a href="mailto:tyler@hlsdeland.com" className={styles.ctaEmail}>
                tyler@hlsdeland.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image src="/images/HLSlogo-nobackground.png" alt="HLS Logo" width={52} height={52}
              style={{ filter: 'brightness(0) invert(1) opacity(0.4)' }} />
            <div>
              <div className={styles.footerName}>Hoag Land Services</div>
              <div className={styles.footerLoc}>DeLand, Florida</div>
            </div>
          </div>
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <span className={styles.footerHead}>Services</span>
              <span>Site Work</span>
              <span>Tree Services</span>
              <span>Fencing</span>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerHead}>Service Area</span>
              <span>DeLand · DeLeon Springs</span>
              <span>Orange City · Deltona</span>
              <span>Central Florida</span>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerHead}>Contact</span>
              <a href="tel:3865610003">(386) 561-0003</a>
              <a href="mailto:tyler@hlsdeland.com">tyler@hlsdeland.com</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2024 Hoag Land Services · DeLand, FL · All Rights Reserved</span>
          <span>Licensed &amp; Insured · ISA Certified Arborist</span>
        </div>
      </footer>
    </div>
  )
}
