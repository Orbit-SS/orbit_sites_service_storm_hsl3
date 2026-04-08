'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Zilla_Slab, Roboto_Condensed } from 'next/font/google'
import styles from './page.module.css'

const zilla = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-zilla',
})

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export default function RuggedPage() {
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
      { threshold: 0.12 }
    )
    revealRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const ref = (i: number) => (el: HTMLElement | null) => { revealRefs.current[i] = el }

  return (
    <div className={`${styles.page} ${zilla.variable} ${roboto.variable}`}>
      <Link href="/" className={styles.backLink}>← Back to all designs</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/site1.JPEG"
            alt="HLS excavator clearing land in DeLand Florida"
            fill priority quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>HOAG LAND SERVICES · EST. 2017 · DELAND, FL</p>
          <h1 className={styles.heroTitle}>
            WE WORK<br />THE LAND.
          </h1>
          <p className={styles.heroSub}>
            Site Work · Tree Services · Fencing · Central Florida
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:3865610003" className={styles.ctaPrimary}>
              GET A FREE QUOTE
            </a>
            <a href="#portfolio" className={styles.ctaSecondary}>
              SEE OUR WORK ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`${styles.services} ${styles.reveal}`} ref={ref(0)}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>WHAT WE DO</span>
            <span className={styles.rule} />
          </div>
          <h2 className={styles.sectionTitle}>Three Trades. One Crew.</h2>
          <div className={styles.servicesGrid}>

            <article className={styles.serviceCard}>
              <div className={styles.serviceImg}>
                <Image src="/images/site4.PNG" alt="Site work and land clearing" fill quality={80} style={{ objectFit: 'cover' }} />
                <div className={styles.serviceImgOverlay} />
                <span className={styles.serviceLabel}>SITE WORK</span>
              </div>
              <div className={styles.serviceBody}>
                <h3 className={styles.serviceTitle}>Land Clearing &amp; Earthwork</h3>
                <p>
                  Land clearing, grading, excavation, and drainage. We move dirt,
                  prep lots, and get your property ready for whatever comes next —
                  house pads, driveways, pasture, ponds.
                </p>
                <a href="tel:3865610003" className={styles.serviceLink}>Call to Discuss →</a>
              </div>
            </article>

            <article className={styles.serviceCard}>
              <div className={styles.serviceImg}>
                <Image src="/images/tree5.JPEG" alt="Tree removal with crane" fill quality={80} style={{ objectFit: 'cover' }} />
                <div className={styles.serviceImgOverlay} />
                <span className={styles.serviceLabel}>TREE SERVICES</span>
              </div>
              <div className={styles.serviceBody}>
                <h3 className={styles.serviceTitle}>Removal, Trimming &amp; Grinding</h3>
                <p>
                  Tree removal, trimming, and stump grinding. Our ISA Certified
                  Arborist handles storm damage cleanup to precision removals near
                  structures. Safe, efficient, thorough.
                </p>
                <a href="tel:3865610003" className={styles.serviceLink}>Call to Discuss →</a>
              </div>
            </article>

            <article className={styles.serviceCard}>
              <div className={styles.serviceImg}>
                <Image src="/images/fence5.jpeg" alt="Fence installation" fill quality={80} style={{ objectFit: 'cover' }} />
                <div className={styles.serviceImgOverlay} />
                <span className={styles.serviceLabel}>FENCING</span>
              </div>
              <div className={styles.serviceBody}>
                <h3 className={styles.serviceTitle}>Residential &amp; Commercial Fencing</h3>
                <p>
                  Residential and commercial fence installation. Wood, vinyl,
                  chain-link, and agricultural. Built straight, set deep,
                  built to last a Florida summer and then some.
                </p>
                <a href="tel:3865610003" className={styles.serviceLink}>Call to Discuss →</a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── WHY HLS ── */}
      <section className={`${styles.whyHls} ${styles.reveal}`} ref={ref(1)}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>THE OUTFIT</span>
            <span className={styles.rule} />
          </div>
          <h2 className={styles.sectionTitle}>Why Hoag Land Services</h2>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={styles.statVal}>Est. 2017</div>
              <div className={styles.statLab}>In the Field</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statVal}>ISA Certified</div>
              <div className={styles.statLab}>Arborist on Staff</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statVal}>Res. &amp; Comm.</div>
              <div className={styles.statLab}>We Do Both</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statVal}>Licensed</div>
              <div className={styles.statLab}>&amp; Insured</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statVal}>Central FL</div>
              <div className={styles.statLab}>We Know the Land</div>
            </div>
          </div>
          <div className={styles.whyCopy}>
            <p>
              Tyler Hoag started HLS in 2017 with a simple idea: show up, work hard,
              do what you said you'd do. Seven years later that's still the whole
              operation. Real people, real equipment, real results — no subcontracting
              everything out, no mystery crews. If you hired HLS, HLS shows up.
            </p>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className={`${styles.portfolio} ${styles.reveal}`} ref={ref(2)}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>THE WORK</span>
            <span className={styles.rule} />
          </div>
          <h2 className={styles.sectionTitle}>Recent Projects</h2>
          <div className={styles.portfolioGrid}>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/site18.JPEG" alt="Land clearing project DeLand" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>Land Clearing · DeLand, FL</figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/tree1.jpeg" alt="Tree removal residential" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>Tree Removal · Residential</figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/fence7.jpeg" alt="Fence installation commercial" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>Fence Install · Commercial</figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/tree3.jpeg" alt="Tree trimming DeLeon Springs" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>Tree Trimming · DeLeon Springs</figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/fence1.jpeg" alt="Wood fence install" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>Wood Fence · Residential</figcaption>
            </figure>
            <figure className={styles.pfItem}>
              <div className={styles.pfImg}>
                <Image src="/images/tree7.jpeg" alt="Stump grinding" fill quality={80} style={{ objectFit: 'cover' }} />
              </div>
              <figcaption>Stump Grinding · Orange City</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={`${styles.serviceArea} ${styles.reveal}`} ref={ref(3)}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.rule} />
            <span className={styles.eyebrow}>WHERE WE WORK</span>
            <span className={styles.rule} />
          </div>
          <h2 className={styles.sectionTitle}>Service Area</h2>
          <div className={styles.areaGrid}>
            {[
              'DeLand', 'DeLeon Springs', 'Orange City', 'Deltona',
              'Pierson', 'Lake Helen', 'Cassadaga', 'Enterprise',
              'Osteen', 'Volusia County'
            ].map((a) => (
              <div key={a} className={styles.areaItem}>{a}</div>
            ))}
          </div>
          <p className={styles.areaNotes}>
            Based in DeLand, Florida. Serving Volusia County and surrounding Central
            Florida communities. Not sure if we cover your area? Just call.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaSub}>Call us. We answer. We show up. We work.</p>
          <a href="tel:3865610003" className={styles.ctaPhone}>(386) 561-0003</a>
          <p className={styles.ctaOr}>— or —</p>
          <a href="tel:3865610003" className={styles.ctaBtn}>REQUEST A QUOTE</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <Image src="/images/HLSlogo-nobackground.png" alt="HLS Logo" width={72} height={72}
              style={{ filter: 'brightness(0) invert(1) opacity(0.6)' }} />
            <span className={styles.footerBrand}>Hoag Land Services</span>
          </div>
          <div className={styles.footerCol}>
            <strong>Contact</strong>
            <a href="tel:3865610003">(386) 561-0003</a>
            <a href="mailto:tyler@hlsdeland.com">tyler@hlsdeland.com</a>
            <span>DeLand, Florida</span>
          </div>
          <div className={styles.footerCol}>
            <strong>Services</strong>
            <span>Site Work</span>
            <span>Tree Services</span>
            <span>Fencing</span>
          </div>
          <div className={styles.footerCol}>
            <strong>Service Area</strong>
            <span>DeLand · DeLeon Springs</span>
            <span>Orange City · Deltona</span>
            <span>Central Florida</span>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2024 Hoag Land Services · DeLand, FL · All Rights Reserved
        </div>
      </footer>
    </div>
  )
}
