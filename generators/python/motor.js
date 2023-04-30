/**
 * @license
 * Copyright 2023 Yang Zhang
 * SPDX-License-Identifier: Apache-2.0
*/
'use strict';

goog.provide('Blockly.Python.motor');

goog.require('Blockly.Python');

Blockly.JavaScript['stepper_motor'] = function(block) {
  Blockly.Python.definitions_['from_pimotor_import_*'] = 'from pimotor import *';
  var var_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var pin_en = Blockly.Python.valueToCode(block, 'PIN_EN', Blockly.Python.ORDER_ATOMIC);
  var pin_dir = Blockly.Python.valueToCode(block, 'PIN_DIR', Blockly.Python.ORDER_ATOMIC);
  var pin_stp = Blockly.Python.valueToCode(block, 'PIN_STP', Blockly.Python.ORDER_ATOMIC);
  var code = var_name + ' = StepperMotor(' + pin_en + ', ' + pin_dir + ', ' + pin_stp + ')\n';
  return code;
};

Blockly.Python['forward_motor'] = function(block) {
  var motor = Blockly.Python.variableDB_.getName(block.getFieldValue('MOTOR'), Blockly.Variables.NAME_TYPE);
  var duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_ATOMIC);
  var dc = Blockly.Python.valueToCode(block, 'DC', Blockly.Python.ORDER_ATOMIC);
  var code = motor + '.forward(' + duration + ', ' + freq + ', ' + dc + ')\n';
  return code;
};

Blockly.Python['backward_motor'] = function(block) {
  var motor = Blockly.Python.variableDB_.getName(block.getFieldValue('MOTOR'), Blockly.Variables.NAME_TYPE);
  var duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_ATOMIC);
  var dc = Blockly.Python.valueToCode(block, 'DC', Blockly.Python.ORDER_ATOMIC);
  var code = motor + '.backward(' + duration + ', ' + freq + ', ' + dc + ')\n';
  return code;
};
