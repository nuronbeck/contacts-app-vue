import { defineStore } from 'pinia';
import { LOCALSTORAGE_PREFIX } from 'src/constant';
import { useLocalStorage } from '@vueuse/core';
import type { IContact } from 'src/components/models';

export const useContactsStore = defineStore('contacts', () => {
  const list = useLocalStorage<IContact[]>(
    `${LOCALSTORAGE_PREFIX}_contacts`,
    []
  );

  const addNewContact = (payload: Omit<IContact, 'id'>) => {
    list.value = [
      {
        id: new Date().valueOf(),
        ...payload,
      },
      ...list.value,
    ];
  };

  const removeContact = ({ id }: Pick<IContact, 'id'>) => {
    list.value = list.value.filter((contact) => contact.id !== id);
  };

  return {
    list,
    addNewContact,
    removeContact,
  };
});
