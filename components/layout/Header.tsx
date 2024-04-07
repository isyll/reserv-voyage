import Logo from './Logo'
import { ChevronDown } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

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
]

export default function Header() {
  const hasSubItems = (item: MenuItem) =>
    item.subItems != undefined && item.subItems.length > 0

  return (
    <div className="w-full p-10 flex justify-between">
      <Logo />
      <div className="flex gap-16 pr-10">
        {menuItems.map((item, index) => {
          if (hasSubItems(item)) {
            return (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <a key={index} href={item.url} className="navitem-btn">
                    {item.name}
                    <ChevronDown className="inline" />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent>
                  {item.subItems?.map((sub, index) => (
                    <div key={index} className="p-3">
                      <a href={sub.url} className="navitem-btn">
                        {sub.name}
                      </a>
                    </div>
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
      </div>
    </div>
  )
}
