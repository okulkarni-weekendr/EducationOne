import React from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

class ExampleForm extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: null}
        }
    }

    onTitleChange(e){
        this.setState({
            course: { title: e.target.value }
        })
    }

    render(){
        return(
            <form>
                <FormGroup controlID="formBasicText">
                    <ControlLabel>Enter Course Title</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.course.title}
                        placeholder="Course Title"
                        onChange={this.onTitleChange}
                        />
                    <FormControl.Feedback/>
                </FormGroup>
            </form>
        );
    }

}

export default ExampleForm;