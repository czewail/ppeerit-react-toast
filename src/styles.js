import {
    options,
    colors
} from './config'

// base container style
export const containerStyle = {
    position: 'fixed',
    width: '50%',
    margin: '0 auto',
    right: '0px',
    left: '0px',
    top: '-100px',
    textAlign: 'center',
    zIndex: '9999',
    pointerEvents: 'none',
    transition: 'all ' + options.animationDuration + 'ms ease',
    transform: 'translateY(0px)',
    lineHeight: '1.8',
    // fix
    msTransition: 'all ' + options.animationDuration + 'ms ease',
    msTransform: 'translateY(0px)',
    WebkitTransition: 'all ' + options.animationDuration + 'ms ease',
    WebkitTransform: 'translateY(0px)',
    OTransition: 'all ' + options.animationDuration + 'ms ease',
    OTransform: 'translateY(0px)',
    MozTransition: 'all ' + options.animationDuration + 'ms ease',
    MozTransform: 'translateY(0px)'
}
// base content style
export const contentBaseStyle = {
    cursor: 'pointer',
    display: 'block',
    width: 'auto',
    borderRadius: '0 0 4px 4px',
    backgroundColor: 'white',
    padding: '10px 30px',
    pointerEvents: 'all'
}
// success content style
export const contentSuccessStyle = {
    backgroundColor: colors.success,
    color: colors.white
}
// error content style
export const contentErrorStyle = {
    backgroundColor: colors.error,
    color: colors.white
}
// warning content style
export const contentWarningStyle = {
    backgroundColor: colors.warning,
    color: colors.gray
}
// default content style
export const contentDefaultStyle = {}

// show transform
export const transformShowStyle = {
    transform: 'translateY(100px)',
    msTransform: 'translateY(100px)',
    WebkitTransform: 'translateY(100px)',
    OTransform: 'translateY(100px)',
    MozTransform: 'translateY(100px)'
}

// hide transform
export const transformHideStyle = {
    transform: 'translateY(-100px)',
    msTransform: 'translateY(-100px)',
    WebkitTransform: 'translateY(-100px)',
    OTransform: 'translateY(-100px)',
    MozTransform: 'translateY(-100px)'
}
