import { Connection } from 'mongoose';
import { GeneroSchema } from './schemas/genero.schema';

export const propostasProviders = [
  {
    provide: 'PROPOSTA_MODEL',
    useFactory: (connection: Connection) => connection.model('Generos', GeneroSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];