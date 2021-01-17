import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function (title) {
      const element = document.querySelector('#capture')
      setTimeout(() => {
        html2Canvas(element).then(function (canvas) {
          const contentWidth = canvas.width
          const contentHeight = canvas.height
          const pageHeight = (contentWidth / 592.28) * 841.89
          let leftHeight = contentHeight
          let position = 0
          const imgWidth = 595.28
          const imgHeight = (592.28 / contentWidth) * contentHeight
          const pageData = canvas.toDataURL('image/jpeg', 1.0)
          const pdf = new JsPDF('', 'pt', 'a4')
          if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
          } else {
            while (leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight
              position -= 841.89
              if (leftHeight > 0) {
                pdf.addPage()
              }
            }
          }
          pdf.save(title + '.pdf')
        })
      }, 0)
    }
  }
}
