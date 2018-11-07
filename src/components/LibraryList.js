import React, {Component} from 'react';
import { connect } from 'react-redux';



class LibraryList extends Component{
    render(){
        console.log(this.props);
        return;
    }
}


const mapStateToProps = state => {
    return { dataToShow: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);