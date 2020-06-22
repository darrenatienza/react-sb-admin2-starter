import { makeEntity } from 'react-entities';
import * as sideBarEntity from './UI/sideBarEntity';
import * as navBarEntity from './UI/NavBarEntity';

export const useSideBarEntity = makeEntity(sideBarEntity);
export const useNavBarEntity = makeEntity(navBarEntity);