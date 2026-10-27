import { useEffect, useRef, useState } from 'react'

function Dropdown({ label, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSelect(option) {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="dropdown" ref={ref}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {label} ▾
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option}>
              <button onClick={() => handleSelect(option)}>{option}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
