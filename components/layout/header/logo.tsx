// components/layout/header/logo.tsx
import Image from 'next/image'

export function LogoWhite() {
  return (
    <div className="flex items-center size-8">
      <Image
        src="/assets/logos/logo-symbol-white.svg"
        alt="Better You Logo"
        width={30}
        height={30}
        className="w-full h-full"
        priority
      />
    </div>
  )
}

export function LogoOrange() {
  return (
    <div className="flex items-center size-8">
      <Image
        src="/assets/logos/logo-symbol-orange.svg"
        alt="Better You Logo"
        width={30}
        height={30}
        className="w-full h-full"
        priority
      />
    </div>
  )
}
