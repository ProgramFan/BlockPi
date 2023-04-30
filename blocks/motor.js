/**
 * @license
 * Copyright 2020 Zhang Yiwei
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';

goog.provide('Blockly.Blocks.steppermotor'); // Deprecated.
goog.provide('Blockly.Constants.StepperMotor');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([
{
  "type": "stepper_motor",
  "message0": "Stepper Motor %1 pin_en %2 pin_dir %3 pin_stp %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "motor1"
    },
    {
      "type": "input_value",
      "name": "PIN_EN"
    },
    {
      "type": "input_value",
      "name": "PIN_DIR"
    },
    {
      "type": "input_value",
      "name": "PIN_STP"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Create a stepper motor instance",
  "helpUrl": ""
},
{
  "type": "forward_motor",
  "message0": "forward motor %1 with duration %2 frequency %3 duty cycle %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "MOTOR",
      "variable": "motor"
    },
    {
      "type": "input_value",
      "name": "DURATION"
    },
    {
      "type": "input_value",
      "name": "FREQ"
    },
    {
      "type": "input_value",
      "name": "DC"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Move motor forward with given duration, frequency, and duty cycle.",
  "helpUrl": ""
},
{
  "type": "backward_motor",
  "message0": "backward motor %1 with duration %2 frequency %3 duty cycle %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "MOTOR",
      "variable": "motor"
    },
    {
      "type": "input_value",
      "name": "DURATION"
    },
    {
      "type": "input_value",
      "name": "FREQ"
    },
    {
      "type": "input_value",
      "name": "DC"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Move motor backward with given duration, frequency, and duty cycle.",
  "helpUrl": ""
},
]);
