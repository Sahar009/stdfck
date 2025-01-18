
import { useEffect, useRef } from 'react'
import './Map.css'
export default function SvgMap() {
  const objectRef = useRef(null)

  useEffect(() => {
    const handleLoad = () => {
      const svgDoc = objectRef.current?.contentDocument
      if (!svgDoc) return

      // Get all path elements in the SVG
      const paths = svgDoc.getElementsByTagName('path')
      
      // Add interactivity to each path
      Array.from(paths).forEach(path => {
        // Add hover effect
        path.style.transition = 'fill 0.3s ease'
        
        path.addEventListener('mouseenter', () => {
          path.style.fill = '#0ea5e9' // Lighter blue on hover
        })
        
        path.addEventListener('mouseleave', () => {
          path.style.fill = '#7dd3fc' // Return to original color
        })
        
        path.addEventListener('click', () => {
          console.log('Clicked region:', path.getAttribute('id'))
        })
      })
    }

    // Add load event listener to the object
    objectRef.current?.addEventListener('load', handleLoad)

    // Cleanup
    return () => {
      objectRef.current?.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div className="map-container">
      <object
        ref={objectRef}
        data="https://unityfinance.com/assets/Earth.svg"
        type="image/svg+xml"
        className="world-map"
        aria-label="Interactive world map"
      >
        Your browser does not support SVG
      </object>
    </div>
  )
}

