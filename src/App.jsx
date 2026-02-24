import ThreeBackground from './components/ThreeBackground'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <div className="min-h-screen ">
      <ThreeBackground />
      <main>
        <AppRouter />
      </main>
    </div>
  )
}

export default App
