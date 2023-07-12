Blockly.Msg.buttonA_Msg = "SW_A";
Blockly.Msg.buttonB_Msg = "SW_B";
Blockly.Msg.LED_LIFT_Msg = "Left ON";
Blockly.Msg.LED_RIGHT_Msg = "Right ON";
Blockly.Msg.LEFT_OFF = "Left OFF";
Blockly.Msg.RIGHT_OFF = "Right OFF";
Blockly.Msg.On_Msg = "ON";
Blockly.Msg.OFF_Msg = "Off";
Blockly.Msg.mt_sigh = ">=";
Blockly.Msg.lt_sigh = "<=";
Blockly.Msg.eq_sigh = "==";
Blockly.Msg.happy = "Happy Birth Day";
Blockly.Msg.darth_vader = "Darth Vader theme";
Blockly.Msg.jingle_bell = "Jingle Bell";
Blockly.Msg.mary_little_lamb = "Mary had a little lamb";
Blockly.Msg.bitsy_spider  = "Bitsy Spider ";

Blockly.Msg.but1 = "1";
Blockly.Msg.but2 = "2";
Blockly.Msg.but3 = "3";
Blockly.Msg.but4 = "4";
Blockly.Msg.but5 = "5";
Blockly.Msg.but6 = "6";
Blockly.Msg.but7 = "7";
Blockly.Msg.but8 = "8";
Blockly.Msg.but9 = "9";
Blockly.Msg.but0 = "0";
Blockly.Msg.buttag = "#";
Blockly.Msg.butstar = "*";
Blockly.Msg.butup = "Up";
Blockly.Msg.butdown = "Down";
Blockly.Msg.butleft = "Left";
Blockly.Msg.butright = "Right";
Blockly.Msg.butokay = "Ok";



Blockly.defineBlocksWithJsonArray([
{
 
//Motor Start //////////////////////////////

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
          "Up",
          "17"
        ],
        [
          "Hold",
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
"colour": "#1d5722",
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
    "message0": "Buzzer pin frequency %1 beep %2 seconds",
    "args0": [
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "time",
        "check": "Number"
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
    "type": "buzzer2",
    "message0": "Buzzer pin %1 frequency beep",
    "args0": [
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
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
    "message0": "Buzzer pin stop beep",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D35400",
    "tooltip": "",
    "helpUrl": ""
  },
    {
        "type": "buz_play_music",
            "message0": "Play Music🎵 : %1",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "music",
              "options": [
                [Blockly.Msg.happy , "1"],
                [Blockly.Msg.darth_vader , "2"],
                [Blockly.Msg.jingle_bell , "3"],                
                [Blockly.Msg.mary_little_lamb , "4"],
                [Blockly.Msg.bitsy_spider , "5"]
              ]
                
            }
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
          "colour": "#236429",
          "tooltip": "",
          "helpUrl": ""
          
},
//LED End ////////////////////////////////////

//Ultrasonic Start ///////////////////////////
{  
  "type": "ultra_read",
  "message0": "Ultrasonic read  %1 %2 Centimeter",
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
    "type": "field_number",
    "name": "read_num",
    "check": "Number"
  }
], 
"output": ["Number", "Boolean"],
"inputsInline": true,
"colour": "#27AE60",
"tooltip": "",
"helpUrl": ""
//-----------------------------------------^
},

//Ultrasonic End /////////////////////////////

//neopixel Start /////////////////////////////
{
        "type": "neopixel_fill_color1",
        "message0": "NeoPixel on color %1",
        "args0": [
          {
            "type": "field_colour",
            "name": "color",
            "colour": "#ff0000"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4B0082",
        "tooltip": "",
        "helpUrl": ""
      },/////////////////////////////////////
      {
        "type": "neopixel_toggle",
        "message0": "NeoPixel toggle color %1 : %2",
        "args0": [
          {
            "type": "field_colour",
            "name": "tog_color1",
            "colour": "#ff0000"
          },
          {
            "type": "field_colour",
            "name": "tog_color2",
            "colour": "0000ff"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4B0082",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rainbow_neo",
        "message0": "NeoPixel rainbow",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4B0082",
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "neopixel_off",
        "message0": "NeoPixel Off",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4B0082",
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
      "colour": "#9400d3",
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
      "colour": "#9400d3",
      "tooltip": "",
      "helpUrl": ""
      },
      
 

//button End /////////////////////////////////

//
 //BLUE_START
 { 
    "type": "blue_con",
    "message0": "Bluetooth ON",
    "inputsInline": true,
    //"previousStatement": null,
    "nextStatement": null,
    "colour": "	#4682b4",
    "tooltip": "",
    "helpUrl": ""
  },
 { 
    "type": "blue_con",
    "message0": "Bluetooth ON",
    "inputsInline": true,
    //"previousStatement": null,
    "nextStatement": null,
    "colour": "	#4682b4",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "blue_command",
    "message0": "Typing command is : %1",
    "args0": [
      {
        "type": "input_value",
        "name": "text"
      },
    ],
    "output": ["Number", "Boolean"],
  "inputsInline": true,
  //"peviousStatement": null,
  //"nextStatement": null,
  "colour": "#4682b4",
  "tooltip": "",
  "helpUrl": ""
  },
  {
    "type": "blue_msg",
    "message0": "Bluetooth massage : %1",
    "args0": [
      {
        "type": "input_value",
        "name": "text_blue"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "	#4682b4",
    "tooltip": "",
    "helpUrl": ""
  },
  //BLUE_END
//IR_START
{ 
    "type": "ir_get_sig",
    "message0": "Read IR signal",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": " #FE0000",
    "tooltip": "",
    "helpUrl": ""
  },
 {
  "type":"ir_com",
  "message0": "IR Signal = %1",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "ir_but",
      "options" : [
        [
          Blockly.Msg.but1, "1"
        ],
        [
          Blockly.Msg.but2 , "2"
        ],
        [
          Blockly.Msg.but3 , "3"
        ],
        [
          Blockly.Msg.but4 , "4"
        ],
        [
          Blockly.Msg.but5 , "5"
        ],
        [
          Blockly.Msg.but6 , "6"
        ],
        [
          Blockly.Msg.but7 , "7"
        ],
        [
          Blockly.Msg.but8 , "8"
        ],
        [
          Blockly.Msg.but9 , "9"
        ],
        [
          Blockly.Msg.but0 , "0"
        ],
        [
          Blockly.Msg.buttag , "#"
        ],
        [
          Blockly.Msg.butstar , "*"
        ],
        [
          Blockly.Msg.butup , "Up"
        ],
        [
          Blockly.Msg.butdown , "Down"
        ],
        [
          Blockly.Msg.butleft , "Left"
        ],
        [
          Blockly.Msg.butright , "Right"
        ],
        [
          Blockly.Msg.butokay , "Ok"
        ],
        

      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#FE0000",
"tooltip": "",
"helpUrl": ""

},
  //IR_END
]);
