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

Blockly.defineBlocksWithJsonArray(
[
  {
    "type": "create_motor_driver",
    "message0": "Create Motor Driver: Pin EN %1 Pin DIR %2 Pin STP %3 %4",
    "args0": [
      {
        "type": "input_value",
        "name": "PIN_EN",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "PIN_DIR",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "PIN_STP",
        "check": "Number"
      },
      {
        "type": "field_variable",
        "name": "MOTOR_VAR",
        "variable": "motor"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Create a motor driver with specified pin connections",
    "helpUrl": ""
  },
  {
    "type": "drive_motor",
    "message0": "Drive Motor %1 Duration %2 Freq %3 DC %4 Clockwise %5",
    "args0": [
      {
        "type": "field_variable",
        "name": "MOTOR_VAR",
        "variable": "motor"
      },
      {
        "type": "input_value",
        "name": "DURATION",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "FREQ",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "DC",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "CLOCKWISE",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Drive the motor forward or backward for a given time length",
    "helpUrl": ""
  },
  {
    "type": "forward_motor",
    "message0": "Drive Motor Forward %1 Duration %2 Freq %3 DC %4",
    "args0": [
      {
        "type": "field_variable",
        "name": "MOTOR_VAR",
        "variable": "motor"
      },
      {
        "type": "input_value",
        "name": "DURATION",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "FREQ",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "DC",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Drive the motor forward for a given time length",
    "helpUrl": ""
  },
  {
    "type": "backward_motor",
    "message0": "Drive Motor Backward %1 Duration %2 Freq %3 DC %4",
    "args0": [
      {
        "type": "field_variable",
        "name": "MOTOR_VAR",
        "variable": "motor"
      },
      {
        "type": "input_value",
        "name": "DURATION",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "FREQ",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "DC",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Drive the motor backward for a given time length",
    "helpUrl": ""
  }
]);
