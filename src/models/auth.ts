export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type CredentialsDTO = {
    username: string;
    password: string;
};

export type AccessTokenPayloadDTO = {
    authorities: any;
    exp: number,
    user_name: string,
    auhorities: RoleEnum[]
};