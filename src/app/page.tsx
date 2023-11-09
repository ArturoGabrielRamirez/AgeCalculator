
import FormCalculator from './components/FormCalculator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
       <h1 className="text-2xl p-8">Age Calculator</h1>
      <FormCalculator />
    </main>
  )
}
