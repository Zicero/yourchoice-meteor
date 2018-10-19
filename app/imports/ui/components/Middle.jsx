import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    const mid = { height: '500px' };
    return (
        <div className="sd-background">
          <Grid container verticalAlign="middle" style={mid}>
            <Grid.Row columns="1">
              <Grid.Column>
                <Image centered src="https://stardewvalley.net/wp-content/uploads/2017/12/main_logo.png"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}