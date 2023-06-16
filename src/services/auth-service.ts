import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECTRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import * as accessTokenRepository from '../localstorage/access-token-repository';

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

export function logout() {
accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
accessTokenRepository.save(token);
}

export function getAccessToken() {
   return accessTokenRepository.get();
}

