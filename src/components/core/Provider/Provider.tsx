import React from 'react';
import { Theme } from '../../../types/index';

type DynamicProviderProps = { theme: Theme };

export class DynamicProvider extends React.Component {
    theme: Theme
    
    constructor(props: DynamicProviderProps) {
        super({ });
        this.theme = props.theme;
    }

    render() {
      return (
        <div className="dynamic-root">

        </div>
      );
    }
};