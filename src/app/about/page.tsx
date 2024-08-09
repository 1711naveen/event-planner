import Hero from '@/components/about/Hero'
import MissionPage from '@/components/about/MissionPage'
import React from 'react'

const Page = () => {
  return (
    <main>
      <div className="bg-[url('https://eventstan.com/home/bg-1.svg')] bg-cover bg-no-repeat">
        <Hero />
        <MissionPage/>
      </div>
    </main>
  )
}

export default Page
