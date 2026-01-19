export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="keystatic-wrapper" style={{
      all: 'initial',
      display: 'contents'
    }}>
      {children}
    </div>
  )
}
