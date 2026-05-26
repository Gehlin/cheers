import { useState } from 'react'
import AccordionItem from './AccordionItem'
import type { FaqItem } from '@/types'

interface AccordionProps {
  items: FaqItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-100 px-6">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  )
}
