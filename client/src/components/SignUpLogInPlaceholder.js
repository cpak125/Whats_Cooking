import React, { Component } from 'react'
import styled from 'styled-components'

const SignUpLogInPlaceholderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    text-align: center;
    width: 300px;
    z-index: 3;
`

export default class SignUpLogInPlaceholder extends Component {
    render() {
        const header = this.props.showLogin ? "Don't have an account?" : "Already have an account?"
        const content = this.props.showLogin ? "Log In" : "Sign up"
        return (
            <SignUpLogInPlaceholderWrapper>
                <h2>{header}</h2>
                <div>{content} now</div>
            </SignUpLogInPlaceholderWrapper>
        )
    }
}
