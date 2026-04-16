import { PublicPageWrapper } from '@/components/public/PublicPageWrapper'

export default function CalculadoraPage() {
  return (
    <PublicPageWrapper>
      <div className="w-full h-screen min-h-[800px] border-none overflow-hidden">
        <iframe 
          src="/calculadora.html" 
          className="w-full h-full border-none"
          title="Calculadora de Comisiones"
        />
      </div>
    </PublicPageWrapper>
  )
}
