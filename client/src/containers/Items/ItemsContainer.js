import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Items from './Items';

class ItemsContainer extends Component {
    constructor() {
        super();

        this.state = {
            itemsData: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        let urls = [
            'http://localhost:3001/items',
            'http://localhost:3001/users'
        ];

        this.setState({
            isLoading: true
        });

        Promise.all(urls.map((request) => {
            return fetch(request).then((response) => {
                return response.json();
            }).then((data) => {
                return data;
            });
        })).then((values) => {
            console.log('items', values[0]);
            console.log('users', values[1]);

            // let items = values[0];
            // let users = values[1];

            const [items, users] = values;

            let itemsData = items.map((item) => {
                const itemowner = users.find((user) => user.id === item.itemowner)
                item.itemowner = itemowner;

                return item;
            });

            console.log('data', itemsData);

            this.setState({
                itemsData,
                isLoading: false
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Items />
        );
    }
}

ItemsContainer.propTypes = {

};

export default ItemsContainer;
