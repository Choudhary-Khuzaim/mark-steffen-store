import { motion } from 'framer-motion'

const PROJECTS = [
  { id: 1, label: 'New Book Draft', progress: 75 },
  { id: 2, label: 'Audiobook Recording', progress: 40 },
  { id: 3, label: 'Next Essay', progress: 90 },
]

function ProgressPanel() {
  return (
    <section className="bg-ink-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="border border-warm-paper/10 bg-gradient-to-br from-indigo-deep/50 via-ink-black to-ink-black px-5 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl font-bold uppercase tracking-[0.18em] text-warm-paper sm:text-4xl lg:text-5xl">
              From the Author&apos;s Desk
            </h2>
            <p className="max-w-sm text-sm text-warm-paper/55">
              Live progress on Mark&apos;s current writing and production work.
            </p>
          </div>

          <ul className="space-y-8 sm:space-y-10">
            {PROJECTS.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-2.5 flex items-center justify-between gap-4">
                  <p className="font-display text-sm uppercase tracking-[0.16em] text-warm-paper sm:text-base">
                    {project.label}
                  </p>
                  <span className="font-display text-sm tabular-nums text-ember-orange sm:text-base">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden bg-warm-paper/10">
                  <motion.div
                    className="h-full bg-ember-orange"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgressPanel
