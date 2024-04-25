import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import SearchTravel from '@/components/SearchTravel'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col">
          <Hero />
          <SearchTravel className=" self-center -translate-y-3" />
        </div>
      </main>
    </>
  )
}
