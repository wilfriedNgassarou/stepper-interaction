import { useState } from "react"

function App() {

  const [index, setIndex] = useState(0)

  function handlePrev() {
    if(index <= 0) {
      return
    }

    setIndex(index - 1)
  }

  function handleNext() {
    
    if(index % 4 == 0) {
      setIndex(index + 2) ;
      return 
    }
    setIndex(index + 1) ;
  }

  return (
    <main>
      <div className="button">
        <span className="previous">
          <span onClick={handlePrev}>
            -
          </span>
        </span>
        <span className="numbers">
          <span className="zero">
            0
          </span>
          <div
            style={{
              transform: `rotate(-${index * 45}deg)`
            }} 
            className="circle"
          >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div>
        </span>
        <span className="next" onClick={handleNext}>
          <span>
            +
          </span>
        </span>
      </div>
    </main>
  )
}

export default App
