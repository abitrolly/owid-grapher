import { extend } from "./Util"
import { Bounds } from "./Bounds"
import * as React from "react"
import { computed } from "mobx"
import { observer } from "mobx-react"
import { ChartConfig } from "./ChartConfig"
import { DataTable } from "./DataTable"

// Client-side data export from chart
@observer
export class TableTab extends React.Component<{
    bounds: Bounds
    chart: ChartConfig
}> {
    @computed get bounds() {
        return this.props.bounds
    }

    render() {
        const { bounds } = this

        return (
            <div
                className="tableTab"
                style={extend(bounds.toCSS(), { position: "absolute" })}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "auto"
                    }}
                >
                    <DataTable chart={this.props.chart} />
                </div>
            </div>
        )
    }
}
