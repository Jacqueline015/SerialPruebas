// Use a Readline parser

const { SerialPort, ReadlineParser } = require('serialport')

// Use a `\r\n` as a line terminator
const parser = new ReadlineParser({
  delimiter: '\r\n',
})

const port = new SerialPort({
  path: '/dev/ttyACM0',
  baudRate: 115200,
})

port.pipe(parser)

port.on('open', () => console.log('Port open'))

parser.on('data',(data) => 
  console.log(data)
)

port.on('close',() => console.log('Port close'))


