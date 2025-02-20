  "use client"
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

export function FAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "How long does my order take?",
      answer: "Orders typically take 3-5 business days to process and ship, but delivery times may vary based on your location and selected shipping method. You'll receive a tracking number as soon as your order is on its way!",
      isOpen: true
    },
    {
      question: "How can i track my order",
      answer: "You can track your order by clicking the tracking link in your shipping confirmation email or by logging into your account and viewing your order status in the dashboard.",
      isOpen: false
    },
    {
      question: "How do i buy medications for my family",
      answer: "You can easily purchase medications for your family through our platform by creating an account, uploading valid prescriptions, and selecting the required medications. We ensure secure delivery to your specified address.",
      isOpen: false
    },
    {
      question: "How do i buy medications for my family",
      answer: "You can easily purchase medications for your family through our platform by creating an account, uploading valid prescriptions, and selecting the required medications. We ensure secure delivery to your specified address.",
      isOpen: false
    }
  ])

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    })))
  }

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg bg-gray-50 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="flex-shrink-0 ml-4">
                  {faq.isOpen ? (
                    <MinusIcon className="w-6 h-6 text-gray-500" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-gray-500" />
                  )}
                </span>
              </button>
              
              {faq.isOpen && (
                <div className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Icon components
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
      />
    </svg>
  )
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M20 12H4" 
      />
    </svg>
  )
}