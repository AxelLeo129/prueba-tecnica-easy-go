import app from './app.js';
import { sequelize } from './database/database.js';

const main = async () => {
    try {
        await sequelize.sync();
        console.log("# Connection has been established successfully");
        app.listen(3000);
        console.log("# Listen in port 3000");
    } catch(error) {
        console.log("# Unable to connect to the database: ", error);
    }
}

main();