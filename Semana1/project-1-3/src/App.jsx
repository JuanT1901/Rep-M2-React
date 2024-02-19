import './App.css'
import ConditionalRend from './components/ConditionalRend'
import Counter from './components/Counter'

function App() {
  


  return (
    <div>
      <h1>Estados</h1>
      <Counter />
      <br />
      <Counter 
      init={500}
      min={0}
      max={1000}
      upgrade={100}
      />
      <br />
      <ConditionalRend />
    </div>
  )
}

export default App
