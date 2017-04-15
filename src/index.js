import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import assign from 'object-assign'


import {
    containerStyle,
    contentBaseStyle,
    contentSuccessStyle,
    contentErrorStyle,
    contentWarningStyle,
    contentDefaultStyle,
    transformShowStyle,
    transformHideStyle
} from './styles'
import {
    options
} from './config'

class Toast extends React.Component {
    constructor() {
        super()
        this.state = {
            contentStyleExt: null
        }
    }

    setContentStyle() {
        let style = {}
        switch (this.props.type) {
            case 'success':
                style = assign({}, contentBaseStyle, contentSuccessStyle)
                break
            case 'error':
                style = assign({}, contentBaseStyle, contentErrorStyle)
                break
            case 'warning':
                style = assign({}, contentBaseStyle, contentWarningStyle)
                break
            default:
                style = assign({}, contentBaseStyle)
                break
        }
        return style
    }

    // after component mount
    componentDidMount() {
        // set container base style
        this.setState({
            contentStyleExt: containerStyle
        })
        // show toast effect style
        setTimeout(() => {
            this.setState({
                contentStyleExt: assign({}, containerStyle, transformShowStyle)
            })
        }, 100)
        // hide toast effect style, do it after timeout
        setTimeout(() => {
            this.setState({
                contentStyleExt: assign({}, containerStyle, transformHideStyle)
            })
        }, options.defaultTimeout)
    }

    // render component
    render() {
        let {text} = this.props
        let contentStyle = this.setContentStyle()
        return (
            <div style={this.state.contentStyleExt}>
                <span style={contentStyle}>{text}</span>
            </div>
        )
    }
}
// component prop types
Toast.PropTypes = {
    text: PropTypes.string,
    timeout: PropTypes.number,
    type: PropTypes.string,
    color: PropTypes.object,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ])
}

// will mount react dom
export default class extends React.Component {
    render() {
        return (
            <div id={options.wrapperId}></div>
        );
    }
}

// mount toast to wrapper dom
function mountToast(text, type) {
    ReactDOM.render(
        <Toast text={text} type={type}/>,
        document.getElementById(options.wrapperId)
    );
}

// un mount toast to wrapper dom
function umountToast() {
    ReactDOM.unmountComponentAtNode(document.getElementById(options.wrapperId))
}

// show animated toast
function show(text, type) {
    if (!document.getElementById(options.wrapperId).hasChildNodes()) {
        // mount toast
        mountToast(text, type)
        // un mount after timeout
        setTimeout(function () {
            umountToast()
        }, options.defaultTimeout + options.animationDuration)
        return true
    }
    return false
}

// export methods what dispatch toast
export const toast = {
    show
}