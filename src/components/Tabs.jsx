import { useState } from 'react'

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="tabs">
      <div className="tabs-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'tab active' : 'tab'}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-panel">{tabs[activeIndex].content}</div>
    </div>
  )
}

export default Tabs
