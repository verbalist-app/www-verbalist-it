import Image from "next/image"

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Verbalist"
      width={120}
      height={40}
      className="h-6 w-auto"
    />
  )
}
