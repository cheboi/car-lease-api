import { connection } from 'mongoose';
import connectDB from '../';
import { Owner, Car, WorksAt, User } from '../models';

const seed = async () => {
  console.log('Cleanning database');

  await connectDB();
  await connection.dropDatabase();

  console.log('Database clean');

  const users = [
    new User({ name: 'User 1' }),
    new User({ name: 'User 2' }),
  ];

  const owners = [
    new Owner({ name: 'Ezrqn' }),
    new Owner({ name: 'Mark' }),
    new Owner({ name: 'Moses' }),
    new Owner({ name: 'Yator' }),
  ];

  const cars = [
    new Car({ name: 'Forester', owner: owners[0]._id }),
    new Car({ name: 'X5', owner: owners[1]._id }),
    new Car({ name: 'Mayback', owner: owners[2]._id }),
    new Car({ name: 'Toyota filder', owner: owners[3]._id }),
  ];

  const worksAts = [
    new WorksAt({ owner: owners[0]._id, user: users[0]._id }),
    new WorksAt({ owner: owners[0]._id, user: [1]._id }),
    new WorksAt({ owner: owners[1]._id, user: users[1]._id }),
    new WorksAt({ owner: owners[1]._id, user: users[0]._id }),
    new WorksAt({ owner: owners[2]._id, user: users[0]._id }),
    new WorksAt({ owner: owners[3]._id, user: users[1]._id }),
  ];

  const savings = [
    ...users.map((user) => user.save()),
    ...owners.map((owner) => owner.save()),
    ...cars.map((car) => car.save()),
    ...worksAts.map((worksAt) => worksAt.save()),
  ];

  await Promise.all(savings);

  console.log('Database seeded');

  connection.close();
};

seed();