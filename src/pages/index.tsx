import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'

interface State { }
interface Props { }

export default class Hello extends React.Component<State, Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <h1>Home</h1>
                {/* <button>Hi</button> */}
                <Link to='/about/'>About</Link>
            </div>
        )
    }
}
