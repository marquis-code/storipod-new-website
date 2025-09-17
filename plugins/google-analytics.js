export default ({ app }) => {
  if (process.client && process.env.NODE_ENV === 'production') {
    (function () {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P9DHDVLPJX'
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      // eslint-disable-next-line no-undef
      function gtag () { dataLayer.push(arguments) }
      gtag('js', new Date())
      gtag('config', 'G-P9DHDVLPJX')
    })()
  }
}
