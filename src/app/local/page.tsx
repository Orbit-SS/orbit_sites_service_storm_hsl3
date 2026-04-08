'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Lexend_Deca } from 'next/font/google'
import styles from './page.module.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const lexend = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lexend',
})

export default function LocalPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])
  const underlineRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    revealRefs.current.forEach((el) => { if (el) observer.observe(el) })

    // Animate underlines on scroll
    const ulObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.ulAnimate)
            ulObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    underlineRefs.current.forEach((el) => { if (el) ulObserver.observe(el) })

    return () => { observer.disconnect(); ulObserver.disconnect() }
  }, [])

  const ref = (i: number) => (el: HTMLElement | null) => { revealRefs.current[i] = el }
  const ulRef = (i: number) => (el: HTMLSpanElement | null) => { underlineRefs.current[i] = el }

  return (
    <div className={`${styles.page} ${fraunces.variable} ${lexend.variable}`}>
      <Link href="/" className={styles.backLink}>← Back to all designs</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/fence5.jpeg"
            alt="HLS fencing in Central Florida"
            fill priority quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroLogo}>
            <Image src="/images/HLSlogo-nobackground.png" alt="HLS" width={80} height={80}
              style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <h1 className={styles.heroTitle}>
            Your DeLand Neighbor<br />
            <span className={styles.heroItalic}>Since 2017.</span>
          </h1>
          <p className={styles.heroSub}>
            Site work, tree services &amp; fencing — done right by people who live here.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:3865610003" className={styles.ctaPrimary}>
              📞 Call (386) 561-0003
            </a>
            <a href="#services" className={styles.ctaSecondary}>
              See What We Do ↓
            </a>
          </div>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>✓ ISA Certified Arborist</span>
            <span className={styles.heroBadge}>✓ Licensed &amp; Insured</span>
            <span className={styles.heroBadge}>✓ Free Estimates</span>
          </div>
        </div>
      </section>

      {/* ── PHONE BANNER ── */}
      <div className={styles.phoneBanner}>
        <span className={styles.phoneBannerText}>Have a question? Just call us —</span>
        <a href="tel:3865610003" className={styles.phoneBannerNum}>(386) 561-0003</a>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className={`${styles.services} ${styles.reveal}`} ref={ref(0)}>
        <div className={styles.container}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>
              What We Do for{' '}
              <span className={styles.underlineWrap}>
                Your Property
                <span className={styles.underline} ref={ulRef(0)} />
              </span>
            </h2>
            <p className={styles.sectionSub}>
              Three services, one crew. Based in DeLand — ready when you are.
            </p>
          </div>
          <div className={styles.servicesGrid}>

            <article className={`${styles.sCard} ${styles.sCardSlide}`}>
              <div className={styles.sCardImg}>
                <Image src="/images/site4.PNG" alt="Site work" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <div className={styles.sCardNum}>01</div>
                <h3 className={styles.sCardTitle}>Site Work</h3>
                <p>
                  Land clearing, grading, excavation, and drainage. Whether you&apos;re
                  clearing a lot, building a driveway, or setting up a new property —
                  we&apos;ve got the equipment and the know-how.
                </p>
                <a href="tel:3865610003" className={styles.sCardCta}>
                  Get a Free Quote →
                </a>
              </div>
            </article>

            <article className={`${styles.sCard} ${styles.sCardSlide} ${styles.sCardSlide2}`}>
              <div className={styles.sCardImg}>
                <Image src="/images/tree5.JPEG" alt="Tree services" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <div className={styles.sCardNum}>02</div>
                <h3 className={styles.sCardTitle}>Tree Services</h3>
                <p>
                  Tree removal, trimming, stump grinding. Our ISA Certified
                  Arborist is the real deal — not just a guy with a chainsaw.
                  Safe work near your home, your fence, your power lines.
                </p>
                <a href="tel:3865610003" className={styles.sCardCta}>
                  Get a Free Quote →
                </a>
              </div>
            </article>

            <article className={`${styles.sCard} ${styles.sCardSlide} ${styles.sCardSlide3}`}>
              <div className={styles.sCardImg}>
                <Image src="/images/fence7.jpeg" alt="Fencing" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <div className={styles.sCardNum}>03</div>
                <h3 className={styles.sCardTitle}>Fencing</h3>
                <p>
                  Residential and commercial fence installation. Wood, vinyl,
                  chain-link. We build fences that stay straight through Florida
                  summers — no shortcuts, no callbacks.
                </p>
                <a href="tel:3865610003" className={styles.sCardCta}>
                  Get a Free Quote →
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── WHY HLS ── */}
      <section className={`${styles.whySection} ${styles.reveal}`} ref={ref(1)}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <div className={styles.isaBadge}>
                <Image src="/images/HLSlogo-nobackground.png" alt="HLS Certified" width={100} height={100}
                  style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(60%) saturate(600%) hue-rotate(90deg)' }} />
                <div className={styles.isaBadgeText}>
                  <div className={styles.isaBadgeTitle}>ISA Certified</div>
                  <div className={styles.isaBadgeSub}>Arborist on Staff</div>
                </div>
              </div>
              <div className={styles.whyImg}>
                <Image src="/images/tree2.jpeg" alt="HLS at work" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.whyRight}>
              <h2 className={styles.whyTitle}>
                Why Neighbors{' '}
                <span className={styles.underlineWrap}>
                  Trust HLS
                  <span className={styles.underline} ref={ulRef(1)} />
                </span>
              </h2>
              <div className={styles.trustItems}>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <div>
                    <strong>Est. 2017 — 7+ years in DeLand</strong>
                    <p>We&apos;re not a pop-up crew. We live here, work here, and stand behind every job.</p>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <div>
                    <strong>ISA Certified Arborist</strong>
                    <p>Our tree work is backed by real certification — not just experience, but verified expertise.</p>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <div>
                    <strong>Residential &amp; Commercial</strong>
                    <p>From homeowners to property managers to developers — we handle it all.</p>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <div>
                    <strong>Licensed &amp; Insured</strong>
                    <p>Fully licensed, fully insured. You&apos;re covered, your property is covered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className={`${styles.portfolio} ${styles.reveal}`} ref={ref(2)}>
        <div className={styles.container}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>
              Real Work,{' '}
              <span className={styles.underlineWrap}>
                Real Results
                <span className={styles.underline} ref={ulRef(2)} />
              </span>
            </h2>
            <p className={styles.sectionSub}>Photos from actual jobs right here in Central Florida.</p>
          </div>
          <div className={styles.portfolioGrid}>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/site1.JPEG" alt="Land clearing" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>
                <span className={styles.pfType}>Site Work</span>
                Land Clearing in DeLand
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/tree1.jpeg" alt="Tree removal" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>
                <span className={styles.pfType}>Tree Services</span>
                Tree Removal — Residential
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/fence1.jpeg" alt="Fence install" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>
                <span className={styles.pfType}>Fencing</span>
                Wood Fence Install
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/tree3.jpeg" alt="Tree trimming" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>
                <span className={styles.pfType}>Tree Services</span>
                Trimming in DeLeon Springs
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={`${styles.areaSection} ${styles.reveal}`} ref={ref(3)}>
        <div className={styles.container}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>
              Serving Your{' '}
              <span className={styles.underlineWrap}>
                Neighborhood
                <span className={styles.underline} ref={ulRef(3)} />
              </span>
            </h2>
            <p className={styles.sectionSub}>
              Based in DeLand — we work all across Volusia County and Central Florida.
            </p>
          </div>
          <div className={styles.areaGrid}>
            {[
              { city: 'DeLand', highlight: true },
              { city: 'DeLeon Springs', highlight: false },
              { city: 'Orange City', highlight: false },
              { city: 'Deltona', highlight: false },
              { city: 'Pierson', highlight: false },
              { city: 'Lake Helen', highlight: false },
              { city: 'Cassadaga', highlight: false },
              { city: 'Enterprise', highlight: false },
              { city: 'Osteen', highlight: false },
              { city: '+ More...', highlight: false },
            ].map((a) => (
              <div
                key={a.city}
                className={`${styles.areaChip} ${a.highlight ? styles.areaChipHL : ''}`}
              >
                {a.highlight && <span className={styles.homePin}>📍</span>}
                {a.city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Ready to get started?
            </h2>
            <p className={styles.ctaSub}>
              Call or text us. We give free estimates — no pressure, no surprise fees.
              Just honest pricing from a local crew.
            </p>
            <a href="tel:3865610003" className={styles.ctaPhone}>
              (386) 561-0003
            </a>
            <p className={styles.ctaOr}>or fill out a quick quote request</p>
            <a href="tel:3865610003" className={styles.ctaBtn}>
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image src="/images/HLSlogo-nobackground.png" alt="HLS Logo" width={60} height={60}
              style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(400%) hue-rotate(5deg)' }} />
            <div>
              <div className={styles.footerName}>Hoag Land Services</div>
              <div className={styles.footerLoc}>DeLand, Florida · Est. 2017</div>
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
          © 2024 Hoag Land Services · DeLand, FL · All Rights Reserved
        </div>
      </footer>
    </div>
  )
}
