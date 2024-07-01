# JK-firmware-code
Here you find the algorithm needed to calculate the JK-BMS emergency firmware upate code.
This code is needed when uploading a firmware for JK BMS in emergency mode. You can get this code from the JK BMS support.
Or you use this tool.

## How it works
1. get current date and hour (UTC) in the format YYMMDDHH
2. add all numbers
3. calc sum modulo 10
4. use result to lookup the digit order in a lookup table:
  ```
    [0x01, 0x04, 0x03, 0x02, 0x08, 0x06, 0x07, 0x05, 
    0x04, 0x01, 0x03, 0x02, 0x05, 0x08, 0x07, 0x06, 
    0x08, 0x02, 0x01, 0x03, 0x05, 0x04, 0x07, 0x06, 
    0x06, 0x02, 0x03, 0x04, 0x01, 0x07, 0x05, 0x08, 
    0x07, 0x01, 0x02, 0x03, 0x05, 0x06, 0x04, 0x08, 
    0x05, 0x02, 0x03, 0x04, 0x01, 0x08, 0x07, 0x06, 
    0x02, 0x03, 0x04, 0x01, 0x05, 0x08, 0x06, 0x07, 
    0x03, 0x04, 0x01, 0x02, 0x07, 0x08, 0x05, 0x06, 
    0x05, 0x06, 0x01, 0x02, 0x07, 0x08, 0x03, 0x04, 
    0x06, 0x07, 0x01, 0x02, 0x05, 0x08, 0x03, 0x04]
  ```
5. change order of digits in date string


## How to use

Go to: https://mirofromdiro.github.io/JK-firmware-code/ and enter your serial.

Andy from Off Grid Garage Australia made several videos: <br>
https://www.youtube.com/watch?v=KznZtqpoles <br>
https://www.youtube.com/watch?v=b-Hl1G8_qOA 
