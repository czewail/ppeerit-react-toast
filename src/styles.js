import {
    duration,
    colors
} from './config'

// base container style
export const containerStyle = {
    position: 'fixed',
    width: '50%',
    margin: '0 auto',
    right: '0px',
    left: '0px',
    textAlign: 'center',
    zIndex: '9999',
    pointerEvents: 'none',
    transition: 'all ' + duration + 'ms ease',
    transform: 'translateY(0px)',
    lineHeight: '1.8',
    overflow: 'hidden',
    // fix
    msTransition: 'all ' + duration + 'ms ease',
    msTransform: 'translateY(0px)',
    WebkitTransition: 'all ' + duration + 'ms ease',
    WebkitTransform: 'translateY(0px)',
    OTransition: 'all ' + duration + 'ms ease',
    OTransform: 'translateY(0px)',
    MozTransition: 'all ' + duration + 'ms ease',
    MozTransform: 'translateY(0px)'

}
// container top position
export const containerTopStyle = {
    top: '-100px',
    borderRadius: '0 0 4px 4px',
}
// container bottom position
export const containerBottomStyle = {
    bottom: '-100px',
    borderRadius: '4px 4px 0 0',
}
// container default position
export const containerDefaultStyle = {
    bottom: '20%',
    borderRadius: '4px',
}
// base content style
export const contentBaseStyle = {
    cursor: 'pointer',
    display: 'block',
    width: 'auto',
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
// info content style
export const contentInfoStyle = {
    backgroundColor: colors.black,
    color: colors.white,
    opacity: 0.6
}

// default content style
export const contentDefaultStyle = {}

/*============down animate=====================*/
export const animateDownStyleToShow = {
    transform: 'translateY(100px)',
    msTransform: 'translateY(100px)',
    WebkitTransform: 'translateY(100px)',
    OTransform: 'translateY(100px)',
    MozTransform: 'translateY(100px)',
    opacity: 1,
    msOpacity: 1,
    WebkitOpacity: 1,
    MozOpacity: 1,
    OOpacity: 1
}
export const animateDownStyleToHide = {
    transform: 'translateY(-100px)',
    msTransform: 'translateY(-100px)',
    WebkitTransform: 'translateY(-100px)',
    OTransform: 'translateY(-100px)',
    MozTransform: 'translateY(-100px)',
    opacity: 0.1,
    msOpacity: 0.1,
    WebkitOpacity: 0.1,
    MozOpacity: 0.1,
    OOpacity: 0.1
}
/*============up animate=====================*/
export const animateUpStyleToShow = {
    transform: 'translateY(-100px)',
    msTransform: 'translateY(-100px)',
    WebkitTransform: 'translateY(-100px)',
    OTransform: 'translateY(-100px)',
    MozTransform: 'translateY(-100px)'
}
export const animateUpStyleToHide = {
    transform: 'translateY(100px)',
    msTransform: 'translateY(100px)',
    WebkitTransform: 'translateY(100px)',
    OTransform: 'translateY(100px)',
    MozTransform: 'translateY(100px)'
}
/*============fade animate=====================*/
export const animateFadeStyleToShow = {
    opacity: 1,
    MozOpacity: 1,
    WebkitOpacity: 1,
    OOpacity: 1,
    msOpacity: 1
}
export const animateFadeStyleToHide = {
    opacity: 0.01,
    MozOpacity: 0.01,
    WebkitOpacity: 0.01,
    OOpacity: 0.01,
    msOpacity: 0.01
}
