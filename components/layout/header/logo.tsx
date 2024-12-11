// components/layout/header/logo.tsx
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center h-8 w-8">
      <Image
        src="/assets/logos/logo-symbol-white.svg"
        alt="Better You Logo"
        width={32}
        height={32}
        className="w-full h-full"
        priority
      />
    </div>
  )
}
