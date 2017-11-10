import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { CardComponent } from "./cards/card";

import { connect } from 'react-redux';
import { ApplicationState } from "../store";


export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
   
    handleClick(event:any) {
        console.log("Hello, world");
    }


    private hasData: boolean = true;


    private data: any[] = [
        {id:0, name: "Thomas Darvik", age: 23},
        {id:1, name: "Kjell Arne Hellum", age: 25},
        {id:2, name: "Simon Jespersen", age: 26},
    ];

    public render() {
        return <div>
            
            <div className={"welcomeMessage"}>
                <h3>Hello world</h3>
                <button className={"btn btn-default"} onClick={(e) => this.handleClick(e)}>
                    Press me
                </button>
            </div>
            
            <div>
            {this.data.map((item, index) => (
                <CardComponent key={index} person={item}></CardComponent>
            ))}
            </div>
        </div>;
    }
}