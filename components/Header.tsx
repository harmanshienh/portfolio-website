import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import WebsiteLogo from './WebsiteLogo'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-5xl items-center justify-between select-none'>
        <div>
          <Link href='/'>
            <WebsiteLogo />
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors duration-150 hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors duration-150 hover:text-foreground'>
            <Link href='/experience'>Experience</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}