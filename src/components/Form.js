import React from 'react';

export default class Form extends React.Component {

    render() {
        return <form onSubmit={this.props.submitMethod}>
            <input type="text" 
                onChange={this.props.changeInputMethod} 
                name="categoryName"
                value={this.props.categoryName}
                placeholder="Digite e pressione enter" 
                required={true}
            />

            <select 
                onChange={this.props.changeInputMethod} 
                name="parentCategory"
                value={this.props.parentCategory}
            >
                <option value="0">Nenhuma</option>
                { this.props.categories.map((cat, index) => 
                    <option key={index} value={cat.id}>{cat.name}</option>
                )}
            </select>

            <input type="submit" />
        </form>
    }
}