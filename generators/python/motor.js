/**
 * @license
 * Copyright 2023 Yang Zhang
 * SPDX-License-Identifier: Apache-2.0
*/
'use strict';

goog.provide('Blockly.Python.motor');

goog.require('Blockly.Python');

Blockly.Python['gpio_devices_out'] = function(block) {
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['gpio_output'] = function (block) {
  Blockly.Python.definitions_['from_gpiozero_import_*'] = 'from gpiozero import *';
  var pin_num = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_NONE);
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + ' = DigitalOutputDevice(' + pin_num + ')\n';
  return code;
};

Blockly.Python['gpio_output_on'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.on()\n';
  return code;
};

Blockly.Python['gpio_output_off'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.off()\n';
  return code;
};

Blockly.Python['gpio_close_out'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.close()\n';
  return code;
};

Blockly.Python['gpio_output_value'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var code = value_device + '.value';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['gpio_output_value_set'] = function (block) {
  var value_device = Blockly.Python.valueToCode(block, 'device', Blockly.Python.ORDER_NONE);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_NONE);
  var code = value_device + '.value = ' + value_value + '\n';
  return code;
};
