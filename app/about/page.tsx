import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About us',
  description: 'We love to make blogs',
}

export default function AboutPage() {
  return (
    <main>
      <h1>About us</h1>
      <p>We love to make blogs</p>
    </main>
  )
}