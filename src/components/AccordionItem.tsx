import { useId } from 'react'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const uid = useId()
  const buttonId = `accordion-btn-${uid}`
  const panelId = `accordion-panel-${uid}`

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between py-4 text-left font-semibold text-neutral-body hover:text-brand-pink transition-colors"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="pb-4 text-neutral-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}
