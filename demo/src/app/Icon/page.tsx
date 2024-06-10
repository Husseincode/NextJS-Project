// components/IconExample.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './icon.module.css';

const IconExample: React.FC = () => (
  <div>
    <h1>Font Awesome Icon</h1>
    <div style={{}}>
    <FontAwesomeIcon style={{color: 'teal', fontSize: '30px'}} className='size' size='xs' icon={faCoffee} />
    </div>
  </div>
);

export default IconExample;