import Hero from './components/Hero'



function App() {
  return (
    <div className='relative m-8 overflow-hidden'>
      <Hero />
      <div className='fixed bg-(--neon) w-full h-7.5 top-0 left-0' />
      <div className='fixed bg-(--neon) w-full h-7.5 top-auto left-0 bottom-0' />
      <div className='fixed bg-(--neon) w-7.5 h-full top-0 left-0' />
      <div className='fixed bg-(--neon) w-7.5 h-full top-0 left-auto right-0' />

    </div>
  )
}

export default App
