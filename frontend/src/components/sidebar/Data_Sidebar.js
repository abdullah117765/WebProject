import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook,faPeopleGroup,faFolder } from '@fortawesome/free-solid-svg-icons';

export const Data_Sidebar= [
    {
      title: 'Home',
      path: '/',
      icon: <faHouse/>,
      cName: 'nav-text'
    },
    {
      title: 'Email',
      path: '/email',
      icon: <faFolder />,
      cName: 'nav-text'
    },
    {
      title: 'Requirements',
      path: '/requirements',
      icon: <faBook />,
      cName: 'nav-text',
      subMenu: [
        {
          title: 'Display',
          path: '/display',
          icon: <faBook />,
          cName: 'nav-text'
        },
        {
          title: 'Product 2',
          path: '/products/2',
          icon: <faBook/>,
          cName: 'nav-text'
        }
      ]
    },
    // ... other menu items
  ];
  