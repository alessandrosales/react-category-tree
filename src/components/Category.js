import React from 'react';

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.renderSubcategories = this.renderSubcategories.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    renderSubcategories() {
        return this.props.category.subcategories.map((cat, index) => 
            <Category deleteCategory={this.props.deleteCategory} key={index} category={ cat } />
        )
    }

    handleClick() {
        this.props.deleteCategory(this.props.category.id);
    }

    render() {
        if(this.props.category.subcategories.length === 0) {
            return <li>
                { this.props.category.name } 
                <span 
                    style={{color: 'red', cursor: 'pointer', fontWeight: 'bold'}} 
                    onClick={this.handleClick}
                > [x]</span>
            </li>
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