({
    name: "Bettlecar",
    description: "",
    author: "UP-SKILL",
    category: "",
    version: "1.0.4",
    icon: "/static/beetle_car.jpg",
    color: "#4A7CCC",
    blocks: [
       
{
                            xml: '<label text="Motor Beetle Car v1"></label>', 
                        },
                        //Motor Strat ///////////////////////////////

                        "stopMotor",
                        {
                            xml: `
                                <block type="Forward">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="Backward">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="Left">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="Right">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveAward">
                                    <field name="move_sec">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveBack">
                                    <field name="move_sec">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveRight">
                                    <field name="move_sec">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveLeft">
                                    <field name="move_sec">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },{
                            xml: `
                                <block type="motor_control">
                                    <field name="mcontrol">0</field>
                                    <field name="move">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="motor_control0">
                                    <field name="motor_control0">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="motor_control1">
                                    <field name="motor_control1">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="motor_control2">
                                    <field name="motor_control2">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        //Motor End /////////////////////////////////
                        //Line tracking start
                       {
                            xml: '<label text="Line Tracking"></label>'
                        },
                                     {
                            xml: `
                                <block type="linetracking_pin">
                                    <field name="pin1">39</field>
                                    <field name="pin2">34</field>
                                    <field name="pin3">35</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="linetracking_sensor">
                                    <field name="sensor">0</field>
                                    <field name="operator">0</field>
                                </block>
                            `
                        },
        
                        //Line tracking END
                        {
                            xml: '<label text="OLED"></label>', 
                        },

                        //OLED Strat////////////////////////////////
                         
                        "oled_init",
                        {
                            xml: `
                                <block type="oled_draw_text">
                                    <value name="text">
                                        <shadow type="text">
                                            <field name="TEXT">Hello World!</field>
                                        </shadow>
                                    </value>
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="oled_draw_line">
                                    <value name="x1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y1">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="x2">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                    <value name="y2">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="oled_draw_rect">
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="width">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                    <value name="height">
                                        <shadow type="math_number">
                                            <field name="NUM">60</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "oled_fill",
                        "oled_clear",
                        //OLED End ///////////////////////////////////

                        {
                            xml: '<label text="Buzzer"></label>', 
                        },

                         //Buzzer Start //////////////////////////////
                        {
                            xml: `
                                <block type="buzzer1">
                                    <value name="freq">
                                        <shadow type="math_number">
                                            <field name="NUM">1000</field>
                                        </shadow>
                                    </value>
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="buzzer2">
                                    <value name="freq">
                                        <shadow type="math_number">
                                            <field name="NUM">1000</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                            "buzzer3",
                    {
                        xml: `
                            <block type="buz_play_music">
                                <value name="music">
                                    <shadow type="math_number">
                                        <field name="NUM">Happy Birth Day</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                    },
                        //Buzzer End /////////////////////////////////

                        {
                            xml: '<label text="Servo"></label>', 
                        },

                        //servo Start////////////////////////////////
                        {
                            xml: `
                                <block type="servo">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">16</field>
                                        </shadow>
                                    </value>
                                    <value name="angle">
                                        <shadow type="math_number">
                                            <field name="NUM">90</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        //servo End //////////////////////////////////

                        {
                            xml: '<label text="LED"></label>'
                        },

                         //LED Start //////////////////////////////////
                        {
                            xml: `
                            <block type="led_onoff">
                                <value name="pin_trig">
                                    <shadow type="math_number">
                                        <field name="NUM">Left ON</field>
                                    </shadow>
                                </value>
                            </block>
                        `
                        },
                        //{
                        //    xml: '<label text="LED_Blink"></label>',
                        //},
                       /*{
                            xml:`<block type="controls_forever">
                            <statement name="block">
                                <block type="led_onoff">
                        <value name="pin_trig">
                            <shadow type="math_number">
                                <field name="NUM">Left</field>
                            </shadow>
                        </value>
                        <value name="onoff">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                                    <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                                <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                </shadow>
                                            </value>
                                            <next>
                                                <block type="led_onoff">
                        <value name="pin_trig">
                            <shadow type="math_number">
                                <field name="NUM">Left</field>
                            </shadow>
                        </value>
                        <value name="onoff">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                                                    <next>
                                                        <block type="controls_wait">
                                                            <value name="time">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">1</field>
                                                                </shadow>
                                                            </value>
                                                            
                                                        </block>
                                                    </next>
                                                </block>
                                            </next>
                                        </block>
                                    </next>
                                </block>
                            </statement>
                        </block>`
                       },*/

                        //LED End /////////////////////////////////////
                       
                        {
                            xml: '<label text="Ultrasonic"></label>'
                        },

                        //Ultrasonic Start ////////////////////////////
                        {
                            xml:`    
                                <block type="ultra_read">
                                    <value name="math">
                                        <shadow type="math_number">
                                            <field name="NUM">>=</field>
                                        </shadow>
                                    </value>
                                    <value name="read_num">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>`
                        },
                       
                        //Ultrasonic End ///////////////////////////////

                        {
                            xml:'<label text="NeoPixel"></label>'
                        },

                        //NeoPixel  Start //////////////////////////////
                        
                            "neopixel_fill_color1",
                            "neopixel_off",
                            "neopixel_toggle",
                            "rainbow_neo",
                          /*  {
                                xml: '<label text="Rainbow_Neopixel"></label>',
                            },
                            {
                                xml:`<block type="controls_forever">
                                    <statement name="block">
                                    <block type = "rainbow_neo">
                                    </block>
                                    </statement>
                                    </block>`
                               },*/

                        //NeoPixel  End ////////////////////////////////
                        
                        {
                            xml: '<label text="Switch"></label>',
                        },
                        {
                            xml:`
                                <block type = "switch">
                                    <value name = "pin">
                                        <shadow type = "math_number">
                                            <field name = "NUM">SW A</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="Toggle Switch"></label>',
                        },
                        {
                            xml:`
                                <block type = "switch_toggle">
                                    <value name = "pin">
                                        <shadow type = "math_number">
                                            <field name = "NUM">SW A</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        //Toggle_Button  Start ////////////////////////////////
                        {
                            xml: '<label text="Bluetooth"></label>',
                        },
            
                        {
                            xml:`
                                <block type = "blue_command">
                                    <value name = "text">
                                        <shadow type = "text">
                                            <field name = "text">Hello world</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml:`
                                <block type = "blue_msg">
                                    <value name = "text_blue">
                                        <shadow type = "text">
                                            <field name = "text">Hello world</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        
                        {
                            xml: '<label text="IR Signal"></label>',
                        },
                    "ir_get_sig",
                        {
                            xml:`
                                <block type = "ir_com">
                                    <value name = "ir_but">
                                        <shadow type = "math_number">
                                            <field name = "NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                         

                            ]
                         });
