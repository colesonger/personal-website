import React, {useState, useCallback} from 'react';
import {useTransition, animated} from 'react-spring';
import {AboutMe} from './AboutMe';
import {Resume} from './Resume';


const pages = [
    ({style, props}) => <animated.div style={{...style, gridRow: '1 / auto', gridColumn: '1/5'}}><AboutMe isLoaded={props}/></animated.div>,
    ({style}) => <animated.div style={{...style, gridRow: '1 / auto', gridColumn: '1 / 5'}}><Resume/></animated.div>,
    ({style}) => <animated.div style={{...style,  gridRow: '1 / auto', gridColumn: '2 / 5'}}><h1 style={{color: '#e0e1dd'}}>About Peanut Songer</h1></animated.div>,
    ({style}) => <animated.div style={{...style,  gridRow: '2 / auto', gridColumn: '2 / 5'}}><h1 style={{color: '#e0e1dd'}}>About Friend Songer</h1></animated.div>
]

export const About = () => {
    const [index, set] = useState(0);
    const [isLoaded, setLoaded] = useState(false);
    const onClick = useCallback(() => {set(state => (state+1)%4); setLoaded(true)},[])
    const onClickBack = useCallback(() => set(state => Math.abs((state-1)%4)), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(0,0,-60)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,-70)' },
        leave: { opacity: 0, transform: 'translate3d(0,0,-60)' },
        config: {
            duration: 500
        }
      })
    return (
        <div className='about-me' style={{display: 'grid', gridGap: '5px', overflowY: 'scroll', gridTemplateColumns: 'repeat(5, minmax(17vw, .5fr))', gridTemplateRows: 'repeat(4, 22.5vh)'}}>
            
            {transitions.map(({ item, key, props }) => {
                const Page = pages[item]
                return <Page key={key} style={props} props={isLoaded}/>
            })}
            <div style={{gridColumn: 5, gridRow: '2 / 4', cursor: 'pointer'}} onClick={onClick}>
            <ul style={{listStyleType: 'none', color: '#e0e1dd', textAlign: 'left'}}>
                <li>
                    {index === 0 ? <span style={{borderLeft: '2px solid #84b59f', paddingLeft: 5}}>See Resumé</span> : <span>&nbsp;</span>}
                </li>
                <li>
                    {index === 1 ? <span style={{borderLeft: '2px solid #84b59f', paddingLeft: 5}}>See About</span> : <span>&nbsp;</span>}
                </li>
                <li>
                    {index === 2 ? <span style={{borderLeft: '2px solid #84b59f', paddingLeft: 5}}>See Test</span> : <span>&nbsp;</span>}
                </li>
                <li>
                    {index === 3 ? <span style={{borderLeft: '2px solid #84b59f', paddingLeft: 5}}>Go Back</span> : <span>&nbsp;</span>}
                </li>
            </ul>
            </div>
            </div>
    )
}