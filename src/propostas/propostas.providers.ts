import { Connection } from 'mongoose';
import { PropostaSchema } from './schemas/proposta.schema';

export const propostasProviders = [
  {
    provide: 'PROPOSTA_MODEL',
    useFactory: (connection: Connection) => connection.model('Propostas', PropostaSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];