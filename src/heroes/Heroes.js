import React, { Component } from "react";
import "./Heroes.css";
import HeroesItem from "./HeroesItem";
import {connect} from "react-redux";

var addHeroAction = {type: "add"};
var removeHeroAction = {type: "remove"};

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

class Heroes extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.returnHeroesList = this.returnHeroesList.bind(this);
    }

    returnHeroesList() {
        return this.props.heroesList;
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                name: this._inputElement.value,
                id: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(id) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.id !== id);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <label id="new-hero">Hero name: </label>
                    <form onSubmit={this.props.addHero}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="enter hero">
                        </input>
                        <button className="add-button" type="submit">add</button>
                    </form>
                </div>
                <HeroesItem heroesList={this.props.heroesList} delete={this.props.removeHero()}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Heroes);
