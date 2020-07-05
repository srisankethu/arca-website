import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

interface State { }
interface Props { }

export default class About extends React.Component<State, Props> {
    window: any
    arweave: any
    constructor(props) {
        super(props)
    }

    checkForArweave = () => {
        setTimeout(() => {
            if (!this.window.Arweave) {
                return this.checkForArweave()
            } else {
                this.arweave = this.window.Arweave.init()
                console.log(this.arweave)
            }
        }, 1000)
    }

    async componentDidMount() {
        this.window = window
        this.checkForArweave()
    }

    render() {
        return (
            <div>
                <Helmet>
                    <script async defer src="https://unpkg.com/arweave/bundles/web.bundle.js"></script>
                </Helmet>
                <h1>About</h1>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}
