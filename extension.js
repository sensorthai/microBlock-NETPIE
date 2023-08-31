({
    name: "Beetlecar",
    description: "",
    author: "UP-SKILL",
    category: "",
    version: "1.0.0",
    icon: "/static/beetlecar.png",
    color: "#4A7CCC",
    blocks: [  {
                            xml: '<label text="Beetlecar"></label>'
                            
                        },
                        {
                            xml: '<label text="Motor"></label>'
                            
                        },
                                                //////////// MOTOR 2.0 ///////////////
                                                {
                                                    xml: `
                                                    <block type="new_motor">
                                                        <field name="move">0</field>
                                                        <field name="speed">180</field>
                                                    </block>
                                                `
                                                },
                                                {
                                                    xml: `
                                                    <block type="new_motor2">
                                                        <field name="move">0</field>
                                                        <field name="speed">180</field>
                                                        <field name="time">0</field>
                                                    </block>
                                                `
                                                },
                                                "newstopMotor",
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
                                                //Ultrasonic End ///////////////////////////////
                        //Motor End /////////////////////////////////
                        
        
                        /*Line tracking END
                        {
                            xml: '<label text="OLED"></label>', 
                        },

                        OLED Strat
                         
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
                        OLED End *///////////////////////////////////

                       

                        {
                            xml: '<label text="Servo"></label>', 
                        },

                        //servo Start////////////////////////////////
                        {
                            xml: `
                                <block type="servo_new">  
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
                        
                       
                        

                        {
                            xml:'<label text="NeoPixel"></label>'
                        },

                        //NeoPixel  Start //////////////////////////////
                        
                            "neopixel_fill_color1",
                            "neopixel_off",
                            "neopixel_toggle",
                            "rainbow_neo",
                          
                        
                        
                        //Toggle_Button  Start ////////////////////////////////
                        {
                            xml: '<label text="Buzzer"></label>', 
                        },

                         
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
                        //Line tracking start
                       {
                        xml: '<label text="Line Tracking"></label>'
                    },
                    {
                        xml: `
                            <block type="linetracking_threshold">
                                <field name="black">0</field>
                                <field name="white">0</field>
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
                        {
                            xml: '<label text="Bluetooth"></label>',
                        },
                        {
                            xml:`
                                <block type = "blue_con">
                                    <value name = "blue_name">
                                        <shadow type = "text">
                                            <field name = "text">Beetlecar1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
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
