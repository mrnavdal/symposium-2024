'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const FEEDBACK_FORM_URL = 'https://forms.google.com/your-form-id' // Replace with your actual Google Form URL

export function FeedbackLink() {
  const openFeedbackForm = () => {
    window.open(FEEDBACK_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        Please take a moment to fill out our feedback form
      </p>
      <Button 
        onClick={openFeedbackForm}
        size="lg"
        className="group"
      >
        Open Feedback Form
        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  )
} 