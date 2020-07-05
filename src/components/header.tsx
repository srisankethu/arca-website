import React from "react"
export default function Header() {
    return (
        <nav className="level container px-3 py-3">
            <div className="level-left">Left</div>
            <div className="level-right"><p className="level-item"><strong>All</strong></p>
                <p className="level-item"><a>Published</a></p>
                <p className="level-item"><a>Drafts</a></p>
                <p className="level-item"><a>Deleted</a></p>
                <p className="level-item"><a className="button is-primary">New</a></p></div>
        </nav>
    )
}