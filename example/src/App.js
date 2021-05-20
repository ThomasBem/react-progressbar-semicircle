import React, { Component } from 'react'

import SemiCircleProgressBar from 'react-progressbar-semicircle'
import { TwitterPicker } from 'react-color'
import Slider from 'rc-slider'
import Toggle from 'react-toggle'

import 'rc-slider/assets/index.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stroke: '#02B732',
      strokeWidth: 10,
      background: '#D0D0CE',
      diameter: 300,
      orientation: 'up',
      direction: 'right',
      showPercentValue: true,
      percentage: 75
    }
  }

  handleStrokeColorChange = ({ hex }) => this.setState({ stroke: hex });
  handleBackgroundColorChange = ({ hex }) => this.setState({ background: hex });
  handleShowPercentValue = event =>
    this.setState({ showPercentValue: !this.state.showPercentValue });

  handleStrokeWidthChange = strokeWidth => this.setState({ strokeWidth });
  handlePercentChange = percentage => this.setState({ percentage });
  handleOrientationToggle = event => {
    if (event.target.checked) {
      this.setState({ orientation: 'down' })
    } else {
      this.setState({ orientation: 'up' })
    }
  };

  handleDirectionToggle = event => {
    if (event.target.checked) {
      this.setState({ direction: 'left' })
    } else {
      this.setState({ direction: 'right' })
    }
  };

  render() {
    return (
      <div className="example-container">
        <div>
          <SemiCircleProgressBar
            stroke={this.state.stroke}
            strokeWidth={this.state.strokeWidth}
            background={this.state.background}
            diameter={this.state.diameter}
            orientation={this.state.orientation}
            direction={this.state.direction}
            showPercentValue={this.state.showPercentValue}
            percentage={this.state.percentage}
          />
        </div>
        <div className="example-controls">
          <div className="color-controls">
            <div>
              <span>Set stroke color for the progress bar</span>
              <TwitterPicker
                className="stroke-color"
                onChangeComplete={this.handleStrokeColorChange}
              />
            </div>
            <div>
              <span>Set background color for the progress bar</span>
              <TwitterPicker
                className="background-color"
                onChangeComplete={this.handleBackgroundColorChange}
              />
            </div>
          </div>
          <div className="show-percent-value">
            <input
              type="checkbox"
              onChange={event => this.handleShowPercentValue(event)}
              checked={this.state.showPercentValue}
            />
            <span>Show percent value in progress bar</span>
          </div>
          <span>Set stroke width for the progress bar</span>
          <div className="stroke-width">
            <Slider
              min={2}
              max={25}
              defaultValue={this.state.strokeWidth}
              onAfterChange={this.handleStrokeWidthChange}
            />
            <span>{this.state.strokeWidth}</span>
          </div>
          <span>Set percentage for the progress bar</span>
          <div className="percent-value">
            <Slider
              min={0}
              max={100}
              step={5}
              defaultValue={this.state.percentage}
              onAfterChange={this.handlePercentChange}
            />
            <span>{this.state.percentage}%</span>
          </div>
          <div className="orientation-toggle">
            <Toggle
              defaultChecked={false}
              onChange={event => this.handleOrientationToggle(event)}
            />
            <span>Flip progress bar</span>
          </div>
          <div className="direction-toggle">
            <Toggle
              defaultChecked={false}
              onChange={event => this.handleDirectionToggle(event)}
            />
            <span>Switch direction</span>
          </div>
        </div>
      </div>
    )
  }
}
