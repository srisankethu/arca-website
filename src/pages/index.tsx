import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import 'bulma/css/bulma.css'

// Or manually specify a host

// export default () => <div>Hello world!</div>

interface State { }
interface Props { }

export default class Hello extends React.Component<State, Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Home</h1>
                <button className="button is-primary">Hi</button>
                <Link to='/about/'>About</Link>
            </div>
        )
    }
}
