import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Blog - I-Medic Healthcare',
  description: 'Stay informed with the latest healthcare tips, family care advice, and I-Medic updates for Bangladeshi families.',
}

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "5 Essential Health Checks Every Bangladeshi Family Should Schedule",
    excerpt: "Regular health screenings can prevent serious conditions and ensure your family stays healthy. Learn which tests are most important for different age groups.",
    author: "Dr. Rashida Ahmed",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Health Tips",
    image: "/images/blog/health-checks.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Managing Diabetes at Home: A Complete Guide for Families",
    excerpt: "Practical tips for managing diabetes with proper diet, medication tracking, and family support systems.",
    author: "Nurse Fatima Khan",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Care Management",
    image: "/images/blog/diabetes-care.jpg",
    featured: false
  },
  {
    id: 3,
    title: "How I-Medic Helped the Rahman Family Through Recovery",
    excerpt: "A heartwarming story of how coordinated care made all the difference during a challenging time.",
    author: "I-Medic Team",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Success Stories",
    image: "/images/blog/success-story.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Preparing Your Home for Elderly Care: Essential Modifications",
    excerpt: "Simple changes you can make to ensure your home is safe and comfortable for elderly family members.",
    author: "Care Coordinator Sarah",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Home Care",
    image: "/images/blog/home-modifications.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Understanding Mental Health Support for Bangladeshi Families",
    excerpt: "Breaking the stigma and finding the right mental health resources for your family's wellbeing.",
    author: "Dr. Aminul Islam",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Mental Health",
    image: "/images/blog/mental-health.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Medication Management: Tips for Busy Families",
    excerpt: "How to organize medications, set reminders, and ensure proper adherence for multiple family members.",
    author: "Pharmacist Ruma Begum",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "Care Management",
    image: "/images/blog/medication-management.jpg",
    featured: false
  }
]

const categories = [
  "All Posts",
  "Health Tips", 
  "Care Management",
  "Success Stories",
  "Home Care",
  "Mental Health"
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/20 to-blue-50/20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-teal-100/60 to-blue-100/60 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-gradient-to-br from-violet-100/60 to-pink-100/60 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-teal-100 px-3 sm:px-4 py-2 text-sm font-medium text-teal-800 mb-4">
              <span className="h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
              Health & Care Blog
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-display bg-gradient-to-r from-teal-700 via-blue-700 to-violet-700 bg-clip-text text-transparent">
              Health Tips & Care Stories
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 font-medium px-2">
              Expert advice, family care tips, and inspiring stories from the I-Medic community to help you provide the best care for your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-display mb-2">Featured Article</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            </div>
            
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift bg-gradient-to-br from-white to-teal-50/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-lg"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-4 mx-auto">
                        <UserIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-700">Featured Article Image</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                      {featuredPost.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-800">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-display mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <UserIcon className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  category === "All Posts"
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift bg-white/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-2 mx-auto">
                        <UserIcon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-xs font-medium text-gray-600">Article Image</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-gray-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-display mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <UserIcon className="h-3 w-3" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" asChild className="w-full text-sm border-teal-200 text-teal-700 hover:bg-teal-50">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRightIcon className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-teal-600 via-blue-600 to-violet-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Get the latest healthcare advice and I-Medic updates delivered to your WhatsApp.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 shadow-lg hover:shadow-xl">
            <Link href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20subscribe%20to%20your%20health%20tips%20updates">
              Subscribe via WhatsApp
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
