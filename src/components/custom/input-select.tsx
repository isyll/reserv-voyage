'use client'

import { ChangeEvent, useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

interface Params {
  placeholder: string
  className?: string
}

const popularDestinations = [
  {
    name: 'United States',
    subDestinations: ['California', 'Los Angeles', 'Nevada', 'New Jersey'],
  },
  {
    name: 'France',
    subDestinations: ['Paris', 'Marseille', 'Nice'],
  },
]

function InputSelect({ placeholder, className }: Params) {
  const [hidden, setHidden] = useState(true)
  const [selectedDestination, setSelectedDestination] = useState('')
  let blurTimeOut: NodeJS.Timeout

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSelectedDestination(value)
  }
  const onBlur = () => {
    clearTimeout(blurTimeOut)
    // We hide the suggestions simply to hide the early triggered
    // effect due to the onMouseDown event being used.
    blurTimeOut = setTimeout(() => setHidden(true), 100)
  }
  const onClick = (name: string) => {
    clearTimeout(blurTimeOut)
    setSelectedDestination(name)
  }

  return (
    <div tabIndex={0} className={className} onBlur={onBlur}>
      <input
        onFocus={() => setHidden(false)}
        value={selectedDestination}
        onChange={onInput}
        type="text"
        className="outline-none border-none bg-transparent"
        placeholder={placeholder}
      />
      <ScrollArea
        className="h-72 w-48 rounded-md border bg-white shadow-md"
        hidden={hidden}
      >
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Destinations populaires
          </h4>
          {popularDestinations.map((dest, i) => (
            <div key={i}>
              <div className="text-sm cursor-pointer">
                <button
                  className="btn-reset"
                  onMouseDown={() => onClick(dest.name)}
                >
                  {dest.name}
                </button>
              </div>
              <div>
                {dest.subDestinations.map((subDest, i) => (
                  <div key={i} className="cursor-pointer pl-5">
                    <button
                      onMouseDown={() => onClick(subDest)}
                      className="btn-reset"
                    >
                      {subDest}
                    </button>
                  </div>
                ))}
              </div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default InputSelect
