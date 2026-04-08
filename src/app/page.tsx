import Link from 'next/link'
import styles from './page.module.css'

const variants = [
  {
    num: '01',
    slug: 'rugged',
    title: 'American Work Ethic',
    desc: 'Heavy slab serif. Carhartt meets John Deere. Editorial broadsheet layout with stamp-on-load animation.',
    tags: ['Zilla Slab', 'Earthy Palette', 'Stamp Animation'],
  },
  {
    num: '02',
    slug: 'bold',
    title: 'Contractor Confidence',
    desc: 'High-contrast Mondrian grid. Asymmetric split screen. Marquee strip. Zero softness.',
    tags: ['Barlow Condensed', 'Green + Amber + Black', 'Marquee Strip'],
  },
  {
    num: '03',
    slug: 'outdoor',
    title: 'Florida Outdoors',
    desc: 'NPS poster meets REI catalog. Badge and patch elements. Trail-map scroll reveal. Parallax.',
    tags: ['Oswald', 'Forest + Sand + Sky', 'Badge Aesthetic'],
  },
  {
    num: '04',
    slug: 'premium',
    title: 'Upscale Property Services',
    desc: 'Geometric sans. Maximum breathing room. Smooth counter animations. Commercial-contract energy.',
    tags: ['DM Sans', 'Charcoal + White', 'Counter Animation'],
  },
  {
    num: '05',
    slug: 'local',
    title: 'Central Florida Local',
    desc: 'Warm, sun-baked, approachable. Big phone number. Community trust, ISA badge front-and-center.',
    tags: ['Fraunces', 'Amber + Cream + Green', 'Playful Scroll'],
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.label}>DESIGN VARIANTS · HOAG LAND SERVICES</span>
          <h1 className={styles.title}>HLS Design System</h1>
          <p className={styles.subtitle}>
            5 complete landing page directions for the same Central Florida landscaping business.
            Each is self-contained, fully built, and shippable.
          </p>
        </div>
      </header>

      <section className={styles.grid}>
        {variants.map((v) => (
          <Link key={v.slug} href={`/${v.slug}`} className={styles.card}>
            <span className={styles.cardNum}>{v.num}</span>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{v.title}</h2>
              <p className={styles.cardDesc}>{v.desc}</p>
              <div className={styles.tags}>
                {v.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
            <span className={styles.cardArrow}>→</span>
          </Link>
        ))}
      </section>

      <footer className={styles.footer}>
        <span>Hoag Land Services · DeLand, FL · (386) 561-0003 · hlsdeland.com</span>
      </footer>
    </main>
  )
}
