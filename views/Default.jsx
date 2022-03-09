const React = require('react');

class DefaultLayout extends React.Component {
    render() {

        const { fruits } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv="x-ua-compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>My Fruits Website</title>
                    {/* Milligram css for some Default Styling */}


                    {/* Google fonts */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
                    />
                    {/* CSS Reset */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                    />
                    {/* Milligram CSS */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
                    />


                    {/* Jquery */}
                    <script>
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                        crossorigin="anonymous"
                    </script>
                </head>
                <body>
                    <header>
                        <h1>
                            The Fruits App
                        </h1>

                    </header>
                    <main>
                        {this.props.children}

                    </main>
                    <footer>


                    </footer>

                </body>
            </html>
        )
    }
}

module.exports= DefaultLayout