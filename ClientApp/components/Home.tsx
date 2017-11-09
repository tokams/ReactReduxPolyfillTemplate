import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { CardComponent } from "./cards/card";

import { connect } from 'react-redux';
import { ApplicationState } from "../store";
import * as TodoStore from "../store/Todo";


type TodoProps = TodoStore.TodosState 
        & typeof TodoStore.actionCreators
        & RouteComponentProps<{}>;

class Home extends React.Component<RouteComponentProps<{}>, {}> {
   
    handleClick(event:any) {
        console.log("Hello, world");
    }


    private data: any[] = [
        {id:0, name: "Thomas Darvik", age: 23},
        {id:1, name: "Kjell Arne Hellum", age: 25},
        {id:2, name: "Simon Jespersen", age: 26},
    ];
    private listItems = this.data.map((item) => 
        <CardComponent key={item.id} person={item}></CardComponent>
    );


    public render() {
        return <div>
            
            <div className={"welcomeMessage"}>
                <h3>Hello world</h3>
                <button className={"btn btn-default"} onClick={(e) => this.handleClick(e)}>
                    Press me
                </button>
            </div>
            
            <div>
                {this.listItems}
            </div>
            
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => state.todos,
    TodoStore.actionCreators)(Home) as typeof Home;
