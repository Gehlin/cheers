type IconName = 'building' | 'arrows' | 'cloud' | 'shield' | 'wrench' | 'check' | 'phone' | 'email' | 'location'

interface IconProps {
  name: IconName
  className?: string
}

import type { ReactElement } from 'react'

const paths: Record<IconName, ReactElement> = {
  building: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M9 21V9h6v12" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M3 9h18" strokeWidth="2" stroke="currentColor" />
      <rect x="6" y="12" width="2" height="2" fill="currentColor" />
      <rect x="16" y="12" width="2" height="2" fill="currentColor" />
    </>
  ),
  arrows: (
    <>
      <path d="M7 16l-4-4 4-4" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8l4 4-4 4" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12h18" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <>
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  check: (
    <>
      <path d="M20 6L9 17l-5-5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  email: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  location: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" strokeWidth="2" stroke="currentColor" fill="none" />
    </>
  ),
}

export default function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
