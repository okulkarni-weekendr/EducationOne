import React from 'react';
import {Link} from 'react-router';
import ExampleForm from './ExampleForm';

class HomePage extends React.Component {
    render(){
        return (
            <div>
                <div className="jumbotron">
                    <h1>This is the HomePage of the EducationOne Project</h1>
                    <br/>
                    <p>React, Redux, D3, MongoDB, Django is the techstack behind it</p>
                    <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                </div>
                {/*<ExampleForm />*/}
            </div>
        );
    }
}

export default HomePage;
