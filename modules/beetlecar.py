import time
from machine import Pin, I2C, time_pulse_us, PWM
from neopixel import NeoPixel
from micropython import const
import framebuf
import os

from time import sleep_us, sleep, sleep_ms
from machine import Pin, I2C, time_pulse_us, PWM

# Button state
BUTTON_A_PIN = 18
BUTTON_B_PIN = 5

button_a = Pin(BUTTON_A_PIN, Pin.IN, Pin.PULL_UP)
button_b = Pin(BUTTON_B_PIN, Pin.IN, Pin.PULL_UP)

toggle_state_a = False
toggle_state_b = False

def toggle_pin_a():
    global toggle_state_a
    toggle_state_a = not toggle_state_a

def toggle_interrupt_handler_a(pin_a):
    if pin_a.value() == 0:
        toggle_pin_a()

button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler_a)

def toggle_pin_b():
    global toggle_state_b
    toggle_state_b = not toggle_state_b

def toggle_interrupt_handler_b(pin_b):
    if pin_b.value() == 0:
        toggle_pin_b()

button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler_b)

def is_button_a_pressed():
    return button_a.value() == 1

def is_button_b_pressed():
    return button_b.value() == 1

# Ultrasonic state
ULTRASONIC_TRIGGER_PIN = 2
ULTRASONIC_ECHO_PIN = 15

def distance():
    return read(ULTRASONIC_TRIGGER_PIN, ULTRASONIC_ECHO_PIN)

def read(trig_pin, echo_pin):
    trigger = Pin(trig_pin, mode=Pin.OUT)
    echo = Pin(echo_pin, mode=Pin.IN)
    trigger.value(0)
    sleep_us(5)
    trigger.value(1)
    sleep_us(10)
    trigger.value(0)

    try:
        pulse_time = time_pulse_us(echo, 1, 1000000)
        d = (pulse_time / 2) / 29.1
        return int(d) if d < 400 else -1
    except OSError as ex:
        return -1

# LED state
def led_left_on():
    return Pin(33, Pin.OUT).value(1)

def led_left_off():
    return Pin(33, Pin.OUT).value(0)

def led_right_on():
    return Pin(12, Pin.OUT).value(1)

def led_right_off():
    return Pin(12, Pin.OUT).value(0)

# NeoPixel state
NEO_PIN = 4
NEO_COUNT = 2

np = NeoPixel(Pin(NEO_PIN, Pin.OUT), NEO_COUNT)
np_toggle = False

def neo_on():
    np.write()

def rainbow_neo():
    for j in range(256):
        for i in range(np.n):
            WheelPos = (i * 1 + j) % 256
            if WheelPos < 85:
                np[i] = (int(WheelPos * 3), int(255 - WheelPos * 3), 0)
            elif WheelPos < 170:
                WheelPos -= 85
                np[i] = (int(255 - WheelPos * 3), 0, int(WheelPos * 3))
            else:
                WheelPos -= 170
                np[i] = (0, int(WheelPos * 3), int(255 - WheelPos * 3))
        np.write()
        sleep_ms(5)

# Buzzer state
def buzzer_write(pin, freq=1000, duty=50, stop=0):
    pwm = PWM(Pin(pin))
    pwm.freq(freq)
    pwm.duty(int(duty / 100 * 1023))
    if stop > 0:
        sleep(stop)
        pwm.duty(0)

# Motor state
LMotor = Pin(27, Pin.OUT)
LMotor2 = Pin(14, Pin.OUT)
RMotor = Pin(25, Pin.OUT)
RMotor2 = Pin(26, Pin.OUT)

pwm1 = PWM(LMotor)
pwm2 = PWM(RMotor)
pwm3 = PWM(LMotor2)
pwm4 = PWM(RMotor2)

def stop():
    LMotor.off()
    pwm1.duty(0)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

def forward_for_sec(duration, speed):
    LMotor.on()
    pwm1.duty(speed)
    RMotor.on()
    pwm2.duty(speed)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)
    time.sleep(duration)
    stop()

def backward_for_sec(duration, speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.on()
    pwm3.duty(speed)
    RMotor2.on()
    pwm4.duty(speed)
    time.sleep(duration)
    stop()

def right_for_sec(duration, speed):
    LMotor.on()
    pwm1.duty(speed)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)
    time.sleep(duration)
    stop()

