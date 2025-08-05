import { BookIdea } from '@/types'

// PDF export utility without external dependencies
export class PDFExporter {
  static exportFavoritesToPDF(ideas: BookIdea[], filename = 'book-ideas-favorites.pdf') {
    // For a production app, you would use a library like jsPDF or Puppeteer
    // For now, we'll create a formatted HTML document that can be printed as PDF
    const htmlContent = this.generateHTMLForPrint(ideas)
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('Please allow popups to export PDF')
      return
    }

    printWindow.document.write(htmlContent)
    printWindow.document.close()
    
    // Wait for content to load, then print
    printWindow.onload = () => {
      printWindow.print()
      // Close the window after printing (optional)
      printWindow.onafterprint = () => {
        printWindow.close()
      }
    }
  }

  static exportAsTextFile(ideas: BookIdea[], filename = 'book-ideas-favorites.txt') {
    const content = this.generateTextContent(ideas)
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  static exportAsJSON(ideas: BookIdea[], filename = 'book-ideas-favorites.json') {
    const content = JSON.stringify(ideas, null, 2)
    
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  private static generateTextContent(ideas: BookIdea[]): string {
    const header = `BOOKSPARK - FAVORITE BOOK IDEAS
Generated on: ${new Date().toLocaleDateString()}
Total Ideas: ${ideas.length}

${'='.repeat(80)}

`

    const content = ideas.map((idea, index) => {
      return `IDEA #${index + 1}

Title Options:
${idea.title.map((title, i) => `  ${i + 1}. ${title}`).join('\n')}

Genre: ${idea.genre}
Target Audience: ${idea.targetAudience}

Concept:
${idea.concept}

Main Character:
${idea.mainCharacter}

Setting:
${idea.setting}

Central Conflict:
${idea.conflict}

Opening Line:
"${idea.openingLine}"

Key Themes:
${idea.themes.join(', ')}

Generated: ${new Date(idea.generatedAt).toLocaleDateString()}

${'-'.repeat(80)}

`
    }).join('')

    const footer = `
Created with BookSpark - https://bookspark.com
AI-powered book idea generator for writers and storytellers.
`

    return header + content + footer
  }

  private static generateHTMLForPrint(ideas: BookIdea[]): string {
    const css = `
      <style>
        @page {
          margin: 1in;
          size: letter;
        }
        
        body {
          font-family: 'Times New Roman', serif;
          font-size: 12pt;
          line-height: 1.5;
          color: #333;
          max-width: none;
        }
        
        .header {
          text-align: center;
          border-bottom: 2px solid #333;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        
        .header h1 {
          font-size: 24pt;
          font-weight: bold;
          margin: 0 0 10px 0;
          color: #6366f1;
        }
        
        .header .subtitle {
          font-size: 14pt;
          color: #666;
          margin: 5px 0;
        }
        
        .idea {
          margin-bottom: 40px;
          page-break-inside: avoid;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
        }
        
        .idea-header {
          background-color: #f8f9fa;
          margin: -20px -20px 15px -20px;
          padding: 15px 20px;
          border-bottom: 1px solid #ddd;
        }
        
        .idea-number {
          font-size: 18pt;
          font-weight: bold;
          color: #6366f1;
          margin: 0;
        }
        
        .titles {
          margin: 15px 0;
        }
        
        .titles h3 {
          font-size: 14pt;
          font-weight: bold;
          margin: 0 0 8px 0;
          color: #333;
        }
        
        .title-option {
          margin: 5px 0 5px 20px;
          font-weight: bold;
          font-size: 13pt;
        }
        
        .meta-info {
          display: flex;
          gap: 30px;
          margin: 15px 0;
          font-size: 11pt;
          color: #666;
        }
        
        .section {
          margin: 15px 0;
        }
        
        .section-title {
          font-weight: bold;
          font-size: 12pt;
          color: #333;
          margin: 0 0 5px 0;
        }
        
        .section-content {
          margin: 5px 0 0 15px;
          text-align: justify;
        }
        
        .opening-line {
          font-style: italic;
          border-left: 3px solid #6366f1;
          padding-left: 15px;
          margin: 10px 0;
          background-color: #f8f9fa;
          padding: 10px 15px;
        }
        
        .themes {
          margin: 10px 0;
        }
        
        .theme-tag {
          display: inline-block;
          background-color: #e5e7eb;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 10pt;
          margin: 2px;
        }
        
        .footer {
          text-align: center;
          margin-top: 50px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          font-size: 10pt;
          color: #666;
        }
        
        @media print {
          .idea {
            page-break-inside: avoid;
          }
        }
      </style>
    `

    const header = `
      <div class="header">
        <h1>BookSpark - Favorite Book Ideas</h1>
        <div class="subtitle">Generated on ${new Date().toLocaleDateString()}</div>
        <div class="subtitle">Total Ideas: ${ideas.length}</div>
      </div>
    `

    const content = ideas.map((idea, index) => `
      <div class="idea">
        <div class="idea-header">
          <h2 class="idea-number">Idea #${index + 1}</h2>
        </div>
        
        <div class="titles">
          <h3>Title Options:</h3>
          ${idea.title.map((title, i) => `<div class="title-option">${i + 1}. ${title}</div>`).join('')}
        </div>
        
        <div class="meta-info">
          <span><strong>Genre:</strong> ${idea.genre}</span>
          <span><strong>Audience:</strong> ${idea.targetAudience}</span>
          <span><strong>Generated:</strong> ${new Date(idea.generatedAt).toLocaleDateString()}</span>
        </div>
        
        <div class="section">
          <div class="section-title">Concept:</div>
          <div class="section-content">${idea.concept}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Main Character:</div>
          <div class="section-content">${idea.mainCharacter}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Setting:</div>
          <div class="section-content">${idea.setting}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Central Conflict:</div>
          <div class="section-content">${idea.conflict}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Opening Line:</div>
          <div class="opening-line">"${idea.openingLine}"</div>
        </div>
        
        <div class="section">
          <div class="section-title">Key Themes:</div>
          <div class="themes">
            ${idea.themes.map(theme => `<span class="theme-tag">${theme}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('')

    const footer = `
      <div class="footer">
        <p>Created with <strong>BookSpark</strong> - https://bookspark.com</p>
        <p>AI-powered book idea generator for writers and storytellers.</p>
      </div>
    `

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>BookSpark - Favorite Book Ideas</title>
          ${css}
        </head>
        <body>
          ${header}
          ${content}
          ${footer}
        </body>
      </html>
    `
  }
}