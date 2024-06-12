import { AppTypeEnum, AppSubtypeEnum } from './constants';

export interface AppLayoutType {
  column?: number;
  columnSpan?: number;
  row?: number;
}

export interface AppConfigType {
  layout?: AppLayoutType;
  subtype?: AppSubtypeEnum;
  type?: AppTypeEnum;
  uuid?: string;
}