import { ReactNode } from 'react';
import { atom } from 'recoil';
import { UserProfile } from '../types';

//checked users
export const checkedUsersAtom = atom<UserProfile[]>({
  key: 'checkedUsersAtom',
  default: [],
});

//theme
export const themeAtom = atom({
  key: 'themeAtom',
  default: 'dark',
});

//modal
export const modalVisibleAtom = atom({
  key: 'modalVisibleAtom',
  default: false,
});

export const modalContentAtom = atom<any>({
  key: 'modalContentAtom',
  default: null,
});

export const targetCouponAtom = atom<any>({
  key: 'targetCouponAtom',
  default: null,
});

export const sentOrReceivedAtom = atom<any>({
  key: 'sentOrReceived',
  default: '받은',
});

//toast
export const toastVisibleAtom = atom({
  key: 'toastVisibleAtom',
  default: false,
});

interface toastItem {
  key: number;
  comment: string;
}

export const toastStackAtom = atom<toastItem[]>({
  //modify
  key: 'toastStackAtom',
  default: [],
});

// SuccessPage 내부 컨텐츠
interface SuccessContentType {
  page: string;
  props: any;
}

export const onSuccessContentAtom = atom<SuccessContentType>({
  key: 'onSuccessContentAtom',
  default: {
    page: '',
    props: {},
  },
});
