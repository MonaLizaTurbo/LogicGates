/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Blockly.Blocks['boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","TRUE"], ["0","FALSE"]]), "boolean");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}; 

Blockly.JavaScript['boolean'] = function(block) {
  var dropdown_boolean = block.getFieldValue('boolean');
    var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
    if(dropdown_boolean == "TRUE")
        code = true;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("in a")
        .setCheck("Boolean")
        .appendField("AND: input 1");
    this.appendValueInput("in b")
        .setCheck("Boolean")
        .appendField("input 2");
    this.appendValueInput("out c")
        .setCheck("Boolean")
        .appendField("output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setColour(230);
 this.setTooltip("and");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['and'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'in a',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument1 = Blockly.JavaScript.valueToCode(block, 'in b',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument2 = Blockly.JavaScript.valueToCode(block, 'out c',
      Blockly.JavaScript.ORDER_TYPEOF);
    var code = 'if(' + argument0 +' && ' + argument1 + ') \n' + argument2 + ' = true; \n\
else \n ' + argument2 + ' = false;\n';
  return code;
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("in a")
        .setCheck("Boolean")
        .appendField("OR: input 1");
    this.appendValueInput("in b")
        .setCheck("Boolean")
        .appendField("input 2");
    this.appendValueInput("out c")
        .setCheck("Boolean")
        .appendField("output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setColour(270);
 this.setTooltip("and");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['or'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'in a',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument1 = Blockly.JavaScript.valueToCode(block, 'in b',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument2 = Blockly.JavaScript.valueToCode(block, 'out c',
      Blockly.JavaScript.ORDER_TYPEOF);
     code = 'if(' + argument0 +' || ' + argument1 + ') \n' + argument2 + ' = true; \n\
else \n ' + argument2 + ' = false;\n';
  return code;
};

Blockly.Blocks['nor'] = {
  init: function() {
    this.appendValueInput("in a")
        .setCheck("Boolean")
        .appendField("NOR: input 1");
    this.appendValueInput("in b")
        .setCheck("Boolean")
        .appendField("input 2");
    this.appendValueInput("out c")
        .setCheck("Boolean")
        .appendField("output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setColour(270);
 this.setTooltip("and");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['nor'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'in a',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument1 = Blockly.JavaScript.valueToCode(block, 'in b',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument2 = Blockly.JavaScript.valueToCode(block, 'out c',
      Blockly.JavaScript.ORDER_TYPEOF);
     code = 'if(' + argument0 +' || ' + argument1 + ') \n' + argument2 + ' = false; \n\
else \n ' + argument2 + ' = true;\n';
  return code;
};

Blockly.Blocks['nand'] = {
  init: function() {
    this.appendValueInput("in a")
        .setCheck("Boolean")
        .appendField("NAND: input 1");
    this.appendValueInput("in b")
        .setCheck("Boolean")
        .appendField("input 2");
    this.appendValueInput("out c")
        .setCheck("Boolean")
        .appendField("output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setColour(230);
 this.setTooltip("and");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['nand'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'in a',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument1 = Blockly.JavaScript.valueToCode(block, 'in b',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument2 = Blockly.JavaScript.valueToCode(block, 'out c',
      Blockly.JavaScript.ORDER_TYPEOF);
     code = 'if(' + argument0 +' && ' + argument1 + ') \n' + argument2 + ' = false; \n\
else \n ' + argument2 + ' = true;\n';
  return code;
};

Blockly.Blocks['xor'] = {
  init: function() {
    this.appendValueInput("in a")
        .setCheck("Boolean")
        .appendField("XOR: input 1");
    this.appendValueInput("in b")
        .setCheck("Boolean")
        .appendField("input 2");
    this.appendValueInput("out c")
        .setCheck("Boolean")
        .appendField("output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setColour(270);
 this.setTooltip("and");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['xor'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'in a',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument1 = Blockly.JavaScript.valueToCode(block, 'in b',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument2 = Blockly.JavaScript.valueToCode(block, 'out c',
      Blockly.JavaScript.ORDER_TYPEOF);
     code = 'if(!' + argument0 +' && ' + argument1 + ' || ' + argument0 + ' && !' + argument1 + ') \n' + argument2 + ' = true; \n\
else \n ' + argument2 + ' = false;\n';
  return code;
};

Blockly.Blocks['xnor'] = {
  init: function() {
    this.appendValueInput("in a")
        .setCheck("Boolean")
        .appendField("XNOR: input 1");
    this.appendValueInput("in b")
        .setCheck("Boolean")
        .appendField("input 2");
    this.appendValueInput("out c")
        .setCheck("Boolean")
        .appendField("output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setColour(270);
 this.setTooltip("and");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['xnor'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'in a',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument1 = Blockly.JavaScript.valueToCode(block, 'in b',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument2 = Blockly.JavaScript.valueToCode(block, 'out c',
      Blockly.JavaScript.ORDER_TYPEOF);
     code = 'if(!' + argument0 +' && ' + argument1 + ' || ' + argument0 + ' && !' + argument1 + ') \n' + argument2 + ' = false; \n\
else \n ' + argument2 + ' = true;\n';
  return code;
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("in a")
        .setCheck("Boolean")
        .appendField("NOT: input 1");
    this.appendValueInput("out c")
        .setCheck("Boolean")
        .appendField("output");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true, "Boolean");
    this.setColour(300);
 this.setTooltip("and");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['not'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'in a',
      Blockly.JavaScript.ORDER_TYPEOF);
    var argument2 = Blockly.JavaScript.valueToCode(block, 'out c',
      Blockly.JavaScript.ORDER_TYPEOF);
     code = 'if(' + argument0 + ') \n' + argument2 + ' = false; \n\
else \n ' + argument2 + ' = true;\n';
  return code;
};

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

Blockly.Blocks['boolean_variable'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("Variable"), "NAME")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("Enter the name of variable");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['boolean_variable'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_boolean = block.getFieldValue('NAME');
  var code = dropdown_boolean;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['variables_get'] = function(block) {
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + argument0 + ';\n';
};