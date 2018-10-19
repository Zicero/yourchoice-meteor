import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle ={ fontFamily: 'Nunito',
      fontWeight: '700',
      fontSize: '18px',
      color: 'white',
      textShadow: '0px 0px 4px rgba(0,0,0,0.4)',
      height: '55px'}
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item style={itemStyle}>Home</Menu.Item>
            <Menu.Item style={itemStyle}>BLOG</Menu.Item>
            <Menu.Item style={itemStyle}>COMMUNITY</Menu.Item>
            <Menu.Item style={itemStyle}>WIKI</Menu.Item>
            <Menu.Item style={itemStyle}>MEDIA</Menu.Item>
            <Menu.Item style={itemStyle}>SHOP</Menu.Item>
            <Menu.Item style={itemStyle}>FAQ</Menu.Item>
            <Menu.Item fitted position="right" style={itemStyle}><Icon name="twitter icon"/></Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="facebook f"/></Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="reddit"/></Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="envelope"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}