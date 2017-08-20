import React from 'react';
import {
    DatePicker,
    MenuItem,
    SelectField,
    TextField,
    TimePicker
} from 'material-ui';

const ExperimentForm = (props) => (
    <div>
        <div>
            <TextField
                hintText="Enter the experiment name"
                floatingLabelText="Experiment Name"
            />
        </div>
        <div>
            <TextField
                hintText="Describe the hypothesis for this experiment"
                floatingLabelText="Hypothesis"
                multiLine={true}
                rows={3}
            />
        </div>
        <div>
            <DatePicker
                hintText="Select start date"
                floatingLabelText="Start date"
                autoOk={true}
                mode="portrait"
            />
            <TimePicker
                format="ampm"
                hintText="Select start time"
                floatingLabelText="Start time"
            />
            <DatePicker
                hintText="Select end date"
                floatingLabelText="End date"
                autoOk={true}
                mode="portrait"
            />
            <TimePicker
                format="ampm"
                hintText="Select end time"
                floatingLabelText="End time"
            />
        </div>
        <div>
            <SelectField
                floatingLabelText="Application"
            >
                <MenuItem value={1} primaryText="Application #1" />
                <MenuItem value={1} primaryText="Application #2" />
           </SelectField>
        </div>
    </div>
);

export default ExperimentForm;
