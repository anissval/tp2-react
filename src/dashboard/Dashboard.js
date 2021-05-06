import React, { Component } from "react";
import {connect} from "react-redux";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var listItems = this.props.heroesList.map((hero) =>
            <div>
                <li key={hero.id}>
                    <a>
                        <span className="badge">{hero.id}</span> {hero.name}
                    </a>
                </li>
            </div>
        );
        return (
            <ul class="heroes">
                {listItems}
            </ul>
        );
        return (
            <div>
            <h2>Top Heroes</h2>
                <div>
                    <ul className="heroes">
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { heroesList : state.heroesList }
}

export default connect(mapStateToProps, null) (Dashboard);
