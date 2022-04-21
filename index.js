import { port } from "./graphql/index";
import app from "./app";

const start = async () => {
    try {
        await app.listen(port);
        console.log(`🚀  GraphQL server running at port: ${port}`);
    } catch {
        console.log('Not able to run GraphQL server');
    }
}