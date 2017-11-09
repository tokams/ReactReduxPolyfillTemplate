import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
   
    handleClick(event:any) {
        console.log("Hello, world");
    }

    public render() {
        return <div>
            <h3>Hello world</h3>
            <button className={"btn btn-default"} onClick={(e) => this.handleClick(e)}>
                Press me
            </button>
        </div>;
    }
}
