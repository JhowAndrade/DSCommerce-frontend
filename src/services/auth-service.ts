import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECTRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function loginRequest(loginData: CredentialsDTO) {


    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic" + window.btoa(CLIENT_ID + ":" + CLIENT_SECTRET)
    }

    const requestBody = QueryString.stringify({...loginData, grand_type: "password" });

    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers
    }

    return requestBackend(config);
}