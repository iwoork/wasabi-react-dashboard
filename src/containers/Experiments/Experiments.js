import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/actions';
import { RaisedButton, FlatButton, Dialog } from 'material-ui';
import TableView from '../../components/TableView';
import ExperimentForm from '../../components/ExperimentForm';

class Experiments extends React.Component {
    constructor(props){
        super(props);
    }

    formatTable(data){
        //const formatted = [[1,2,3],[4,5,6],[7,8,9]];
        var formatted = data.experiments.map((experiment, index) => {
            var row = [];
            row.push(experiment.applicationName);
            row.push(experiment.label);
            row.push(experiment.creationTime);
            row.push(experiment.samplingPercent * 100);
            row.push(experiment.startTime);
            row.push(experiment.endTime);
            row.push(experiment.modificationTime);
            row.push(experiment.state);
            row.push('actions');
            return row;
        });
        console.log(formatted);
        return formatted;
    }

    render() {
        const headers = [
            'App',
            'Experiment',
            'Created by',
            'Sampling %',
            'Start',
            'End',
            'Modified',
            'Status',
            'Actions'
        ];
        // TODO: Sample data only. Get from API
        const apidata = {
          "totalEntries":1,
          "experiments":[
            {
                "id":"cd330f50-9ff3-45ba-88cb-601ce1de9e7e",
                "label":"test3",
                "applicationName":"company1",
                "startTime":"2017-08-19T23:00:00Z",
                "endTime":"2017-09-02T23:00:00Z",
                "samplingPercent":1.0,
                "description":"ujj",
                "hypothesisIsCorrect":"",
                "results":"",
                "rule":"",
                "ruleJson":"",
                "creationTime":"2017-08-20T09:48:39Z",
                "modificationTime":"2017-08-20T09:48:39Z",
                "state":"DRAFT",
                "isPersonalizationEnabled":false,
                "modelName":"",
                "modelVersion":"",
                "isRapidExperiment":false,
                "userCap":2147483647,
                "creatorID":"admin",
                "tags":null
            }
          ]
        };

        const modal = {
            open: true,
        }
        const { app, actions } = this.props;
        return (
            <div>
                <RaisedButton label="Create Experiment" primary={true}  onClick={()=>{actions.openModal(modal)}}/>
                <Dialog
                    title="Create experiment"
                    modal={false}
                    open={app.modal.open}
                >
                    <ExperimentForm />
                </Dialog>
                <TableView headers={headers} data={this.formatTable(apidata)} />
            </div>
        );
    }
}

Experiments.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { app } = state;
    return {
        app
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Experiments);
