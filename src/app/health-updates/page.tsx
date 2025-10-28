import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Health Updates & Resources | I-Medic',
  description: 'A public page for community education and inspiration: Tips for home caregiving, elderly wellness, and rehabilitation, news about I-Medic expansions and partnerships, stories from caregivers and families, and featured health awareness campaigns.',
}

const posts = [
  {
    title: "Tips for home caregiving, elderly wellness, and rehabilitation.",
    category: "Community Education",
    link: "#"
  },
  {
    title: "News about I-Medic expansions and partnerships.",
    category: "Announcements",
    link: "#"
  },
  {
    title: "Stories from caregivers and families.",
    category: "Inspiration",
    link: "#"
  },
  {
    title: "Featured health awareness campaigns.",
    category: "Campaigns",
    link: "#"
  }
];

export default function HealthUpdatesPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Health Updates & Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A public page for community education and inspiration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
                <p className="text-sm font-semibold text-teal-600">{post.category}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                  {post.title}
                </h2>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={post.link}>
                      Read more <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
