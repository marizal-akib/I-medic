import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Share2, Printer, FileText } from 'lucide-react'

export function ExportActions() {
  const handleExportPDF = () => {
    // TODO: Implement PDF export
    console.log('Export as PDF')
  }

  const handleShare = () => {
    // TODO: Implement sharing functionality
    console.log('Share with provider')
  }

  const handlePrint = () => {
    // TODO: Implement print functionality
    window.print()
  }

  const handleGenerateReport = () => {
    // TODO: Implement report generation
    console.log('Generate comprehensive report')
  }

  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 bg-gradient-to-br from-white to-slate-50/50">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">
          Export & sharing
        </CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Share Your Health Summary</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Download or share your complete health summary with your healthcare providers, specialists, or for your personal records.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            onClick={handleExportPDF}
            variant="outline"
            className="w-full justify-start gap-2 hover:bg-slate-50 hover:border-teal-300 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Export as PDF</span>
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full justify-start gap-2 hover:bg-slate-50 hover:border-teal-300 transition-colors"
          >
            <Share2 className="h-4 w-4" />
            <span>Share with Provider</span>
          </Button>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="w-full justify-start gap-2 hover:bg-slate-50 hover:border-teal-300 transition-colors"
          >
            <Printer className="h-4 w-4" />
            <span>Print Summary</span>
          </Button>
          <Button
            onClick={handleGenerateReport}
            variant="outline"
            className="w-full justify-start gap-2 hover:bg-slate-50 hover:border-teal-300 transition-colors"
          >
            <FileText className="h-4 w-4" />
            <span>Full Report</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

