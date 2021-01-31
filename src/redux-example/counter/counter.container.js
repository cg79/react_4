import { connect } from 'react-redux';
import CounterActions from './counter.actions';
import CouterRedux from './counter.component';

const mapStateToProps = store => {
    debugger;
    return {count: store.counterReducer.counterValue};
}

const mapDispatchToProps = dispatch => ({
    increment : () => dispatch(CounterActions.increment()),
});

const CounterContainer  = connect(
    mapStateToProps,
    mapDispatchToProps
)(CouterRedux);

export default CounterContainer;
