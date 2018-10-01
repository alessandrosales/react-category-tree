import React from 'react';
import CategoryList from './CategoryList';
import Form from './Form';
import { fetchCategories, postCategory } from '../services/api';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoriesWithoutParent: [],
            categories: [],
            categoryName: '',
            parentCategory: 0
        }

        this.loadCategories = this.loadCategories.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    loadCategories() {
        fetchCategories().then(resp => {

            let categoriesWithoutParent = resp.data.filter(cat => {
                if(cat.subcategories === undefined) {
                    cat.subcategories = [];
                }

                resp.data.forEach(element => {
                    if(element.parentId === cat.id) {
                        cat.subcategories.push(element);
                    }
                });

                return cat.parentId === 0;
            });

            this.setState({
                categories: resp.data,
                categoriesWithoutParent: categoriesWithoutParent
            });
        });
    }

    componentDidMount() {
        this.loadCategories();
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        postCategory({ 
            name: this.state.categoryName, 
            parentId: parseInt(this.state.parentCategory, 10) 
        }).then(resp => {
            this.setState({
                categoryName: '',
                parentCategory: 0
            });
            this.loadCategories();
        });
    }

    render() {
        return (
            <div>
                <h1>My Categories</h1>
                
                <Form 
                    submitMethod={this.handleSubmit}  
                    changeInputMethod={this.handleChange}
                    categoryName={this.state.categoryName}
                    parentCategory={this.state.parentCategory}
                    categories={this.state.categories} 
                />

                <CategoryList categories={this.state.categoriesWithoutParent} />
            </div>
        )
    }
}