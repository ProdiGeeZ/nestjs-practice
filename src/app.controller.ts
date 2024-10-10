import { Controller, Get } from "@nestjs/common";

@Controller('/app') // sets the initial route directory so it'll be http://localhost:3000/app
export class AppController {
    @Get('/hello') // an individual route for /app so: http://localhost:3000/app/hello
    getRootRoute() {
        return 'Hi There!';
    }
    @Get('/bye') // another individual route for /app so: http://localhost:3000/app/bye
    getEndRoute() {
        return 'goodbye!';
    }
}