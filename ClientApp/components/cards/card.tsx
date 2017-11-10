import * as React from 'react';

export class CardComponent extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div className="card col-sm-8">
                <p><b>{this.props.person.name}</b></p>
                <p>{this.props.person.age}</p>
            </div>
        );
    }
}