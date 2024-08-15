import * as React from "react";
import { TextField } from "@fluentui/react";

export interface IHelloWorldProps {
  name?: string;
  updateValue?: (value: string) => void;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      <TextField
        value={this.props.name}
        onChange={(_event, newValue) => this.props.updateValue && this.props.updateValue(newValue || "")}
      />
    );
  }
}
