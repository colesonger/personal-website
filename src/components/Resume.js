import React from 'react';

export const Resume = () => {
    return (
        <div style={{display: 'grid', color: '#e0e1dd', overflowY: 'scroll', gridTemplateColumns: 'repeat(3, 33%)'}}>
            <div style={{gridColumn: 1, textAlign: 'left'}}>
                <h1 style={{marginBottom: 0}}>
                    Cole Songer
                </h1>
                <span>
                    Software Engineer
                </span>
            </div>
            <div style={{ marginTop: 15, gridColumn: '2 / 4', borderTop: '1px solid #e0e1dd', borderBottom: '1px solid #e0e1dd'}}>
                <p style={{marginTop: '10px', textAlign: "left"}}>Goal oriented software engineer with a passion for reliable, reusable code and a penchant for new methodologies.</p>
            </div>
            <div style={{gridColumn: 1, textAlign: 'left'}}>
                <h2>
                    Experience
                </h2>
            </div>
            <div style={{gridColumn: '2 / 4', display:'grid', gridTemplateColumns: 'repeat(3, 33%)'}}>
                <h3 style={{gridColumn: '1 / 3', textAlign: 'left', marginBottom: 0}}>City of Charlottesville</h3>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Software Engineer II</h4>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Jun. 2019 - Present</h5>
                <ul style={{listStyle: 'outside', gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                </ul>
            </div>
            <div style={{gridColumn: '2 / 4', display:'grid', gridTemplateColumns: 'repeat(3, 33%)', borderBottom: '1px solid #e0e1dd'}}>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Software Engineer</h4>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Apr. 2018 - Jun. 2019</h5>
                <ul style={{gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                </ul>
            </div>
            <div style={{gridColumn: 1, textAlign: 'left'}}>
                <h2>
                    Awards
                </h2>
            </div>
            <div style={{gridColumn: '2 / 4', display:'grid', gridTemplateColumns: 'repeat(3, 33%)'}}>
                <h3 style={{gridColumn: '1 / 3', textAlign: 'left', marginBottom: 0}}>City of Charlottesville</h3>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Software Engineer II</h4>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Jun. 2019 - Present</h5>
                <ul style={{listStyle: 'outside', gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                </ul>
            </div>
            <div style={{gridColumn: '2 / 4', display:'grid', gridTemplateColumns: 'repeat(3, 33%)', borderBottom: '1px solid #e0e1dd'}}>
                <h4 style={{gridColumn: 1, marginLeft: 10, marginBottom: 0, textAlign: 'left'}}>Software Engineer</h4>
                <h5 style={{gridColumn: 3, textAlign: 'right', marginBottom: 0, opacity: 0.7}}>Apr. 2018 - Jun. 2019</h5>
                <ul style={{gridColumn: '1 / auto'}}>
                    <li style={{textAlign: 'left'}}>Make stuff</li>
                    <li style={{textAlign: 'left'}}>Do things</li> 
                </ul>
            </div>
        </div>
    )
}