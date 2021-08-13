import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'

const Tilt = () => {
  const ref = React.createRef()

  React.useEffect(() => {
    const tiltNode = ref.current
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltNode, vanillaTiltOptions)
    return () => VanillaTilt.destroy(tiltNode)
  }, [])

  return (
    <div ref={ref} className="tilt-root">
      <div className="tilt-child">{this.props.children}</div>
    </div>
  )
}
