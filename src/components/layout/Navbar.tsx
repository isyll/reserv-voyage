import { ChevronDown } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { cn } from '@/lib/utils'

export interface MenuItem {
  url: string
  name: string
  subItems?: Array<{ url: string; name: string }>
}

const menuItems: MenuItem[] = [
  {
    url: '#',
    name: 'Accueil',
  },
  {
    url: '#',
    name: 'Liste',
    subItems: [
      {
        url: '#',
        name: 'Rechercher sur une carte',
      },
      {
        url: '#',
        name: 'Rechercher par le nom',
      },
    ],
  },
  {
    url: '#',
    name: 'Hotels',
  },
  {
    url: '#',
    name: 'Pages',
  },
  {
    url: '#',
    name: 'Contact',
  },
]

function Navbar({ className }: { className?: string }) {
  const hasSubItems = (item: MenuItem) =>
    item.subItems != undefined && item.subItems.length > 0
  className = className ?? ''

  return (
    <nav className={cn(className, 'flex gap-16 pr-10')}>
      {menuItems.map((item, index) => {
        if (hasSubItems(item)) {
          return (
            <HoverCard key={index} openDelay={0} closeDelay={0}>
              <HoverCardTrigger
                key={index}
                href={item.url}
                className="navitem-btn"
              >
                {item.name}
                <ChevronDown className="inline" />
              </HoverCardTrigger>
              <HoverCardContent className="shadow-md bg-white">
                {item.subItems?.map((sub, index) => (
                  <a
                    key={index}
                    href={sub.url}
                    className="navitem-btn p-3 block"
                  >
                    {sub.name}
                  </a>
                ))}
              </HoverCardContent>
            </HoverCard>
          )
        }

        return (
          <a key={index} href={item.url} className="navitem-btn">
            {item.name}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar
