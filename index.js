const { GetAddress } = require("./eos/dllimport/EOSGetAddress");

const { devGetTradeAddress } = require('./eos/utils/device');
const derivePath = [0, 2147483692, 2147483842, 2147483648, 0, 0];

(async () => {
  // console.log(await GetAddress(derivePath));
  console.log(await devGetTradeAddress(0, 0))
})()


// { devName: '0014:0015',
//   devNameForConnect: null,
//   eventType: 'detach' }
// Device {
//   busNumber: 20,
//   deviceAddress: 22,
//   deviceDescriptor:
//    { bLength: 18,
//      bDescriptorType: 1,
//      bcdUSB: 272,
//      bDeviceClass: 0,
//      bDeviceSubClass: 0,
//      bDeviceProtocol: 0,
//      bMaxPacketSize0: 64,
//      idVendor: 12042,
//      idProduct: 257,
//      bcdDevice: 1,
//      iManufacturer: 1,
//      iProduct: 2,
//      iSerialNumber: 0,
//      bNumConfigurations: 1 },
//   portNumbers: [ 1 ] }
// device attached: 0014:0016--PID_0101&VID_2F0A