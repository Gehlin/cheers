import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-bg px-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-neutral-body mb-4">Något gick fel</h1>
            <p className="text-neutral-muted mb-6">
              Ett oväntat fel har uppstått. Försök ladda om sidan.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-brand-amber text-white rounded font-semibold hover:bg-brand-amber-dark transition-colors"
            >
              Ladda om sidan
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
