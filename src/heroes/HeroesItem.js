import {Component} from "react";
import "./Heroes.css"
import {connect} from "react-redux";

var addHeroAction = {type: "add"};
var removeHeroAction = {type: "remove"};

class HeroesItem extends Component {
    constructor(props) {
        super(props);
    }

    delete(id) {
        this.props.delete(id);
    }

    render() {
        var listItems = this.props.heroesList.map((hero) =>
            <div>
                <li key={hero.id}>
                    <a>
                        <span className="badge">{hero.id}</span> {hero.name}
                    </a>
                    <button className="delete" onClick={() => this.props.removeHero(hero.id)}>x</button>
                </li>
            </div>
        );
        return (
            <ul class="heroes">
                {listItems}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return { heroesList : state.heroesList }
}

function mapDispatchToProps(dispatch) {
    return {
        addHero: function () {
            return dispatch(addHeroAction);
        },
        removeHero: function () {
            return dispatch(removeHeroAction);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeroesItem);
