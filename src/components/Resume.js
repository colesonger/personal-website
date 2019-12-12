import React from 'react';

export const Resume = () => {
    return (
        <div style={{display: 'grid', color: '#e0e1dd', overflowY: 'scroll', gridTemplateColumns: 'repeat(3, 33%)'}}>
            <div style={{gridColumn: 1, textAlign: 'left', marginTop: 15}}>
                <h1 style={{marginTop: 0, marginBottom: 0}}>
                    Cole Songer
                </h1>
                <span>
                    Software Engineer
                </span>
            </div>
            <div style={{ marginTop: 15, gridColumn: '2 / 4'}}>
                <p style={{marginTop: '10px', textAlign: "left"}}>Goal oriented software engineer with a passion for reliable, reusable code and a penchant for new methodologies.</p>
            </div>
            <div style={{gridColumn: 1, textAlign: 'left',borderTop: '1px solid #e0e1dd'}}>
                <h2>
                    Experience
                </h2>
            </div>
            <div className='resume-section-top'>
                <h3 style={{gridColumn: '1 / 3', textAlign: 'left', marginBottom: 0}}>City of Charlottesville</h3>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Software Engineer II</h4>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Jun. 2019 - Present</h5>
                <ul style={{listStyle: 'outside', gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                    <li style={{textAlign: 'left'}}>Do other things</li>
                </ul>
            </div>
            <div className='resume-section'>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Software Engineer</h4>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Apr. 2018 - Jun. 2019</h5>
                <ul style={{gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                    <li style={{textAlign: 'left'}}>Do other things</li>
                </ul>
            </div>
            <div style={{gridColumn: 1, textAlign: 'left',borderTop: '1px solid #e0e1dd'}}>
                <h2>
                    Education
                </h2>
            </div>
            <div className='resume-section-top'>
                <h3 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>University of Virginia</h3>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Aug. 2012 - May 2016</h5>
                <span style={{gridColumn: '1 / 3', marginLeft: 0, fontSize: '.75rem', marginTop: -5}}>Bachelor of Science - Computer Science, School of Engineering</span>
                <ul style={{gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                    <li style={{textAlign: 'left'}}>Do other things</li>
                </ul>
            </div>
            <div className='resume-section'>
                <h3 style={{gridColumn: '1 / 3', marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Patrick Henry Community College</h3>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Aug. 2010 - May 2012</h5>
                <span style={{gridColumn: '1 / 3', marginLeft: 0, fontSize: '.75rem', marginTop: -5}}>Associate of Science - High School Dual Enrollment Program</span>
                <ul style={{listStyle: 'outside', gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                    <li style={{textAlign: 'left'}}>Do other things</li>
                </ul>
            </div>
            <div style={{gridColumn: 1, textAlign: 'left',borderTop: '1px solid #e0e1dd'}}>
                <h2>
                    Skills
                </h2>
            </div>
            <div className='resume-section-top'>
                <h3 style={{gridColumn: '1 / 3', textAlign: 'left', marginBottom: 0}}>Languages</h3>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Fluent</h4>
                <p style={{gridColumn: '1 / 4', marginBottom: 0, textAlign: 'left', marginLeft: 10}}>
                    C#, Java, Javascript, Python, HTML5, CSS3, Swift, T-SQL
                </p>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Proficient</h4>
                <p style={{gridColumn: '1 / 4', marginBottom: 0, textAlign: 'left', marginLeft: 10}}>
                    Ruby, PHP, C++, Objective-C, Kotlin
                </p>
            </div>
        </div>
    )
}