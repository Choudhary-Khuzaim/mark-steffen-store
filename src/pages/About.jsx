import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

const STATS = [
  { value: '2', label: 'Published Works' },
  { value: '14', label: 'Chapters in The Constitution of God' },
  { value: '∞', label: 'Questions Worth Exploring' },
]

const THEMES = [
  {
    number: '01',
    title: 'Creation',
    body: 'Exploring the origins of existence and the framework that gives creation meaning.',
  },
  {
    number: '02',
    title: 'Purpose',
    body: 'Examining why humanity exists and what physical life is meant to accomplish.',
  },
  {
    number: '03',
    title: 'Spirit',
    body: 'Considering the relationship between the human body, the human spirit, and existence beyond physical life.',
  },
]

const BOOKS = [
  {
    number: '01',
    title: 'The Constitution of God',
    body: 'An exploration of creation, humanity, spiritual law, and the purpose of life.',
    image: IMAGES.constitutionHero1,
    to: '/product/1',
  },
  {
    number: '02',
    title: 'A Guidebook for Living and Dying',
    body: 'An exploration of why we physically die, why earthly life matters, and how the human spirit develops.',
    image: IMAGES.guidebookHero1,
    to: '/product/2',
  },
]

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="bg-cream-bg">
      {/* Hero — Author · Founder · Writer */}
      <section className="border-b border-black/5 bg-[#180c3c] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
              Author · Founder · Writer
            </p>
            <h1 className="mt-5 font-condensed text-6xl font-normal uppercase leading-[0.9] tracking-[0.03em] sm:text-7xl md:text-8xl">
              Mark
              <br />
              Steffen.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/75 sm:text-lg">
              A writer and spiritual thinker exploring the questions that sit at
              the center of human existence — creation, purpose, life, death,
              and the nature of the human spirit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop/books"
                className="rounded-full bg-[#fc783c] px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-pure-black transition hover:bg-white"
              >
                Explore the Books
              </Link>
              <a
                href="#his-story"
                className="rounded-full border border-white/70 px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#180c3c]"
              >
                His Story
              </a>
            </div>
            <nav
              aria-label="Breadcrumb"
              className="mt-10 font-sans text-xs uppercase tracking-[0.16em] text-white/45"
            >
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">About Mark</span>
            </nav>
          </div>

          <motion.div
            className="relative min-h-[420px] overflow-hidden bg-[#121015] lg:min-h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={IMAGES.markSteffenAuthor}
              alt="Mark Steffen"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#180c3c]/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#180c3c]/40" />
          </motion.div>
        </div>
      </section>

      {/* His Story */}
      <section
        id="his-story"
        className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
            The Author
          </p>
          <h2 className="mt-4 max-w-3xl font-condensed text-4xl font-normal uppercase leading-none tracking-[0.04em] text-pure-black sm:text-5xl md:text-6xl">
            A lifelong search for meaning.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-pure-black/75 sm:text-lg">
            <p>
              Mark Steffen’s work is rooted in a search for understanding —
              exploring the origins of creation, the purpose of human life, and
              the relationship between the physical and spiritual dimensions of
              existence.
            </p>
            <p>
              Through his writing, Mark examines ideas that challenge
              conventional assumptions about why we are here, what gives life
              meaning, and what the human experience ultimately points toward.
            </p>
            <p>
              His books bring together spiritual reflection, philosophical
              inquiry, and a structured examination of humanity’s place within a
              greater design.
            </p>
          </div>

          <div className="mt-14 grid gap-6 border-t border-black/10 pt-10 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-condensed text-5xl font-normal uppercase tracking-[0.04em] text-pure-black sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-xs font-bold uppercase tracking-[0.18em] text-pure-black/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Work — Creation / Purpose / Spirit */}
      <section className="border-y border-black/5 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
            The Work
          </p>
          <h2 className="mt-4 max-w-3xl font-condensed text-4xl font-normal uppercase leading-none tracking-[0.04em] text-pure-black sm:text-5xl md:text-6xl">
            Ideas that ask us to look deeper.
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-pure-black/70 sm:text-lg">
            Mark Steffen’s writing explores fundamental questions about
            existence and the human experience. Rather than offering simple
            answers, his work encourages readers to examine the foundations
            beneath the questions themselves.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {THEMES.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#fc783c]">
                  {theme.number}
                </p>
                <h3 className="mt-3 font-condensed text-3xl font-normal uppercase tracking-[0.03em] text-pure-black">
                  {theme.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-pure-black/65 sm:text-base">
                  {theme.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works — The Books */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
            Selected Works
          </p>
          <h2 className="mt-4 font-condensed text-4xl font-normal uppercase leading-none tracking-[0.04em] text-pure-black sm:text-5xl md:text-6xl">
            The Books
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-pure-black/70 sm:text-lg">
            Two works exploring creation, purpose, life, death, and the deeper
            meaning of human existence.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {BOOKS.map((book, index) => (
              <motion.article
                key={book.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-[#180c3c] text-white sm:flex-row"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative aspect-[3/4] w-full shrink-0 bg-[#121015] sm:aspect-auto sm:w-[42%]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-7 sm:p-8">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#fc783c]">
                    {book.number}
                  </p>
                  <h3 className="mt-3 font-condensed text-3xl font-normal uppercase leading-[1.05] tracking-[0.03em]">
                    {book.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
                    {book.body}
                  </p>
                  <Link
                    to={book.to}
                    className="mt-6 inline-flex font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#fc783c] transition hover:text-white"
                  >
                    View Book →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Books */}
      <section className="border-y border-black/5 bg-[#121015] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
            Beyond the Books
          </p>
          <h2 className="mt-4 max-w-3xl font-condensed text-4xl font-normal uppercase leading-none tracking-[0.04em] sm:text-5xl md:text-6xl">
            Building a body of thought.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 font-sans text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              Beyond his writing, Mark Steffen is the founder and director of
              Twilife International and The Constitution of God, Inc.
            </p>
            <p>
              These efforts reflect a broader commitment to exploring questions
              surrounding human existence, spiritual development, and the
              purpose of life.
            </p>
            <p className="text-white/55">
              A continuing search for understanding, purpose, and the meaning
              behind existence.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cream-bg px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <blockquote className="mx-auto max-w-4xl text-center">
          <p className="font-condensed text-3xl font-normal uppercase leading-[1.15] tracking-[0.03em] text-pure-black sm:text-4xl md:text-5xl">
            “When we understand the original purpose for life and death, we can
            truly fulfill the meaning of our existence.”
          </p>
          <footer className="mt-8 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
            — Mark Steffen
          </footer>
        </blockquote>
      </section>

      {/* Continue exploring */}
      <section className="border-t border-black/5 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#fc783c]">
            Continue Exploring
          </p>
          <h2 className="mt-4 font-condensed text-4xl font-normal uppercase leading-none tracking-[0.04em] text-pure-black sm:text-5xl md:text-6xl">
            The questions continue.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-pure-black/70 sm:text-lg">
            Explore Mark Steffen’s books and discover a different perspective on
            creation, life, death, purpose, and the human spirit.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/shop/books"
              className="w-full max-w-md rounded-full bg-black px-7 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-orange"
            >
              Explore the Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
