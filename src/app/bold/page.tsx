'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Barlow_Condensed } from 'next/font/google'
import styles from './page.module.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
})

export default function BoldPage() {
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
    <div className={`${styles.page} ${barlow.variable}`}>
      <Link href="/" className={styles.backLink}>← Back to all designs</Link>

      {/* ── MARQUEE ── */}
      <div className={styles.marqueeBar}>
        <div className={styles.marqueeTrack}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className={styles.marqueeContent}>
              DELAND &nbsp;·&nbsp; SITE WORK &nbsp;·&nbsp; TREE SERVICES &nbsp;·&nbsp;
              FENCING &nbsp;·&nbsp; ISA CERTIFIED &nbsp;·&nbsp; EST. 2017 &nbsp;·&nbsp;
              (386) 561-0003 &nbsp;·&nbsp; CENTRAL FLORIDA &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.heroTag}>HOAG LAND SERVICES</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine1}>SITE</span>
            <span className={styles.heroLine2}>WORK.</span>
            <span className={styles.heroLine3}>TREE</span>
            <span className={styles.heroLine4}>SERVICE.</span>
            <span className={styles.heroLine5}>FENCING.</span>
          </h1>
          <p className={styles.heroSub}>
            DeLand&apos;s contractor for land clearing, tree removal,
            and fence installation. Licensed, insured, ISA Certified.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:3865610003" className={styles.ctaPrimary}>
              FREE QUOTE →
            </a>
            <a href="#work" className={styles.ctaSecondary}>
              SEE THE WORK
            </a>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgWrap}>
            <Image
              src="/images/site1.JPEG"
              alt="HLS excavator clearing land"
              fill priority quality={85}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className={styles.heroImgOverlay} />
          </div>
          <div className={styles.heroBlock}>
            <span className={styles.heroBlockNum}>7+</span>
            <span className={styles.heroBlockLabel}>YEARS IN DELAND</span>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`${styles.services} ${styles.reveal}`} ref={ref(0)}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>WHAT<br/>WE DO</h2>
        </div>
        <div className={styles.servicesCards}>

          <article className={styles.sCard}>
            <div className={styles.sCardImg}>
              <Image src="/images/site18.JPEG" alt="Site work" fill quality={80} style={{ objectFit: 'cover' }} />
              <div className={styles.sCardOverlay} />
            </div>
            <div className={styles.sCardBody}>
              <span className={styles.sCardNum}>01</span>
              <h3 className={styles.sCardTitle}>SITE WORK</h3>
              <p className={styles.sCardDesc}>
                Land clearing, grading, excavation, drainage. We prep your
                property for whatever comes next. Heavy equipment, serious results.
              </p>
              <a href="tel:3865610003" className={styles.sCardLink}>CALL NOW →</a>
            </div>
          </article>

          <article className={styles.sCard}>
            <div className={styles.sCardImg}>
              <Image src="/images/tree5.JPEG" alt="Tree removal" fill quality={80} style={{ objectFit: 'cover' }} />
              <div className={styles.sCardOverlay} />
            </div>
            <div className={styles.sCardBody}>
              <span className={styles.sCardNum}>02</span>
              <h3 className={styles.sCardTitle}>TREE SERVICES</h3>
              <p className={styles.sCardDesc}>
                Removal, trimming, stump grinding. ISA Certified Arborist on
                every job. Storm damage, hazard trees, tight clearances — handled.
              </p>
              <a href="tel:3865610003" className={styles.sCardLink}>CALL NOW →</a>
            </div>
          </article>

          <article className={styles.sCard}>
            <div className={styles.sCardImg}>
              <Image src="/images/fence5.jpeg" alt="Fence installation" fill quality={80} style={{ objectFit: 'cover' }} />
              <div className={styles.sCardOverlay} />
            </div>
            <div className={styles.sCardBody}>
              <span className={styles.sCardNum}>03</span>
              <h3 className={styles.sCardTitle}>FENCING</h3>
              <p className={styles.sCardDesc}>
                Residential and commercial. Wood, vinyl, chain-link, agricultural.
                Every post set right, every panel plumb.
              </p>
              <a href="tel:3865610003" className={styles.sCardLink}>CALL NOW →</a>
            </div>
          </article>

        </div>
      </section>

      {/* ── WHY HLS ── */}
      <section className={`${styles.whyHls} ${styles.reveal}`} ref={ref(1)}>
        <div className={styles.whyLeft}>
          <h2 className={styles.whyTitle}>THE<br/>COMPANY</h2>
          <div className={styles.whyImg}>
            <Image src="/images/tree2.jpeg" alt="HLS crew at work" fill quality={80} style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className={styles.whyRight}>
          <div className={styles.whyGrid}>
            <div className={styles.whyStat}>
              <div className={styles.whyStatNum}>2017</div>
              <div className={styles.whyStatLab}>ESTABLISHED</div>
            </div>
            <div className={styles.whyStat}>
              <div className={styles.whyStatNum}>ISA</div>
              <div className={styles.whyStatLab}>CERTIFIED ARBORIST</div>
            </div>
            <div className={styles.whyStat}>
              <div className={styles.whyStatNum}>RES+</div>
              <div className={styles.whyStatLab}>COMMERCIAL</div>
            </div>
            <div className={styles.whyStat}>
              <div className={styles.whyStatNum}>LIC.</div>
              <div className={styles.whyStatLab}>&amp; INSURED</div>
            </div>
          </div>
          <p className={styles.whyCopy}>
            We&apos;re a DeLand-based crew that does land clearing, tree work, and
            fencing across Volusia County. No fluff. No mystery subcontractors.
            When you call HLS, HLS shows up with the right equipment and gets it done.
          </p>
          <a href="tel:3865610003" className={styles.whyPhone}>(386) 561-0003</a>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="work" className={`${styles.portfolio} ${styles.reveal}`} ref={ref(2)}>
        <div className={styles.portfolioHead}>
          <h2 className={styles.portfolioTitle}>THE WORK</h2>
          <span className={styles.portfolioSub}>RECENT PROJECTS · VOLUSIA COUNTY</span>
        </div>
        <div className={styles.portfolioGrid}>
          <div className={`${styles.pfItem} ${styles.pfItemLg}`}>
            <Image src="/images/site1.JPEG" alt="Land clearing" fill quality={80} style={{ objectFit: 'cover' }} />
            <div className={styles.pfOverlay}><span>LAND CLEARING</span></div>
          </div>
          <div className={styles.pfItem}>
            <Image src="/images/tree7.jpeg" alt="Tree removal" fill quality={80} style={{ objectFit: 'cover' }} />
            <div className={styles.pfOverlay}><span>TREE REMOVAL</span></div>
          </div>
          <div className={styles.pfItem}>
            <Image src="/images/fence7.jpeg" alt="Fence install" fill quality={80} style={{ objectFit: 'cover' }} />
            <div className={styles.pfOverlay}><span>FENCING</span></div>
          </div>
          <div className={styles.pfItem}>
            <Image src="/images/tree3.jpeg" alt="Tree trimming" fill quality={80} style={{ objectFit: 'cover' }} />
            <div className={styles.pfOverlay}><span>TREE TRIMMING</span></div>
          </div>
          <div className={styles.pfItem}>
            <Image src="/images/fence1.jpeg" alt="Wood fence" fill quality={80} style={{ objectFit: 'cover' }} />
            <div className={styles.pfOverlay}><span>WOOD FENCE</span></div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={`${styles.areaSection} ${styles.reveal}`} ref={ref(3)}>
        <div className={styles.areaInner}>
          <h2 className={styles.areaTitle}>WHERE<br/>WE WORK</h2>
          <div className={styles.areaList}>
            {[
              'DeLand', 'DeLeon Springs', 'Orange City',
              'Deltona', 'Pierson', 'Lake Helen',
              'Cassadaga', 'Enterprise', 'Osteen'
            ].map((a) => (
              <div key={a} className={styles.areaItem}>
                <span className={styles.areaDot}>▪</span> {a}
              </div>
            ))}
          </div>
          <p className={styles.areaNote}>
            Volusia County and surrounding Central Florida. Call to confirm your area.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaLeft}>
          <h2 className={styles.ctaTitle}>GET IT<br/>DONE.</h2>
        </div>
        <div className={styles.ctaRight}>
          <p className={styles.ctaTag}>CALL OR TEXT</p>
          <a href="tel:3865610003" className={styles.ctaPhone}>(386) 561-0003</a>
          <p className={styles.ctaOr}>Free estimates. Fast response.</p>
          <a href="tel:3865610003" className={styles.ctaBtn}>REQUEST A QUOTE</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <Image src="/images/HLSlogo-nobackground.png" alt="HLS" width={64} height={64}
              style={{ filter: 'brightness(0) invert(1)' }} />
            <div>
              <div className={styles.footerName}>HOAG LAND SERVICES</div>
              <div className={styles.footerLoc}>DELAND, FLORIDA</div>
            </div>
          </div>
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <span className={styles.footerColHead}>SERVICES</span>
              <span>Site Work</span>
              <span>Tree Services</span>
              <span>Fencing</span>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerColHead}>SERVICE AREA</span>
              <span>DeLand · DeLeon Springs</span>
              <span>Orange City · Deltona</span>
              <span>Central Florida</span>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerColHead}>CONTACT</span>
              <a href="tel:3865610003">(386) 561-0003</a>
              <a href="mailto:tyler@hlsdeland.com">tyler@hlsdeland.com</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2024 HOAG LAND SERVICES · ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  )
}
