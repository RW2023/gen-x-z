import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'Gen X - Z Translator',
  description: 'Decode the language of the youth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className='flex flex-col justify-center align-middle'>
        {children}
        </body>
    </html>
  )
}
