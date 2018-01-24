'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animateFadeStyleToHide = exports.animateFadeStyleToShow = exports.animateUpStyleToHide = exports.animateUpStyleToShow = exports.animateDownStyleToHide = exports.animateDownStyleToShow = exports.contentDefaultStyle = exports.contentInfoStyle = exports.contentWarningStyle = exports.contentErrorStyle = exports.contentSuccessStyle = exports.contentBaseStyle = exports.containerDefaultStyle = exports.containerBottomStyle = exports.containerTopStyle = exports.containerStyle = undefined;

var _config = require('./config');

// base container style
var containerStyle = exports.containerStyle = {
    position: 'fixed',
    width: '50%',
    margin: '0 auto',
    right: '0px',
    left: '0px',
    textAlign: 'center',
    zIndex: '9999',
    pointerEvents: 'none',
    transition: 'all ' + _config.duration + 'ms ease',
    transform: 'translateY(0px)',
    lineHeight: '1.8',
    overflow: 'hidden',
    // fix
    msTransition: 'all ' + _config.duration + 'ms ease',
    msTransform: 'translateY(0px)',
    WebkitTransition: 'all ' + _config.duration + 'ms ease',
    WebkitTransform: 'translateY(0px)',
    OTransition: 'all ' + _config.duration + 'ms ease',
    OTransform: 'translateY(0px)',
    MozTransition: 'all ' + _config.duration + 'ms ease',
    MozTransform: 'translateY(0px)'
    // container top position
};var containerTopStyle = exports.containerTopStyle = {
    top: '-100px',
    borderRadius: '0 0 4px 4px'
    // container bottom position
};var containerBottomStyle = exports.containerBottomStyle = {
    bottom: '-100px',
    borderRadius: '4px 4px 0 0'
    // container default position
};var containerDefaultStyle = exports.containerDefaultStyle = {
    bottom: '20%',
    borderRadius: '4px'
    // base content style
};var contentBaseStyle = exports.contentBaseStyle = {
    cursor: 'pointer',
    display: 'block',
    width: 'auto',
    backgroundColor: 'white',
    padding: '10px 30px',
    pointerEvents: 'all'
    // success content style
};var contentSuccessStyle = exports.contentSuccessStyle = {
    backgroundColor: _config.colors.success,
    color: _config.colors.white
    // error content style
};var contentErrorStyle = exports.contentErrorStyle = {
    backgroundColor: _config.colors.error,
    color: _config.colors.white
    // warning content style
};var contentWarningStyle = exports.contentWarningStyle = {
    backgroundColor: _config.colors.warning,
    color: _config.colors.gray
    // info content style
};var contentInfoStyle = exports.contentInfoStyle = {
    backgroundColor: _config.colors.black,
    color: _config.colors.white,
    opacity: 0.6

    // default content style
};var contentDefaultStyle = exports.contentDefaultStyle = {};

/*============down animate=====================*/
var animateDownStyleToShow = exports.animateDownStyleToShow = {
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
};
var animateDownStyleToHide = exports.animateDownStyleToHide = {
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
    /*============up animate=====================*/
};var animateUpStyleToShow = exports.animateUpStyleToShow = {
    transform: 'translateY(-100px)',
    msTransform: 'translateY(-100px)',
    WebkitTransform: 'translateY(-100px)',
    OTransform: 'translateY(-100px)',
    MozTransform: 'translateY(-100px)'
};
var animateUpStyleToHide = exports.animateUpStyleToHide = {
    transform: 'translateY(100px)',
    msTransform: 'translateY(100px)',
    WebkitTransform: 'translateY(100px)',
    OTransform: 'translateY(100px)',
    MozTransform: 'translateY(100px)'
    /*============fade animate=====================*/
};var animateFadeStyleToShow = exports.animateFadeStyleToShow = {
    opacity: 1,
    MozOpacity: 1,
    WebkitOpacity: 1,
    OOpacity: 1,
    msOpacity: 1
};
var animateFadeStyleToHide = exports.animateFadeStyleToHide = {
    opacity: 0.01,
    MozOpacity: 0.01,
    WebkitOpacity: 0.01,
    OOpacity: 0.01,
    msOpacity: 0.01
};