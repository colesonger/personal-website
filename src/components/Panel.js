import React, { useState, Component, useEffect } from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import Header from './Header';
import Portfolio from './Portfolio';
import {About} from './About';
import {Contact} from './Contact';


export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {

            this.setState({index: Number(this.props.currentPage)})
        }
    }
    render() {
        const elements = [
            (style) => <animated.div style={{...style, height: 0 }}><Header breakpoints={this.props.breakpoints} handleClick={this.props.handleClick}/></animated.div>,
            (style) => <animated.div style={{...style, height: 0 }}><About /></animated.div>,
            (style) => <animated.div style={{...style, height: 0, color: 'white' }}><Portfolio/></animated.div>,
            (style) => <animated.div style={{...style, height: 0 , color: 'white' }}><Contact /></animated.div>
        ]
        console.log("Index: ", this.state.index)
        return (
            <div className='main' style={{marginLeft: '5vw', width: '90vw', willChange: 'transform, opacity'}}>
                <Transition
                    
                    items={this.state.index}
                    from={{ opacity: 0, transform: this.state.index === 2 ? 'translate3d(0vh,0vh,-60px)' : 'translate3d(0vh,0vh,-60px)'}}
                    enter={{ opacity: 1, transform: this.state.index === 2 ? 'translate3d(0vh,0vh,-60px)' : 'translate3d(0vh,0vh,-60px)' }}
                    leave={{ opacity: 0, transform: this.state.index === 2 ? 'translate3d(0vh,0vh,-60px)' : 'translate3d(0vh,0vh,-60px)' }}
                    config={{duration: 500, friction: 800}}>
                    {index => elements[index]}
                    </Transition>
            </div>
        )
    }

}
