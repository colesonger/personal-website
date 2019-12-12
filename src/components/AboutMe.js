import React from 'react';
import { useSpring, useTransition, animated, config} from 'react-spring';

const Path = ({stroke}) => (
    <animated.svg style={{width: '15px',gridColumn: 1, display: 'inline-block'}} strokeDasharray='100' strokeDashoffset={stroke.x}>
        <path d="M0,15 l0,110" strokeWidth='10' stroke="#84b59f"/>
    </animated.svg>
)


export const AboutMe = (isLoaded) => {
    console.log(isLoaded.isLoaded);
    const props = useSpring({
        x: 0, from: {x: 110}, config: {
            duration: 500,
            mass: 1, 
            tension: 280,
            friction: 120
        },
        immediate: isLoaded.isLoaded
    });
    const transitions = useTransition(1, 1, {
        from: {transform: 'translate3d(-75vw,0,0)' },
        enter: item => async(next,cancel) => 
        { if (!isLoaded.isLoaded) await new Promise(resolve => setTimeout(resolve, 400));
          await next({transform: 'translate3d(0vw,0,0)' })
        },
        immediate: isLoaded.isLoaded,
        leave: {transform: 'translate3d(0,0,0)' },
        config: {
            duration: 500,
            mass: 1,
            tension: 180, 
            friction: 12
        }
      })
    const descriptionTransition = useTransition(1,2, {
        from: {opacity: 0},
        enter: item => async(next,cancel) => 
        { if (!isLoaded.isLoaded) await new Promise(resolve => setTimeout(resolve, 900));
          await next({opacity: 1 })
        },
        leave: {opacity: 1},
        immediate: isLoaded.isLoaded,
        config: {
            duration: 650,
            mass: 1,
            tension: 180, 
            friction: 12
        }
    })
    return (
        <>
            <div className='title' style={{ textAlign: 'left', display: 'grid', gridTemplateColumns: 'repeat(2, min-content auto)', gridTemplateRows: 'repeat(1, 100%)'}}>
                <Path stroke={props} />
                {transitions.map(({item, key, props}) => {
                    return(
                        <animated.span key={key} style={{...props, fontSize: '2em', fontWeight: 400, gridColumn: 2, marginTop: 20, display: 'inline-block'}}> {/*, borderLeft: '6px solid white', paddingLeft: 15}}>*/}
                        
                            Goal oriented software engineer with a passion for reliable, reusable code and a penchant for new methodologies.
                        </animated.span>)
                })}
            </div>
            {descriptionTransition.map(({item, key, props}) => {
                return (
                    <animated.div key={key} style={{...props}} className='description'>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've always been named Cole. Test text testy test test. Blah blah blah blah blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  
                        </p>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've actually never eaten a bean. Test text testy test test.
                        </p>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've always been named Cole. Test text testy test test. Blah blah blah blah blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  
                        </p>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've actually never eaten a bean. Test text testy test test.
                        </p>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've always been named Cole. Test text testy test test. Blah blah blah blah blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  
                        </p>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've actually never eaten a bean. Test text testy test test.
                        </p>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've always been named Cole. Test text testy test test. Blah blah blah blah blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  
                        </p>
                        <p className='descriptor' style={{textAlign: 'left',fontSize: '1.25rem',color: '#e0e1dd'}}>
                            I've actually never eaten a bean. Test text testy test test.
                        </p>
                    </animated.div>
                )
            })}
        </>
    )
};