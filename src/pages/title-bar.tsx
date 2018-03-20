
import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
/*

import * as React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
*/

interface TitleBarProps {
    activeItem: string;
}

const TitleBar = (props: TitleBarProps) => (
    <div className="title-bar">
        <Menu pointing={true} secondary={true}>
          <Menu.Item as={Link} to="/" name="Motivator" active={props.activeItem === 'home'} />
          <Menu.Item as={Link} to="/aim1" name="Aim 1" active={props.activeItem === 'aim1'} />
          <Menu.Item as={Link} to="/aim2" name="Aim 2" active={props.activeItem === 'aim2'} />
          <Menu.Item as={Link} to="/aim3" name="Aim 3" active={props.activeItem === 'aim3'} />
          <Menu.Menu position="right">
            <Menu.Item name="logout" active={props.activeItem === 'logout'} />
          </Menu.Menu>
        </Menu>
    </div>
);

export default TitleBar;