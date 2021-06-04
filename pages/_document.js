import Document, { Html, Head, Main, NextScript } from 'next/document'
import netlifyIdentity from 'netlify-identity-widget'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en-US">
                <body>
                    <script>0</script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
