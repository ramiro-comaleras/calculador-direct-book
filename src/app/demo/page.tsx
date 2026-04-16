import { PublicPageWrapper } from '@/components/public/PublicPageWrapper'

export default function DemoPage() {
  return (
    <PublicPageWrapper>
      <div className="w-full h-screen min-h-[900px] border-none overflow-hidden">
        <iframe 
          src="/demo.html" 
          className="w-full h-full border-none"
          title="Demo Interactiva Direct-Book"
        />
      </div>
    </PublicPageWrapper>
  )
}
