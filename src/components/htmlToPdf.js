import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  install(Vue, options) {
    Vue.prototype.getPdf = function (title) {
      var element = document.querySelector('#capture')
      setTimeout(() => {
        html2Canvas(element).then(function (canvas) {
          var contentWidth = canvas.width
          var contentHeight = canvas.height
          var pageHeight = (contentWidth / 592.28) * 841.89
          var leftHeight = contentHeight
          var position = 0
          var imgWidth = 595.28
          var imgHeight = (592.28 / contentWidth) * contentHeight
          var pageData = canvas.toDataURL('image/jpeg', 1.0)
          var pdf = new JsPDF('', 'pt', 'a4')
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
  },
}
