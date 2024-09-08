import { ApiRequest } from "../request";

const baseUrl: string = global.appConfig.baseUrl;

export class RegisterController {
    async registerUser(emailValue: string, userNameValue: string, passwordValue: string) {
        const bodyValue = {
            email: emailValue,
            name: userNameValue,
            password: passwordValue,
        };
        console.log("bodyValue", bodyValue);
        console.log("baseUrl", baseUrl);
        const response = await new ApiRequest()
            .prefixUrl(baseUrl)
            .method("POST")
            .url("api/v1/auth/sign-up")
            .body(bodyValue)
            .send();
        console.log("response", response);
        return response;
    }
}
