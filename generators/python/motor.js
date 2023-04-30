/**
 * @license
 * Copyright 2023 Yang Zhang
 * SPDX-License-Identifier: Apache-2.0
*/
'use strict';

goog.provide('Blockly.Python.motor');

goog.require('Blockly.Python');

Blockly.Python['create_motor_driver'] = function(block) {
  var pinEn = Blockly.Python.valueToCode(block, 'PIN_EN', Blockly.Python.ORDER_ATOMIC);
  var pinDir = Blockly.Python.valueToCode(block, 'PIN_DIR', Blockly.Python.ORDER_ATOMIC);
  var pinStp = Blockly.Python.valueToCode(block, 'PIN_STP', Blockly.Python.ORDER_ATOMIC);
  var motorVar = Blockly.Python.variableDB_.getName(block.getFieldValue('MOTOR_VAR'), Blockly.Variables.NAME_TYPE);

  Blockly.Python.definitions_['import_pimotor'] = 'from pimotor import *';

  var code = motorVar + ' = StepperMotor(' + pinEn + ', ' + pinDir + ', ' + pinStp + ')\n';
  return code;
};

Blockly.Python['drive_motor'] = function(block) {
  var motorVar = Blockly.Python.variableDB_.getName(block.getFieldValue('MOTOR_VAR'), Blockly.Variables.NAME_TYPE);
  var duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_ATOMIC);
  var dc = Blockly.Python.valueToCode(block, 'DC', Blockly.Python.ORDER_ATOMIC);
  var clockwise = Blockly.Python.valueToCode(block, 'CLOCKWISE', Blockly.Python.ORDER_ATOMIC);

  var code = motorVar + '.drive(' + duration + ', ' + freq + ', ' + dc + ', ' + clockwise + ')\n';
  return code;
};

Blockly.Python['forward_motor'] = function(block) {
  var motorVar = Blockly.Python.variableDB_.getName(block.getFieldValue('MOTOR_VAR'), Blockly.Variables.NAME_TYPE);
  var duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_ATOMIC);
  var dc = Blockly.Python.valueToCode(block, 'DC', Blockly.Python.ORDER_ATOMIC);

  var code = motorVar + '.drive(' + duration + ', ' + freq + ', ' + dc + ', True)\n';
  return code;
};

Blockly.Python['backward_motor'] = function(block) {
  var motorVar = Blockly.Python.variableDB_.getName(block.getFieldValue('MOTOR_VAR'), Blockly.Variables.NAME_TYPE);
  var duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_ATOMIC);
  var dc = Blockly.Python.valueToCode(block, 'DC', Blockly.Python.ORDER_ATOMIC);

  var code = motorVar + '.drive(' + duration + ', ' + freq + ', ' + dc + ', False)\n';
  return code;
};
