import * as React from 'react';

export class CardComponent extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div>
                <h3>{this.props.person.name}</h3>
                <p>{this.props.person.age}</p>
            </div>
        );
    }
}