import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get parameters from URL
    const title = searchParams.get('title') || 'Yakup Afsin'
    const tag = searchParams.get('tag') || 'Developer'
    const description = searchParams.get('description') || 'Full-stack developer passionate about building exceptional digital experiences'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          {/* Main content container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
              maxWidth: '1000px',
            }}
          >
            {/* Tag */}
            <div
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '9999px',
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '32px',
              }}
            >
              {tag}
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: '800',
                color: 'white',
                lineHeight: '1.1',
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '32px',
                color: '#94a3b8',
                lineHeight: '1.4',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {description}
            </p>

            {/* Bottom branding */}
            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                right: '40px',
                display: 'flex',
                alignItems: 'center',
                color: '#64748b',
                fontSize: '20px',
              }}
            >
              yakupafsin.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
