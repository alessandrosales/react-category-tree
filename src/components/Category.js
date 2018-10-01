import React from 'react';

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.renderSubcategories = this.renderSubcategories.bind(this);
    }

    renderSubcategories() {
        return this.props.category.subcategories.map((cat, index) => <Category key={index} category={ cat } />)
    }

    render() {
        if(this.props.category.subcategories.length === 0) {
            return <li>{ this.props.category.name }</li>
        }else {
            return <li>
                { this.props.category.name }

                <ul>
                    { this.renderSubcategories() }
                </ul>
            </li>
        }
    }
}