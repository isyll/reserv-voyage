'use client'

import Logo from './Logo'
import { ChevronDown, ShoppingCart } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { useState } from 'react'
import Navbar from './Navbar'
import { cn } from '@/lib/utils'

function Header() {
  return (
    <header className="w-full px-10 py-4 flex justify-between">
      <Logo />
      <Navbar className="self-center" />
      <CurrencySwitcher className="self-center" />
      <div className="rounded-full border border-slate-400 p-2">
        <ShoppingCart />
      </div>
    </header>
  )
}

export interface Currency {
  name: string
  code: string
}

const currencies: Currency[] = [
  {
    name: 'Euro',
    code: 'EUR',
  },
  {
    name: 'Dollar',
    code: 'USD',
  },
  {
    name: 'Franc CFA',
    code: 'XOF',
  },
]

function CurrencySwitcher({ className }: { className?: string }) {
  // TODO: retrieve selected currency
  const [currency, setCurrency] = useState(currencies[0])
  className = className ?? ''

  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger className={cn('navitem-btn cursor-pointer', className)}>
        {currency.code}
        <ChevronDown className="inline" />
      </HoverCardTrigger>
      <HoverCardContent className="bg-white w-24">
        {currencies.map((item, index) => {
          return (
            <button
              key={index}
              className="btn-reset navitem-btn block p-2"
              onClick={() => setCurrency(item)}
            >
              {item.code}
            </button>
          )
        })}
      </HoverCardContent>
    </HoverCard>
  )
}

export default Header
