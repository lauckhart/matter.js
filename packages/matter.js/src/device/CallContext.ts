import { AutoDevice } from "./AutoDevice.js";

type CallContext = {
    
    this: AutoDevice;
    super: (request: any, context: CallContext) => any;
};