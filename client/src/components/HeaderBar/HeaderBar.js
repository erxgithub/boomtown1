import React from 'react';
import PropTypes from 'prop-types';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

import logo from '../../images/boomtown-logo.svg';

const styles = {
    toolbar: {
        paddingTop: '0.5rem',
        paddingLeft: '3rem',
        paddingBottom: '0.5rem',
        paddingRight: '1rem',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        height: 'auto',
    },
    dropdown: {
        paddingTop: '0',
        paddingLeft: '2rem',
        paddingBottom: '0',
        paddingRight: '0',
    },
    profile: {
        margin: '0',
    },
    logout: {
        marginTop: '0',
        marginLeft: '1rem',
        marginBottom: '0',
        marginRight: '1rem',
    },
};

const HeaderBar = ({tagData, tagValues, handleChange}) => (
    <Toolbar style={styles.toolbar}>
        <ToolbarGroup firstChild={true}>
            <a href="/">{<img className="logo" src={logo} alt="My logo" />}</a>
            {tagData.length > 0 ?
                <SelectField
                  multiple={true}
                  hintText="Filter by Tag"
                  autoWidth={true}
                  style={styles.dropdown}
                  value={tagValues}
                  onChange={handleChange}

                >
                    {tagData.map((tag, i) => (
                        <MenuItem
                            key={i}
                            insetChildren={true}
                            checked={tagValues && tagValues.indexOf(tag) > -1}
                            value={tag}
                            primaryText={tag}
                        />
                    ))}
                </SelectField>
            : ''}
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
            <RaisedButton href="/profile/eEvh1WUF5nb5eeUksUQb3Ph0kOU2" label="MY PROFILE" primary={true} style={styles.profile} />
            <RaisedButton label="LOGOUT" secondary={true} style={styles.logout} />
        </ToolbarGroup>
    </Toolbar>
);

HeaderBar.propTypes = {
    tagData: PropTypes.array,
    tagValues: PropTypes.array,
    handleChange: PropTypes.func.isRequired
};

export default HeaderBar;
