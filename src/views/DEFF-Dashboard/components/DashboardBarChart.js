import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import {
  BarChart,
} from "../../../components/charts";



const DashboardBarChart = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          Number of bottles Manufactured and Recycled per Month
        </CardTitle>

        <div className="chart-container">
          <BarChart data={props.dataNumbersBarChart} />
        </div>
      </CardBody>
    </Card>
  )
}

export default DashboardBarChart;