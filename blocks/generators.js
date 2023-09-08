
  /*  //Motor Strat //////////////////////////
    Blockly.Python['stopMotor'] = function(block) {
      Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    
      var code = 'beetlecar.stop()\n';
     
      return code;
    };
  
  Blockly.Python['moveAward'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    var second_move = block.getFieldValue('move_sec');
    var speed = block.getFieldValue('speed');
    var code = `beetlecar.forward_forsec(${second_move},${speed})\n`;
    
    return code;
  };
  
  Blockly.Python['moveBack'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    var second_move = block.getFieldValue('move_sec');
  
    var speed = block.getFieldValue('speed');
    var code = `beetlecar.backward_forsec(${second_move},${speed})\n`;
  
    
    return code;
  };
  
  Blockly.Python['moveLeft'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    var second_move = block.getFieldValue('move_sec');
  
    var speed = block.getFieldValue('speed');
    var code = `beetlecar.left_forsec(${second_move},${speed})\n`;
  
    
    return code;
  };
  
  Blockly.Python['moveRight'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
    var second_move = block.getFieldValue('move_sec');
  
    var speed = block.getFieldValue('speed');
    var code = `beetlecar.right_forsec(${second_move},${speed})\n`;
  
    
    return code;
  };
  
  Blockly.Python['Forward'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  
  
  var speed = block.getFieldValue('speed');
  var code = `beetlecar.forward(${speed})\n`;
  
  return code;
  };
  
  Blockly.Python['Backward'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  
  var speed = block.getFieldValue('speed');
  var code = `beetlecar.backward(${speed})\n`;
  
  return code;
  };
  
  Blockly.Python['Left'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var speed = block.getFieldValue('speed');
  var code = `beetlecar.left(${speed})\n`;
  
  return code;
  };
  
  Blockly.Python['Right'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var speed = block.getFieldValue('speed');
  var code = `beetlecar.right(${speed})\n`;
  
  return code;
  };*/
        //Motor End ///////////////////////////////////
        
        // servo Start ////////////////////////////////
       Blockly.Python['servo'] = function(block) { //ชื่อที่เราตั้งไว้
          
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          var value_pin = block.getFieldValue('pin');//เรียกค่าจาก %1
          var value_angle = block.getFieldValue('angle');//เรียกค่า %2
    
          var code = ``; //ส่วนโค๊ดbeetlecar.servo(${value_pin}, ${value_angle})\n
          if (value_pin == '16') {
            code = `beetlecar.servo_LiftUp(${value_angle})\n`
          if(value_angle >= 90){
            code = `beetlecar.servo_LiftUp(90)\n`
            }
          if(value_angle <= 0){
            code = `beetlecar.servo_LiftUp(0)\n`
          }
        }
          else if(value_pin == '17'){
            code = `beetlecar.servo_Clamp(${value_angle})\n`
          if(value_angle >= 90){
            code = `beetlecar.servo_Clamp(90)\n`
          }
          if(value_angle <= 0){
            code = `beetlecar.servo_Clamp(0)\n`
          }
        }
    
          return code;
        };
        // servo End //////////////////////////////////
        
        //OLED Start //////////////////////////////////
        Blockly.Python['oled_init'] = function(block) {
          Blockly.Python.definitions_['import_beetle_oled'] = 'import beetlecar_OLED';
        
          var dropdown_size = block.getFieldValue('size');
        
          var code = `oled = beetlecar_OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32})\n`;
          return code;
        };
        
        Blockly.Python['oled_draw_text'] = function(block) {
           Blockly.Python.definitions_['import_beetle_oled'] = 'import beetlecar_OLED';
          
          var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
          var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
          var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
        
          var code = `oled.text(${value_text}, ${value_x}, ${value_y}, 1); oled.show()\n`;
          return code;
        };
        
        Blockly.Python['oled_draw_line'] = function(block) {
           Blockly.Python.definitions_['import_beetle_oled'] = 'import beetlecar_OLED';
        
          var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
          var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
          var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
          var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
        
          var code = `oled.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1); oled.show()\n`;
          return code;
        };
        
        Blockly.Python['oled_draw_rect'] = function(block) {
           Blockly.Python.definitions_['import_beetle_oled'] = 'import beetlecar_OLED';
        
          var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
          var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
          var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
          var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
          var dropdown_fill = block.getFieldValue('fill');
        
          var code = `oled.${(+dropdown_fill) ? 'fill_rect' : 'rect'}(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1); oled.show()\n`;
          return code;
        };
        
        Blockly.Python['oled_fill'] = function(block) {
          var code = 'oled.fill(1); oled.show()\n';
          return code;
        };
        
        Blockly.Python['oled_clear'] = function(block) {
          var code = 'oled.fill(0); oled.show()\n';
          return code;
        };
        //OLED END ////////////////////////////////////
        
        // buzzer Start ///////////////////////////////
        Blockly.Python['buzzer1'] = function(block) {
        Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
      
      
  
      var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
      var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
      
      var code = `beetlecar.buzzerWrite(23, freq=${value_freq}, stop=${value_time})\n`;
      return code;
      };
      Blockly.Python['buzzer2'] = function(block) {
        Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
      
      
      //var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
      var code = `beetlecar.buzzerWrite(23, freq=${value_freq})\n`;
      return code;
      };
      Blockly.Python['buzzer3'] = function(block) {
        Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
      
      //var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
      var code = `beetlecar.buzzerWrite(23, duty=0)\n`;
      return code;
      };
        
      Blockly.Python['buz_play_music'] = function(block) {
        Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';
        Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
      
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
      
            var select_song = block.getFieldValue('music');
      
            code = '';;
            if(select_song == 1){
              code = `for i in beetlecar.happy_birthday:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
            }else if(select_song == 2){
              code = `for i in beetlecar.darth_vader:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.5)\n    sleep(0.1)\n`;
            }else if(select_song == 3){
              code = `for i in beetlecar.jingle_bell:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
            }else if(select_song == 4){
              code = `for i in beetlecar.mary_little_lamb:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
            }else if(select_song == 5){
              code = `for i in beetlecar.bitsy_spider:\n    beetlecar.buzzerWrite(23, freq=beetlecar.scale5[i], stop=0.3)\n    sleep(0.1)\n`;
            }
            return code;
          };
        
        
        
        // buzzer End /////////////////////////////////
        
        // LED Start //////////////////////////////////
        Blockly.Python['led_onoff'] = function(block) {
        
        Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
      
          var dropdown_trig = block.getFieldValue('pin_trig');
          code = '';;
          if(dropdown_trig == 1){
            code = `beetlecar.led_left_on()\n`;
          }else if(dropdown_trig == 2){
            code = `beetlecar.led_left_off()\n`;
          }else if(dropdown_trig == 3){
            code = `beetlecar.led_right_on()\n`;
          }else if(dropdown_trig == 4){
            code = `beetlecar.led_right_off()\n`;
          }
          return code;
        };
      
        // LED End /////////////////////////////////////
        
        // Ultrasonic Start ////////////////////////////
        Blockly.Python['ultra_read'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
        
          var math_choice = block.getFieldValue('math');
          var read_number = block.getFieldValue('read_num');
  
         //var read_number = Block.Python.valueToCode(block, 'read_num', Blockly.Python.ORDER_ATOMIC);
        
          code = `beetlecar.distance() ${math_choice} ${read_number}`;
          return [code, Blockly.Python.ORDER_NONE];
        };
        // Ultrasonic End ///////////////////////////////
        
        // Neo_pixel Start //////////////////////////////
        
        Blockly.Python['neopixel_fill_color1'] = function(block) {
        //Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
          //Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
        
          /*Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
          Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
          
          Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
        Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          
          var colour_color = block.getFieldValue('color');
        
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
          var red = parseInt(result[1], 16);
          var green = parseInt(result[2], 16);
          var blue = parseInt(result[3], 16);
        
          var code = `for i in range(beetlecar.np.n): beetlecar.np[i] = (${red},${green}, ${blue})\nbeetlecar.neo_on()\n`;
          return code;
        };
        Blockly.Python['neopixel_off'] = function(block) {
      
          /*Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
          Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
        
          Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
          Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
          
          Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
        Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
      
          
          var code = `for i in range(beetlecar.np.n): beetlecar.np[i] = (0,0,0)\nbeetlecar.neo_on()\n`;
          return code;
        };
        Blockly.Python['neopixel_toggle'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          Blockly.Python.definitions_['import_time'] = 'import time';
          /*Blockly.Python.definitions_['import_time'] = 'import time';
          Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
          Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
        
          Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
          Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   */
          Blockly.Python.definitions_['neo_toggle_state'] = 'np_toggle = False';   
          
          //Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
          
      
          
          var tog_colors1 = block.getFieldValue('tog_color1');
          var tog_colors2 = block.getFieldValue('tog_color2');
        
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors1);
          var red = parseInt(result[1], 16);
          var green = parseInt(result[2], 16);
          var blue = parseInt(result[3], 16);
        
          var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tog_colors2);
          var red2 = parseInt(result2[1], 16);
          var green2 = parseInt(result2[2], 16);
          var blue2 = parseInt(result2[3], 16);
        
         
          var functionName = Blockly.Python.provideFunction_(
            `neo_tog`,
            [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
            `  global np_toggle`,
            `  np_toggle = not np_toggle`,
            `  if np_toggle:`,
            `      for i in range(beetlecar.np.n):`,
            `          beetlecar.np[i] = (${red}, ${green}, ${blue})`,
            `          time.sleep(0.1) `,
            `  else:`,
            `      beetlecar.np.fill((${red2}, ${green2}, ${blue2}))`,
            `      time.sleep(0.1)`,
            `  beetlecar.neo_on()`]);
        
          var code = '#while True:\nneo_tog()\n'
          //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
          return code;
        };
        Blockly.Python['rainbow_neo'] = function(block) {
          /*Blockly.Python.definitions_['import_time'] = 'from time import sleep_ms';
          Blockly.Python.definitions_['from_machine_pin'] = 'from machine import Pin';
          Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
        
          Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
          Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
          
          Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; */
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          
          
        
          var code = 'beetlecar.rainbow_neo()\n'
          //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
          return code;
        };
        
      
        // Neo_pixel End ////////////////////////////////
        
        // button Start /////////////////////////////////
        Blockly.Python['switch'] = function(block) {
        Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          
          
          var dropdown_button = block.getFieldValue('pin');
          
          code = '';;
          if(dropdown_button == 18){
            code = `beetlecar.put_button_a()`;
          }else if(dropdown_button == 5){
            code = `beetlecar.put_button_b()`;
          }
          return [code, Blockly.Python.ORDER_NONE];
        };
        Blockly.Python['switch_toggle'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          
         var dropdown_button = block.getFieldValue('pin');
      
         code = '';;
         if(dropdown_button == 18){
           code = `beetlecar.toggle_state_a`;
         }else if(dropdown_button == 5){
           code = `beetlecar.toggle_state_b`;
         }
          return [code, Blockly.Python.ORDER_NONE];
        };
        
        // button End ///////////////////////////////////
        //BLUE_START
      Blockly.Python['blue_con'] = function(block) {
          
          Blockly.Python.definitions_['import_beetlecar_ble'] = 'import beetlecar_BLE';
          
          var bluetooth_name = Blockly.Python.valueToCode(block, 'blue_name', Blockly.Python.ORDER_ATOMIC);
          var code = `beetlecar_BLE.ble = beetlecar_BLE.ESP32_BLE(${bluetooth_name})\n`
          return code;
        };
        Blockly.Python['blue_command'] = function(block) {
          Blockly.Python.definitions_['import_beetlecar_ble'] = 'import beetlecar_BLE';
      
          
          var blue_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
          
          
          var code = `beetlecar_BLE.ble_msg == ${blue_text}`;
          return [code, Blockly.Python.ORDER_NONE];
          };
          Blockly.Python['blue_msg'] = function(block) {
              Blockly.Python.definitions_['import_beetlecar_ble'] = 'import beetlecar_BLE';
          
              
              var blue_text_print = Blockly.Python.valueToCode(block, 'text_blue', Blockly.Python.ORDER_ATOMIC);
              
              
              var code = `beetlecar_BLE.ble_msg = ""\nbeetlecar_BLE.ble.send(${blue_text_print})\n`;
              return code;
              };
        //BLUE_END
      //IR_START
      Blockly.Python['ir_get_sig'] = function(block) {
          
          Blockly.Python.definitions_['import_beetlecar_ir'] = 'import beetlecar_IR';
          Blockly.Python.definitions_['import_time'] = 'import time';
          
      
          var code = 'command = beetlecar_IR.read_ircode(beetlecar_IR.ird)\n'
          return code;
        };
  Blockly.Python['ir_com'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar_ir'] = 'import beetlecar_IR';
        
        
      var ir_but = block.getFieldValue('ir_but');
        
      code = '';;
      if(ir_but == "1"){
        code = `command == "1"`;
      }else if(ir_but == "2"){
        code = `command == "2"`;
      }else if(ir_but == "3"){
        code = `command == "3"`;
      }else if(ir_but == "4"){
        code = `command == "4"`;
      }else if(ir_but == "5"){
        code = `command == "5"`;
      }else if(ir_but == "6"){
        code = `command == "6"`;
      }else if(ir_but == "7"){
        code = `command == "7"`;
      }else if(ir_but == "8"){
        code = `command == "8"`;
      }else if(ir_but == "9"){
        code = `command == "9"`;
      }else if(ir_but == "0"){
        code = `command == "0"`;
      }else if(ir_but == "#"){
        code = `command == "#"`;
      }else if(ir_but == "*"){
        code = `command == "*"`;
      }else if(ir_but == "Up"){
        code = `command == "Up"`;
      }else if(ir_but == "Down"){
        code = `command == "Down"`;
      }else if(ir_but == "Left"){
        code = `command == "Left"`;
      }else if(ir_but == "Right"){
        code = `command == "Right"`;
      }else if(ir_but == "Ok"){
        code = `command == "Ok"`;
      }
      return [code, Blockly.Python.ORDER_NONE];
    };
      //IR_END
      //LINE TRACKING STATE
      Blockly.Python['linetracking_threshold'] = function(block) {
        Blockly.Python.definitions_['import_machine'] = 'import machine';
        Blockly.Python.definitions_['import_time'] = 'import time';
        
        var black = block.getFieldValue('black');
        var white = block.getFieldValue('white');
        
        Blockly.Python.definitions_['function_adcRead'] =
          'def ' + Blockly.Python.variableDB_.getName('adcRead', Blockly.Python.NAME_TYPE) + '(analog_pin):\n' +
          '    adc = machine.ADC(machine.Pin(analog_pin))\n' +
          '    adc.atten(machine.ADC.ATTN_11DB)\n' +
          '    adc.width(machine.ADC.WIDTH_12BIT)\n' +
          '    return adc.read()\n';
        
          Blockly.Python.definitions_['line_tracking_variables'] =
          'def ' + Blockly.Python.variableDB_.getName('lineTracking', Blockly.Python.NAME_TYPE) + '():\n' +
          '    global sensor1_pin, sensor2_pin, sensor3_pin, black, white, threshold\n' +
          '    sensor1_pin = 39\n' +
          '    sensor2_pin = 34\n' +
          '    sensor3_pin = 35\n' +
          '    black = ' + black + '\n' +
          '    white = ' + white + '\n' +
          '    threshold = (black + white) / 2\n'
        var code = 'lineTracking()\n'
          code += 'sensor1_value = adcRead(sensor1_pin);\n';
          code += 'sensor2_value = adcRead(sensor2_pin);\n';
          code += 'sensor3_value = adcRead(sensor3_pin);\n';
          //code += 'print("Threshold = ", "SEN1:", sensor1_value, " SEN2:", sensor2_value, " SEN3:", sensor3_value)\n';
        return code;
      }

Blockly.Python['linetracking_sensor'] = function(block) {
  var dropdown_sensor = block.getFieldValue('sensor');
  var dropdown_operator = block.getFieldValue('operator');
  var code = `${dropdown_sensor} ${dropdown_operator} threshold`;

  return [code, Blockly.Python.ORDER_NONE];
};
//END LINE TRACKING STATE
  Blockly.Python['motor_control'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var dropdown_mcontrol = block.getFieldValue('mcontrol');
  var dropdown_move = block.getFieldValue('move');
  var dropdown_speed = block.getFieldValue('speed');
  

  var code = '';
  if (dropdown_mcontrol == 'left' && dropdown_move == 'forward') {
    code = `beetlecar.left_fw(${dropdown_speed})\n`;
  } else if (dropdown_mcontrol == 'left' && dropdown_move == 'backward') {
    code = `beetlecar.left_bw(${dropdown_speed})\n`;
  } else if (dropdown_mcontrol == 'right' && dropdown_move == 'forward') {
    code = `beetlecar.right_fw(${dropdown_speed})\n`;
  } else if (dropdown_mcontrol == 'right' && dropdown_move == 'backward') {
    code = `beetlecar.right_bw(${dropdown_speed})\n`;
  }
  return code;
};
Blockly.Python['motor_control0'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var dropdown_motor_control0 = block.getFieldValue('motor_control0');
  var dropdown_speed = block.getFieldValue('speed');


  var code = '';
  if (dropdown_motor_control0 == 'forward') {
    code = `beetlecar.forward(${dropdown_speed})\n`;
  } else if (dropdown_motor_control0 == 'backward') {
    code = `beetlecar.backward(${dropdown_speed})\n`;
  } else if (dropdown_motor_control0 == 'left') {
    code = `beetlecar.motor_left(${dropdown_speed})\n`;
  } else if (dropdown_motor_control0 == 'right') {
    code = `beetlecar.motor_right(${dropdown_speed})\n`;
  }
  return code;
};
Blockly.Python['motor_control1'] = function(block) {
Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var dropdown_motor_control1 = block.getFieldValue('motor_control1');
  var dropdown_speed = block.getFieldValue('speed');
  var time = block.getFieldValue('time');
 

  var code = '';
  if (dropdown_motor_control1 == 'forward') {
    code = `beetlecar.forward_duration(${dropdown_speed},${time})\n`;
  } else if (dropdown_motor_control1 == 'backward') {
    code = `beetlecar.backward_duration(${dropdown_speed},${time})\n`;
  } else if (dropdown_motor_control1 == 'left') {
    code = `beetlecar.left_duration(${dropdown_speed},${time})\n`;
  } else if (dropdown_motor_control1 == 'right') {
    code = `beetlecar.right_duration(${dropdown_speed},${time})\n`;
  }
  return code;
};
Blockly.Python['motor_control2'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  
  var dropdown_motor_control2 = block.getFieldValue('motor_control2');
  var speed = block.getFieldValue('speed');


  var code = '';
  if (dropdown_motor_control2 == 'forward') {
   code = `beetlecar.forward(${speed})\n`;
  } else if (dropdown_motor_control2 == 'backward') {
   code = `beetlecar.backward(${speed})\n`;
  } else if (dropdown_motor_control2 == 'left') {
   code = `beetlecar.motor_left(${speed})\n`;
  } else if (dropdown_motor_control2 == 'right') {
   code = `beetlecar.motor_right(${speed})\n`;
  }
  return code;
};
/////////////// MOTOR 2.0 ///////////////
Blockly.Python['new_motor'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var move = block.getFieldValue('move');
  var speed = block.getFieldValue('speed');

  
  var code = '';
  if (move == 'forward') {
    code = 'beetlecar.forward' + '(' + speed + ')\n';
  } else if (move == 'backward') {
    
    code = 'beetlecar.backward' + '(' + speed + ')\n';
  } else if (move == 'left') {
    
    code = 'beetlecar.left' + '(' + speed + ')\n';
  } else if (move == 'right') {
    
    code = 'beetlecar.right' + '(' + speed + ')\n';
  }
  return code;
};
Blockly.Python['new_motor2'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var move = block.getFieldValue('move');
  var speed = block.getFieldValue('speed');
  var time = block.getFieldValue('time');

 
  var code = '';
  if (move == 'forward') {
    
      
    code = 'beetlecar.forward_for_sec' + '(' + speed + ', '+ time +')\n';
  } else if (move == 'backward') {
    
      
    code = 'beetlecar.backward_for_sec' + '(' + speed + ', '+ time +')\n';
  } else if (move == 'left') {
    
      
    code = 'beetlecar.left_for_sec' + '(' + speed + ', '+ time +')\n';
  } else if (move == 'right') {
    
      
    code = 'beetlecar.right_for_sec' + '(' + speed + ', '+ time +')\n';
  }
  return code;
};
Blockly.Python['newstopMotor'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var code = 'beetlecar.stop()\n';
  
  return code;
};
Blockly.Python['led_left'] = function(block) {
          
            Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
          
              var dropdown_trig = block.getFieldValue('pin_trig');
              code = '';;
              if(dropdown_trig == 1){
                code = `beetlecar.led_left_on()\n`;
              }else if(dropdown_trig == 2){
                code = `beetlecar.led_left_off()\n`;
              }
              return code;
            };
Blockly.Python['led_right'] = function(block) {
          
Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
            
            var dropdown_trig = block.getFieldValue('pin_trig');
                code = '';;
                if(dropdown_trig == 3){
                  code = `beetlecar.led_right_on()\n`;
                }else if(dropdown_trig == 4){
                  code = `beetlecar.led_right_off()\n`;
                }
                return code;
              };
Blockly.Python['new_motor3'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

  var motor = block.getFieldValue('motor');
  var move = block.getFieldValue('move');
  var speed = block.getFieldValue('speed');

  if (motor == 'left' && move == 'forward') {
    code = 'beetlecar.left_forward' + '(' + speed + ')\n';

  }else if(motor == 'left' && move == 'backward'){
    code = 'beetlecar.left_backward' + '(' + speed + ')\n';
    
  }else if(motor == 'right'&& move == 'forward'){
    code = 'beetlecar.right_forward' + '(' + speed + ')\n';
    
  }else if(motor == 'right'&& move == 'backward'){
    code = 'beetlecar.right_backward' + '(' + speed + ')\n';
    
  }else if(motor == 'all'&& move == 'forward'){
    code = 'beetlecar.all_forward' + '(' + speed + ')\n';
  }else{
    code = 'beetlecar.all_backward' + '(' + speed + ')\n';
    
  }
  return code;
};
