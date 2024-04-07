import Image from 'next/image'

export default function Logo() {
  const siteUrl = process.env.SITE_URL

  return (
    <a href={siteUrl}>
      <Image src="/logo.svg" width={150} height={150} alt="" />
    </a>
  )
}
