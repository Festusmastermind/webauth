import { ResponseCode } from "../enums/responseCode";

export class ResponseModel{
    public responseCode: ResponseCode=ResponseCode.NotSet;
    public responseMessage: string="";
    public dataSet: any
}

/*
Please Note that this must be in CamelCase ...Very Crucial Information..because this is the format the camel browser accepts..
*/