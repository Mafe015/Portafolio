import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { animate } from 'framer-motion'

const ThreeBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current

        if (!container) return 

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight, 
            0.1,
            1000
        )

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(container.clientWidth, container.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        container.appendChild(renderer.domElement)

        const starGeometry = new THREE.BufferGeometry()
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff })
        const starVertices=[];

        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000
            const y = (Math.random() - 0.5) * 2000
            const z = -Math.random() * 2000

            starVertices.push(x, y, z)
        }

        starGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(starVertices, 3)
        )

        const stars = new THREE.Points(starGeometry, starMaterial)
        scene.add(stars)
        camera.position.z = 1

        const animateLoop = () => {
            stars.rotation.x += 0.0005
            stars.rotation.y += 0.0005
            renderer.render(scene, camera)
            requestAnimationFrame(animateLoop)
        }
        animateLoop()

        const onWindowResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(container.clientWidth, container.clientHeight)
        }
        window.addEventListener("resize", onWindowResize)

        return () => {
            window.removeEventListener("resize", onWindowResize)
            container.removeChild(renderer.domElement) // Corregido: usar container en lugar de ContainerWithChildren
            starGeometry.dispose()
            starMaterial.dispose()
            stars.geometry.dispose()
            if (stars.material instanceof THREE.Material) { // Verificación de tipo
                stars.material.dispose()
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className='fixed inset-0 z-0'
            style={{ overflow: 'hidden' }}
        >
        </div>
    )
}

export default ThreeBackground