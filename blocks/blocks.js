Blockly.Msg.buttonA_Msg = "SW_A";
Blockly.Msg.buttonB_Msg = "SW_B";
Blockly.Msg.LED_LIFT_Msg = "Left_ON";
Blockly.Msg.LED_RIGHT_Msg = "Right_ON";
Blockly.Msg.LEFT_OFF = "Left_OFF";
Blockly.Msg.RIGHT_OFF = "Right_OFF";
Blockly.Msg.On_Msg = "ON";
Blockly.Msg.OFF_Msg = "Off";
Blockly.Msg.mt_sigh = ">=";
Blockly.Msg.lt_sigh = "<=";
Blockly.Msg.eq_sigh = "==";



Blockly.defineBlocksWithJsonArray([
{
 
//Motor Start //////////////////////////////
{
  "type": "stopMotor",
  "message0": "StopMotor",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "moveAward",
  "message0": "MoveForward for  %1 Second at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveAward",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "moveBack",
  "message0": "MoveBack for  %1 Second at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveBack",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "moveLeft",
  "message0": "MoveLeft for  %1 Second at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveLeft",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "moveRight",
  "message0": "MoveRight for  %1 Second at Speed  %2",
  "args0": [
    {
      "type": "field_number",
      "name": "moveRight",
      "value": 0
    },
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Forward",
  "message0": "MoveForward at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Backward",
  "message0": "MoveBackward at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Left",
  "message0": "MoveLeft at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Right",
  "message0": "MoveRight at Speed  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "speed",
      "options": [
        [
          "50%",
          "512"
        ],
        [
          "75%",
          "767"
        ],
        [
          "100%",
          "1023"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D4AC0D",
  "tooltip": "",
  "helpUrl": ""
},
//Motor End //////////////////////////////////

//servo Start ////////////////////////////////
{
  "type": "servo",
  "message0": "Servo %1 Set Angle %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "Up & Down",
          "17"
        ],
        [
          "hold",
          "16"
        ]
      ]
    },
    {
      "type": "field_angle",
      "name": "angle",
      "angle": 90
    }
  ],
  
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "#229954",
"tooltip": "",
"helpUrl": ""
},
//servo End //////////////////////////////////

//OLED Start /////////////////////////////////

{
  "type": "oled_init",
  "message0": "OLED initial with size %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "size",
      "options": [
        [
          "128x64",
          "0"
        ],
        [
          "128x32",
          "1"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
},
{
  "type": "oled_draw_text",
  "message0": "OLED draw text %1 at (x: %2 , y: %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
},
{
  "type": "oled_draw_line",
  "message0": "OLED draw line start at (x: %1 , y: %2 ) end at (x: %3 , y: %4 )",
  "args0": [
    {
      "type": "input_value",
      "name": "x1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
},
{
  "type": "oled_draw_rect",
  "message0": "OLED draw rectangle start at (x: %1 , y: %2 ) width: %3 height: %4 fill: %5",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "fill",
      "options": [
        [
          "No",
          "0"
        ],
        [
          "Yes",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
  "tooltip": "Draw rectangle on OLED",
  "helpUrl": ""
},
{
  "type": "oled_fill",
  "message0": "OLED fill",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
  "tooltip": "Fill screen",
  "helpUrl": ""
},
{
  "type": "oled_clear",
  "message0": "OLED clear",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D68910",
  "tooltip": "clear screen",
  "helpUrl": ""
},


//OLED End ///////////////////////////////////

//Buzzer Start ///////////////////////////////
{
  "type": "buzzer1",
  "message0": "Buzzer Frequency %1 Beep %2 Second",
  "args0": [
    {
      "type": "field_number",
      "name": "freq",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "time",
      "value": 0
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D35400",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "buzzer2",
  "message0": "Buzzer Frequency %1 Beep",
  "args0": [
    {
      "type": "field_number",
      "name": "freq",
      "value": 0
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D35400",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "buzzer3",
  "message0": "Buzzer Stop Beep",
  "args0": [
    
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D35400",
  "tooltip": "",
  "helpUrl": ""
},
//Buzzer End /////////////////////////////////

//LED Start //////////////////////////////////
{        
  "type": "led_onoff",
            "message0": "LED: %1",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "pin_trig",
              "options": [
                [Blockly.Msg.LED_LIFT_Msg , "1"],
                [Blockly.Msg.LEFT_OFF , "2"],
                [Blockly.Msg.LED_RIGHT_Msg , "3"],                
                [Blockly.Msg.RIGHT_OFF , "4"]
              ]
                
            }
          ], 
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#27AE60",
          "tooltip": "",
          "helpUrl": ""
          
},
//LED End ////////////////////////////////////

//Ultrasonic Start ///////////////////////////
{  
  "type": "ultra_read",
  "message0": "Ultrasonic read  %1 %2 Centimeter.",
  "args0":[
  {
    "type": "field_dropdown",
    "name": "math",
    "options": [
      [Blockly.Msg.mt_sigh , ">="],
      [Blockly.Msg.lt_sigh , "<="],
      [Blockly.Msg.eq_sigh , "=="]
    ]
  
  },
  {
    "type": "input_value",
    "name": "read_num",
    "check": "Number"
  }
], 
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "#27AE60",
"tooltip": "",
"helpUrl": ""

},

//Ultrasonic End /////////////////////////////

//neopixel Start /////////////////////////////
{
  "type": "neopixel_fill_color1",
  "message0": "NeoPixel fill color %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#00FF00"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_off",
  "message0": "NeoPixel Off",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_toggle",
  "message0": "NeoPixel toggle color %1 : %2",
  "args0": [
    {
      "type": "field_colour",
      "name": "tog_color1",
      "colour": "#FF0000"
    },
    {
      "type": "field_colour",
      "name": "tog_color2",
      "colour": "#0000ff"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rainbow_neo",
  "message0": "NeoPixel rainbow",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17A589",
  "tooltip": "",
  "helpUrl": ""
},
//neopixel End ///////////////////////////////

//button Start ///////////////////////////////

  {
    
    "type":"switch",
        "message0": "Switch: %1 is put",
        "args0":[
          {
            "type" : "field_dropdown",
            "name" : "pin",
            "options" : [
              [
                Blockly.Msg.buttonA_Msg , "18"
              ],
              [
                Blockly.Msg.buttonB_Msg , "5"
              ]
            ]
          }
        ],
      "output": ["Number", "Boolean"],
      "inputsInline": true,
      //"peviousStatement": null,
      //"nextStatement": null,
      "colour": "#27AE60",
      "tooltip": "",
      "helpUrl": ""
      
      },
      {
        "type":"switch_toggle",
        "message0": "Switch: %1 is on ",
        "args0":[
          {
            "type" : "field_dropdown",
            "name" : "pin",
            "options" : [
              [
                Blockly.Msg.buttonA_Msg , "18"
              ],
              [
                Blockly.Msg.buttonB_Msg , "5"
              ]
            ]
          }
        ],
      "output": ["Number", "Boolean"],
      "inputsInline": true,
      //"peviousStatement": null,
      //"nextStatement": null,
      "colour": "#27AE60",
      "tooltip": "",
      "helpUrl": ""
  },

//button End /////////////////////////////////

//button_toggle Start ////////////////////////
{
  "type":"buttonA_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonA_Msg , "18"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "#27AE60",
"tooltip": "",
"helpUrl": ""
},
{
  "type":"buttonB_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonB_Msg , "5"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "#1F618D",
"tooltip": "",
"helpUrl": ""
},

{
  "type":"buttonA_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonA_Msg , "18"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#1F618D",
"tooltip": "",
"helpUrl": ""
},
{
  "type":"buttonB_toggle",
  "message0": "Switch: %1 is on ",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "pin",
      "options" : [
        [
          Blockly.Msg.buttonB_Msg , "5"
        ]
      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#1F618D",
"tooltip": "",
"helpUrl": ""
},
// button_toggle end //////////////////////


]);
