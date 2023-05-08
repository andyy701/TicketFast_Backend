import Sequelize from 'sequelize';

// export const sequelize = new Sequelize(
//   process.env.DATABASE_URL, 
//     {
//         dialectOptions: {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false
//           },
//       }
//     }
//   );

 const URL = 'postgres://postgres:password@localhost:5432/postgres'

 export const sequelize = new Sequelize(URL)