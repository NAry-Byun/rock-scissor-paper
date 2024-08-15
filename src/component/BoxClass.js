import React from "react";

export default class BoxClass extends React.Component {
    render() {
        return (
            <div>
                <div>Box {this.props.num}</div>
            </div>
        );
    }
}
