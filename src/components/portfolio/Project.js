import React, { Component } from "react";

export default class Project extends Component {


    render() {
        console.log(this.props);

        let {name, languagesIcons, source, info, picture} = this.props.item;
        return (
            <div className="projet">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                        )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt=""></img>
                <span className="infos">
                    <i className="fas fa-plus-circle"></i>
                </span>
            </div>
        );
    }
}