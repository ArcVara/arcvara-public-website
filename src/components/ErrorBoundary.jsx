import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Arcvara render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-8">
          <div className="max-w-xl bg-navy-card border border-red-500/30 rounded-xl p-8">
            <div className="text-red-400 text-sm font-mono mb-4">Render Error</div>
            <pre className="text-white/70 text-xs overflow-auto whitespace-pre-wrap">
              {this.state.error.toString()}
            </pre>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