def left_for_sec(duration, speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.on()
    pwm2.duty(speed)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)
    time.sleep(duration)
    stop()

def forward(speed):
    LMotor.on()
    pwm1.duty(speed)
    RMotor.on()
    pwm2.duty(speed)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

def backward(speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.on()
    pwm3.duty(speed)
    RMotor2.on()
    pwm4.duty(speed)

def left(speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.on()
    pwm2.duty(speed)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

def right(speed):
    LMotor.on()
    pwm1.duty(speed)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

def left_fw(speed):
    LMotor.on()
    pwm1.duty(speed)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

def right_fw(speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.on()
    pwm2.duty(speed)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

def left_bw(speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.on()
    pwm3.duty(speed)
    RMotor2.off()
    pwm4.duty(0)

def right_bw(speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.on()
    pwm4.duty(speed)

def forward_duration(speed, duration):
    forward(speed)
    time.sleep(duration)
    stop()

def backward_duration(speed, duration):
    backward(speed)
    time.sleep(duration)
    stop()

def right_duration(speed, duration):
    right(speed)
    time.sleep(duration)
    stop()

def left_duration(speed, duration):
    left(speed)
    time.sleep(duration)
    stop()

def motor_right(speed):
    LMotor.off()
    pwm1.duty(0)
    RMotor.on()
    pwm2.duty(speed)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

def motor_left(speed):
    LMotor.on()
    pwm1.duty(speed)
    RMotor.off()
    pwm2.duty(0)
    LMotor2.off()
    pwm3.duty(0)
    RMotor2.off()
    pwm4.duty(0)

# OLED state
SET_CONTRAST = const(0x81)
SET_DISP = const(0xAE)
SET_DISP_ON = const(0xAF)
SET_DISP_OFF = const(0xAE)

class SSD1306(framebuf.FrameBuffer):
    def __init__(self, width, height, external_vcc):
        self.width = width
        self.height = height
        self.external_vcc = external_vcc
        self.pages = self.height // 8
        self.buffer = bytearray(self.pages * self.width)
        super().__init__(self.buffer, self.width, self.height, framebuf.MONO_VLSB)
        self.init_display()

    def init_display(self):
        for cmd in (
            SET_DISP_OFF,
            SET_CONTRAST,
            0x8F,
            SET_DISP_ON,
        ):
            self.write_cmd(cmd)
        self.fill(0)
        self.show()

    def poweroff(self):
        self.write_cmd(SET_DISP_OFF)

    def poweron(self):
        self.write_cmd(SET_DISP_ON)

    def contrast(self, contrast):
        self.write_cmd(SET_CONTRAST)
        self.write_cmd(contrast)

    def show(self):
        x0 = 0
        x1 = self.width - 1
        if self.width == 64:
            # displays with width of 64 pixels are shifted by 32
            x0 += 32
            x1 += 32
        self.write_cmd(SET_DISP_OFF)
        self.write_cmd(SET_DISP | 0x00)
        self.write_cmd(SET_MEM_ADDR)
        self.write_cmd(0x00)
        self.write_cmd(SET_DISP_START_LINE | 0x00)
        self.write_cmd(SET_SEG_REMAP | 0x01)
        self.write_cmd(SET_MUX_RATIO)
        self.write_cmd(self.height - 1)
        self.write_cmd(SET_COM_OUT_DIR | 0x08)
        self.write_cmd(SET_DISP_OFFSET)
        self.write_cmd(0x00)
        self.write_cmd(SET_COM_PIN_CFG)
        self.write_cmd(0x02 if self.width > 2 * self.height else 0x12)
        self.write_cmd(SET_DISP_CLK_DIV)
        self.write_cmd(0x80)
        self.write_cmd(SET_PRECHARGE)
        self.write_cmd(0x22 if self.external_vcc else 0xF1)
        self.write_cmd(SET_VCOM_DESEL)
        self.write_cmd(0x30)
        self.write_cmd(SET_CHARGE_PUMP)
        self.write_cmd(0x10 if self.external_vcc else 0x14)
        self.write_cmd(SET_DISP_ON)
        self.fill(0)
        self.show()

    def write_cmd(self, cmd):
        self.i2c.writeto(self.addr, bytearray([0x00, cmd]))

    def write_data(self, buf):
        self.i2c.writeto(self.addr, bytearray([0x40] + list(buf)))

class SSD1306_I2C(SSD1306):
    def __init__(self, width, height, i2c, addr=0x3C, external_vcc=False):
        self.i2c = i2c
        self.addr = addr
        super().__init__(width, height, external_vcc)

# Ultrasonic state
class UltrasonicSensor:
    def __init__(self, trigger_pin, echo_pin):
        self.trigger_pin = Pin(trigger_pin, Pin.OUT)
        self.echo_pin = Pin(echo_pin, Pin.IN)
    
    def distance(self):
        self.trigger_pin.value(0)
        sleep_us(2)
        self.trigger_pin.value(1)
        sleep_us(10)
        self.trigger_pin.value(0)

        try:
            pulse_time = time_pulse_us(self.echo_pin, 1, 1000000)
            distance = pulse_time / 58
            return int(distance) if distance < 400 else -1
        except OSError as ex:
            return -1

# Button state
class Button:
    def __init__(self, pin):
        self.pin = Pin(pin, Pin.IN, Pin.PULL_UP)
        self.toggle_state = False
        self.pin.irq(trigger=Pin.IRQ_FALLING, handler=self.toggle_interrupt_handler)

    def toggle_interrupt_handler(self, pin):
        if pin.value() == 0:
            self.toggle_state = not self.toggle_state

    def is_pressed(self):
        return self.pin.value() == 1

# NeoPixel state
class NeoPixel:
    def __init__(self, pin, count):
        self.np = NeoPixel(pin, count)
        self.toggle = False

    def on(self):
        self.np.write()

    def off(self):
        self.np.fill((0, 0, 0))
        self.np.write()

    def rainbow(self):
        for j in range(256):
            for i in range(self.np.n):
                wheel_pos = (i * 1 + j) % 256
                if wheel_pos < 85:
                    self.np[i] = (wheel_pos * 3, 255 - wheel_pos * 3, 0)
                elif wheel_pos < 170:
                    wheel_pos -= 85
                    self.np[i] = (255 - wheel_pos * 3, 0, wheel_pos * 3)
                else:
                    wheel_pos -= 170
                    self.np[i] = (0, wheel_pos * 3, 255 - wheel_pos * 3)
            self.np.write()
            sleep_ms(5)

# Buzzer state
class Buzzer:
    def __init__(self, pin):
        self.pwm = PWM(Pin(pin))

    def play_tone(self, frequency, duration):
        self.pwm.freq(frequency)
        self.pwm.duty(512)
        sleep(duration)
        self.pwm.duty(0)

    def stop(self):
        self.pwm.duty(0)

# Motor state
class Motor:
    def __init__(self, pin1, pin2):
        self.motor_pin1 = Pin(pin1, Pin.OUT)
        self.motor_pin2 = Pin(pin2, Pin.OUT)
        self.pwm = PWM(self.motor_pin1)

    def forward(self, speed):
        self.motor_pin1.on()
        self.pwm.duty(speed)
        self.motor_pin2.off()

    def backward(self, speed):
        self.motor_pin1.off()
        self.pwm.duty(0)
        self.motor_pin2.on()

    def stop(self):
        self.motor_pin1.off()
        self.pwm.duty(0)
        self.motor_pin2.off()
'''
# IR state
class IR:
    def __init__(self, pin):
        self.ir_pin = Pin(pin, Pin.IN)
        self.commands = {
            "1": "LLLLLLLLHHHHHHHHLHHLHLLLHLLHLHHH",
            "2": "LLLLLLLLHHHHHHHHHLLHHLLLLHHLLHHH",
            "3": "LLLLLLLLHHHHHHHHHLHHLLLLLHLLHHHH",
            "4": "LLLLLLLLHHHHHHHHLLHHLLLLHHLLHLLL",
            "5": "LLLLLLLLHHHHHHHHHHLLHHLLLHLLLHLL",
            "6": "LLLLLLLLHHHHHHHHHLLLHHLLHLHLLHLH",
            "7": "LLLLLLLLHHHHHHHHLHLLHHLHHHHLLHLL",
            "8": "LLLLLLLLHHHHHHHHLHHLHHLHHHLLHLLL",
            "9": "LLLLLLLLHHHHHHHHHLLLHLHLHHHHLHLL",
            "0": "LLLLLLLLHHHHHHHHHLLLHLLLLHLLLHLH",
        }

    def get_command(self):
        pulse_lengths = []
        current_pulse_length = 0
        previous_value = self.ir_pin.value()

        while True:
            if self.ir_pin.value() != previous_value:
                pulse_lengths.append(current_pulse_length)
                current_pulse_length = 0
                previous_value = self.ir_pin.value()

            current_pulse_length += 1

            if len(pulse_lengths) == 32:
                break

        command = ""
        for pulse_length in pulse_lengths[1:]:
            if pulse_length < 10:
                command += "L"
            else:
                command += "H"

        return self.commands.get(command, "UNKNOWN")'''

# OLED state
class OLED:
    def __init__(self, i2c, width, height, addr=0x3C):
        self.i2c = i2c
        self.addr = addr
        self.width = width
        self.height = height
        self.pages = self.height // 8
        self.buffer = bytearray(self.pages * self.width)
        self.framebuf = framebuf.FrameBuffer(self.buffer, self.width, self.height, framebuf.MONO_VLSB)
        self.init_display()

    def init_display(self):
        for cmd in (
            SET_DISP_OFF,
            SET_CONTRAST,
            0x8F,
            SET_DISP_ON,
        ):
            self.write_cmd(cmd)
        self.fill(0)
        self.show()

    def poweroff(self):
        self.write_cmd(SET_DISP_OFF)

    def poweron(self):
        self.write_cmd(SET_DISP_ON)

    def contrast(self, contrast):
        self.write_cmd(SET_CONTRAST)
        self.write_cmd(contrast)

    def show(self):
        x0 = 0
        x1 = self.width - 1
        if self.width == 64:
            # displays with width of 64 pixels are shifted by 32
            x0 += 32
            x1 += 32
        self.write_cmd(SET_DISP_OFF)
        self.write_cmd(SET_DISP | 0x00)
        self.write_cmd(SET_MEM_ADDR)
        self.write_cmd(0x00)
        self.write_cmd(SET_DISP_START_LINE | 0x00)
        self.write_cmd(SET_SEG_REMAP | 0x01)
        self.write_cmd(SET_MUX_RATIO)
        self.write_cmd(self.height - 1)
        self.write_cmd(SET_COM_OUT_DIR | 0x08)
        self.write_cmd(SET_DISP_OFFSET)
        self.write_cmd(0x00)
        self.write_cmd(SET_COM_PIN_CFG)
        self.write_cmd(0x02 if self.width > 2 * self.height else 0x12)
        self.write_cmd(SET_DISP_CLK_DIV)
        self.write_cmd(0x80)
        self.write_cmd(SET_PRECHARGE)
        self.write_cmd(0x22)
        self.write_cmd(SET_VCOM_DESEL)
        self.write_cmd(0x30)
        self.write_cmd(SET_CHARGE_PUMP)
        self.write_cmd(0x14)
        self.write_cmd(SET_DISP_ON)
        self.fill(0)
        self.show()

    def write_cmd(self, cmd):
        self.i2c.writeto(self.addr, bytearray([0x00, cmd]))

    def write_data(self, buf):
        self.i2c.writeto(self.addr, bytearray([0x40] + list(buf)))

    def fill(self, color):
        self.framebuf.fill(color)

    def pixel(self, x, y, color):
        self.framebuf.pixel(x, y, color)

    def line(self, x1, y1, x2, y2, color):
        self.framebuf.line(x1, y1, x2, y2, color)

    def rect(self, x, y, width, height, color):
        self.framebuf.rect(x, y, width, height, color)

    def fill_rect(self, x, y, width, height, color):
        self.framebuf.fill_rect(x, y, width, height, color)

    def text(self, string, x, y, color=1):
        self.framebuf.text(string, x, y, color)

# Example usage
i2c = I2C(scl=Pin(22), sda=Pin(21))
oled = OLED(i2c, 128, 64)
oled.text("Hello, world!", 0, 0)
oled.show()

ultrasonic = UltrasonicSensor(2, 15)
distance = ultrasonic.distance()

button_a = Button(18)
button_b = Button(5)
is_button_a_pressed = button_a.is_pressed()
is_button_b_pressed = button_b.is_pressed()

neo = NeoPixel(Pin(4), 2)
neo.on()
neo.rainbow()

buzzer = Buzzer(19)
buzzer.play_tone(1000, 1000)
buzzer.stop()

motor = Motor(27, 14)
motor.forward(50)
motor.stop()

ir = IR(32)
command = ir.get_command()

