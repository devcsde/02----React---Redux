import React from "react";
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";
import _ from "lodash";

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function highest(data){
  return _.round(_.max(data));
}

function lowest(data){
  return _.round(_.min(data));
}

export default (props) => {
  return(
    <div>
      <Sparklines  svgWidth={180} svgHeight={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div> &empty; {average(props.data)}{props.units}</div>
      <div> &uArr; {highest(props.data)}{props.units}  |  &dArr; {lowest(props.data)}{props.units}</div>
    </div>
  );
}