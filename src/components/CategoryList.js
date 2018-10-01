import React from 'react';

import Category from './Category';

export default class CategoryList extends React.Component {

    constructor(props) {
        super(props);

        this.renderCategories = this.renderCategories.bind(this);
    }

    renderCategories() {
        return this.props.categories.map((cat, index) => <Category key={index} category={cat} />);
    }

    render() {
        return (
            <ul>
                { this.renderCategories() }
            </ul>
        )
    }
}