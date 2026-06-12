import Link from "next/link";

const posts = [
  {
    slug: "belajar-nextjs",
    title: "Belajar Next.js",
    image: "/images/image-1.jpg",
    date: "13.01.2022",
    author: "Admin",
    excerpt:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.",
  },
  {
    slug: "latihan-route-nextjs",
    title: "Belajar Next.js",
    image: "/images/image-1.jpg",
    date: "13.01.2022",
    author: "Admin",
    excerpt:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.",
  },
  {
    slug: "belajar-nextjs",
    title: "Belajar Next.js",
    image: "/images/image-1.jpg",
    date: "13.01.2022",
    author: "Admin",
    excerpt:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.",
  },
];

export default function PostCard(){
    return(
        <div className="space-y-8">
        {posts.map((post, index) => (
          <article key={index} className="flex gap-6">
            {/* Thumbnail */}
            <div className="w-52 shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="h-36 w-full rounded-lg object-cover shadow-md"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl font-bold hover:text-blue-600"
              >
                {post.title}
              </Link>

              <p className="mt-1 text-sm text-gray-500">
                Published{" "}
                <span className="underline">{post.date}</span> by{" "}
                {post.author}
              </p>

              <p className="mt-4 text-gray-700">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    )
}