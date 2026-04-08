'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald, Lato } from 'next/font/google'
import styles from './page.module.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

export default function OutdoorPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])

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
      { threshold: 0.1 }
    )
    revealRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const ref = (i: number) => (el: HTMLElement | null) => { revealRefs.current[i] = el }

  return (
    <div className={`${styles.page} ${oswald.variable} ${lato.variable}`}>
      <Link href="/" className={styles.backLink}>← Back to all designs</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/tree5.JPEG"
            alt="Tree removal in Central Florida"
            fill priority quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadgeWrap}>
            <div className={styles.heroBadge}>
              <Image src="/images/HLSlogo-nobackground.png" alt="HLS Logo" width={90} height={90}
                style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
          </div>
          <h1 className={styles.heroTitle}>ROOTED IN<br />CENTRAL FLORIDA</h1>
          <p className={styles.heroSub}>
            Land clearing · Tree care · Fencing · DeLand, FL · Est. 2017
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:3865610003" className={styles.ctaPrimary}>
              GET A FREE QUOTE
            </a>
            <a href="#work" className={styles.ctaSecondary}>
              SEE OUR WORK ↓
            </a>
          </div>
        </div>
        <div className={styles.heroScroll}>SCROLL TO EXPLORE ↓</div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`${styles.services} ${styles.reveal}`} ref={ref(0)}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>
            <span>— WHAT WE DO —</span>
          </div>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>

            <article className={styles.sCard}>
              <div className={styles.sCardPatch}>
                <div className={styles.sCardPatchInner}>
                  <div className={styles.sCardIcon}>⛏</div>
                  <span className={styles.sCardPatchLabel}>SITE WORK</span>
                </div>
              </div>
              <div className={styles.sCardImg}>
                <Image src="/images/site4.PNG" alt="Site work" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <h3 className={styles.sCardTitle}>Land Clearing &amp; Earthwork</h3>
                <p>
                  Land clearing, grading, excavation, and drainage solutions.
                  Heavy equipment, Florida-tough crews. We prep your property
                  for whatever comes next — pads, drives, pastures, ponds.
                </p>
                <a href="tel:3865610003" className={styles.sCardLink}>Request a Quote →</a>
              </div>
            </article>

            <article className={styles.sCard}>
              <div className={styles.sCardPatch}>
                <div className={styles.sCardPatchInner}>
                  <div className={styles.sCardIcon}>🌳</div>
                  <span className={styles.sCardPatchLabel}>TREE SERVICES</span>
                </div>
              </div>
              <div className={styles.sCardImg}>
                <Image src="/images/tree1.jpeg" alt="Tree services" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <h3 className={styles.sCardTitle}>Removal, Trimming &amp; Grinding</h3>
                <p>
                  Tree removal, trimming, and stump grinding across Central
                  Florida. Our ISA Certified Arborist brings professional-grade
                  expertise and safe technique to every single job.
                </p>
                <a href="tel:3865610003" className={styles.sCardLink}>Request a Quote →</a>
              </div>
            </article>

            <article className={styles.sCard}>
              <div className={styles.sCardPatch}>
                <div className={styles.sCardPatchInner}>
                  <div className={styles.sCardIcon}>🪵</div>
                  <span className={styles.sCardPatchLabel}>FENCING</span>
                </div>
              </div>
              <div className={styles.sCardImg}>
                <Image src="/images/fence5.jpeg" alt="Fencing" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.sCardBody}>
                <h3 className={styles.sCardTitle}>Residential &amp; Commercial Fencing</h3>
                <p>
                  Wood, vinyl, chain-link, and agricultural fencing for
                  residential and commercial properties. Every post set right,
                  every run straight, built for the Florida climate.
                </p>
                <a href="tel:3865610003" className={styles.sCardLink}>Request a Quote →</a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── WHY HLS ── */}
      <section className={`${styles.whySection} ${styles.reveal}`} ref={ref(1)}>
        <div className={styles.whyBg}>
          <Image src="/images/site18.JPEG" alt="HLS site work" fill quality={75} style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div className={styles.whyOverlay} />
        <div className={styles.container}>
          <div className={styles.sectionBadge} style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span>— THE COMPANY —</span>
          </div>
          <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>
            Why Choose HLS
          </h2>
          <div className={styles.badgeGrid}>
            <div className={styles.trustBadge}>
              <div className={styles.trustBadgeInner}>
                <div className={styles.trustIcon}>★</div>
                <div className={styles.trustTitle}>Est. 2017</div>
                <div className={styles.trustSub}>Serving Central Florida</div>
              </div>
            </div>
            <div className={styles.trustBadge}>
              <div className={styles.trustBadgeInner}>
                <div className={styles.trustIcon}>✓</div>
                <div className={styles.trustTitle}>ISA Certified</div>
                <div className={styles.trustSub}>Arborist on Staff</div>
              </div>
            </div>
            <div className={styles.trustBadge}>
              <div className={styles.trustBadgeInner}>
                <div className={styles.trustIcon}>⚡</div>
                <div className={styles.trustTitle}>Residential</div>
                <div className={styles.trustSub}>&amp; Commercial</div>
              </div>
            </div>
            <div className={styles.trustBadge}>
              <div className={styles.trustBadgeInner}>
                <div className={styles.trustIcon}>🛡</div>
                <div className={styles.trustTitle}>Licensed</div>
                <div className={styles.trustSub}>&amp; Insured</div>
              </div>
            </div>
          </div>
          <p className={styles.whyCopy}>
            Based in DeLand, Florida, Hoag Land Services has been doing honest outdoor
            work since 2017. Site work, tree care, fencing — real crews with real
            equipment who know this land and take pride in doing it right.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="work" className={`${styles.portfolio} ${styles.reveal}`} ref={ref(2)}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>
            <span>— RECENT WORK —</span>
          </div>
          <h2 className={styles.sectionTitle}>Project Gallery</h2>
          <div className={styles.portfolioGrid}>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/site1.JPEG" alt="Land clearing DeLand" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption className={styles.pfCaption}>
                <span className={styles.pfTag}>SITE WORK</span>
                Land Clearing · DeLand, FL
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/tree7.jpeg" alt="Tree removal" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption className={styles.pfCaption}>
                <span className={styles.pfTag}>TREE SERVICES</span>
                Tree Removal · Residential
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/fence7.jpeg" alt="Fence install" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption className={styles.pfCaption}>
                <span className={styles.pfTag}>FENCING</span>
                Commercial Fence Install
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/tree3.jpeg" alt="Tree trimming" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption className={styles.pfCaption}>
                <span className={styles.pfTag}>TREE SERVICES</span>
                Tree Trimming · DeLeon Springs
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/fence1.jpeg" alt="Wood fence" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption className={styles.pfCaption}>
                <span className={styles.pfTag}>FENCING</span>
                Wood Fence · Residential
              </figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/site18.JPEG" alt="Excavation" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption className={styles.pfCaption}>
                <span className={styles.pfTag}>SITE WORK</span>
                Excavation · Orange City
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={`${styles.areaSection} ${styles.reveal}`} ref={ref(3)}>
        <div className={styles.container}>
          <div className={styles.sectionBadge}>
            <span>— WHERE WE WORK —</span>
          </div>
          <h2 className={styles.sectionTitle}>Service Area</h2>
          <div className={styles.areaContent}>
            <div className={styles.areaMap}>
              <div className={styles.areaMapInner}>
                <div className={styles.areaMapLabel}>CENTRAL FLORIDA</div>
                <div className={styles.areaMapSub}>VOLUSIA COUNTY &amp; SURROUNDING AREAS</div>
              </div>
            </div>
            <div className={styles.areaList}>
              {[
                { city: 'DeLand', note: 'Home Base' },
                { city: 'DeLeon Springs', note: 'Volusia County' },
                { city: 'Orange City', note: 'Volusia County' },
                { city: 'Deltona', note: 'Volusia County' },
                { city: 'Pierson', note: 'Volusia County' },
                { city: 'Lake Helen', note: 'Volusia County' },
                { city: 'Cassadaga', note: 'Volusia County' },
                { city: 'Enterprise', note: 'Volusia County' },
              ].map((a) => (
                <div key={a.city} className={styles.areaItem}>
                  <span className={styles.areaCity}>{a.city}</span>
                  <span className={styles.areaNote}>{a.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg}>
          <Image src="/images/fence5.jpeg" alt="Fence at dusk" fill quality={75} style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.ctaOverlay} />
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaBadge}>
              <Image src="/images/HLSlogo-nobackground.png" alt="HLS" width={70} height={70}
                style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaSub}>
              Free estimates for all services. We serve DeLand and surrounding Central Florida.
            </p>
            <a href="tel:3865610003" className={styles.ctaPhone}>(386) 561-0003</a>
            <a href="tel:3865610003" className={styles.ctaBtn}>GET A FREE QUOTE</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <Image src="/images/HLSlogo-nobackground.png" alt="HLS Logo" width={64} height={64}
              style={{ filter: 'brightness(0) invert(1) opacity(0.65)' }} />
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
