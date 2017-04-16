import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import assign from 'object-assign'


import {
    containerStyle,
    containerTopStyle,
    containerBottomStyle,
    containerDefaultStyle,
    contentBaseStyle,
    contentSuccessStyle,
    contentErrorStyle,
    contentWarningStyle,
    contentInfoStyle,
    animateDownStyleToHide,
    animateDownStyleToShow,
    animateUpStyleToHide,
    animateUpStyleToShow,
    animateFadeStyleToHide,
    animateFadeStyleToShow
} from './styles'
import {
    wrapper,
    duration,
    options
} from './config'

class Toast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            containerStyleExt: this.setContainerStyle().container
        }
    }
    // set container style
    setContainerStyle() {
        // create style object
        let style = {}
        style.animate = {}
        // switch position
        switch (this.props.position) {
            case 'top':
                style.container = assign({}, containerStyle, containerTopStyle)
                style.animate.show = assign({}, animateDownStyleToShow)
                style.animate.hide = assign({}, animateDownStyleToHide)
                break
            case 'bottom':
                style.container = assign({}, containerStyle, containerBottomStyle)
                style.animate.show = assign({}, animateUpStyleToShow)
                style.animate.hide = assign({}, animateUpStyleToHide)
                break
            case 'default':
                style.container = assign({}, containerStyle, containerDefaultStyle)
                style.animate.show = assign({}, animateFadeStyleToShow)
                style.animate.hide = assign({}, animateFadeStyleToHide)
                break
            default:
                style.container = assign({}, containerStyle, containerDefaultStyle)
                style.animate.show = assign({}, animateFadeStyleToShow)
                style.animate.hide = assign({}, animateFadeStyleToHide)
                break
        }
        // return style
        return style
    }
    // set content style
    setContentStyle() {
        // create style object
        let style = {}
        // switch type
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
            case 'info':
                style = assign({}, contentBaseStyle, contentInfoStyle)
                break
            default:
                style = assign({}, contentBaseStyle)
                break
        }
        // if set backgroundColor attr
        if (this.props.backgroundColor) {
            style = assign({}, style, {backgroundColor: this.props.backgroundColor})
        }
        // if set textColor attr
        if (this.props.textColor) {
            style = assign({}, style, {color: this.props.textColor})
        }
        // return style
        return style
    }
    // after component mount
    componentDidMount() {
        let _containerStyle = this.setContainerStyle()
        // // show toast effect style
        setTimeout(() => {
            this.setState({
                containerStyleExt: assign({}, _containerStyle.container, _containerStyle.animate.show)
            })
        }, 100)
        // hide toast effect style, do it after timeout
        setTimeout(() => {
            this.setState({
                containerStyleExt: assign({}, _containerStyle.container, _containerStyle.animate.hide)
            })
        }, this.props.timeout)
    }

    // render component
    render() {
        let {text} = this.props
        let _contentStyle = this.setContentStyle()
        return (
            <div style={this.state.containerStyleExt}>
                <span style={_contentStyle}>{text}</span>
            </div>
        )
    }
}
// component prop types
Toast.PropTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ])
}

// will mount react dom
export default class extends React.Component {
    render() {
        return (
            <div id={wrapper}></div>
        );
    }
}

// mount toast to wrapper dom
function mountToast(text, type, config) {
    ReactDOM.render(
        <Toast text={text} type={type} {...config} />,
        document.getElementById(wrapper)
    );
}

// un mount toast to wrapper dom
function umountToast() {
    ReactDOM.unmountComponentAtNode(document.getElementById(wrapper))
}

// show animated toast
function show(text, type = 'info', config = {}) {
    let newConfig = assign({}, options, config)
    if (!document.getElementById(wrapper).hasChildNodes()) {
        // mount toast
        mountToast(text, type, newConfig)
        // un mount after timeout
        setTimeout(() => {
            umountToast()
        }, newConfig.timeout + duration)
        return true
    }
    return false
}

// export methods what dispatch toast
export const toast = {
    show
}