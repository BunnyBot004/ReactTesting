import { useState } from 'react'

// CONCEPT 1: Props - Receiving data from parent component
function GreetingCard({ name, age, hobbies }) {
  return (
    <div style={{ border: '2px solid #4CAF50', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      <h3>Hobbies:</h3>
      <ul>
        {/* CONCEPT 2: Mapping over arrays - Rendering lists */}
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

// Main component demonstrating useState and event handling
function BasicConcepts() {
  // CONCEPT 3: useState - Managing component state
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Student')
  const [isVisible, setIsVisible] = useState(true)

  // Sample data
  const people = [
    { name: 'Alice', age: 25, hobbies: ['Reading', 'Hiking', 'Coding'] },
    { name: 'Bob', age: 30, hobbies: ['Gaming', 'Cooking'] },
    { name: 'Charlie', age: 22, hobbies: ['Music', 'Sports', 'Travel'] }
  ]

  // CONCEPT 4: Event handlers - Responding to user actions
  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Basic Concepts Playground</h1>

      {/* Section 1: Counter with State and Event Handlers */}
      <section style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Counter (useState + Event Handlers)</h2>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={handleIncrement} style={{ margin: '5px', padding: '8px 15px' }}>
          Increment (+)
        </button>
        <button onClick={handleDecrement} style={{ margin: '5px', padding: '8px 15px' }}>
          Decrement (-)
        </button>
        <button onClick={handleReset} style={{ margin: '5px', padding: '8px 15px' }}>
          Reset
        </button>
      </section>

      {/* Section 2: Input with Controlled Component */}
      <section style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
        <h2>Name Input (Controlled Component)</h2>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{ padding: '8px', fontSize: '16px', width: '200px' }}
        />
        <p>Welcome, <strong>{name}</strong>!</p>
      </section>

      {/* Section 3: Conditional Rendering */}
      <section style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
        <h2>Toggle Visibility (Conditional Rendering)</h2>
        <button onClick={toggleVisibility} style={{ padding: '8px 15px', marginBottom: '10px' }}>
          {isVisible ? 'Hide' : 'Show'} Greeting Cards
        </button>
        {/* CONCEPT 5: Conditional rendering - Show/hide based on state */}
        {isVisible && (
          <div>
            {/* CONCEPT 6: Mapping components - Render array of components with props */}
            {people.map((person, index) => (
              <GreetingCard
                key={index}
                name={person.name}
                age={person.age}
                hobbies={person.hobbies}
              />
            ))}
          </div>
        )}
      </section>

      {/* Summary Section */}
      <section style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
        <h2>What You're Seeing:</h2>
        <ul>
          <li><strong>Props:</strong> GreetingCard receives name, age, hobbies from parent</li>
          <li><strong>useState:</strong> count, name, isVisible change over time</li>
          <li><strong>Event Handlers:</strong> onClick, onChange respond to user input</li>
          <li><strong>Conditional Rendering:</strong> Cards show/hide based on isVisible</li>
          <li><strong>Lists:</strong> Mapping over people array and hobbies array</li>
        </ul>
      </section>
    </div>
  )
}

export default BasicConcepts
