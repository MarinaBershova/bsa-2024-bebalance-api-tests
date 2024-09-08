import { RegisterController } from "../lib/controllers/register.controller";
import {
    checkStatusCode,
    checkResponseTime,
} from "../../helpers/functionsForChecking.helper";

const register = new RegisterController();
const chai = require("chai");
chai.use(require("chai-json-schema"));

describe("Create an account", () => {
   
    it(`should return 200 status code and create new user account`, async () => {
        let response = await register.registerUser("sem123@gmail.com", "Witcher123", "password123");

        checkStatusCode(response, 201);
        checkResponseTime(response, 2000);
    });
});
