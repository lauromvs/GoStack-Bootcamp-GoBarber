import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppoinmentsRepository from '@modules/appointments/repositories/IAppoinmentsRepository';
import AppoinmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppoinmentsRepository>(
  'AppoinmentsRepository',
  AppoinmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
