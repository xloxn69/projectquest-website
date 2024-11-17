export default function SplineBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 0.5
    }}>
      <spline-viewer
        url="https://prod.spline.design/i9xCCYnXMAfurGfK/scene.splinecode"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
} 