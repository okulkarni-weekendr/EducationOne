import React, {PropTypes} from 'react';
import CourseForm from './CoursePagewRedux'
import ExampleForm from './ExampleForm';

class CoursesPage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>CoursesPage</h1>
                <CourseForm/>
                <ExampleForm/>
            </div>
        );
    }
}

export default CoursesPage;
