import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  // Note: SVG content for hexagon pattern is URL-encoded to be used in CSS
  const svgHexagonPattern = encodeURIComponent(`
    <svg width="100" height="86" viewBox="0 0 100 86" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" patternUnits="userSpaceOnUse" width="100" height="86" patternTransform="scale(1)">
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="#ffffff20"/>
        </pattern>
      </defs>
      <rect width="100" height="86" fill="url(#hexagons)"/>
    </svg>
  `);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      background: `url('data:image/svg+xml;utf8,${svgHexagonPattern}') repeat, linear-gradient(135deg, #667eea 0%, #764ba2 33%, #ff8c00 66%, #e53935 100%)`,
      backgroundSize: 'contain, auto', // Adjust hexagon background size here
      backgroundAttachment: 'fixed' // Optional: set background as fixed
    }}>
      <Head>
        <title>The Three Words LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>The Three Words LLC</h1>
        <h2>Consulting and Market Research</h2>
      </header>

      <Footer />
    </div>
  )
}
