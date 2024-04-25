import { cn } from '@/lib/utils'
import InputSelect from './custom/input-select'
import { CalendarDays, MapPin } from 'lucide-react'

function SearchTravel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex justify-between items-center shadow-md rounded-full h-24 w-3/4 mx-10 p-5',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <MapPin color="rgb(94, 109, 119)" />
        <div className="flex flex-col gap-1 relative">
          <h3>Emplacement</h3>
          <InputSelect
            placeholder="Où souhaitez-vous aller ?"
            className="absolute top-6 left-0"
          />
        </div>
      </div>
      <div className="bg-[#dedede] h-10 w-0.5"></div>
      <div>
        <CalendarDays />
      </div>
    </div>
  )
}

export default SearchTravel
