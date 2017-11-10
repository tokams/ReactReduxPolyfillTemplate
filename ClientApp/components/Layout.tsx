import * as React from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className='container-fluid wrapper'>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
                    <div className="row">
                        { this.props.children }
                    </div>
                </div>
            </div>
        </div>;
    }
}
