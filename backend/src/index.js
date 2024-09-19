import app from './app.js';
import { sequelize } from './database/database.js';

const main = async () => {
    try {
        await sequelize.sync();
        app.listen(3000);
        console.log("# Connection has been established successfully");
    } catch(error) {
        console.log("# Unable to connect to the database: ", error);
    }
}

main();