import { useCallback, useEffect, useState } from 'react'


export function useMedia(query) {
  const [match, setMatch] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setMatch(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return match
}

// Infinite slideshow (Framer "Slideshow"): clones the first slides at the end and snaps back silently
export function useLoop(count, perView, autoplay = 0) {
  const [index, setIndex] = useState(0)
  const [animated, setAnimated] = useState(true)

  const next = useCallback(() => { setAnimated(true); setIndex((i) => i + 1) }, [])
  const prev = () => {
    if (index > 0) { setAnimated(true); setIndex(index - 1); return }
    // jump to the clone of slide 0 without animation, then slide back one
    setAnimated(false)
    setIndex(count)
    requestAnimationFrame(() => requestAnimationFrame(() => { setAnimated(true); setIndex(count - 1) }))
  }

  const onTransitionEnd = () => {
    if (index >= count) { setAnimated(false); setIndex(index - count) }
  }

  useEffect(() => {
    if (!autoplay) return
    const t = setInterval(next, autoplay)
    return () => clearInterval(t)
  }, [autoplay, next, index])

  return { index, real: index % count, animated, next, prev, goTo: (i) => { setAnimated(true); setIndex(i) }, onTransitionEnd, perView }
}

// Track of slides; `loop` comes from useLoop
export function SlideTrack({ items, loop, gap = 20, render, className = '' }) {
  const { index, animated, perView, onTransitionEnd } = loop
  const list = [...items, ...items.slice(0, perView)]
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex"
        style={{
          gap,
          transform: `translateX(calc(${-index} * (100% + ${gap}px) / ${perView}))`,
          transition: animated ? 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)' : 'none',
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {list.map((item, i) => (
          <div key={i} className="shrink-0" style={{ width: `calc((100% - ${gap * (perView - 1)}px) / ${perView})` }} aria-hidden={i >= items.length}>
            {render(item, i % items.length)}
          </div>
        ))}
      </div>
    </div>
  )
}
