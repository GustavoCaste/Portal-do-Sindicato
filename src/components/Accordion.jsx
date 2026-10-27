import { useState } from 'react'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-title" onClick={() => toggle(index)}>
            {item.title}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && <p className="accordion-content">{item.content}</p>}
        </div>
      ))}
    </div>
  )
}

export default Accordion
