import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    console.log('ThreeBackground useEffect triggered')
    
    if (!mountRef.current) {
      console.log('Mount ref not available')
      return
    }

    console.log('Initializing Three.js scene')

    try {
      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
      })
      
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setClearColor(0x000000, 0)
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
        console.log('Renderer appended to DOM')
      }

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 150
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20

      // Neon-like colors
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i] = 0 / 255     // R
        colors[i + 1] = 255 / 255 // G  
        colors[i + 2] = 170 / 255 // B
      } else if (colorChoice < 0.66) {
        colors[i] = 147 / 255   // R
        colors[i + 1] = 51 / 255  // G
        colors[i + 2] = 234 / 255 // B
      } else {
        colors[i] = 255 / 255   // R
        colors[i + 1] = 20 / 255  // G
        colors[i + 2] = 147 / 255 // B
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add subtle wireframe geometry
    const geometry = new THREE.IcosahedronGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffaa,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    })
    const wireframeMesh = new THREE.Mesh(geometry, material)
    scene.add(wireframeMesh)

    camera.position.z = 5

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate particles
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      // Rotate wireframe
      wireframeMesh.rotation.x += 0.001
      wireframeMesh.rotation.y += 0.002

      // Mouse interaction
      particlesMesh.rotation.x += mouseY * 0.0005
      particlesMesh.rotation.y += mouseX * 0.0005

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      console.log('Cleaning up Three.js scene')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      geometry.dispose()
      material.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
    } catch (error) {
      console.error('Three.js initialization error:', error)
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10"
      style={{ 
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default ThreeBackground
