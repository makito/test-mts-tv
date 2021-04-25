import { GenreName } from './genre.enum';

export interface IChannel {
  name: string;
  introduce: string;
  picture: {
    hcsSlaveAddrs: string[];
    extensionFields: string[];
    backgrounds: string[];
    channelPics: string[];
    channelBlackWhites: string[];
    others: string[];
  };
  genres?: {
    genreID: string;
    genreType: string;
    genreName: GenreName;
  }[];
}
