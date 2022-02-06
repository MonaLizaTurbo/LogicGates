/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating JavaScript for dynamic variable blocks.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.provide('Blockly.JavaScript.variablesDynamic');

goog.require('Blockly.JavaScript');
goog.require('Blockly.JavaScript.variables');


// JavaScript is dynamically typed.
Blockly.JavaScript['variables_get_dynamic'] =
    Blockly.JavaScript['variables_get'];
Blockly.JavaScript['variables_set_dynamic'] =
    Blockly.JavaScript['variables_set'];
    Blockly.Blocks['led'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DIODE:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['led'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var value = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_TYPEOF);
  
  
//  'var text_' + value + ' = document.createElement("div");\ndtext_' + value + 
//          '.setAttribiute("id", "text_' + value + '");\n' +
//          'text_' + value + '.setAttribute("class", "text");\n\
//        document.body.appendChild(text_' + value + ');\n\
//        text_' + value + '.style.left = 760+ + 80*elements.length + "px";\n';
  var code = 'var div_' + value + ' = document.createElement("div");\ndiv_' + value 
          + '.setAttribute("class", "diode");\ndiv_' + value + '.setAttribute("id", "' + value + '_diode");\ndocument.body.appendChild(div_' + value + ');\n\
if(' + value +') \n' + "document.getElementById('" + value + "_diode').style.backgroundColor='green';"
  + '\n else \n' + "document.getElementById('" + value + "_diode').style.backgroundColor='red';\n"
  +   'var elements = document.getElementsByClassName("diode");\n\
  var element_' + value + ' = document.getElementById("' + value + '_diode");\n'
  + value + '_diode.style.left = 760+ + 80*elements.length + "px";\n' + 
    'var text_' + value + ' = document.createElement("div");\ntext_' + value + 
          '.setAttribute("id", "text_' + value + '");\n' +
          'text_' + value + '.setAttribute("class", "text");\n\
        document.body.appendChild(text_' + value + ');\n\
        text_' + value + '.style.left = 760+ + 80*elements.length + "px";\n' + 
            'document.getElementById("text_' + value + '").innerHTML = "' + value + '";';
  return code;
};
