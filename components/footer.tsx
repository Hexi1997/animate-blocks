import Link from "next/link"
import { Heart } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Components", href: "#components" },
      { name: "Documentation", href: "#docs" },
      { name: "Examples", href: "#examples" },
      { name: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Getting Started", href: "#getting-started" },
      { name: "Installation", href: "#installation" },
      { name: "Customization", href: "#customization" },
      { name: "Contributing", href: "#contributing" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "GitHub", href: "https://github.com/your-username/animate-blocks" },
      { name: "Discord", href: "#discord" },
      { name: "Twitter", href: "#twitter" },
      { name: "Discussions", href: "#discussions" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Animate-Blocks
            </Link>
            <p className="text-base text-muted-foreground max-w-md">
              Beautiful, reusable animated components for modern web development.
              Built with React, Next.js, and the latest animation libraries.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Hexi1997/animate-blocks"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/Hexi1997"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <FaXTwitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Links sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  {footerLinks[0].title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks[0].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  {footerLinks[1].title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks[1].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  {footerLinks[2].title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks[2].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; 2024 Animate-Blocks. Open source under the MIT License.
            </p>
            <p className="flex items-center gap-1 text-xs leading-5 text-muted-foreground">
              Built with <Heart className="h-3 w-3 text-red-500" /> by the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
