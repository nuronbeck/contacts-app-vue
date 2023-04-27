import { defineStore } from 'pinia';
import { LOCALSTORAGE_PREFIX } from 'src/constant';
import { useLocalStorage } from '@vueuse/core';
import type { Contact } from 'src/components/models';

export const useContactsStore = defineStore('contacts', () => {
  const list = useLocalStorage<Contact[]>(
    `${LOCALSTORAGE_PREFIX}_contacts`,
    []
  );

  const offline = [
    {
      id: 5,
      name: 'Brunhilde Panswick',
      email: 'bpanswick4@csmonitor.com',
      avatar: 'avatar2.jpg',
    },
    {
      id: 6,
      name: 'Winfield Stapforth',
      email: 'wstapforth5@pcworld.com',
      avatar: 'avatar6.jpg',
    },
  ];

  const contacts = [
    {
      id: 1,
      name: 'Ruddy Jedrzej',
      email: 'rjedrzej0@discuz.net',
      letter: 'R',
    },
    {
      id: 2,
      name: 'Mallorie Alessandrini',
      email: 'malessandrini1@marketwatch.com',
      letter: 'M',
    },
    {
      id: 3,
      name: 'Elisabetta Wicklen',
      email: 'ewicklen2@microsoft.com',
      letter: 'E',
    },
    {
      id: 4,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 5,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 6,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 7,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 8,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 9,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 10,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 11,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 12,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 13,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 14,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 15,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
    {
      id: 16,
      name: 'Seka Fawdrey',
      email: 'sfawdrey3@wired.com',
      letter: 'S',
    },
  ];

  return {
    list,
    offline,
    contacts,
  };
});
