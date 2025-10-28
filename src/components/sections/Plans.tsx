'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckIcon } from '@heroicons/react/24/solid'

const planGroups = [
  {
    name: "SmartCare — entry",
    cards: [
      {
        title: "SmartCare",
        price: "BDT 199 signup + 149/mo",
        points: [
          "Record setup, care plan, reminders, WhatsApp support",
          "Starter Screen tests ONLY if flagged: BDT 1,200 split 3×400",
          "Add any visit/service pay-per-use"
        ],
        cta: { label: "Start on WhatsApp", href: "https://wa.me/880XXXXXXXXXX" }
      }
    ]
  },
  {
    name: "ActiveCare — staged",
    cards: [
      {
        title: "Active Lite",
        price: "BDT 2,500/mo",
        points: ["1 nurse 45-min visit + 1 phone check"],
        cta: { label: "Book Active Lite", href: "https://wa.me/880XXXXXXXXXX" }
      },
      {
        title: "Active Weekly",
        price: "BDT 4,000/mo",
        points: ["1 visit/week + monthly doctor note"],
        cta: { label: "Book Active Weekly", href: "https://wa.me/880XXXXXXXXXX" }
      },
      {
        title: "Active Rehab",
        price: "BDT 7,500/mo",
        points: ["2 visits/week (nurse/HCA mix) + issue tracking"],
        cta: { label: "Book Active Rehab", href: "https://wa.me/880XXXXXXXXXX" }
      }
    ]
  },
  {
    name: "TotalCare — daily",
    cards: [
      {
        title: "Daily Lite",
        price: "BDT 14,000–18,000/mo",
        points: ["1 visit/day 45–60 min"],
        cta: { label: "Discuss Daily Lite", href: "https://wa.me/880XXXXXXXXXX" }
      },
      {
        title: "Daily Plus",
        price: "BDT 26,000–32,000/mo",
        points: ["2 visits/day or extended block"],
        cta: { label: "Discuss Daily Plus", href: "https://wa.me/880XXXXXXXXXX" }
      },
      {
        title: "Intensive",
        price: "Custom",
        points: ["Custom nurse + HCA schedule, hospital liaison"],
        cta: { label: "Get a Quote", href: "https://wa.me/880XXXXXXXXXX" }
      }
    ]
  }
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Our Care Plans
          </h2>
        </div>
        <div className="mt-16 space-y-16">
          {planGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-2xl font-bold text-brand-ink font-display text-center mb-8">
                {group.name}
              </h3>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {group.cards.map((card) => (
                  <motion.div
                    key={card.title}
                    className="flex flex-col rounded-xl2 bg-white p-8 shadow-k-card"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h4 className="text-xl font-bold text-brand-ink font-display">{card.title}</h4>
                    <p className="mt-2 text-brand-ink80 font-semibold">{card.price}</p>
                    <ul role="list" className="mt-6 space-y-3 text-sm text-brand-ink80">
                      {card.points.map((point) => (
                        <li key={point} className="flex gap-x-3">
                          <CheckIcon className="h-5 w-5 flex-none text-brand" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex-grow flex items-end">
                      <Button asChild className="w-full">
                        <Link href={card.cta.href}>{card.cta.label}</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
